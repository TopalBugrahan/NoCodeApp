import React from "react";
import { useSelector } from "react-redux";
function ContainView({ styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select = globalStyles[styleIndex];
  const { backgroundColor, borderColor, borderWidth, borderRedius } =
    select.styles;
  console.log(backgroundColor, borderColor, borderWidth, borderRedius);
  return (
    <div
      style={{
        height: "150px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius: borderRedius,
      }}
    >
      ContainView
    </div>
  );
}

export default ContainView;
