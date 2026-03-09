import { BaseNode } from "./BaseNode";

export const APINode = () => {
  return (
    <BaseNode title="API Request" inputs={["query"]} outputs={["response"]}>
      <input placeholder="Endpoint URL" />
    </BaseNode>
  );
};
