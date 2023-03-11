import React from "react";
import {
  changeTop,
  changeHeight,
  changeWidth,
  changeLeft,
  changeContainLeft,
  changeContainTop,
  changeContainHeight,
  changeContainWidth,
} from "../../../../redux/Screen/ScreenSlice";
import { useDispatch } from "react-redux";
import { RxWidth, RxHeight } from "react-icons/rx";
function Layout({
  screenIndex,
  index,
  contain_index,
  top,
  left,
  width,
  height,
}) {
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
            defaultValue={left}
            onChange={(e) => {
              const change_left = Number(e.target.value);
              if (contain_index === undefined) {
                dispatch(changeLeft({ screenIndex, index, change_left }));
              } else {
                dispatch(
                  changeContainLeft({
                    screenIndex,
                    index,
                    contain_index,
                    change_left,
                  })
                );
              }
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
            defaultValue={top}
            onChange={(e) => {
              const change_top = Number(e.target.value);
              if (contain_index === undefined) {
                dispatch(changeTop({ screenIndex, index, change_top }));
              } else {
                dispatch(
                  changeContainTop({
                    screenIndex,
                    index,
                    contain_index,
                    change_top,
                  })
                );
              }
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
            defaultValue={width}
            onChange={(e) => {
              const width = Number(e.target.value);
              if (contain_index === undefined) {
                dispatch(changeWidth({ screenIndex, index, width }));
              } else {
                dispatch(
                  changeContainWidth({
                    screenIndex,
                    index,
                    contain_index,
                    width,
                  })
                );
              }
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
            defaultValue={height}
            onChange={(e) => {
              const height = Number(e.target.value);
              if (contain_index === undefined) {
                dispatch(changeHeight({ screenIndex, index, height }));
              } else {
                dispatch(
                  changeContainHeight({
                    screenIndex,
                    index,
                    contain_index,
                    height,
                  })
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
