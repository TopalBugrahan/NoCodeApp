import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import {
  changeGlobalStyleOffColor,
  changeGlobalStyleOnColor,
} from "../../../redux/Screen/ScreenSlice";
function Switch({ select, styleIndex }) {
  const [color, setColor] = useState(select.styles.onColor);
  const [color1, setColor1] = useState(select.styles.offColor);
  const [onVisibility, setOnVisibility] = useState(false);
  const [offVisibility, setOffVisibility] = useState(false);
  useEffect(() => {
    setColor(select.styles.onColor);
    setColor1(select.styles.offColor);
  }, [select]);
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
          <ColorPicker
            color={color}
            setColor={setColor}
            func={changeGlobalStyleOnColor}
            styleIndex={styleIndex}
          />
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
          <ColorPicker
            color={color1}
            setColor={setColor1}
            func={changeGlobalStyleOffColor}
            styleIndex={styleIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Switch;
