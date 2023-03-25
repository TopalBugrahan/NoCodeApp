import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  selectAction,
  changeVisibility,
} from "../../../redux/Screen/ScreenSlice";
import ColorElement from "./ColorElement";
import { IoClose } from "react-icons/io5";
function Costum({ screenIndex, index, contain_index, action_index }) {
  const [isBackgroundVisible, setBackgroundVisible] = useState(false);
  const [isTopVisible, setTopVisible] = useState(false);
  const [isLeftVisible, setLeftVisible] = useState(false);
  const [isWidthVisible, setWidtgVisible] = useState(false);
  const [isHeightVisible, setHeightVisible] = useState(false);
  const [visibility, setVisible] = useState("hidden");
  const [color, setColor] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const dispatch = useDispatch();
  function changeWidthVisible() {
    setTopVisible(false);
    setLeftVisible(false);
    setWidtgVisible(!isWidthVisible);
    setHeightVisible(false);
    setBackgroundVisible(false);
  }
  function changeHeightVisible() {
    setTopVisible(false);
    setLeftVisible(false);
    setWidtgVisible(false);
    setHeightVisible(!isHeightVisible);
    setBackgroundVisible(false);
  }
  function changeTopVisible() {
    setTopVisible(!isTopVisible);
    setLeftVisible(false);
    setWidtgVisible(false);
    setHeightVisible(false);
    setBackgroundVisible(false);
  }
  function changeLeftVisible() {
    setTopVisible(false);
    setLeftVisible(!isLeftVisible);
    setWidtgVisible(false);
    setHeightVisible(false);
    setBackgroundVisible(false);
  }
  function handleMouseEnter() {
    setTopVisible(false);
    setLeftVisible(false);
    setWidtgVisible(false);
    setHeightVisible(false);
    setBackgroundVisible(!isBackgroundVisible);
  }
  function backgroundEvent() {
    const event = "backgroundColor";
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
          backgroundColor: color,
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
    setBackgroundVisible(false);
  }
  function widthEvent() {
    const event = "width";
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
          backgroundColor: null,
          width,
          height: null,
          top: null,
          left: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setWidtgVisible(false);
  }
  function heightEvent() {
    const event = "height";
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
          backgroundColor: null,
          width: null,
          height,
          top: null,
          left: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setHeightVisible(false);
  }
  function topEvent() {
    const event = "top";
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
          backgroundColor: null,
          width: null,
          height: null,
          top,
          left: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setTopVisible(false);
  }
  function leftEvent() {
    const event = "left";
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
          backgroundColor: null,
          width: null,
          height: null,
          top: null,
          left,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
    setLeftVisible(false);
  }
  return (
    <div>
      {/*sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changeWidthVisible}>
          Change Width
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isWidthVisible
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
              <span style={{ color: "white" }}> Change Width</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setWidtgVisible(false);
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
                <span style={{ color: "white" }}>Choose Width:</span>
                <input
                  type="number"
                  onChange={(e) => {
                    setWidth(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={widthEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changeHeightVisible}>
          Change Height
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isHeightVisible
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
              <span style={{ color: "white" }}> Change Height</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setHeightVisible(false);
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
                <span style={{ color: "white" }}>Choose Height:</span>
                <input
                  type="number"
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={heightEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changeTopVisible}>
          Change Top Position
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isTopVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Change Top Position</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setTopVisible(false);
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
                <span style={{ color: "white" }}>Choose Top Pixel:</span>
                <input
                  type="number"
                  onChange={(e) => {
                    setTop(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={topEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changeLeftVisible}>
          Change Left Position
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isLeftVisible ? { visibility: "visible" } : { visibility: "hidden" }
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
              <span style={{ color: "white" }}>Change Left Position</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setLeftVisible(false);
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
                <span style={{ color: "white" }}>Choose Left Pixel:</span>
                <input
                  type="number"
                  onChange={(e) => {
                    setLeft(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={leftEvent}>
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={handleMouseEnter}>
          Change Backfround Color
        </button>
        <div
          className={"action_select_absolute"}
          style={
            isBackgroundVisible
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
              <span style={{ color: "white" }}>Change Backfround Color</span>
              <IoClose
                size="25"
                color="white"
                onClick={(e) => {
                  setBackgroundVisible(false);
                  setVisible("hidden");
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
                <span style={{ color: "white" }}>Choose Color:</span>
                <ColorElement
                  setColor={setColor}
                  color={color}
                  visibility={visibility}
                  setVisible={setVisible}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button className="button_account" onClick={backgroundEvent}>
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

export default Costum;
