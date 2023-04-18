import React from "react";
import Select from "react-select";
const options = [
  { value: "cover", label: "Cover" },
  { value: "contain", label: "Contain" },
];
function Image() {
  return (
    <div className="flex_contain">
      <div className="inner_element">
        <span style={{ width: "35%" }}>Text Size</span>
        <div style={{ width: "40%" }}>
          <Select
            options={options}
            defaultValue={options[0]}
            onChange={(e) => {
              //setSelect(e.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
