import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { ItemTypes } from "../../../ItemType";
import {
  addElementToContain,
  changeContainInnerElementPosition,
  changeScreenToContainElement,
} from "../../../redux/Screen/ScreenSlice";
import Button from "../Button";
import TextInput from "../TextInput";
import Title from "../Title";
import Image from "../ImageComp";
import Loading from "../Loading";
import Switch from "../Switch";
import ContainParent from "./ContainParent/ContainParent";
function Contain({ index, screenIndex }) {
  const dispatch = useDispatch();
  const { myScreens } = useSelector((state) => state.screen);
  const {
    top,
    left,
    items,
    borderColor,
    borderWidth,
    borderStyle,
    borderRedius,
  } = myScreens[screenIndex].lastDroppedItem[index];
  console.log();
  const initial_top = top;
  const initial_left = left;
  let width = myScreens[screenIndex].lastDroppedItem[index].width;
  let height = myScreens[screenIndex].lastDroppedItem[index].height;
  if (width < 0) {
    width = 0;
  }
  const [hasDropped, setHasDropped] = useState(null);
  const [container_index, setContainer_Index] = useState(null);
  if (height < 0) {
    height = 0;
  }

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.ELEMENT, ItemTypes.INNER_ELEMENT],
      drop(item, monitor) {
        const { name, type } = item;
        const delta = monitor.getSourceClientOffset();
        let left = Math.round(
          delta.x - document.getElementById("Screen" + screenIndex).offsetLeft
        );
        let top = Math.round(
          delta.y - document.getElementById("Screen" + screenIndex).offsetTop
        );

        left = left - initial_left - 8;
        top = top - initial_top - 8;
        if (left < 0) {
          left = 0;
        }
        if (top < 0) {
          top = 0;
        }
        //burada ise screen içine atılan son elemntin ismini veriyor
        const json = {
          item: {
            name: item.name,
            type: item.type,
            top: top,
            left: left,
            width: null,
            height: null,
            isChange: false,
            screenIndex: index,
            isSelect: false,
          },
          index: index,
          screenIndex: screenIndex,
          inner_index: item.inner_index,
        };
        if (type === "element") {
          const data = {
            item: {
              backgroundColor: item.backgroundColor,
              font_size: item.font_size,
              height: item.height,
              isChange: false,
              left: left,
              name: item.name,
              text: item.text,
              text_align: item.text_align,
              text_color: item.text_color,
              font_weight: item.font_weight,
              top: top,
              type: item.type,
              width: item.width,
              screenIndex: screenIndex,
              isSelect: false,
              fontStyle: item.fontStyle,
              textDecoration: item.textDecoration,
              borderColor: item.borderColor,
              borderWidth: item.borderWidth,
              borderStyle: item.borderStyle,
              borderRedius: item.borderRedius,
              hint: item.hint,
              disabled: item.disablet,
              keyboard: item.keyboard,
              src: item.src,
              resize: item.resize,
              items: item.items,
              onColor: item.onColor,
              offColor: item.offColor,
              value: item.value,
            },
            screenIndex: screenIndex,
            inner_index: index,
          };
          //Sol bardan ekrana atılacak elementi listeye ekliyor.

          dispatch(addElementToContain(data));
        } else if (type === "inner_element") {
          if (item.isContain === undefined) {
            const { inner_index } = item;
            dispatch(
              changeScreenToContainElement({
                screenIndex,
                inner_index,
                index,
                left,
                top,
              })
            );
          } else {
            //ekran içinde olan elementin ekran içindeki konumunu değiştirmek için kullanılıyor.
            dispatch(changeContainInnerElementPosition(json));
          }
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [setHasDropped]
  );
  let backgroundColor;
  if (isOver) {
    backgroundColor = "purple";
  }
  return (
    <div
      id={"Contain" + index}
      ref={drop}
      style={{
        width,
        height,
        position: "relative",
        backgroundColor: backgroundColor,
        borderColor,
        borderWidth,
        borderStyle,
        borderRadius: borderRedius,
      }}
    >
      {items.map(
        (
          { name, left, top, isChange, width, height },
          contain_index = index
        ) => {
          return (
            <div key={contain_index}>
              <ContainParent
                width={width}
                height={height}
                left={left}
                top={top}
                id={contain_index}
                name={name}
                type={ItemTypes.INNER_ELEMENT}
                index={index}
                contain_index={contain_index}
                screenIndex={screenIndex}
                isChange={isChange}
              >
                {name === "Title" ? (
                  <Title
                    screenIndex={screenIndex}
                    index={index}
                    isComingContain={true}
                    contain_index={contain_index}
                  />
                ) : name === "Button" ? (
                  <Button
                    screenIndex={screenIndex}
                    index={index}
                    isComingContain={true}
                    contain_index={contain_index}
                  />
                ) : name === "Text Input" ? (
                  <TextInput
                    screenIndex={screenIndex}
                    index={index}
                    isComingContain={true}
                    contain_index={contain_index}
                  />
                ) : name === "Image" ? (
                  <Image
                    screenIndex={screenIndex}
                    index={index}
                    isComingContain={true}
                    contain_index={contain_index}
                  />
                ) : name === "Loading" ? (
                  <Loading
                    screenIndex={screenIndex}
                    index={index}
                    isComingContain={true}
                    contain_index={contain_index}
                  />
                ) : name === "Switch" ? (
                  <Switch
                    screenIndex={screenIndex}
                    index={index}
                    isComingContain={true}
                    contain_index={contain_index}
                  />
                ) : null}
              </ContainParent>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Contain;
