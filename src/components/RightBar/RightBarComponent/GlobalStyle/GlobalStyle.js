import React from "react";
import { useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeGlobalStyle } from "../../../../redux/Screen/ScreenSlice";
function GlobalStyle({ name, screenIndex, index, contain_index }) {
  const dispatch = useDispatch();
  const { globalStyles } = useSelector((state) => state.screen);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const options1 = [{ value: null, label: "No Global Style" }];
    globalStyles.map((item, index) => {
      if (item.name === name) {
        options1.push({ value: index, label: item.styleName });
      }
    });
    setOptions(options1);
  }, []);
  return (
    <div>
      <Select
        options={options}
        defaultValue={{ value: "Button", label: "Button" }}
        onChange={(e) => {
          console.log(e.value);
          const select = e.value;
          dispatch(
            changeGlobalStyle({ screenIndex, index, contain_index, select })
          );
        }}
      />
    </div>
  );
}

export default GlobalStyle;
