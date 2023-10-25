import React from "react";
import "./styles/global.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import SearchPage from "./pages/searchPage";
import AddRecord from "./pages/addRecord";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-left" />

      <Router>
        <div className="App">
          <section className="App__list">
            <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/search" element={<SearchPage />} />

              <Route path="/record" element={<AddRecord />} />
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
};

export default App;
