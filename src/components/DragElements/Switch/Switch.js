import React from "react";
import Switch from "react-switch";
import { useSelector } from "react-redux";
function SwitchComp({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens, globalStyles } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  let {
    value,
    onColor,
    offColor,
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
  if (height < 0) {
    height = 0;
  }
  if (globalStyle !== null) {
    let style = globalStyles.find(el => el.id == globalStyle.id)?.styles || globalStyle.styles;
    if(style != null)
    {
      onColor = style.onColor;
      offColor = style.offColor;
      backgroundColor = style.backgroundColor;
      borderColor = style.borderColor;
      borderRedius = style.borderRedius;
      borderStyle = style.borderStyle;
      borderWidth = style.borderWidth;
    }
  }
  return (
    <div
      style={{
        borderWidth,
        borderStyle,
        borderRadius: borderRedius,
        borderColor,
        backgroundColor,
      }}
    >
      <Switch
        width={width}
        height={height}
        checked={value}
        offColor={offColor}
        onColor={onColor}
        onChange={() => {}}
        disabled={true}
      />
    </div>
  );
}

export default SwitchComp;
