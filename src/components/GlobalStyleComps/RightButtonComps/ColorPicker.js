import React from "react";
import { SketchPicker } from "react-color";
import { useDispatch } from "react-redux";
function ColorPicker({ color, setColor, func, styleIndex }) {
  const dispatch = useDispatch();
  return (
    <div>
      <SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
          const color1 = color.hex;
          dispatch(func({ styleIndex, color1 }));
        }}
      />
    </div>
  );
}

export default ColorPicker;
