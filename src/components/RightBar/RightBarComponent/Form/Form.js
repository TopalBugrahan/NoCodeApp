import React from "react";
import RightBarElement from "../RightBarElement/RightBarElement";
import Layout from "../Layout/Layout";
import Style from "../Style/Style";
function Form({ index, screenIndex, item }) {
  const {
    name,
    text,
    text_align,
    textDecoration,
    font_weight,
    fontStyle,
    top,
    left,
    height,
    width,
    font_size,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    text_color,
    borderRedius,
    hint,
    keyboard,
    disabled,
    resize,
    src,
  } = item;
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RightBarElement
        name={name}
        text={text}
        index={index}
        screenIndex={screenIndex}
        text_align={text_align}
        textDecoration={textDecoration}
        font_weight={font_weight}
        fontStyle={fontStyle}
        font_size={font_size}
        text_color={text_color}
        hint={hint}
        keyboard={keyboard}
        disabled={disabled}
        resize={resize}
        src={src}
      />

      <Layout
        screenIndex={screenIndex}
        index={index}
        top={top}
        left={left}
        height={height}
        width={width}
      />
      <Style
        screenIndex={screenIndex}
        index={index}
        name={name}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        backgroundColor={backgroundColor}
        borderRedius={borderRedius}
      />
    </form>
  );
}

export default Form;
