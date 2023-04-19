import React from "react";
import { useSelector } from "react-redux";
function TextInputView({ styleIndex }) {
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
    <div>
      <input
        disabled
        value={"Text Input"}
        style={{
          width: "100%",
          height: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          minHeight: "22px",
          minWidth: "22px",
          color: text_color,
          backgroundColor,
          borderColor,
          borderRadius: borderRedius,
          borderStyle: "solid",
          borderWidth,
          fontSize: font_size,
        }}
      />
    </div>
  );
}

export default TextInputView;
