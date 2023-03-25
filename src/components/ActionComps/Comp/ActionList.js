import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionListElement from "./ActionListElement";
function ActionList({ actionData, screenIndex, index, contain_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  const [inputTexts, setInputTexts] = useState([]);
  useEffect(() => {
    let data = [];
    myScreens.forEach((item) => {
      item.lastDroppedItem.forEach((item) => {
        if (item.items !== null) {
          item.items.forEach((item) => {
            if (item.name === "Text Input") data.push(item.priviteName);
          });
        } else {
          if (item.name === "Text Input") data.push(item.priviteName);
        }
      });
    });
    setInputTexts(data);
  }, []);
  return (
    <div className="action_list">
      {actionData.map((item, action_index) => {
        return (
          <div key={action_index}>
            <ActionListElement
              inputTexts={inputTexts}
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
