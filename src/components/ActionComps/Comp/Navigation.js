import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAction,
  selectRoute,
  changeVisibility,
} from "../../../redux/Screen/ScreenSlice";

function Navigation({ screenIndex, index, contain_index, action_index }) {
  const { myScreens } = useSelector((state) => state.screen);
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    let page_data = [];
    myScreens.forEach((element) => {
      page_data.push(element.name);
    });
    setPages(page_data);
    setSelectedPage(page_data[0]);
  }, []);
  const gotoPageEvent = () => {
    const event = "navigate";
    const route = selectedPage;
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
          left: null,
        },
      })
    );
    dispatch(
      selectRoute({ screenIndex, index, contain_index, action_index, route })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
  };
  const gotoPreviousPageEvent = () => {
    const event = "navigate_back";
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
          left: null,
        },
      })
    );
    dispatch(
      changeVisibility({ screenIndex, index, contain_index, action_index })
    );
  };
  const submitPage = (e) => {
    setSelectedPage(e.target.value);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="action_select_container">
          <button onClick={gotoPageEvent} className="event_button">
            Go to page
          </button>
        </div>
        <div style={{ margin: "5px" }}>
          <select onChange={submitPage}>
            {pages.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="action_select_container">
        <button onClick={gotoPreviousPageEvent} className="event_button">
          Go to previous page
        </button>
      </div>
    </div>
  );
}

export default Navigation;
