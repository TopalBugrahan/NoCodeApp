import React, { memo } from "react";
import { useDrag } from "react-dnd";

function Element({ item, isDropped }) {
  const {
    name,
    type,
    top,
    left,
    isChange,
    width,
    height,
    text,
    text_color,
    font_size,
    backgroundColor,
    border,
    text_align,
    font_weight,
    fontStyle,
    textDecoration,
    borderColor,
    borderWidth,
    borderStyle,
    borderRedius,
    hint,
    disabled,
    keyboard,
    src,
    resize,
    items,
    onColor,
    offColor,
    value,
  } = item;
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: {
        items,
        name,
        type,
        top,
        left,
        isChange,
        width,
        height,
        text,
        text_color,
        font_size,
        backgroundColor,
        border,
        text_align,
        font_weight,
        fontStyle,
        textDecoration,
        borderColor,
        borderWidth,
        borderStyle,
        borderRedius,
        hint,
        disabled,
        keyboard,
        src,
        resize,
        onColor,
        offColor,
        value,
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.9 : 1,
      }),
    }),
    [name, type]
  );

  return (
    <div
      ref={drag}
      style={{
        margin: "5px",
        border: "1px solid black",
        opacity,
        display: "flex",
        cursor: "move",
      }}
    >
      {isDropped ? name : name}
    </div>
  );
}

export default memo(Element);
