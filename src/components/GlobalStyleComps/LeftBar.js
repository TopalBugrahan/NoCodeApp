import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftBarItem from "./LeftBarItem";
function LeftBar({ setSelect, setStyleIndex }) {
  const { globalStyles } = useSelector((state) => state.screen);

  const [style, setStyle] = useState(null);
  const [index, setIndex] = useState(null);
  const selectStyle = (item, index) => {
    setStyle(item);
    setIndex(index);
  };
  useEffect(() => {
    setSelect(style);
    setStyleIndex(index);
  }, [style, index, setSelect]);
  return (
    <div className="style_left_bar">
      {globalStyles.map((item, index) => {
        const key = item.name + item.styleName;
        return (
          <div key={key}>
            <LeftBarItem item={item} onClick={selectStyle} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default LeftBar;
