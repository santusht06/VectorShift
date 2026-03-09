import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = () => {
  const [model, setModel] = useState("gpt-4");

  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div style={{ fontSize: 12, marginBottom: 4 }}>Model</div>

      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ width: "100%" }}
      >
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-3.5">GPT-3.5</option>
      </select>
    </BaseNode>
  );
};
