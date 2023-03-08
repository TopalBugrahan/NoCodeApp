import React from "react";
import { useSelector } from "react-redux";
function Button({ index, screenIndex }) {
  const { myScreens } = useSelector((state) => state.screen);

  const {
    text,
    text_color,
    font_size,
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
  } = myScreens[screenIndex].lastDroppedItem[index];
  let width = myScreens[screenIndex].lastDroppedItem[index].width;
  let height = myScreens[screenIndex].lastDroppedItem[index].height;
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
