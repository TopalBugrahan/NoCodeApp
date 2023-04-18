import React from "react";
import ActionMaker from "./Comp/ActionMaker";
import ActionList from "./Comp/ActionList";
function TextInput({ actions, screenIndex, index, contain_index }) {
  if (actions.length === 0) {
    return (
      <ActionMaker
        screenIndex={screenIndex}
        index={index}
        contain_index={contain_index}
      />
    );
  } else {
    return (
      <div className="action_element_container">
        <ActionList
          actionData={actions}
          screenIndex={screenIndex}
          index={index}
          contain_index={contain_index}
        />
        <ActionMaker
          screenIndex={screenIndex}
          index={index}
          contain_index={contain_index}
        />
      </div>
    );
  }
}

export default TextInput;
