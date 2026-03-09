// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="Log" label="Log" />
        <DraggableNode type="sketch" label="Sketch" />
      </div>
    </div>
  );
};
