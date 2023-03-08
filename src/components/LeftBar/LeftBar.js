import React from "react";
import Element from "../Element";
function LeftBar({ elements, isDropped }) {
  return (
    <div className="leftbar_container">
      {elements.map((item, index) => (
        <Element isDropped={isDropped(item.name)} key={index} item={item} />
      ))}
    </div>
  );
}

export default LeftBar;
