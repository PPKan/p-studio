import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Services from "./pages/Services/Services";
import Info from "./pages/Info/Info";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/works" element={<Works />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </HashRouter>
);
