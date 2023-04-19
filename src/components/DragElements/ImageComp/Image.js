import React from "react";
import { useSelector } from "react-redux";
function Image({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens, globalStyles } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  let width = data.width;
  let height = data.height;
  let {
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
    src,
    resize,
    globalStyle,
  } = data;

  if (globalStyle !== null) {
    resize = globalStyles[globalStyle].styles.resize;
    backgroundColor = globalStyles[globalStyle].styles.backgroundColor;
    borderColor = globalStyles[globalStyle].styles.borderColor;
    borderRedius = globalStyles[globalStyle].styles.borderRedius;
    borderStyle = globalStyles[globalStyle].styles.borderStyle;
    borderWidth = globalStyles[globalStyle].styles.borderWidth;
  }
  return (
    <div>
      <img
        src={src}
        alt="image1"
        style={{
          borderWidth,
          borderStyle,
          borderRadius: borderRedius,
          borderColor,
          backgroundColor,
          width,
          height,
          objectFit: resize,
          minHeight: "22px",
          minWidth: "22px",
        }}
      />
    </div>
  );
}

export default Image;
