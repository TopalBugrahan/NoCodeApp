import React from "react";
import { useSelector } from "react-redux";
function Title({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens, globalStyles } = useSelector((state) => state.screen);
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
    fontStyle = globalStyles[globalStyle].styles.fontStyle;
    textDecoration = globalStyles[globalStyle].styles.textDecoration;
    text_align = globalStyles[globalStyle].styles.text_align;
    font_weight = globalStyles[globalStyle].styles.font_weight;
    text_color = globalStyles[globalStyle].styles.text_color;
    font_size = globalStyles[globalStyle].styles.font_size;
    backgroundColor = globalStyles[globalStyle].styles.backgroundColor;
    borderColor = globalStyles[globalStyle].styles.borderColor;
    borderRedius = globalStyles[globalStyle].styles.borderRedius;
    borderStyle = globalStyles[globalStyle].styles.borderStyle;
    borderWidth = globalStyles[globalStyle].styles.borderWidth;
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
