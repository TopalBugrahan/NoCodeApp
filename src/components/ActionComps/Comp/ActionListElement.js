import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ActionEventList from "./ActionEventList";
import { changeVisibility } from "../../../redux/Screen/ScreenSlice";
function ActionListElement({
  inputTexts,
  titles,
  allElement,
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
  const selectPlus = (e) => {
    e.preventDefault();
    setSelect("plus");
  };
  const handleClick = (action_index) => {
    const docs = document.getElementsByClassName("action_select_absolute");
    for (var i = 0, len = docs.length; i < len; i++) {
      docs[i].style.visibility = "hidden";
    }
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
        <div className="action_list_element_body">
          <p>Click Action</p>
          {item.event !== null ? (
            <p>{item.event}</p>
          ) : (
            <p>You not selected event</p>
          )}
        </div>
      </div>
      <div>
        <ActionEventList
          titles={titles}
          allElement={allElement}
          inputTexts={inputTexts}
          screenIndex={screenIndex}
          index={index}
          contain_index={contain_index}
          action_index={action_index}
          visibility={item.visibility}
          selectAccount={selectAccount}
          selectNavigation={selectNavigation}
          selectCostum={selectCostum}
          select={select}
          selectPlus={selectPlus}
        />
      </div>
    </div>
  );
}

export default ActionListElement;
