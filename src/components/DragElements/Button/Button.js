import React from "react";
import { useSelector } from "react-redux";
function Button({ index, screenIndex, isComingContain, contain_index, item }) {
  const { globalStyles, myScreens } = useSelector((state) => state.screen);
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
    let style = globalStyles.find(el => el.id == globalStyle.id)?.styles || globalStyle.styles;
    console.log(style); 
    if(style != null)
    {
      text_color = style.text_color;
      font_size = style.font_size;
      backgroundColor = style.backgroundColor;
      borderColor = style.borderColor;
      borderRedius = style.borderRedius;
      borderStyle = style.borderStyle;
      borderWidth = style.borderWidth;
    }
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
