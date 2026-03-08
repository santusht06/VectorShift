import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, children, inputs = [], outputs = [] }) => {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "10px",
        background: "#fff",
        minWidth: "150px",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{title}</div>

      {inputs.map((id) => (
        <Handle key={id} type="target" position={Position.Left} id={id} />
      ))}

      <div>{children}</div>

      {outputs.map((id) => (
        <Handle key={id} type="source" position={Position.Right} id={id} />
      ))}
    </div>
  );
};
