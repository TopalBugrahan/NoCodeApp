import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/Screen/ScreenStore";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
let asdasd = persistStore(store);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={asdasd}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
