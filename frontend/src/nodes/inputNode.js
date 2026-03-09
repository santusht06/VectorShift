import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = () => {
  const [name, setName] = useState("input");

  return (
    <BaseNode title="Input" inputs={[]} outputs={[name]}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Variable name"
        style={{ width: "100%", fontSize: "1em" }}
      />
    </BaseNode>
  );
};
