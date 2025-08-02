import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";

import "./index.css"; // Assuming you have a CSS file for global styles
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }/>
    </Routes>
  </BrowserRouter>
);
