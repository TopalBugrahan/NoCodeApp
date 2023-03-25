import React from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../redux/Screen/ScreenSlice";
import { IoAddCircleOutline } from "react-icons/io5";
function ActionMaker({ screenIndex, index, contain_index }) {
  const dispatch = useDispatch();
  const createAction = (e) => {
    e.preventDefault();
    console.log("inside of click", screenIndex, index, contain_index);
    dispatch(addAction({ screenIndex, index, contain_index }));
  };
  return (
    <div className="action_maker" onClick={createAction}>
      <p>Create Click Action</p>

      <IoAddCircleOutline size="100px" />
    </div>
  );
}

export default ActionMaker;
