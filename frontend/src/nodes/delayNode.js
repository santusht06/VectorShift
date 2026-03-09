import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = () => {
  const [time, setTime] = useState(1);

  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Seconds"
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
