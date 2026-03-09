import { useState, useMemo, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./BaseNode";
import { extractVariables } from "../utils/extractVariables";

export const TextNode = ({ id }) => {
  const [text, setText] = useState("");
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => extractVariables(text), [text]);

  const variableKey = variables.join(",");

  useEffect(() => {
    updateNodeInternals(id);
  }, [variableKey, id, updateNodeInternals]);

  return (
    <BaseNode title="Text" inputs={variables} outputs={["output"]}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "100%",
          resize: "none",
          flex: 1,
        }}
      />
    </BaseNode>
  );
};
