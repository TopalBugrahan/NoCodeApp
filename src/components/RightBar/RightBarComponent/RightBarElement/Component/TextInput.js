import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import {
  changeText,
  changeTextSize,
  changeTextColor,
  changeHint,
  changeKeyboard,
} from "../../../../../redux/Screen/ScreenSlice";
import ColorElement from "../../ColorBar/ColorElement";
import { AiOutlineFontSize } from "react-icons/ai";

const options = [
  { value: "text", label: "Text" },
  { value: "number", label: "Number" },
  { value: "password", label: "Password" },
  { value: "email", label: "E-mail" },
];
function TextInput({
  text,
  index,
  screenIndex,
  name,
  font_size,
  text_color,
  hint,
}) {
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
      <input
        className="right_bar_input"
        style={{ marginBottom: "10px", height: "32px" }}
        type="text"
        value={text}
        onChange={(e) => {
          const text = e.target.value;
          dispatch(changeText({ screenIndex, index, text }));
        }}
      />
      <ColorElement
        screenIndex={screenIndex}
        index={index}
        title="Text Color"
        change={changeTextColor}
        elementColor={text_color}
      />
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
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Font Size
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/*icon gelebilir buraya*/}

          <AiOutlineFontSize size={25} />
          <input
            className="right_bar_input"
            style={{ width: "75%" }}
            type="number"
            value={font_size}
            onChange={(e) => {
              const size = Number(e.target.value);
              dispatch(changeTextSize({ screenIndex, index, size }));
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
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Hint
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
            type="text"
            value={hint}
            onChange={(e) => {
              const hint = e.target.value;
              dispatch(changeHint({ screenIndex, index, hint }));
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            width: "40%",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Border Style
        </p>
        <div style={{ width: "60%", height: "30px" }}>
          <Select
            options={options}
            onChange={(item) => {
              const keyboard = item.value;
              dispatch(changeKeyboard({ screenIndex, index, keyboard }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TextInput;
