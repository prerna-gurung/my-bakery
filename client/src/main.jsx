import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login.jsx";
import Order from "./pages/Order.jsx";
import ErrorPage from "./pages/Error.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:product_name" element={<Order />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
