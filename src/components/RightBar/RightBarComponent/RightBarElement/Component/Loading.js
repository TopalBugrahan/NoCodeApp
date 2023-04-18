import React from "react";
import ColorElement from "../../ColorBar/ColorElement";
import { changeTextColor } from "../../../../../redux/Screen/ScreenSlice";
function Loading({
  index,
  screenIndex,
  contain_index,
  name,
  text_color,
  priviteName,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {priviteName}

      <ColorElement
        screenIndex={screenIndex}
        index={index}
        contain_index={contain_index}
        title="Icon Color"
        change={changeTextColor}
        elementColor={text_color}
      />
    </div>
  );
}

export default Loading;
