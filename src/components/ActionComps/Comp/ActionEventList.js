import React from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import Costum from "./Costum";
import Navigation from "./Navigation";
import Plus from "./Plus";
import Restful from "./RestfulComp/Restful";
import Condition from "./Condition";
function ActionEventList({
  allElementForSelect,
  inputTexts,
  titles,
  allElement,
  selectAccount,
  selectNavigation,
  selectCostum,
  selectPlus,
  select,
  visibility,
  screenIndex,
  index,
  contain_index,
  action_index,
  selectRestful,
  selectCondition,
}) {
  const { myScreens } = useSelector((state) => state.screen);
  const name = myScreens[screenIndex].lastDroppedItem[index].name;
  return (
    <div className="event_list" style={{ visibility }}>
      <div className="event_list_left">
        <button onClick={selectAccount} className="event_button1">
          Account
        </button>
        <button onClick={selectNavigation} className="event_button1">
          Navigation
        </button>
        <button onClick={selectRestful} className="event_button1">
          Restful
        </button>
        <button onClick={selectCondition} className="event_button1">
          Condition
        </button>
        <button onClick={selectCostum} className="event_button1">
          Costum
        </button>

        {name === "Text Input" ? (
          <button onClick={selectPlus} className="event_button1">
            Plus Event
          </button>
        ) : null}
      </div>
      <div className="event_list_right">
        {select === "account" ? (
          <Account
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
            inputTexts={inputTexts}
          />
        ) : select === "navigation" ? (
          <Navigation
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
          />
        ) : select === "costum" ? (
          <Costum
            allElement={allElement}
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
          />
        ) : select === "plus" ? (
          <Plus
            titles={titles}
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
          />
        ) : select === "restful" ? (
          <Restful
            titles={titles}
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
            inputTexts={inputTexts}
          />
        ) : select === "condition" ? (
          <Condition
            allElementForSelect={allElementForSelect}
            titles={titles}
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
            inputTexts={inputTexts}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ActionEventList;
