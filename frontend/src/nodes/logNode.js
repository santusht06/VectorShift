import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LogNode = () => {
  const [message, setMessage] = useState("");

  return (
    <BaseNode title="Log" inputs={["input"]} outputs={["output"]}>
      <input
        placeholder="Log message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
