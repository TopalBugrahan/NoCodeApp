import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./ScreenSlice";

export default configureStore({
  reducer: {
    screen: screenReducer,
  },
});
