import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActionListElement from "./ActionListElement";
function ActionList({ actionData, screenIndex, index, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  const [inputTexts, setInputTexts] = useState([]);
  const [titles, setTitles] = useState([]);
  const [allElement, setAllElement] = useState([]);
  const [allElementForSelect, setAllElementForSelect] = useState([]);
  useEffect(() => {
    let data = [];
    let titleData = [];
    let allData = [];
    let allElement = [];
    myScreens.forEach((item, screenIndex) => {
      item.lastDroppedItem.forEach((item, index) => {
        if (item.items !== null) {
          item.items.forEach((item, contain_index) => {
            allData.push({
              name: item.priviteName,
              screenIndex,
              index,
              contain_index,
            });
            allElement.push({
              value: {
                name: item.priviteName,
                screenIndex,
                index,
                contain_index,
              },
              label: item.priviteName,
            });
            if (item.name === "Text Input")
              data.push({
                name: item.priviteName,
                screenIndex,
                index,
                contain_index,
              });
            if (item.name === "Title")
              titleData.push({
                name: item.priviteName,
                screenIndex,
                index,
                contain_index,
              });
          });
        } else {
          allData.push({
            name: item.priviteName,
            screenIndex,
            index,
            contain_index: "undefined",
          });
          allElement.push({
            value: {
              name: item.priviteName,
              screenIndex,
              index,
              contain_index: "undefined",
            },
            label: item.priviteName,
          });
          if (item.name === "Text Input")
            data.push({
              name: item.priviteName,
              screenIndex,
              index,
              contain_index: "undefined",
            });
          if (item.name === "Title")
            titleData.push({
              name: item.priviteName,
              screenIndex,
              index,
              contain_index: "undefined",
            });
        }
      });
    });
    setInputTexts(data);
    setTitles(titleData);
    setAllElement(allData);
    setAllElementForSelect(allElement);
  }, []);
  return (
    <div className="action_list">
      {actionData.map((item, action_index) => {
        return (
          <div key={action_index}>
            <ActionListElement
              allElementForSelect={allElementForSelect}
              allElement={allElement}
              inputTexts={inputTexts}
              titles={titles}
              item={item}
              screenIndex={screenIndex}
              index={index}
              action_index={action_index}
              contain_index={contain_index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ActionList;
