import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Navigate, BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import App from './App.tsx';
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.bundle.min.js";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  </StrictMode>
);
