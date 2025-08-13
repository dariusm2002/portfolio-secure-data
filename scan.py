import re, math, sys, pathlib

PATTERNS = {
    "AWS Access Key": re.compile(r"AKIA[0-9A-Z]{16}"),
    "AWS Secret Key": re.compile(r"(?i)aws(.{0,20})?(secret|access)_?key(.{0,5})?[:=]\s*['\"][A-Za-z0-9/+=]{40}['\"]"),
    "Stripe Live Key": re.compile(r"sk_live_[0-9a-zA-Z]{24,}"),
    "Generic Token": re.compile(r"(?i)(token|api_key|secret|passwd|password)\s*[:=]\s*['\"][A-Za-z0-9_\-]{16,}['\"]"),
}

def shannon_entropy(s: str) -> float:
    from collections import Counter
    if not s: return 0.0
    counts = Counter(s)
    return -sum((c/len(s))*math.log2(c/len(s)) for c in counts.values())

def scan_text(text: str, path: str):
    findings = []
    for name, pat in PATTERNS.items():
        for m in pat.finditer(text):
            token = m.group(0)
            if len(token) >= 16 and shannon_entropy(token) > 3.5:
                findings.append((name, token[:6] + "…", m.start(), path))
    return findings

def scan_path(target: str):
    findings = []
    p = pathlib.Path(target)
    for path in p.rglob("*"):
        if path.is_file() and path.suffix not in {".png", ".jpg", ".jpeg", ".pdf", ".lock"}:
            try:
                text = path.read_text(errors="ignore")
                findings += scan_text(text, str(path))
            except Exception:
                pass
    return findings

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "."
    results = scan_path(target)
    for name, token, pos, path in results:
        print(f"[!] {name} in {path} at {pos}: {token}")
    if results:
        sys.exit(2)
