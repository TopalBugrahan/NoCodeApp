import React from "react";
import { useSelector } from "react-redux";
function ImageView({ styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select = globalStyles[styleIndex];
  const { backgroundColor, resize, borderColor, borderWidth, borderRedius } =
    select.styles;
  return (
    <img
      src="image.png"
      alt="asdas"
      style={{
        backgroundColor,
        borderWidth,
        borderRadius: borderRedius,
        borderColor,
        objectFit: resize,
        width: "100%",
        height: "150px",
        borderStyle: "solid",
      }}
    />
  );
}

export default ImageView;
