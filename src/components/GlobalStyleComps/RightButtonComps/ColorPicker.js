import React from "react";
import { SketchPicker } from "react-color";
function ColorPicker({ color, setColor }) {
  return (
    <div>
      <SketchPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
    </div>
  );
}

export default ColorPicker;
