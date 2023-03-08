import React, { memo } from "react";
import { useDrop } from "react-dnd";

function Screen({ accept, lastDroppedItem, onDrop, children, id }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = "white";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div
      id={"Screen" + id}
      ref={drop}
      style={{
        border: "1px solid black",
        height: "500px",
        width: "25%",
        margin: "5px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        minHeight: "25%",
        minWidth: "300px",
        backgroundColor,
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}

export default memo(Screen);
