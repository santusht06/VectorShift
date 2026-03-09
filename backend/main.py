from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: list
    edges: List[Edge]


def is_dag(nodes, edges):

    graph = {n["id"]: [] for n in nodes}

    for e in edges:
        graph[e.source].append(e.target)

    visited = set()
    stack = set()

    def dfs(node):
        if node in stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        stack.add(node)

        for neigh in graph[node]:
            if not dfs(neigh):
                return False

        stack.remove(node)
        return True

    for node in graph:
        if not dfs(node):
            return False

    return True


@app.post("/pipelines/parse")
def parse_pipeline(p: Pipeline):

    num_nodes = len(p.nodes)
    num_edges = len(p.edges)

    dag = is_dag(p.nodes, p.edges)

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}
