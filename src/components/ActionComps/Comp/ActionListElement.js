import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ActionEventList from "./ActionEventList";
import { changeVisibility } from "../../../redux/Screen/ScreenSlice";
function ActionListElement({
  action_index,
  item,
  screenIndex,
  index,
  contain_index,
}) {
  const dispatch = useDispatch();
  const [select, setSelect] = useState("account");
  const selectAccount = (e) => {
    e.preventDefault();
    setSelect("account");
  };
  const selectNavigation = (e) => {
    e.preventDefault();
    setSelect("navigation");
  };
  const selectCostum = (e) => {
    e.preventDefault();
    setSelect("costum");
  };
  const handleClick = (action_index) => {
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => {
          handleClick(action_index);
        }}
        className="action_list_element"
      >
        Click Action
      </div>
      <div>
        <ActionEventList
          visibility={item.visibility}
          selectAccount={selectAccount}
          selectNavigation={selectNavigation}
          selectCostum={selectCostum}
          select={select}
        />
      </div>
    </div>
  );
}

export default ActionListElement;
