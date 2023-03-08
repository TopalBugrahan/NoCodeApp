import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  changeResize,
  changeSrc,
} from "../../../../../redux/Screen/ScreenSlice";
const options = [
  { value: "cover", label: "Cover" },
  { value: "contain", label: "Contain" },
];
function Image({ name, resize, index, screenIndex, src }) {
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
      {name}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "40%",
            height: "30px",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Picture
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            className="right_bar_input"
            style={{ width: "100%" }}
            placeholder="Image Url"
            type="text"
            value={src}
            onChange={(item) => {
              const src = item.target.value;
              dispatch(changeSrc({ index, screenIndex, src }));
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "40%",
            height: "30px",
            overflow: "hidden",
            fontSize: "15px",
          }}
        >
          Resize Mode
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            width: "60%",
          }}
        >
          <div style={{ width: "100%", height: "30px" }}>
            <Select
              options={options}
              defaultValue={{ value: resize, label: resize }}
              onChange={(item) => {
                const resize = item.value;
                dispatch(changeResize({ index, screenIndex, resize }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
