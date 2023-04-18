import React, { useState } from "react";
import { FaAlignLeft, FaAlignRight, FaAlignCenter } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
function Title() {
  const [visibility, setVisibility] = useState("hidden");
  const [text_align, setTextAlign] = useState("left");
  const [font_weight, setfont_weight] = useState("normal");
  const [fontStyle, setfontStyle] = useState("normal");
  const [textDecoration, settextDecoration] = useState(null);
  const [font_size, setfont_size] = useState(15);
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
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
