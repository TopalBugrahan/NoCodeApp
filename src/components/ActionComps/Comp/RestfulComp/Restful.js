import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  selectAction,
  changeVisibility,
} from "../../../../redux/Screen/ScreenSlice";
function Restful({
  screenIndex,
  index,
  contain_index,
  action_index,
  titles,
  inputTexts,
}) {
  const [isGetVisible, setGetVisible] = useState(false);
  const [isPostVisible, setPostVisible] = useState(false);
  const [isPutVisible, setPutVisible] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [inputSelect, setInputSelect] = useState(null);
  const [selectTitle, setSelectTitle] = useState(null);
  const [count, setCount] = useState([1]);
  const [nameApi, setNameApi] = useState(null);
  const [uri, setUri] = useState(null);
  const [finalData, setFinalData] = useState([]);
  const dispatch = useDispatch();
  function changGetVisible() {
    const defaultTitle = titles.length > 0 ? titles[0] : null;
    setSelectTitle(defaultTitle);
    setGetVisible(!isGetVisible);
    setDeleteVisible(false);
    setPostVisible(false);
    setPutVisible(false);
  }
  function changPostVisible() {
    const defaultInput = "null";
    setInputSelect(defaultInput);
    setPostVisible(!isPostVisible);
    setGetVisible(false);
    setPutVisible(false);
    setDeleteVisible(false);
  }
  function changPutVisible() {
    const defaultInput = "null";
    setInputSelect(defaultInput);
    setPutVisible(!isPutVisible);
    setDeleteVisible(false);
    setGetVisible(false);
    setPostVisible(false);
  }
  function changDeleteVisible() {
    const defaultInput = "null";
    setInputSelect(defaultInput);
    setDeleteVisible(!isGetVisible);
    setPostVisible(false);
    setGetVisible(false);
    setPutVisible(false);
  }
  const getEvent = () => {
    const event = "restful_get";

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
          uri: uri,
          condition: null,
          conditionIndex: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setGetVisible(false);
  };

  const postEvent = () => {
    const event = "restful_post";
    console.log(finalData);
    let item = finalData;
    if (finalData.length === 0) {
      item = null;
    }
    dispatch(
      selectAction({
        screenIndex,
        index,
        contain_index,
        action_index,
        event,
        params: {
          selectEmail: item,
          selectPassport: null,
          selectTitle: null,
          backgroundColor: null,
          width: null,
          height: null,
          top: null,
          left: null,
          uri: uri,
          condition: null,
          conditionIndex: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setPostVisible(false);
  };

  const putEvent = () => {
    const event = "restful_put";
    console.log(finalData);
    let item = finalData;
    if (finalData.length === 0) {
      item = null;
    }
    dispatch(
      selectAction({
        screenIndex,
        index,
        contain_index,
        action_index,
        event,
        params: {
          selectEmail: item,
          selectPassport: null,
          selectTitle: null,
          backgroundColor: null,
          width: null,
          height: null,
          top: null,
          left: null,
          uri: uri,
          condition: null,
          conditionIndex: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setPutVisible(false);
  };

  const deleteEvent = () => {
    const event = "restful_delete";

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
          selectTitle: null,
          backgroundColor: null,
          width: null,
          height: null,
          top: null,
          left: null,
          uri: uri,
          condition: null,
          conditionIndex: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setDeleteVisible(false);
  };

  return (
    <div>
      {/*Sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changGetVisible}>
          Get
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isGetVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Restful Get</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setGetVisible(false);
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
                <span style={{ color: "white" }}>API URL:</span>
                <input
                  onChange={(e) => {
                    setUri(e.target.value);
                  }}
                  type="text"
                  placeholder="exampleAPI.com"
                />
              </div>

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
                        <option key={key} value={JSON.stringify(item)}>
                          {item.name}
                        </option>
                      );
                    })
                  ) : (
                    <option value={null}>Projenizde hiç title yok </option>
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
                <button className="button_account" onClick={getEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Sınır*/}

      <div className="action_select_container_account">
        <button className="event_button" onClick={changPostVisible}>
          Post
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isPostVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Restful Post</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setPostVisible(false);
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
                <span style={{ color: "white" }}>API URL:</span>
                <input
                  onChange={(e) => {
                    setUri(e.target.value);
                  }}
                  type="text"
                  placeholder="exampleAPI.com"
                />
              </div>
              {count.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <span style={{ color: "white" }}>Select Input</span>
                    <select
                      onChange={(e) => {
                        console.log(e.target.value);

                        setInputSelect(e.target.value);
                      }}
                      className="select_action"
                    >
                      <option value={"null"}>No Chose</option>
                      {inputTexts.length > 0 ? (
                        inputTexts.map((item, index) => {
                          const key = "Input" + index;
                          return (
                            <option key={key} value={JSON.stringify(item)}>
                              {item.name}
                            </option>
                          );
                        })
                      ) : (
                        <option value={"null"}>
                          Projenizde hiç input yok{" "}
                        </option>
                      )}
                    </select>
                    <input
                      type="text"
                      placeholder="apide bulunan isim orn title"
                      onChange={(e) => {
                        setNameApi(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        console.log("bastım", inputSelect);
                        console.log("bastım", nameApi);
                        setFinalData([...finalData, [inputSelect, nameApi]]);
                        setCount([...count, 1]);
                      }}
                    >
                      Add
                    </button>
                  </div>
                );
              })}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={postEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changPutVisible}>
          Put
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isPutVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Restful Put</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setPutVisible(false);
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
                <span style={{ color: "white" }}>API URL:</span>
                <input
                  onChange={(e) => {
                    setUri(e.target.value);
                  }}
                  type="text"
                  placeholder="exampleAPI.com"
                />
              </div>
              {count.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    <span style={{ color: "white" }}>Select Input</span>
                    <select
                      onChange={(e) => {
                        setInputSelect(e.target.value);
                      }}
                      className="select_action"
                    >
                      <option value={"null"}>No Chose</option>
                      {inputTexts.length > 0 ? (
                        inputTexts.map((item, index) => {
                          const key = "Input" + index;
                          return (
                            <option key={key} value={JSON.stringify(item)}>
                              {item.name}
                            </option>
                          );
                        })
                      ) : (
                        <option value={"null"}>
                          Projenizde hiç input yok{" "}
                        </option>
                      )}
                    </select>
                    <input
                      type="text"
                      placeholder="apide bulunan isim orn title"
                      onChange={(e) => {
                        setNameApi(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        console.log("bastım", inputSelect);
                        console.log("bastım", nameApi);
                        setFinalData([...finalData, [inputSelect, nameApi]]);
                        setCount([...count, 1]);
                      }}
                    >
                      Add
                    </button>
                  </div>
                );
              })}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={putEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sınır */}

      <div className="action_select_container_account">
        <button className="event_button" onClick={changDeleteVisible}>
          Delete
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isDeleteVisible
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
              <span style={{ color: "white" }}>Restful Delete</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setDeleteVisible(false);
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
                <span style={{ color: "white" }}>API URL:</span>
                <input
                  onChange={(e) => {
                    setUri(e.target.value);
                  }}
                  type="text"
                  placeholder="exampleAPI.com"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={deleteEvent}>
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

export default Restful;
