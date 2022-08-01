import { useContext } from "react";
import { ColorContext } from "../context/color-context";

const ComponentA = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.5em 0",
          padding: "1rem 0",
        }}
      >
        <h1 style={{ color: selectedColor }}>hello world</h1>
        <button onClick={() => onColorChange("green")}>change to green</button>
        <button onClick={() => onColorChange("blue")}>change to blue</button>
      </div>
    </>
  );
};

export default ComponentA;
