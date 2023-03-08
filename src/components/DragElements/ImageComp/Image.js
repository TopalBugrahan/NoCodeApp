import React from "react";
import { useSelector } from "react-redux";
function Image({ index, screenIndex }) {
  const { myScreens } = useSelector((state) => state.screen);
  let width = myScreens[screenIndex].lastDroppedItem[index].width;
  let height = myScreens[screenIndex].lastDroppedItem[index].height;
  const {
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
    src,
    resize,
  } = myScreens[screenIndex].lastDroppedItem[index];
  return (
    <div>
      <img
        src={src}
        alt="image1"
        style={{
          borderWidth,
          borderStyle,
          borderRedius,
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
