import React, { Fragment } from "react";
import { DndProvider } from "react-dnd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUp from "./pages/SingUp";
function App() {
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="sing_up" element={<SingUp />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </Fragment>
  );
}

export default App;
