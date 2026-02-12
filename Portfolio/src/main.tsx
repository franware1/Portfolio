import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Navigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Contact from "./pages/contact.tsx";
import Landing from "./pages/landing.tsx";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.bundle.min.js";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/landing" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </Router>
  </StrictMode>
);
