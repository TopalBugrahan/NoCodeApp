import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

function Loading({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens, globalStyles } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  let {
    text_color,
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
    globalStyle,
  } = data;
  let width = data.width;
  let height = data.height;
  if (width < 0) {
    width = 0;
  }
  if (width > height) {
    width = height;
  }
  if (height < 0) {
    height = 0;
  }
  if (height > width) {
    height = width;
  }
  if (globalStyle !== null) {
    text_color = globalStyles[globalStyle].styles.text_color;
    backgroundColor = globalStyles[globalStyle].styles.backgroundColor;
    borderColor = globalStyles[globalStyle].styles.borderColor;
    borderRedius = globalStyles[globalStyle].styles.borderRedius;
    borderStyle = globalStyles[globalStyle].styles.borderStyle;
    borderWidth = globalStyles[globalStyle].styles.borderWidth;
  }
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderRadius: borderRedius,
        borderStyle,
        borderWidth,
      }}
    >
      <ReactLoading
        height={height}
        width={width}
        type="spin"
        color={text_color}
      />
    </div>
  );
}

export default Loading;
