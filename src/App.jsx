import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ContactPage from "./pages/contactpage/ContactPage";
import Header from "./components/Header/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
