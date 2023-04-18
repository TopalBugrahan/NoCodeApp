import React, { useState } from "react";
import ColorPicker from "./RightButtonComps/ColorPicker";
import Button from "./RightButtonComps/Button";
import Title from "./RightButtonComps/Title";
import Image from "./RightButtonComps/Image";
import TextInput from "./RightButtonComps/TextInput";
import Loading from "./RightButtonComps/Loading";
import Switch from "./RightButtonComps/Switch";
function RightBar({ select }) {
  const [color, setColor] = useState("#FFFFFF");
  const [color1, setColor1] = useState("#FFFFFF");
  const [backgroundVisibility, setBackgroundVisibility] = useState(false);
  const [borderVisibility, setBorderVisibility] = useState(false);
  if (select === null) {
    return null;
  } else {
    return (
      <div className="right_bar_contain">
        <div style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          {select.name}
        </div>

        {select.name === "Button" ? (
          <Button />
        ) : select.name === "Title" ? (
          <Title />
        ) : select.name === "Text Input" ? (
          <TextInput />
        ) : select.name === "Image" ? (
          <Image />
        ) : select.name === "Loading" ? (
          <Loading />
        ) : select.name === "Switch" ? (
          <Switch />
        ) : null}

        <div className="flex_contain">
          <div className="inner_element">
            <span style={{ width: "35%" }}>Background Color</span>
            <button
              onClick={() => {
                setBackgroundVisibility(!backgroundVisibility);
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
                visibility: backgroundVisibility ? "visible" : "hidden",
              }}
            >
              <ColorPicker color={color} setColor={setColor} />
            </div>
          </div>

          <div className="inner_element">
            <span style={{ width: "35%" }}>Border Color</span>
            <button
              onClick={() => {
                setBorderVisibility(!borderVisibility);
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
                visibility: borderVisibility ? "visible" : "hidden",
              }}
            >
              <ColorPicker color={color1} setColor={setColor1} />
            </div>
          </div>

          <div className="inner_element">
            <span style={{ width: "35%" }}>Border Width</span>
            <input className="input_right_bar" type="number" />
          </div>

          <div className="inner_element">
            <span style={{ width: "35%", backgroundColor: "red" }}>
              Border Radius
            </span>
            <input className="input_right_bar" type="number" />
          </div>
        </div>
      </div>
    );
  }
}

export default RightBar;
