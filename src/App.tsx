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
import { createContext, useCallback, useState } from "react";
import fetchLocale from "./components/fetchLocale";
import { processedLocale } from "./components/processedLocale";
import defaultLocale from "./data/defaultLocale.json";
import { Locale } from "./components/interface";

export const localeData = await fetchLocale()
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.error(err);
    return defaultLocale;
  });

export const HandleLocaleContext = createContext((x: string) => null);
export const LocaleContext = createContext(processedLocale);
function App() {
  // const [, updateState] = useState({});
  // const forceUpdate = useCallback(() => updateState({}), []);

  const [locale, setLocale] = useState(localeData);
  const [number, setNumber] = useState(0);
  function handleLocale(text: string): null {
    if (text === "EN") {
      setLocale(localeData);
      setNumber(1);
    } else {
      setLocale(processedLocale);
      setNumber(0);
    }
    console.log(number);
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <HandleLocaleContext.Provider value={handleLocale}>
          <LocaleContext.Provider value={locale}>
            <Routes>
              <Route path="/" element={<Front />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/works" element={<Works />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/info" element={<Info />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </LocaleContext.Provider>
        </HandleLocaleContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
