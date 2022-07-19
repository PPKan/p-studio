import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Works from "./Works";
import Services from "./Services";
import Info from "./Info";
import Contact from "./Contact";

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
