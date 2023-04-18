import React from "react";

function LeftBarItem({ item, onClick }) {
  return (
    <div
      className="left_bar_item"
      onClick={() => {
        onClick(item);
      }}
    >
      <div className="left_bar_item_name">{item.name}</div>
      <div className="left_bar_item_name2">-{item.styleName}</div>
    </div>
  );
}

export default LeftBarItem;
