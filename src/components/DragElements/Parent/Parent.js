import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Drag from "../../../Drag/Drag";
import "./Parent.style.css";
import {
  changeWidth,
  changeHeight,
  changeSelect,
} from "../../../redux/Screen/ScreenSlice";

function Parent({
  name,
  type,
  left,
  top,
  id,
  index,
  children,
  screenIndex,
  height,
  width,
}) {
  //index benim child indexi
  //useSelector ile de perent indexi alıcaz
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const refTop = useRef(null);
  const refBottom = useRef(null);
  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (isHovering) {
      const resizeableEle = ref.current;
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
        dispatch(changeWidth({ width, index, screenIndex }));
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
        dispatch(changeHeight({ height, index, screenIndex }));
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
        dispatch(changeHeight({ height, index, screenIndex }));
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
        dispatch(changeWidth({ width, index, screenIndex }));
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
      const resizerRight = refRight.current;
      resizerRight.addEventListener("mousedown", onMouseDownRightResize);
      const resizerTop = refTop.current;
      resizerTop.addEventListener("mousedown", onMouseDownTopResize);
      const resizerBottom = refBottom.current;
      resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
      const resizerLeft = refLeft.current;
      resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

      return () => {
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
        resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
        resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
        resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      };
    }
  }, [isHovering]);

  const { drag, isDragging } = Drag(name, type, left, top, index);
  const deneme = (e) => {
    if (!e) e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    dispatch(changeSelect({ index, screenIndex }));
  };
  if (isDragging) {
    return <div ref={drag} />;
  }
  return (
    <div
      ref={ref}
      className="resizeable"
      style={{ top: top, left: left, width, height }}
      onClick={deneme}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div id={name + id} ref={drag}>
        {children}
      </div>

      {isHovering && <div ref={refLeft} className="resizer resizer-l"></div>}
      {isHovering && <div ref={refTop} className="resizer resizer-t"></div>}
      {isHovering && <div ref={refRight} className="resizer resizer-r"></div>}
      {isHovering && <div ref={refBottom} className="resizer resizer-b"></div>}
    </div>
  );
}

export default Parent;
