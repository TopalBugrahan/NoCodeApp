import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import { changeGlobalStyleTextColor } from "../../../redux/Screen/ScreenSlice";
function Loading({ select, styleIndex }) {
  const [color, setColor] = useState(select.styles.text_color);
  const [textVisibility, setTextVisibility] = useState(false);
  useEffect(() => {
    setColor(select.styles.text_color);
  }, [select]);
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
          <ColorPicker
            color={color}
            setColor={setColor}
            func={changeGlobalStyleTextColor}
            styleIndex={styleIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
