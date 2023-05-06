import React from "react";
import { useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeGlobalStyle } from "../../../../redux/Screen/ScreenSlice";
function GlobalStyle({ name, screenIndex, index, contain_index }) {
  const dispatch = useDispatch();
  const { globalStyles, myScreens } = useSelector((state) => state.screen);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  
  useEffect(() => {
    const options1 = [{ value: null, label: "No Global Style" }];
    
    let selectedStyle;
    if (contain_index !== undefined) {
      selectedStyle =
        myScreens[screenIndex].lastDroppedItem[index].items[contain_index]
          .globalStyle;
    } else {
      selectedStyle = myScreens[screenIndex].lastDroppedItem[index].globalStyle;
    }

    globalStyles.map((item, index) => {
      if (item.name === name) {
        options1.push({ value: globalStyles[index], label: item.styleName });
        if(selectedStyle.id == globalStyles[index].id)
        {
          setSelectedOption(options1[options1.length-1]);
        }
      }
    });
    setOptions(options1);
  }, []);
  return (
    <div>
      <Select
        value={selectedOption}
        options={options}
        placeholder={"Lütfen seçim yapınız"}
        onChange={(e) => {
          setSelectedOption(e);
          const select = e.value;
          console.log("select", select);
          dispatch(
            changeGlobalStyle({ screenIndex, index, contain_index, select })
          );
        }}
      />
    </div>
  );
}

export default GlobalStyle;
