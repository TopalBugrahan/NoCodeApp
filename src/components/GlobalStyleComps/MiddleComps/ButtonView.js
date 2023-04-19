import React from "react";
import { useSelector } from "react-redux";
function ButtonView({ styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select = globalStyles[styleIndex];
  const {
    font_size,
    backgroundColor,
    text_color,
    borderColor,
    borderWidth,
    borderRedius,
  } = select.styles;

  return (
    <button
      style={{
        fontSize: font_size,
        backgroundColor,
        color: text_color,
        borderColor,
        borderWidth,
        borderRadius: borderRedius,
        width: "100%",
        height: "150px",
      }}
    >
      Button
    </button>
  );
}

export default ButtonView;
