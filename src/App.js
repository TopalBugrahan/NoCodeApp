import React, { Fragment } from "react";
import { DndProvider } from "react-dnd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import HomePage from "./pages/HomePage";
import ActionPage from "./pages/ActionPage";
import SingUp from "./pages/SingUp";
function App() {
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="sing_up" element={<SingUp />} />
            <Route path="action_page" element={<ActionPage />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </Fragment>
  );
}

export default App;
