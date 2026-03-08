from fastapi import FastAPI, Form
import uvicorn

app = FastAPI()


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.get("/pipelines/parse")
def parse_pipeline(pipeline: str = Form(...)):
    return {"status": "parsed"}


if __name__ == "__main__":
    uvicorn.run(host="127.0.0.1", port="8000", reload=True)
