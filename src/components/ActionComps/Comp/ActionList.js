import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionListElement from "./ActionListElement";
function ActionList({ actionData, screenIndex, index, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  const [inputTexts, setInputTexts] = useState([]);
  const [titles, setTitles] = useState([]);
  const [allElement, setAllElement] = useState([]);
  useEffect(() => {
    let data = [];
    let titleData = [];
    let allData = [];
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
            if (item.name === "Text Input") data.push(item.priviteName);
            if (item.name === "Title") titleData.push(item.priviteName);
          });
        } else {
          allData.push({
            name: item.priviteName,
            screenIndex,
            index,
            contain_index,
          });
          if (item.name === "Text Input") data.push(item.priviteName);
          if (item.name === "Title") titleData.push(item.priviteName);
        }
      });
    });
    setInputTexts(data);
    setTitles(titleData);
    setAllElement(allData);
  }, []);
  return (
    <div className="action_list">
      {actionData.map((item, action_index) => {
        return (
          <div key={action_index}>
            <ActionListElement
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
