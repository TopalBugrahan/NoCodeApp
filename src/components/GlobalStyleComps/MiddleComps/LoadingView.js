import React from "react";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
function LoadingView({ styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select = globalStyles[styleIndex];
  const {
    backgroundColor,
    text_color,
    borderColor,
    borderWidth,
    borderRedius,
  } = select.styles;
  return (
    <div
      style={{
        height: "150px",
        width: "100%",
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius: borderRedius,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading type="spin" color={text_color} />
    </div>
  );
}

export default LoadingView;
