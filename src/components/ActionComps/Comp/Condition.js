import React, { useState, useEffect } from "react";
import Select from "react-select";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAction,
  changeVisibility,
  changeConditionIndex,
} from "../../../redux/Screen/ScreenSlice";

const options2 = [
  { label: ">", value: 1 },
  { label: "<", value: 2 },
  { label: "=", value: 3 },
  { label: "≤", value: 4 },
  { label: "≥", value: 5 },
];

const options1 = [
  { label: "width", value: "width" },
  { label: "height", value: "height" },
  { label: "hidden", value: "hidden" },
  { label: "visible", value: "visible" },
];
const options4 = [
  { label: "width", value: "width1" },
  { label: "height", value: "height1" },
  { label: "visibility", value: "visibility1" },
];

function Condition({
  screenIndex,
  index,
  contain_index,
  action_index,
  titles,
  inputTexts,
  allElementForSelect,
}) {
  const { myScreens } = useSelector((state) => state.screen);

  const options3 = allElementForSelect;
  const [isGetVisible, setGetVisible] = useState(false);
  const [isSelect, setSelect] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [actionList, setActionList] = useState(null);
  const [conditionIndex, setConditionIndex] = useState(null);

  const dispatch = useDispatch();
  function changGetVisible() {
    setGetVisible(!isGetVisible);
  }
  useEffect(() => {
    let data = myScreens[screenIndex].lastDroppedItem[index].actions;
    let array = [];
    if (contain_index === undefined) {
      data =
        myScreens[screenIndex].lastDroppedItem[index].items[contain_index]
          .actions;
    }
    data.forEach((item, index) => {
      array.push({ value: index, label: index });
    });
    setActionList(array);
  }, [myScreens]);
  const getEvent = () => {
    const event = "condition";
    if (selectedItems.length === 5 || selectedItems.length === 2) {
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
            uri: null,
            condition: selectedItems,
            conditionIndex,
          },
        })
      );
      dispatch(
        changeVisibility({ screenIndex, index, contain_index, action_index })
      );
      dispatch(
        changeConditionIndex({
          screenIndex,
          index,
          contain_index,
          action_index,
          conditionIndex,
        })
      );
      setGetVisible(false);
    }
  };

  return (
    <div>
      {/*Sınır*/}
      <div className="action_select_container_account">
        <button className="event_button" onClick={changGetVisible}>
          Select Condition
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
              <span style={{ color: "white" }}>Condition</span>
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
                <span style={{ color: "white", width: "40%" }}>Condition:</span>
                <div style={{ width: "60%" }}>
                  <Select
                    options={
                      isSelect === 0
                        ? allElementForSelect
                        : isSelect === 1
                        ? options1
                        : isSelect === 2
                        ? options2
                        : isSelect === 3
                        ? options3
                        : isSelect === 4
                        ? options4
                        : []
                    }
                    isMulti
                    isClearable={false}
                    onChange={(value) => {
                      const temp = value.length % 6;
                      setSelect(temp);
                      setSelectedItems(value);
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px",
                }}
              >
                <span style={{ color: "white", width: "40%" }}>
                  Choose Action:
                </span>
                <div style={{ width: "60%" }}>
                  <Select
                    options={actionList}
                    onChange={(value) => {
                      setConditionIndex(value.value);
                    }}
                  />
                </div>
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
    </div>
  );
}

export default Condition;
