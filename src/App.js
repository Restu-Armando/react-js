import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./component/Header";
import Footer from "./component/Footer";

// import Pages
import HomePage from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
