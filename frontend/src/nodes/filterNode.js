import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const FilterNode = () => {
  const [condition, setCondition] = useState("");

  return (
    <BaseNode title="Filter" inputs={["input"]} outputs={["output"]}>
      <input
        placeholder="Condition (e.g. x > 10)"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
