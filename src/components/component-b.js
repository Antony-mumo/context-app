import { useContext } from "react";
import { ColorContext } from "../context/color-context";

const ComponentB = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;

  return (
    <>
      <div
        style={{
          //   display: "flex",
          //   alignItems: "center",
          //   alignContent: "center",
          //   justifyContent: "center",
          backgroundColor: selectedColor,
          borderRadius: 10,
          width: "80%",
          height: 450,
          margin: "0 auto",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.5em 0",
          paddingTop: "0.5rem",
        }}
      >
        <h3>selected color: {selectedColor}</h3>
        <button onClick={() => onColorChange("blue")}>switch to blue</button>
      </div>
    </>
  );
};

export default ComponentB;
