import React from "react";
import { useSelector } from "react-redux";
function Button({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  const {
    text,
    text_color,
    font_size,
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
  } = data;
  let width = data.width;
  let height = data.height;
  if (width < 0) {
    width = 0;
  }
  if (height < 0) {
    height = 0;
  }
  return (
    <div>
      <button
        style={{
          width,
          height,
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: "move",
          minHeight: "22px",
          minWidth: "22px",
          color: text_color,
          fontSize: font_size,
          backgroundColor,
          borderColor,
          borderRadius: borderRedius,
          borderStyle,
          borderWidth,
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
