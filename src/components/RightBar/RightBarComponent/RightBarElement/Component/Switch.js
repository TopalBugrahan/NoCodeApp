import React from "react";
import ColorElement from "../../ColorBar/ColorElement";
import {
  changeOnColor,
  changeOffColor,
} from "../../../../../redux/Screen/ScreenSlice";
function Switch({
  index,
  screenIndex,
  contain_index,
  name,
  offColor,
  onColor,
  text_color,
  priviteName,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {priviteName}
      <ColorElement
        screenIndex={screenIndex}
        index={index}
        contain_index={contain_index}
        title="On Color"
        change={changeOnColor}
        elementColor={onColor}
      />
      <ColorElement
        screenIndex={screenIndex}
        index={index}
        contain_index={contain_index}
        title="Off Color"
        change={changeOffColor}
        elementColor={offColor}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "40%",
            height: "30px",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Font Size
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/*icon gelebilir buraya*/}
          asdasdsa
        </div>
      </div>
    </div>
  );
}

export default Switch;
