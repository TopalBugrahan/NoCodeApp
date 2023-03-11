import React from "react";
import Button from "./Component/Button";
import Title from "./Component/Title";
import TextInput from "./Component/TextInput";
import Image from "./Component/Image";

function RightBarElement({
  text,
  index,
  screenIndex,
  contain_index,
  name,
  text_align,
  textDecoration,
  fontStyle,
  font_weight,
  font_size,
  text_color,
  hint,
  disabled,
  keyboard,
  resize,
  src,
}) {
  switch (name) {
    case "Button":
      return (
        <Button
          text={text}
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          font_size={font_size}
          text_color={text_color}
        />
      );
    case "Title":
      return (
        <Title
          text={text}
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          text_align={text_align}
          textDecoration={textDecoration}
          fontStyle={fontStyle}
          font_weight={font_weight}
          font_size={font_size}
          text_color={text_color}
        />
      );
    case "Text Input":
      return (
        <TextInput
          text={text}
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          text_color={text_color}
          font_size={font_size}
          hint={hint}
          disabled={disabled}
          keyboard={keyboard}
        />
      );
    case "Image":
      return (
        <Image
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          resize={resize}
          src={src}
        />
      );
    default:
      break;
  }
}

export default RightBarElement;
