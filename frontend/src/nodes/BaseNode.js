import { Handle, Position, NodeResizer } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div
      className="node"
      style={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fff",
        minWidth: 150,
        minHeight: 80,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <NodeResizer minWidth={150} minHeight={80} />

      <div style={{ fontWeight: "bold", padding: "8px" }}>{title}</div>

      {inputs.map((id, i) => (
        <Handle
          key={`input-${id}-${i}`}
          type="target"
          position={Position.Left}
          id={`input-${id}`}
          style={{ top: 40 + i * 20 }}
        />
      ))}

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          padding: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>

      {outputs.map((id, i) => (
        <Handle
          key={`output-${id}-${i}`}
          type="source"
          position={Position.Right}
          id={`output-${id}`}
          style={{ top: 40 + i * 20 }}
        />
      ))}
    </div>
  );
};
