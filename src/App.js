import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./component/Header";
import Footer from "./component/Footer";

// import Pages
import HomePage from "./pages/Home";
import AboutMePage from "./pages/About";
import ServicePage from "./pages/Service";
import PortfolioPage from "./pages/Portfolio";
import MyResumePage from "./pages/MyResume";
import AppointmentPage from "./pages/Appointment";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/my-resume" element={<MyResumePage />} />
        <Route path="/booking" element={<AppointmentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
