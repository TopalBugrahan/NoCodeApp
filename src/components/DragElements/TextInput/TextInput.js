import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeText } from "../../../redux/Screen/ScreenSlice";
function TextInput({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens, globalStyles } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  const dispatch = useDispatch();
  let {
    text,
    text_color,
    font_size,
    backgroundColor,
    borderColor,
    borderRedius,
    borderStyle,
    borderWidth,
    hint,
    keyboard,
    globalStyle,
  } = data;
  let width = data.width - borderWidth;
  let height = data.height - borderWidth;
  if (width < 0) {
    width = 0;
  }
  if (height < 0) {
    height = 0;
  }

  if (globalStyle !== null) {
    text_color = globalStyles[globalStyle].styles.text_color;
    font_size = globalStyles[globalStyle].styles.font_size;
    backgroundColor = globalStyles[globalStyle].styles.backgroundColor;
    borderColor = globalStyles[globalStyle].styles.borderColor;
    borderRedius = globalStyles[globalStyle].styles.borderRedius;
    borderStyle = globalStyles[globalStyle].styles.borderStyle;
    borderWidth = globalStyles[globalStyle].styles.borderWidth;
  }
  return (
    <div>
      <input
        type={keyboard}
        name="name"
        value={text}
        onChange={(e) => {
          const text = e.target.value;
          dispatch(changeText({ screenIndex, index, text }));
        }}
        disabled
        placeholder={hint}
        style={{
          width,
          height,
          cursor: "move",
          overflow: "hidden",
          textOverflow: "ellipsis",
          minHeight: "22px",
          minWidth: "22px",
          color: text_color,
          backgroundColor,
          borderColor,
          borderRadius: borderRedius,
          borderStyle,
          borderWidth,
          fontSize: font_size,
        }}
      />
    </div>
  );
}

export default TextInput;
