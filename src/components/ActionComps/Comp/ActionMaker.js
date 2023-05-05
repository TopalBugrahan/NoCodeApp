import React from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../redux/Screen/ScreenSlice";
import { IoAddCircleOutline } from "react-icons/io5";
function ActionMaker({ screenIndex, index, contain_index }) {
  const dispatch = useDispatch();
  const createAction = (e) => {
    e.preventDefault();
    dispatch(addAction({ screenIndex, index, contain_index }));
  };
  return (
    <div className="action_maker_parent" style={{ backgroundColor: "#d7d4d4" }}>
      <span
        style={{
          fontWeight: "bold",
          textAlign: "right",
          display: "block",
          cursor: "pointer",
        }}
      ></span>
      <div className="action_maker" onClick={createAction}>
        <p>Create Click Action</p>

        <IoAddCircleOutline size="100px" />
      </div>
    </div>
  );
}

export default ActionMaker;
