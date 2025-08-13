import numpy as np, pandas as pd, networkx as nx
from sklearn.ensemble import IsolationForest

rng = np.random.default_rng(42)
n = 3000
df = pd.DataFrame({
    "amount": rng.lognormal(mean=3.5, sigma=1.0, size=n),
    "hour": rng.integers(0,24,size=n),
    "sender": rng.integers(1,400,size=n),
    "receiver": rng.integers(401,900,size=n),
})

# Inject anomalies
idx = rng.choice(n, 30, replace=False)
df.loc[idx, "amount"] *= 20
df.loc[idx, "hour"] = 3  # odd hour cluster

X = df[["amount","hour"]].values
clf = IsolationForest(contamination=0.02, random_state=0)
df["anom_score"] = -clf.fit_predict(X)  # 2 = anomaly, 0 = normal
df["is_anom"] = df["anom_score"] > 1

# Graph risk (sender/receiver hubs)
G = nx.from_pandas_edgelist(df, "sender","receiver", create_using=nx.DiGraph)
deg = nx.degree_centrality(G)
df["sender_deg"] = df["sender"].map(deg).fillna(0)
df["receiver_deg"] = df["receiver"].map(deg).fillna(0)
df["graph_risk"] = (df[["sender_deg","receiver_deg"]].max(axis=1) > 0.02).astype(int)

df["risk"] = 0.7*df["is_anom"] + 0.3*df["graph_risk"]
alerts = df.sort_values(["risk","amount"], ascending=False).head(50)
alerts.to_csv("alerts.csv", index=False)
print(alerts[["amount","hour","sender","receiver","risk"]].head(10).to_string(index=False))
