import "./css/reset.css";
import "./css/App.scss";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Services from "./pages/Services/Services";
import Info from "./pages/Info/Info";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Front from "./pages/Front/Front";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Front />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
