import React from "react";
import { useDispatch } from "react-redux";
import { deleteElement } from "../../../../redux/Screen/ScreenSlice";
import { useNavigate } from "react-router-dom";
function ActionBar({ screenIndex, index, contain_index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteElemet = (e) => {
    e.preventDefault();
    dispatch(deleteElement({ screenIndex, index, contain_index }));
  };
  const goActionPage = (e) => {
    e.preventDefault();
    navigate(
      `/action_page?screenIndex=${screenIndex}&index=${index}&contain_index=${contain_index}`
    );
  };
  return (
    <div className="ActionBar">
      <button className="DeleteButton" onClick={deleteElemet}>
        Delete Element
      </button>
      <button className="NavigationButton" onClick={goActionPage}>
        Go To Action Page
      </button>
    </div>
  );
}

export default ActionBar;
