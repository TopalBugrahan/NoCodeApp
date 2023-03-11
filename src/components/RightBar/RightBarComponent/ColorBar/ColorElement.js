import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SketchPicker } from "react-color";
function ColorElement({
  screenIndex,
  index,
  title,
  contain_index,
  change,
  elementColor,
}) {
  const [visibility, setVisible] = useState("hidden");
  const [color, setColor] = useState();
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
      }}
    >
      <p
        style={{
          width: "40%",
          overflow: "hidden",
          fontSize: "15px",
        }}
      >
        {title}
      </p>
      <div className="right_button_container">
        <button
          className="right_button"
          onClick={(e) => {
            e.preventDefault();
            if (visibility === "hidden") setVisible("visible");
            else setVisible("hidden");
          }}
        >
          <span>{elementColor}</span>
        </button>
      </div>
      <div className="color_pick" style={{ top: "42px", visibility }}>
        <SketchPicker
          color={color}
          onChangeComplete={(color) => {
            const color1 = color.hex;
            setColor(color.hex);
            dispatch(change({ index, screenIndex, contain_index, color1 }));
          }}
        />
      </div>
    </div>
  );
}

export default ColorElement;
