import React from "react";
import { useSelector } from "react-redux";
function Button({ index, screenIndex, isComingContain, contain_index, item }) {
  const { myScreens } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  if (item !== undefined) {
    data = item;
  }

  let {
    text,
    text_color,
    font_size,
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
    globalStyle,
  } = data;
  if (globalStyle !== null) {
    text_color = globalStyle.styles.text_color;
    font_size = globalStyle.styles.font_size;
    backgroundColor = globalStyle.styles.backgroundColor;
    borderColor = globalStyle.styles.borderColor;
    borderRedius = globalStyle.styles.borderRedius;
    borderStyle = globalStyle.styles.borderStyle;
    borderWidth = globalStyle.styles.borderWidth;
  }
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
