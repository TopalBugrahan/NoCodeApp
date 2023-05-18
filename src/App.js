import React, { Fragment } from "react";
import { DndProvider } from "react-dnd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import HomePage from "./pages/HomePage";
import ActionPage from "./pages/ActionPage";
import SingUp from "./pages/SingUp";
import LoginPage from "./pages/LoginPage";
import GlobalStylePage from "./pages/GlobalStylePage";
import axios from "axios";
import MainLayout from "./layout/MainLayout";
function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} element={<HomePage />} />
              <Route path="action_page" element={<ActionPage />} />
              <Route path="global_syle_page" element={<GlobalStylePage />} />
            </Route>       
              <Route path="login" element={<LoginPage />} />
              <Route path="sing_up" element={<SingUp />} />     
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </Fragment>
  );
}

export default App;
