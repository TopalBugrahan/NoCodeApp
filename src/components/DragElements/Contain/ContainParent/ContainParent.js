import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "../../Parent/Parent.style.css";
import Drag from "../../../../Drag/Drag";
import {
  changeContainHeight,
  changeContainWidth,
  changeContainSelect,
} from "../../../../redux/Screen/ScreenSlice";
function ContainParent({
  name,
  type,
  left,
  top,
  id,
  index,
  children,
  isChange,
  screenIndex,
  height,
  width,
  contain_index,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const ref1 = useRef(null);
  const refLeft1 = useRef(null);
  const refRight1 = useRef(null);
  const refTop1 = useRef(null);
  const refBottom1 = useRef(null);
  const dispatch = useDispatch();
  const isContain = true;
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (isHovering) {
      const resizeableEle = ref1.current;
      const styles = window.getComputedStyle(resizeableEle);
      let width = parseInt(styles.width, 10);
      let height = parseInt(styles.height, 10);
      let x = 0;
      let y = 0;

      // Right resize
      const onMouseMoveRightResize = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width + dx;
        dispatch(
          changeContainWidth({ width, index, screenIndex, contain_index })
        );
        resizeableEle.style.width = `${width}px`;
      };

      const onMouseUpRightResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveRightResize);
      };

      const onMouseDownRightResize = (event) => {
        x = event.clientX;
        resizeableEle.style.left = styles.left;
        resizeableEle.style.right = null;
        document.addEventListener("mousemove", onMouseMoveRightResize);
        document.addEventListener("mouseup", onMouseUpRightResize);
      };

      // Top resize
      const onMouseMoveTopResize = (event) => {
        const dy = event.clientY - y;
        height = height - dy;
        y = event.clientY;
        dispatch(
          changeContainHeight({ height, index, screenIndex, contain_index })
        );
        resizeableEle.style.height = `${height}px`;
      };

      const onMouseUpTopResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveTopResize);
      };

      const onMouseDownTopResize = (event) => {
        y = event.clientY;
        const styles = window.getComputedStyle(resizeableEle);
        resizeableEle.style.bottom = styles.bottom;
        resizeableEle.style.top = null;
        document.addEventListener("mousemove", onMouseMoveTopResize);
        document.addEventListener("mouseup", onMouseUpTopResize);
      };

      // Bottom resize
      const onMouseMoveBottomResize = (event) => {
        const dy = event.clientY - y;
        height = height + dy;
        y = event.clientY;
        dispatch(
          changeContainHeight({ height, index, screenIndex, contain_index })
        );
        resizeableEle.style.height = `${height}px`;
      };

      const onMouseUpBottomResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveBottomResize);
      };

      const onMouseDownBottomResize = (event) => {
        y = event.clientY;
        const styles = window.getComputedStyle(resizeableEle);
        resizeableEle.style.top = styles.top;
        resizeableEle.style.bottom = null;
        document.addEventListener("mousemove", onMouseMoveBottomResize);
        document.addEventListener("mouseup", onMouseUpBottomResize);
      };

      // Left resize
      const onMouseMoveLeftResize = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width - dx;
        dispatch(
          changeContainWidth({ width, index, screenIndex, contain_index })
        );
        resizeableEle.style.width = `${width}px`;
      };

      const onMouseUpLeftResize = (event) => {
        document.removeEventListener("mousemove", onMouseMoveLeftResize);
      };

      const onMouseDownLeftResize = (event) => {
        x = event.clientX;
        resizeableEle.style.right = styles.right;
        resizeableEle.style.left = null;
        document.addEventListener("mousemove", onMouseMoveLeftResize);
        document.addEventListener("mouseup", onMouseUpLeftResize);
      };

      // Add mouse down event listener
      const resizerRight = refRight1.current;
      resizerRight.addEventListener("mousedown", onMouseDownRightResize);
      const resizerTop = refTop1.current;
      resizerTop.addEventListener("mousedown", onMouseDownTopResize);
      const resizerBottom = refBottom1.current;
      resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
      const resizerLeft = refLeft1.current;
      resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

      return () => {
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
        resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
        resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
        resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      };
    }
  }, [isHovering]);
  //darg bak
  const { drag, isDragging } = Drag(
    name,
    type,
    left,
    top,
    contain_index,
    true,
    index
  );

  const deneme = (e) => {
    if (!e) e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    dispatch(changeContainSelect({ index, screenIndex, contain_index }));
  };
  if (isDragging) {
    return <div ref={drag} />;
  }
  return (
    <div
      ref={ref1}
      className="resizeable"
      style={{ top: top, left: left, width, height }}
      onClick={deneme}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div id={name + id} ref={drag}>
        {children}
      </div>

      {isHovering && <div ref={refLeft1} className="resizer resizer-l"></div>}
      {isHovering && <div ref={refTop1} className="resizer resizer-t"></div>}
      {isHovering && <div ref={refRight1} className="resizer resizer-r"></div>}
      {isHovering && <div ref={refBottom1} className="resizer resizer-b"></div>}
    </div>
  );
}

export default ContainParent;
