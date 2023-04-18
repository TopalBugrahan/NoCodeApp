import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeScreenColor,
  changeScreenImage,
} from "../../../redux/Screen/ScreenSlice";
import { SketchPicker } from "react-color";

function ScreenRightComp({
  screenIndex,
  backgroundColor,
  backgroundImage,
  name,
}) {
  const [visibility, setVisible] = useState("hidden");
  const [color, setColor] = useState(backgroundColor);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {name}
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
          Chose Your Color
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
            <span>{color}</span>
          </button>
        </div>
        <div className="color_pick" style={{ top: "42px", visibility }}>
          <SketchPicker
            color={color}
            onChangeComplete={(color) => {
              const color1 = color.hex;
              setColor(color.hex);
              dispatch(changeScreenColor({ screenIndex, color1 }));
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "40%",
            height: "30px",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Picture
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            className="right_bar_input"
            style={{ width: "100%" }}
            placeholder="Image Url"
            type="text"
            value={backgroundImage === null ? "" : backgroundImage}
            onChange={(item) => {
              const src = item.target.value;
              dispatch(changeScreenImage({ screenIndex, src }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScreenRightComp;
