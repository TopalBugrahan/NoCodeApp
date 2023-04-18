import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import StyleSelect from "./StyleSelect";
import { addGlobalStyle } from "../../redux/Screen/ScreenSlice";

function StyleHeader() {
  const [select, setSelect] = useState("Button");
  const [styleName, setStyleName] = useState();
  const dispatch = useDispatch();
  const buttonPopUp = () => {
    return <button className="style_header_button">Add Style</button>;
  };
  return (
    <div className="style_header">
      <Popup trigger={buttonPopUp} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="popup_header">Create A New Style</div>
            <div className="popup_content">
              <div className="popup_row">
                <div className="popup_title">Style Name</div>
                <input
                  onChange={(e) => {
                    setStyleName(e.target.value);
                  }}
                  className="popup_input"
                  type="text"
                />
              </div>
              <div className="popup_row">
                <div className="popup_title">Style Name</div>
                <div style={{ width: "160px" }}>
                  <StyleSelect setSelect={setSelect} />
                </div>
              </div>
            </div>
            <div className="actions">
              <button
                className="popup_button"
                onClick={() => {
                  dispatch(addGlobalStyle({ select, styleName }));
                }}
              >
                Add Style
              </button>
              <button
                className="popup_button"
                onClick={() => {
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default StyleHeader;
