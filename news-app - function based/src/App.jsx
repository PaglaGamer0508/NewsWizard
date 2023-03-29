import "./App.css";
import Navbar from "./components/Navbar.jsx";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 9;
  const country = "in";

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar
          color='#0D6EFD'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" country={country} pageSize={pageSize} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" country={country} pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country={country} pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" country={country} pageSize={pageSize} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" country={country} pageSize={pageSize} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country={country} pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country={country} pageSize={pageSize} category="technology" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;