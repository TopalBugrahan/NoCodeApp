import React from "react";
import { useSelector } from "react-redux";

import Form from "./RightBarComponent/Form/Form";

function RightBar() {
  const { myScreens } = useSelector((state) => state.screen);

  return (
    <div className="rightbar_container">
      {myScreens.map(({ lastDroppedItem }, index) => {
        const screenIndex = index;
        return (
          <div key={index}>
            {lastDroppedItem.map((item, index) => {
              if (item.isSelect) {
                return (
                  <div key={index}>
                    <Form item={item} index={index} screenIndex={screenIndex} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default RightBar;
