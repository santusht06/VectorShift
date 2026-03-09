import { BaseNode } from "./BaseNode";

export const LLMNode = () => {
  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div>LLM Model</div>
    </BaseNode>
  );
};
