import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectAction,
  changeVisibility,
} from "../../../redux/Screen/ScreenSlice";
import { IoClose } from "react-icons/io5";
function Plus({ screenIndex, index, contain_index, action_index, titles }) {
  const [isPlusVisible, setPlusVisible] = useState(false);
  const [selectTitle, setSelectTitle] = useState(null);
  const dispatch = useDispatch();
  function changePlusVisible() {
    const defaultTitle = titles.length > 0 ? titles[0] : null;
    setSelectTitle(defaultTitle);
    setPlusVisible(!isPlusVisible);
  }
  const plusEvent = () => {
    const event = "dynamic_value";

    dispatch(
      selectAction({
        screenIndex,
        index,
        contain_index,
        action_index,
        event,
        params: {
          selectEmail: null,
          selectPassport: null,
          selectTitle: selectTitle,
          backgroundColor: null,
          width: null,
          height: null,
          top: null,
          left: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setPlusVisible(false);
  };
  return (
    <div>
      <div className="action_select_container_account">
        <button className="event_button" onClick={changePlusVisible}>
          Dynamic Value
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isPlusVisible ? { visibility: "visible" } : { visibility: "hidden" }
          }
        >
          <div className="sign_in_for_account">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#283032",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                padding: "5px",
              }}
            >
              <span style={{ color: "white" }}>Dynamic Value</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setPlusVisible(false);
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <span style={{ color: "white" }}>Choose Element:</span>
                <select
                  onChange={(e) => {
                    setSelectTitle(e.target.value);
                  }}
                  className="select_action"
                >
                  {titles.length > 0 ? (
                    titles.map((item, index) => {
                      const key = "SignEmail" + index;
                      return (
                        <option key={key} value={item}>
                          {item}
                        </option>
                      );
                    })
                  ) : (
                    <option value={null}>Projenizde hiç input yok </option>
                  )}
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={plusEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plus;
