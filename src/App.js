import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import AboutUs from "./pages/aboutUs/AboutUs";
import WebDesign from "./pages/services/webDesign/WebDesign";
import AppDevelopment from "./pages/services/appDevelopment/AppDevelopment";
import DigitalMarketing from "./pages/services/digitalMarketing/DigitalMarketing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
