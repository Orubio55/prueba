import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import List from "pages/list";

const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="list" element={<List />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Router;
