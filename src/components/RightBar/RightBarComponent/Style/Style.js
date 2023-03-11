import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import ColorElement from "../ColorBar/ColorElement";
import {
  changeBorderColor,
  changeBorderStyle,
  changeBorderWidth,
  changeBackgroundColor,
  changeBorderRedius,
} from "../../../../redux/Screen/ScreenSlice";
const options = [
  { value: "dotted", label: "Dotted" },
  { value: "solid", label: "Solid" },
  { value: "dashed", label: "Dashed" },
];
function Style({
  screenIndex,
  index,
  borderColor,
  borderWidth,
  backgroundColor,
  borderRedius,
  contain_index,
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
      Style
      <ColorElement
        title={"Background Color"}
        screenIndex={screenIndex}
        index={index}
        change={changeBackgroundColor}
        elementColor={backgroundColor}
        contain_index={contain_index}
      />
      <ColorElement
        title={"Border Color"}
        screenIndex={screenIndex}
        index={index}
        change={changeBorderColor}
        elementColor={borderColor}
        contain_index={contain_index}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            width: "40%",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Border Width
        </p>
        <input
          className="right_bar_input"
          style={{ width: "60%", height: "30px" }}
          type="number"
          defaultValue={borderWidth}
          onChange={(e) => {
            const border_width = Number(e.target.value);
            dispatch(
              changeBorderWidth({
                screenIndex,
                index,
                contain_index,
                border_width,
              })
            );
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            width: "40%",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Border Style
        </p>
        <div style={{ width: "60%", height: "30px" }}>
          <Select
            options={options}
            onChange={(item) => {
              const border_style = item.value;
              dispatch(
                changeBorderStyle({
                  screenIndex,
                  contain_index,
                  index,
                  border_style,
                })
              );
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
        <p
          style={{
            width: "40%",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Border Redius
        </p>
        <input
          className="right_bar_input"
          style={{ width: "60%", height: "30px" }}
          type="number"
          defaultValue={borderRedius}
          onChange={(e) => {
            const redius = Number(e.target.value);
            dispatch(
              changeBorderRedius({ screenIndex, contain_index, index, redius })
            );
          }}
        />
      </div>
    </div>
  );
}

export default Style;
