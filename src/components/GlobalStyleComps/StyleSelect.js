import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "Button", label: "Button" },
  { value: "Title", label: "Title" },
  { value: "Text Input", label: "Text Input" },
  { value: "Image", label: "Image" },
  { value: "Contain", label: "Contain" },
  { value: "Loading", label: "Loading" },
  { value: "Switch", label: "Switch" },
];

const StyleSelect = ({ setSelect }) => (
  <Select
    options={options}
    defaultValue={{ value: "Button", label: "Button" }}
    onChange={(e) => {
      console.log(e.value);
      setSelect(e.value);
    }}
  />
);

export default StyleSelect;
