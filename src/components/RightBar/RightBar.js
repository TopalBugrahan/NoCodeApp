import React from "react";
import { useSelector } from "react-redux";
import ScreenRightComp from "./RightBarComponent/ScreenRightComp";
import Form from "./RightBarComponent/Form/Form";

function RightBar() {
  const { myScreens } = useSelector((state) => state.screen);

  return (
    <div className="rightbar_container">
      {myScreens.map(
        (
          { lastDroppedItem, isSelect, backgroundColor, backgroundImage, name },
          index
        ) => {
          const screenIndex = index;
          if (isSelect === true) {
            return (
              <div key={name}>
                <ScreenRightComp
                  name={name}
                  screenIndex={screenIndex}
                  backgroundImage={backgroundImage}
                  backgroundColor={backgroundColor}
                />
              </div>
            );
          } else {
            return (
              <div key={index}>
                {lastDroppedItem.map((item, index) => {
                  if (item.items !== undefined) {
                    if (item.isSelect) {
                      return (
                        <div key={item.priviteName}>
                          <Form
                            item={item}
                            index={index}
                            screenIndex={screenIndex}
                          />
                        </div>
                      );
                    }
                    const items = item.items;
                    return (
                      <div key={item.priviteName}>
                        {items != null &&
                          items.map((item, contain_index = index) => {
                            if (item.isSelect) {
                              return (
                                <div key={item.priviteName}>
                                  <Form
                                    item={item}
                                    index={index}
                                    screenIndex={screenIndex}
                                    contain_index={contain_index}
                                  />
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                      </div>
                    );
                  } else {
                    if (item.isSelect) {
                      return (
                        <div key={item.priviteName}>
                          <Form
                            item={item}
                            index={index}
                            screenIndex={screenIndex}
                          />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  }
                })}
              </div>
            );
          }
        }
      )}
    </div>
  );
}

export default RightBar;
