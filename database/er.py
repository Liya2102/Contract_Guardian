import networkx as nx
import matplotlib.pyplot as plt

G = nx.DiGraph()

G.add_edges_from([
    ("Users", "Documents"),
    ("Documents", "Clauses"),
    ("Documents", "DocumentVersions"),
    ("Documents", "AnalysisResults"),
    ("Clauses", "AnalysisResults"),
    ("Clauses", "ClauseRights"),
    ("RightsCategories", "ClauseRights")
])

plt.figure(figsize=(14, 8))

pos = nx.spring_layout(G, seed=42)

nx.draw(
    G,
    pos,
    with_labels=True,
    node_size=5000,
    node_color="lightblue",
    font_size=10,
    font_weight="bold",
    arrows=True
)

plt.title("Contract Guardian ER Diagram")
plt.show()