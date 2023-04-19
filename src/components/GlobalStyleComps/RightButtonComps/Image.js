import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { changeGlobalStyleResize } from "../../../redux/Screen/ScreenSlice";
const options = [
  { value: "cover", label: "Cover" },
  { value: "contain", label: "Contain" },
];
function Image({ select, styleIndex }) {
  console.log(select, styleIndex);
  const [item, setItem] = useState();
  useEffect(() => {
    setItem(select.styles.resize);
  }, [select]);

  const dispatch = useDispatch();
  return (
    <div className="flex_contain">
      <div className="inner_element">
        <span style={{ width: "35%" }}>Resize</span>
        <div style={{ width: "40%" }}>
          <Select
            options={options}
            defaultValue={item}
            onChange={(e) => {
              const resize = e.value;
              setItem(e.value);
              dispatch(changeGlobalStyleResize({ styleIndex, resize }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
