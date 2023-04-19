import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ColorPicker from "./RightButtonComps/ColorPicker";
import Button from "./RightButtonComps/Button";
import Title from "./RightButtonComps/Title";
import Image from "./RightButtonComps/Image";
import TextInput from "./RightButtonComps/TextInput";
import Loading from "./RightButtonComps/Loading";
import Switch from "./RightButtonComps/Switch";
import {
  changeGlobalStyleBackgroundColor,
  changeGlobalStyleBorderColor,
  changeGlobalStyleBorderRadius,
  changeGlobalStyleBorderWidth,
} from "../../redux/Screen/ScreenSlice";
function RightBar({ select, styleIndex }) {
  console.log(select);
  const dispatch = useDispatch();
  const [backgroundVisibility, setBackgroundVisibility] = useState(false);
  const [borderVisibility, setBorderVisibility] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderRadius, setborderRadius] = useState(0);
  useEffect(() => {
    if (select !== null) {
      setBackgroundColor(select.styles.backgroundColor);
      setBorderColor(select.styles.borderColor);
      setBorderWidth(select.styles.borderWidth);
      setborderRadius(select.styles.borderRedius);
    }
  }, [select]);
  if (select === null) {
    return null;
  } else {
    return (
      <div className="right_bar_contain">
        <div style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          {select.styleName}
        </div>

        {select.name === "Button" ? (
          <Button select={select} styleIndex={styleIndex} />
        ) : select.name === "Title" ? (
          <Title select={select} styleIndex={styleIndex} />
        ) : select.name === "Text Input" ? (
          <TextInput select={select} styleIndex={styleIndex} />
        ) : select.name === "Image" ? (
          <Image select={select} styleIndex={styleIndex} />
        ) : select.name === "Loading" ? (
          <Loading select={select} styleIndex={styleIndex} />
        ) : select.name === "Switch" ? (
          <Switch select={select} styleIndex={styleIndex} />
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
              {backgroundColor}
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
              <ColorPicker
                color={backgroundColor}
                setColor={setBackgroundColor}
                func={changeGlobalStyleBackgroundColor}
                styleIndex={styleIndex}
              />
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
              {borderColor}
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
              <ColorPicker
                color={borderColor}
                setColor={setBorderColor}
                func={changeGlobalStyleBorderColor}
                styleIndex={styleIndex}
              />
            </div>
          </div>

          <div className="inner_element">
            <span style={{ width: "35%" }}>Border Width</span>
            <input
              className="input_right_bar"
              type="number"
              value={borderWidth}
              onChange={(e) => {
                const width = Number(e.target.value);
                setBorderWidth(width);
                dispatch(changeGlobalStyleBorderWidth({ styleIndex, width }));
              }}
            />
          </div>

          <div className="inner_element">
            <span style={{ width: "35%", backgroundColor: "red" }}>
              Border Radius
            </span>
            <input
              className="input_right_bar"
              type="number"
              value={borderRadius}
              onChange={(e) => {
                const radius = Number(e.target.value);
                setborderRadius(radius);
                dispatch(changeGlobalStyleBorderRadius({ styleIndex, radius }));
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RightBar;
