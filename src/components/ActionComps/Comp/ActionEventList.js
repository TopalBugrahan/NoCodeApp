import React from "react";
import Account from "./Account";
import Costum from "./Costum";
import Navigation from "./Navigation";
function ActionEventList({
  inputTexts,
  selectAccount,
  selectNavigation,
  selectCostum,
  select,
  visibility,
  screenIndex,
  index,
  contain_index,
  action_index,
}) {
  return (
    <div className="event_list" style={{ visibility }}>
      <div className="event_list_left">
        <button onClick={selectAccount} className="event_button1">
          Account
        </button>
        <button onClick={selectNavigation} className="event_button1">
          Navigation
        </button>
        <button onClick={selectCostum} className="event_button1">
          Costum
        </button>
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
            screenIndex={screenIndex}
            index={index}
            contain_index={contain_index}
            action_index={action_index}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ActionEventList;
