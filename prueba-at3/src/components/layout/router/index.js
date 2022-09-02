import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ListPage from "pages/listPage";
import ErrorPage from "pages/errorPage";

const Router = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="list" element={<ListPage />} />
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Router;
