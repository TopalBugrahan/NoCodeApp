import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
function Switch() {
  const [color, setColor] = useState("#FFFFFF");
  const [color1, setColor1] = useState("#FFFFFF");
  const [onVisibility, setOnVisibility] = useState(false);
  const [offVisibility, setOffVisibility] = useState(false);
  return (
    <div className="flex_contain">
      <div className="inner_element">
        <span style={{ width: "35%" }}>On Color</span>
        <button
          onClick={() => {
            setOnVisibility(!onVisibility);
          }}
          className="button_color"
        >
          {color}
        </button>
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            top: "40px",
            left: "110px",
            visibility: onVisibility ? "visible" : "hidden",
          }}
        >
          <ColorPicker color={color} setColor={setColor} />
        </div>
      </div>

      <div className="inner_element">
        <span style={{ width: "35%" }}>Off Color</span>
        <button
          onClick={() => {
            setOffVisibility(!offVisibility);
          }}
          className="button_color"
        >
          {color1}
        </button>
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            top: "40px",
            left: "110px",
            visibility: offVisibility ? "visible" : "hidden",
          }}
        >
          <ColorPicker color={color1} setColor={setColor1} />
        </div>
      </div>
    </div>
  );
}

export default Switch;
