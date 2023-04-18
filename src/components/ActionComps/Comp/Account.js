import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectAction,
  changeVisibility,
} from "../../../redux/Screen/ScreenSlice";
import { IoClose } from "react-icons/io5";

function Account({
  screenIndex,
  index,
  contain_index,
  action_index,
  inputTexts,
}) {
  const [logEmailSelect, setLogEmailSelect] = useState(null);
  const [logPasswordSelect, setLogPasswordSelect] = useState(null);
  const [signEmailSelect, setSignEmailSelect] = useState(null);
  const [signPasswordSelect, setSignPasswordSelect] = useState(null);
  const [isLogVisible, setLogVisible] = useState(false);
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const [isSingVisible, setSingVisible] = useState(false);
  function handleMouseEnter() {
    const defaultInput = inputTexts.length > 0 ? inputTexts[0] : null;
    setSignEmailSelect(defaultInput);
    setSignPasswordSelect(defaultInput);
    setLogVisible(false);
    setLogoutVisible(false);
    setSingVisible(!isSingVisible);
  }

  function handleMouseEnter1() {
    const defaultInput = inputTexts.length > 0 ? inputTexts[0] : null;
    setLogEmailSelect(defaultInput);
    setLogPasswordSelect(defaultInput);
    setLogVisible(!isLogVisible);
    setLogoutVisible(false);
    setSingVisible(false);
  }

  function handleMouseEnter2() {
    setLogVisible(false);
    setLogoutVisible(!isLogoutVisible);
    setSingVisible(false);
  }

  const dispatch = useDispatch();

  const singUserEvent = () => {
    const event = "sing_user";

    dispatch(
      selectAction({
        screenIndex,
        index,
        contain_index,
        action_index,
        event,
        params: {
          selectEmail: signEmailSelect,
          selectPassport: signPasswordSelect,
          selectTitle: null,
          selectCostum: null,
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
    setSingVisible(false);
  };
  const logUserEvent = () => {
    const event = "log_user";

    dispatch(
      selectAction({
        screenIndex,
        index,
        contain_index,
        action_index,
        event,
        params: {
          selectEmail: logEmailSelect,
          selectPassport: logPasswordSelect,
          selectTitle: null,
          selectCostum: null,
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
    setLogVisible(false);
  };
  const logoutUserEvent = () => {
    const event = "logout_user";
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
          selectCostum: null,
          selectTitle: null,
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
    setLogoutVisible(false);
  };
  return (
    <div>
      <div className="action_select_container_account">
        <button className="event_button" onClick={handleMouseEnter}>
          Sign the user
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isSingVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Sign the user up</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setSingVisible(false);
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
                <span style={{ color: "white" }}>E-Mail</span>
                <select
                  onChange={(e) => {
                    setSignEmailSelect(e.target.value);
                  }}
                  className="select_action"
                >
                  {inputTexts.length > 0 ? (
                    inputTexts.map((item, index) => {
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
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <span style={{ color: "white" }}>Password</span>
                <select
                  onChange={(e) => {
                    setSignPasswordSelect(e.target.value);
                  }}
                  className="select_action"
                >
                  {inputTexts.length > 0 ? (
                    inputTexts.map((item, index) => {
                      const key = "SignPass" + index;
                      return (
                        <option key={key} value={item}>
                          {item}
                        </option>
                      );
                    })
                  ) : (
                    <option value={"null"}>Projenizde hiç input yok </option>
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
                <button onClick={singUserEvent} className="button_account">
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action_select_container_account">
        <button className="event_button" onClick={handleMouseEnter1}>
          Log the user
        </button>

        <div
          className={"action_select_absolute"}
          style={
            isLogVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}> Log the user in</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setLogVisible(false);
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
                <span style={{ color: "white" }}>E-Mail</span>
                <select
                  onChange={(e) => {
                    setLogEmailSelect(e.target.value);
                  }}
                  className="select_action"
                >
                  {inputTexts.length > 0 ? (
                    inputTexts.map((item, index) => {
                      const key = "LogEmail" + index;
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
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <span style={{ color: "white" }}>Password</span>
                <select
                  onChange={(e) => {
                    setLogPasswordSelect(e.target.value);
                  }}
                  className="select_action"
                >
                  {inputTexts.length > 0 ? (
                    inputTexts.map((item, index) => {
                      const key = "LogPass" + index;
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
                <button onClick={logUserEvent} className="button_account">
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action_select_container_account">
        <button className="event_button" onClick={handleMouseEnter2}>
          Log the user out
        </button>

        <div
          className={"action_select_absolute"}
          style={
            isLogoutVisible
              ? { visibility: "visible" }
              : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Log the user out</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setLogoutVisible(false);
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button onClick={logoutUserEvent} className="button_account">
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

export default Account;
