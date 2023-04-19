import React from "react";
import { useSelector } from "react-redux";
function TitleView({ styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select = globalStyles[styleIndex];
  const {
    font_size,
    text_color,
    backgroundColor,
    borderColor,
    borderWidth,
    borderStyle,
    borderRedius,
    fontStyle,
    font_weight,
    textDecoration,
    text_align,
  } = select.styles;
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        minHeight: "22px",
        minWidth: "22px",
        color: text_color,
        textAlign: text_align,
        textDecoration,
        fontStyle,
        fontWeight: font_weight,
        fontSize: font_size,
        backgroundColor,
        borderColor,
        borderRadius: borderRedius,
        borderStyle,
        borderWidth,
      }}
    >
      Title
    </div>
  );
}

export default TitleView;
