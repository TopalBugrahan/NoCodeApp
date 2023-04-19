import React from "react";
import { useDispatch } from "react-redux";
import { deleteGlobalStyle } from "../../redux/Screen/ScreenSlice";
function LeftBarItem({ item, onClick, index }) {
  const dispatch = useDispatch();
  return (
    <div
      className="left_bar_item"
      onClick={() => {
        onClick(item, index);
      }}
    >
      <div style={{ display: "flex" }}>
        <div className="left_bar_item_name">{item.name}</div>
        <div className="left_bar_item_name2">-{item.styleName}</div>
      </div>

      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteGlobalStyle({ index }));
        }}
      >
        X
      </div>
    </div>
  );
}

export default LeftBarItem;
