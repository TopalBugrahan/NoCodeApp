import React from "react";
import { useSelector } from "react-redux";
import Switch from "react-switch";
function SwitchView({ styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select = globalStyles[styleIndex];
  const {
    backgroundColor,
    onColor,
    offColor,
    borderColor,
    borderWidth,
    borderRedius,
  } = select.styles;
  return (
    <div
      style={{
        borderColor,
        borderWidth,
        borderStyle: "solid",
        backgroundColor,
        borderRadius: borderRedius,
        height: "150px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Switch
        offColor={offColor}
        onColor={onColor}
        width={100}
        height={30}
        onChange={() => {}}
        disabled={true}
      />
    </div>
  );
}

export default SwitchView;
