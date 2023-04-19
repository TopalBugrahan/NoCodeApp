import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import { useDispatch } from "react-redux";
import {
  changeGlobalStyleTextColor,
  changeGlobalStyleFontSize,
} from "../../../redux/Screen/ScreenSlice";
function TextInput({ select, styleIndex }) {
  const dispatch = useDispatch();
  const [color, setColor] = useState(select.styles.text_color);
  const [fontSize, setFontSize] = useState(select.styles.font_size);
  const [textVisibility, setTextVisibility] = useState(false);
  useEffect(() => {
    setColor(select.styles.text_color);
    setFontSize(select.styles.font_size);
  }, [select]);
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
          <ColorPicker
            color={color}
            setColor={setColor}
            func={changeGlobalStyleTextColor}
            styleIndex={styleIndex}
          />
        </div>
      </div>
      <div className="inner_element">
        <span style={{ width: "35%" }}>Font Size</span>
        <input
          className="input_right_bar"
          type="number"
          value={fontSize}
          onChange={(e) => {
            const fontsize = Number(e.target.value);
            setFontSize(fontsize);
            dispatch(changeGlobalStyleFontSize({ styleIndex, fontsize }));
          }}
        />
      </div>
    </div>
  );
}

export default TextInput;
