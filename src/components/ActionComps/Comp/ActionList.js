import React from "react";
import ActionListElement from "./ActionListElement";
function ActionList({ actionData, screenIndex, index, contain_index }) {
  return (
    <div className="action_list">
      {actionData.map((item, action_index) => {
        return (
          <div key={index}>
            <ActionListElement
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
