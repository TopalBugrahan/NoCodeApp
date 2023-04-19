import React, { useState } from "react";
import LeftBar from "../../components/GlobalStyleComps/LeftBar";
import StyleHeader from "../../components/GlobalStyleComps/StyleHeader";
import RightBar from "../../components/GlobalStyleComps/RightBar";
import MiddleBar from "../../components/GlobalStyleComps/MiddleBar";
function GlobalStylePage() {
  const [select, setSelect] = useState(null);
  const [styleIndex, setStyleIndex] = useState(null);

  return (
    <div className="style_page">
      <StyleHeader />
      <div className="style_page_bottom">
        <LeftBar setSelect={setSelect} setStyleIndex={setStyleIndex} />
        <MiddleBar select={select} styleIndex={styleIndex} />
        <RightBar select={select} styleIndex={styleIndex} />
      </div>
    </div>
  );
}

export default GlobalStylePage;
