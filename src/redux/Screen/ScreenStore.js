import { configureStore, combineReducers } from "@reduxjs/toolkit";
import screenReducer from "./ScreenSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root1",
  version: 1,
  storage,
};
const reducer = combineReducers({ screen: screenReducer });
const persistedReducer = persistReducer(persistConfig, reducer);
export default configureStore({
  reducer: persistedReducer,
});
