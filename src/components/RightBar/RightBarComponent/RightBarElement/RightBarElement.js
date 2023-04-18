import React from "react";
import Button from "./Component/Button";
import Title from "./Component/Title";
import TextInput from "./Component/TextInput";
import Image from "./Component/Image";
import Loading from "./Component/Loading";
import Switch from "./Component/Switch";
import Contain from "./Component/Contain";
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
  onColor,
  offColor,
  priviteName,
}) {
  switch (name) {
    case "Button":
      return (
        <Button
          priviteName={priviteName}
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
          priviteName={priviteName}
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
          priviteName={priviteName}
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
          priviteName={priviteName}
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          resize={resize}
          src={src}
        />
      );
    case "Loading":
      return (
        <Loading
          priviteName={priviteName}
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          text_color={text_color}
        />
      );
    case "Switch":
      return (
        <Switch
          priviteName={priviteName}
          index={index}
          contain_index={contain_index}
          screenIndex={screenIndex}
          name={name}
          onColor={onColor}
          offColor={offColor}
        />
      );
    case "Contain":
      return <Contain priviteName={priviteName} />;
    default:
      break;
  }
}

export default RightBarElement;
