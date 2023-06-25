import React, { Fragment } from "react";
import { DndProvider } from "react-dnd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import DesignPage from "./pages/DesignPage";
import ActionPage from "./pages/ActionPage";
import SingUp from "./pages/SingUp";
import LoginPage from "./pages/LoginPage";
import GlobalStylePage from "./pages/GlobalStylePage";
import axios from "axios";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import { useAuth } from "./context/AuthContext";
function App() {

  const { user, setUser } = useAuth();

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  if(user)
  {
    axios.defaults.headers.common = {'Authorization': `Bearer ${user.accessToken}`}
  }
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} element={<HomePage />} />
              <Route path="design_page/:projectId" element={<DesignPage />} />
              <Route path="action_page/:projectId" element={<ActionPage />} />
              <Route path="global_syle_page/:projectId" element={<GlobalStylePage />} />
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
