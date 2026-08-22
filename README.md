# VectorShift

VectorShift is a web application for building and submitting graph pipelines. Users can drag and drop nodes, connect them with edges, and send the configuration to a FastAPI backend that validates the graph as a directed acyclic graph (DAG).

## Backend
- Built with **FastAPI**.
- Exposes an endpoint (`/pipelines/parse`) that receives JSON payloads containing `nodes` and `edges`, calculates the number of nodes and edges, and determines if the graph is a DAG.

