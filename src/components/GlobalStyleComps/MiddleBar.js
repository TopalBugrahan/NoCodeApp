import React from "react";
import ButtonView from "./MiddleComps/ButtonView";
import ContainView from "./MiddleComps/ContainView";
import ImageView from "./MiddleComps/ImageView";
import LoadingView from "./MiddleComps/LoadingView";
import SwitchView from "./MiddleComps/SwitchView";
import TextInputView from "./MiddleComps/TextInputView";
import TitleView from "./MiddleComps/TitleView";
function MiddleBar({ select, styleIndex }) {
  if (select === null) {
    return null;
  } else {
    console.log(select.name, "middle");
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "20%",
          marginLeft: "20px",
        }}
      >
        {select.name === "Button" ? (
          <ButtonView styleIndex={styleIndex} />
        ) : select.name === "Title" ? (
          <TitleView styleIndex={styleIndex} />
        ) : select.name === "Text Input" ? (
          <TextInputView styleIndex={styleIndex} />
        ) : select.name === "Image" ? (
          <ImageView styleIndex={styleIndex} />
        ) : select.name === "Loading" ? (
          <LoadingView styleIndex={styleIndex} />
        ) : select.name === "Switch" ? (
          <SwitchView styleIndex={styleIndex} />
        ) : select.name === "Contain" ? (
          <ContainView styleIndex={styleIndex} />
        ) : null}
      </div>
    );
  }
}

export default MiddleBar;
