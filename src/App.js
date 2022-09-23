import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./contents/Header";
import Items from "./contents/Items";
import ErrorPage from "./contents/ErrorPage";
import Footer from "./contents/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
