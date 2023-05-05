import React from "react";
import Switch from "react-switch";
import { useSelector } from "react-redux";
function SwitchComp({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
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
    onColor = globalStyle.styles.onColor;
    offColor = globalStyle.styles.offColor;
    backgroundColor = globalStyle.styles.backgroundColor;
    borderColor = globalStyle.styles.borderColor;
    borderRedius = globalStyle.styles.borderRedius;
    borderStyle = globalStyle.styles.borderStyle;
    borderWidth = globalStyle.styles.borderWidth;
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
