import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeText,
  changeTextColor,
  changeTextAlign,
  changeTextDecoration,
  changeFontStyle,
  changeFontWidth,
  changeTextSize,
} from "../../../../../redux/Screen/ScreenSlice";
import ColorElement from "../../ColorBar/ColorElement";
import { FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
function Title({
  text,
  index,
  screenIndex,
  contain_index,
  name,
  text_align,
  textDecoration,
  font_weight,
  fontStyle,
  font_size,
  text_color,
}) {
  const [visibility, setVisibility] = useState("hidden");
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
          Essentials
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            position: "relative",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <button
              className="right_bar_title_button"
              style={{ fontWeight: "bold" }}
              onClick={(e) => {
                e.preventDefault();
                let font_weight1;
                if (font_weight === "bold") font_weight1 = null;
                else font_weight1 = "bold";
                dispatch(
                  changeFontWidth({
                    screenIndex,
                    contain_index,
                    index,
                    font_weight1,
                  })
                );
              }}
            >
              B
            </button>
            <button
              className="right_bar_title_button"
              style={{ fontStyle: "italic" }}
              onClick={(e) => {
                e.preventDefault();
                let fontStyle1;
                if (fontStyle === "italic") fontStyle1 = null;
                else fontStyle1 = "italic";
                dispatch(
                  changeFontStyle({
                    screenIndex,
                    contain_index,
                    index,
                    fontStyle1,
                  })
                );
              }}
            >
              I
            </button>
            <button
              className="right_bar_title_button"
              style={{
                textDecoration: "underline",
              }}
              onClick={(e) => {
                e.preventDefault();
                let textDecoration1;
                if (textDecoration === "underline") textDecoration1 = null;
                else textDecoration1 = "underline";
                dispatch(
                  changeTextDecoration({
                    screenIndex,
                    contain_index,
                    index,
                    textDecoration1,
                  })
                );
              }}
            >
              U
            </button>

            <button
              className="right_bar_title_button"
              onClick={(e) => {
                e.preventDefault();
                if (visibility === "hidden") setVisibility("visible");
                if (visibility === "visible") setVisibility("hidden");
              }}
            >
              {text_align === "left" ? (
                <FaAlignLeft />
              ) : text_align === "right" ? (
                <FaAlignRight />
              ) : text_align === "center" ? (
                <FaAlignCenter />
              ) : null}
            </button>
            <div
              className="right_bar_title_button_container"
              style={{ visibility }}
            >
              <button
                className="right_bar_title_button"
                style={{ width: "100%" }}
                onClick={(e) => {
                  e.preventDefault();
                  let text_align1;
                  if (text_align === "right") text_align1 = "left";
                  else text_align1 = "right";
                  dispatch(
                    changeTextAlign({
                      screenIndex,
                      contain_index,
                      index,
                      text_align1,
                    })
                  );
                  if (visibility === "hidden") setVisibility("visible");
                  if (visibility === "visible") setVisibility("hidden");
                }}
              >
                {text_align === "right" ? <FaAlignLeft /> : <FaAlignRight />}
              </button>
              <button
                className="right_bar_title_button"
                style={{ width: "100%" }}
                onClick={(e) => {
                  e.preventDefault();
                  let text_align1;
                  if (text_align === "center") text_align1 = "left";
                  else text_align1 = "center";
                  dispatch(
                    changeTextAlign({
                      screenIndex,
                      contain_index,
                      index,
                      text_align1,
                    })
                  );
                  if (visibility === "hidden") setVisibility("visible");
                  if (visibility === "visible") setVisibility("hidden");
                }}
              >
                {text_align === "center" ? <FaAlignLeft /> : <FaAlignCenter />}
              </button>
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
    </div>
  );
}

export default Title;
