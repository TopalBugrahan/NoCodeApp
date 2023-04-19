import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import {
  changeGlobalStyleFontWidth,
  changeGlobalStyleFontStyle,
  changeGlobalStyleTextDecoration,
  changeGlobalStyleTextAlign,
  changeGlobalStyleFontSize,
} from "../../../redux/Screen/ScreenSlice";
import { useSelector } from "react-redux";
function Title({ select, styleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const select1 = globalStyles[styleIndex];
  const { font_size, fontStyle, font_weight, textDecoration, text_align } =
    select1.styles;
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState("hidden");
  /* const [text_align, setTextAlign] = useState(select.styles.text_align);
  const [font_weight, setfont_weight] = useState(select.styles.font_weight);
  const [fontStyle, setfontStyle] = useState(select.styles.fontStyle);
  const [textDecoration, settextDecoration] = useState(
    select.styles.textDecoration
  );
  const [font_size, setfont_size] = useState(select.styles.font_size);
  useEffect(() => {
    setTextAlign(select.styles.text_align);
    setfont_size(select.styles.font_size);
    setfont_weight(select.styles.font_weight);
    setfontStyle(select.styles.fontStyle);
    settextDecoration(select.styles.textDecoration);
  }, [select]);*/
  return (
    <div className="flex_contain">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          style={{
            textAlign: "center",
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
                  changeGlobalStyleFontWidth({ styleIndex, font_weight1 })
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
                  changeGlobalStyleFontStyle({ styleIndex, fontStyle1 })
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
                  changeGlobalStyleTextDecoration({
                    styleIndex,
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
                    changeGlobalStyleTextAlign({ styleIndex, text_align1 })
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
                    changeGlobalStyleTextAlign({ styleIndex, text_align1 })
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
              value={font_size}
              onChange={(e) => {
                const fontsize = Number(e.target.value);
                //setfont_size(fontsize);
                dispatch(changeGlobalStyleFontSize({ styleIndex, fontsize }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
