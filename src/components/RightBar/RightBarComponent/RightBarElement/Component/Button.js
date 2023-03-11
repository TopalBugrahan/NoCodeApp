import React from "react";
import { useDispatch } from "react-redux";
import {
  changeText,
  changeTextSize,
  changeTextColor,
} from "../../../../../redux/Screen/ScreenSlice";
import ColorElement from "../../ColorBar/ColorElement";
import { AiOutlineFontSize } from "react-icons/ai";
function Button({
  text,
  index,
  screenIndex,
  contain_index,
  name,
  font_size,
  text_color,
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
          dispatch(changeText({ screenIndex, contain_index, index, text }));
        }}
      />
      <ColorElement
        screenIndex={screenIndex}
        index={index}
        contain_index={contain_index}
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
            height: "30px",
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
            defaultValue={font_size}
            onChange={(e) => {
              const size = Number(e.target.value);
              dispatch(
                changeTextSize({ screenIndex, contain_index, index, size })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Button;
