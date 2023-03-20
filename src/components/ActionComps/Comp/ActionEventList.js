import React from "react";
import Account from "./Account";
import Costum from "./Costum";
import Navigation from "./Navigation";
function ActionEventList({
  selectAccount,
  selectNavigation,
  selectCostum,
  select,
  visibility,
}) {
  return (
    <div className="event_list" style={{ visibility }}>
      <div className="event_list_left">
        <div
          onClick={selectAccount}
          style={{ margin: "5px", cursor: "pointer" }}
        >
          Account
        </div>
        <div
          onClick={selectNavigation}
          style={{ margin: "5px", cursor: "pointer" }}
        >
          Navigation
        </div>
        <div
          onClick={selectCostum}
          style={{ margin: "5px", cursor: "pointer" }}
        >
          Costum
        </div>
      </div>
      <div className="event_list_right">
        {select === "account" ? (
          <Account />
        ) : select === "navigation" ? (
          <Navigation />
        ) : select === "costum" ? (
          <Costum />
        ) : null}
      </div>
    </div>
  );
}

export default ActionEventList;
