import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
function Loading() {
  const [color, setColor] = useState("#FFFFFF");
  const [textVisibility, setTextVisibility] = useState(false);
  return (
    <div className="flex_contain">
      <div className="inner_element">
        <span style={{ width: "35%" }}>Icon Color</span>
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
    </div>
  );
}

export default Loading;
