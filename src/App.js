import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./contents/Header";
import Items from "./contents/Items";
// import Item from "./contents/Item";
import ErrorPage from "./contents/ErrorPage";
import Footer from "./contents/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Items />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
