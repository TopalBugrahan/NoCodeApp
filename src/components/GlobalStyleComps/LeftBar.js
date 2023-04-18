import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftBarItem from "./LeftBarItem";
function LeftBar({ setSelect }) {
  const { globalStyles } = useSelector((state) => state.screen);
  const [style, setStyle] = useState(null);

  const selectStyle = (item) => {
    setStyle(item);
  };
  useEffect(() => {
    setSelect(style);
  }, [style, setSelect]);
  return (
    <div className="style_left_bar">
      {globalStyles.map((item) => {
        return (
          <div key={item.styleName}>
            <LeftBarItem item={item} onClick={selectStyle} />
          </div>
        );
      })}
    </div>
  );
}

export default LeftBar;
