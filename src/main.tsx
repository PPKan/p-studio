import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/works" element={<Works />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
);
