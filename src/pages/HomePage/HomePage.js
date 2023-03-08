import React, { memo, useCallback, useState } from "react";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";
import {
  addOnePage,
  addElementToScreen,
  changeInnerElementPosition,
} from "../../redux/Screen/ScreenSlice";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import Button from "../../components/DragElements/Button";
import TextInput from "../../components/DragElements/TextInput";
import Title from "../../components/DragElements/Title";
import Image from "../../components/DragElements/ImageComp";
import { ItemTypes } from "../../ItemType";
import Parent from "../../components/DragElements/Parent";

function HomePage() {
  //Benim Sayfam reduxta bulunuyor
  const { myScreens, elements } = useSelector((state) => state.screen);
  //console.log("MyScreens içi", myScreens);
  //Benim sol tarafta bulunan elementlerim
  const [element] = useState(elements);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  //Redux'ta bulunan fonksiyonları çağırmak için
  const dispatch = useDispatch();

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  //Element bırakıldığı anda yapılması gereken işlemler
  const handleDrop = useCallback(
    (index, item, dispatch, monitor) => {
      //index hangi screen olduğunu gösteriyor
      //item hangi elementin olduğunu gösteriyor
      //dispatch redux fonksiyonlarını kullanmak için var
      //monitor React DND den geliyor
      const { name, type } = item;
      const delta = monitor.getSourceClientOffset();
      let left = Math.round(
        delta.x - document.getElementById("Screen" + index).offsetLeft
      );
      let top = Math.round(
        delta.y - document.getElementById("Screen" + index).offsetTop
      );
      if (left < 0) {
        left = 0;
      }
      if (top < 0) {
        top = 0;
      }

      //droppedBoxNames hangi boxların droplandığını liste şeklinde tutuyor
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
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
            screenIndex: index,
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
          },
          index: index,
          inner_index: item.inner_index,
        };
        //Sol bardan ekrana atılacak elementi listeye ekliyor.
        dispatch(addElementToScreen(data));
      } else if (type === "inner_element") {
        //ekran içinde olan elementin ekran içindeki konumunu değiştirmek için kullanılıyor.
        dispatch(changeInnerElementPosition(json));
      }
    },
    [droppedBoxNames]
  );
  return (
    <div className="app">
      <LeftBar elements={element} isDropped={isDropped} />
      <div className="a">
        <Header onClick={() => dispatch(addOnePage())} />
        <div id="mobile" className="center">
          {myScreens.map(({ accepts, lastDroppedItem }, index) => {
            //screen içine birşeyler gelebilir
            const screenIndex = index;
            return (
              <Screen
                id={index}
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item, monitor) =>
                  handleDrop(index, item, dispatch, monitor)
                }
                key={index}
              >
                {lastDroppedItem &&
                  lastDroppedItem.map(
                    ({ name, left, top, isChange, width, height }, index) => {
                      return (
                        <div key={index}>
                          <Parent
                            width={width}
                            height={height}
                            left={left}
                            top={top}
                            id={index}
                            name={name}
                            type={ItemTypes.INNER_ELEMENT}
                            index={index}
                            screenIndex={screenIndex}
                            isChange={isChange}
                          >
                            {name === "Button" ? (
                              <Button index={index} screenIndex={screenIndex} />
                            ) : name === "Title" ? (
                              <Title index={index} screenIndex={screenIndex} />
                            ) : name === "Text Input" ? (
                              <TextInput
                                index={index}
                                screenIndex={screenIndex}
                              />
                            ) : (
                              (name = "Image" ? (
                                <Image
                                  index={index}
                                  screenIndex={screenIndex}
                                />
                              ) : null)
                            )}
                          </Parent>
                        </div>
                      );
                    }
                  )}
              </Screen>
            );
          })}
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default memo(HomePage);