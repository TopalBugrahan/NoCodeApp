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
    onColor = globalStyles[globalStyle].styles.onColor;
    offColor = globalStyles[globalStyle].styles.offColor;
    backgroundColor = globalStyles[globalStyle].styles.backgroundColor;
    borderColor = globalStyles[globalStyle].styles.borderColor;
    borderRedius = globalStyles[globalStyle].styles.borderRedius;
    borderStyle = globalStyles[globalStyle].styles.borderStyle;
    borderWidth = globalStyles[globalStyle].styles.borderWidth;
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
