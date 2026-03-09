// ui.js
import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";

import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { MathNode } from "./nodes/mathNode";
import { APINode } from "./nodes/apiNode";
import { FilterNode } from "./nodes/filterNode";
import { DelayNode } from "./nodes/delayNode";
import { LogNode } from "./nodes/logNode";
import { SketchNode } from "./nodes/sketchNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  math: MathNode,
  api: APINode,
  filter: FilterNode,
  delay: DelayNode,
  log: LogNode,
  sketch: SketchNode,
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const getNodeID = useStore((s) => s.getNodeID);
  const addNode = useStore((s) => s.addNode);
  const onNodesChange = useStore((s) => s.onNodesChange);
  const onEdgesChange = useStore((s) => s.onEdgesChange);
  const onConnect = useStore((s) => s.onConnect);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const data = event.dataTransfer.getData("application/reactflow");
      if (!data) return;

      const { nodeType } = JSON.parse(data);

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const id = getNodeID(nodeType);

      addNode({
        id,
        type: nodeType,
        position,
        data: { id, nodeType },
      });
    },
    [reactFlowInstance, addNode, getNodeID],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div ref={reactFlowWrapper} style={{ width: "100vw", height: "70vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
