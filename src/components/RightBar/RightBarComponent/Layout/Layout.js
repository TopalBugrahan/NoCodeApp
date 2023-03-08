import React from "react";
import {
  changeTop,
  changeHeight,
  changeWidth,
  changeLeft,
} from "../../../../redux/Screen/ScreenSlice";
import { useDispatch } from "react-redux";
import { RxWidth, RxHeight } from "react-icons/rx";
function Layout({ screenIndex, index, top, left, width, height }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      Layout
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "49%",
            justifyContent: "space-between",
            marginTop: "5px",
            alignItems: "center",
          }}
        >
          <span>X</span>
          <input
            className="right_bar_input"
            style={{ width: "50%", height: "30px" }}
            type="number"
            value={left}
            onChange={(e) => {
              const change_left = Number(e.target.value);
              dispatch(changeLeft({ screenIndex, index, change_left }));
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "49%",
            justifyContent: "space-between",
            marginTop: "5px",
            alignItems: "center",
          }}
        >
          <span>Y</span>
          <input
            className="right_bar_input"
            style={{ width: "50%", height: "30px" }}
            type="number"
            value={top}
            onChange={(e) => {
              const change_top = Number(e.target.value);
              dispatch(changeTop({ screenIndex, index, change_top }));
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "49%",
            justifyContent: "space-between",
            marginTop: "5px",
            alignItems: "center",
          }}
        >
          <RxWidth size={21} />
          <input
            className="right_bar_input"
            style={{ width: "50%", height: "30px" }}
            type="number"
            value={width}
            onChange={(e) => {
              const width = Number(e.target.value);
              dispatch(changeWidth({ screenIndex, index, width }));
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "49%",
            justifyContent: "space-between",
            marginTop: "5px",
            alignItems: "center",
          }}
        >
          <RxHeight size={21} />
          <input
            className="right_bar_input"
            style={{ width: "50%", height: "30px" }}
            type="number"
            value={height}
            onChange={(e) => {
              const height = Number(e.target.value);
              dispatch(changeHeight({ screenIndex, index, height }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
