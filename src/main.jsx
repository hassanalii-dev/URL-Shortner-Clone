import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./App.jsx";
import Domains from "./pages/Domains.jsx";
import Plans from "./pages/Plans.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);