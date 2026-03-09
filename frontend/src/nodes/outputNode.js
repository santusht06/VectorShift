import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = () => {
  const [label, setLabel] = useState("result");

  return (
    <BaseNode title="Output" inputs={["input"]} outputs={[]}>
      <input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Output name"
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
