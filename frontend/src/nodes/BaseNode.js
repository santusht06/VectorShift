import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div
      className="node"
      style={{
        position: "relative",
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fff",
        minWidth: 150,
      }}
    >
      <div
        className="node-title"
        style={{ fontWeight: "bold", marginBottom: 8 }}
      >
        {title}
      </div>

      {inputs.map((id, i) => (
        <Handle
          key={`input-${id}-${i}`}
          type="target"
          position={Position.Left}
          id={`input-${id}`}
          style={{ top: 40 + i * 20 }}
        />
      ))}

      <div className="node-content">{children}</div>

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
