import pandas as pd, os, numpy as np

df = pd.read_csv("data/locations.csv")

# Feature engineering
df["review_weight"] = np.log1p(df["reviews"]).clip(0, 6)
df["rating_norm"] = (df["rating"] - 3.0) / 2.0  # ~[0,1]
df["txn_norm"] = (df["transactions_30d"] / (df["transactions_30d"].max() or 1)).clip(0,1)

# Simple volume score
df["volume_score"] = (0.6*df["txn_norm"] + 0.3*df["rating_norm"] + 0.1*df["review_weight"]/6).clip(0,1)

# Prioritize core markets
df["market_boost"] = df["city"].isin(["NYC", "Brooklyn"]).astype(int)*0.05
df["rank_score"] = (df["volume_score"] + df["market_boost"]).clip(0,1)

out = df.sort_values("rank_score", ascending=False)
os.makedirs("output", exist_ok=True)
out.to_csv("output/locations_ranked.csv", index=False)
print(out[["place_id","name","city","rank_score"]].to_string(index=False))
