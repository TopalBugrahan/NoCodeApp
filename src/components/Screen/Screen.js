import React, { memo } from "react";
import { useDispatch } from "react-redux";
import {
  deleteScreen,
  changeScreenSelect,
} from "../../redux/Screen/ScreenSlice";
import { useDrop } from "react-dnd";
import { IoClose } from "react-icons/io5";
function Screen({
  accept,
  lastDroppedItem,
  onDrop,
  children,
  id,
  backgroundColor,
  backgroundImage,
}) {
  const dispatch = useDispatch();
  const screenSelect = (e) => {
    if (!e) e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    const screenIndex = id;
    dispatch(changeScreenSelect({ screenIndex }));
  };
  const closeScreen = () => {
    const screenIndex = id;
    dispatch(deleteScreen({ screenIndex }));
  };
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let border = "none";
  if (isActive) {
    border = "2px solid #525252";
  }
  return (
    <div style={{ margin: "5px" }}>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "#908f8f",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        <span style={{ fontWeight: "bold", color: "white" }}>
          Mobile Screen
        </span>
        <IoClose color="white" onClick={closeScreen} cursor="pointer" />
      </div>
      <div
        id={"Screen" + id}
        ref={drop}
        onClick={screenSelect}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          border,
          height: "500px",
          width: "25%",
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
    </div>
  );
}

export default memo(Screen);
