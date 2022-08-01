import { createContext, useState } from "react";

export const ColorContext = createContext({
  selectedColor: null,
  onColorChange: (newColor) => {},
});

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");

  const handleColorChange = (c) => {
    setColor(c);
  };

  const contextValue = {
    selectedColor: color,
    onColorChange: handleColorChange,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
