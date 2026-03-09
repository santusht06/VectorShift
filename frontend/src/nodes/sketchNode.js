import { useRef, useEffect, useState } from "react";
import { BaseNode } from "./BaseNode";

export const SketchNode = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#111";
  }, []);

  const startDraw = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);

    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const ctx = canvasRef.current.getContext("2d");

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDraw = () => {
    setDrawing(false);
  };

  return (
    <BaseNode title="Sketch" inputs={["input"]} outputs={["output"]}>
      <canvas
        ref={canvasRef}
        width={200}
        height={120}
        style={{
          border: "1px solid #ddd",
          borderRadius: 6,
          background: "#fff",
          cursor: "crosshair",
          width: "100%",
          height: "100%",
        }}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
      />
    </BaseNode>
  );
};
