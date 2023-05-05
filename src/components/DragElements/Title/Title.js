import React from "react";
import { useSelector } from "react-redux";
function Title({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  let {
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
    globalStyle,
  } = data;
  let width = data.width - 2 * borderWidth;
  let height = data.height - 2 * borderWidth;
  if (width < 0) {
    width = 0;
  }
  if (height < 0) {
    height = 0;
  }
  if (globalStyle !== null) {
    fontStyle = globalStyle.styles.fontStyle;
    textDecoration = globalStyle.styles.textDecoration;
    text_align = globalStyle.styles.text_align;
    font_weight = globalStyle.styles.font_weight;
    text_color = globalStyle.styles.text_color;
    font_size = globalStyle.styles.font_size;
    backgroundColor = globalStyle.styles.backgroundColor;
    borderColor = globalStyle.styles.borderColor;
    borderRedius = globalStyle.styles.borderRedius;
    borderStyle = globalStyle.styles.borderStyle;
    borderWidth = globalStyle.styles.borderWidth;
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
