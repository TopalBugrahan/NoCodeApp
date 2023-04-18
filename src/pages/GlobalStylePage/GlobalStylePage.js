import React, { useState } from "react";
import LeftBar from "../../components/GlobalStyleComps/LeftBar";
import StyleHeader from "../../components/GlobalStyleComps/StyleHeader";
import RightBar from "../../components/GlobalStyleComps/RightBar";
function GlobalStylePage() {
  const [select, setSelect] = useState(null);
  return (
    <div className="style_page">
      <StyleHeader />
      <div className="style_page_bottom">
        <LeftBar setSelect={setSelect} />
        <div>gelecek</div>
        <RightBar select={select} />
      </div>
    </div>
  );
}

export default GlobalStylePage;
