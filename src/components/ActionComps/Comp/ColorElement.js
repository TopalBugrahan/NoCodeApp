import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SketchPicker } from "react-color";
function ColorElement({ setColor, color, visibility, setVisible }) {
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
      <div>
        <button
          style={{ width: "150px", height: "20px" }}
          onClick={(e) => {
            e.preventDefault();
            if (visibility === "hidden") setVisible("visible");
            else setVisible("hidden");
          }}
        >
          {color}
        </button>
      </div>
      <div className="color_pick" style={{ top: "42px", visibility }}>
        <SketchPicker
          color={color}
          onChangeComplete={(color) => {
            setColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}

export default ColorElement;
