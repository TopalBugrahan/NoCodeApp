import React from "react";
import Switch from "react-switch";
import { useSelector } from "react-redux";
function SwitchComp({ index, screenIndex, isComingContain, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  let data = myScreens[screenIndex].lastDroppedItem[index];
  if (isComingContain === true) {
    data = myScreens[screenIndex].lastDroppedItem[index].items[contain_index];
  }
  const {
    value,
    onColor,
    offColor,
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
  if (height < 0) {
    height = 0;
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
