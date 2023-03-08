import React from "react";
import { useSelector } from "react-redux";
function Title({ index, screenIndex }) {
  const { myScreens } = useSelector((state) => state.screen);

  const {
    text,
    text_color,
    font_size,
    font_weight,
    text_align,
    textDecoration,
    fontStyle,
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
  } = myScreens[screenIndex].lastDroppedItem[index];
  let width =
    myScreens[screenIndex].lastDroppedItem[index].width - 2 * borderWidth;
  let height =
    myScreens[screenIndex].lastDroppedItem[index].height - 2 * borderWidth;
  console.log(width, height);
  if (width < 0) {
    width = 0;
  }
  if (height < 0) {
    height = 0;
  }
  return (
    <div
      style={{
        width,
        height,
        cursor: "move",
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
      {text}
    </div>
  );
}

export default Title;
