import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

function Loading({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  const {
    text_color,
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
  if (width > height) {
    width = height;
  }
  if (height < 0) {
    height = 0;
  }
  if (height > width) {
    height = width;
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
