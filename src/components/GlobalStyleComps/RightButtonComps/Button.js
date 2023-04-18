import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
function Button() {
  const [color, setColor] = useState("#FFFFFF");
  const [textVisibility, setTextVisibility] = useState(false);
  return (
    <div className="flex_contain">
      <div className="inner_element">
        <span style={{ width: "35%" }}>Text Color</span>
        <button
          onClick={() => {
            setTextVisibility(!textVisibility);
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
            visibility: textVisibility ? "visible" : "hidden",
          }}
        >
          <ColorPicker color={color} setColor={setColor} />
        </div>
      </div>
      <div className="inner_element">
        <span style={{ width: "35%" }}>Font Size</span>
        <input className="input_right_bar" type="number" />
      </div>
    </div>
  );
}

export default Button;
