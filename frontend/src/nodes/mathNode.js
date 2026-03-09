import { BaseNode } from "./BaseNode";

export const MathNode = () => {
  return (
    <BaseNode title="Math" inputs={["a", "b"]} outputs={["result"]}>
      <select>
        <option>Add</option>
        <option>Multiply</option>
      </select>
    </BaseNode>
  );
};
