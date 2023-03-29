import "./App.css";
import Navbar from "./components/Navbar.jsx";
import React, { Component } from "react";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 15;
  country = "in";
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#0D6EFD'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country={this.country} pageSize={this.pageSize} category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country={this.country} pageSize={this.pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country={this.country} pageSize={this.pageSize} category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country={this.country} pageSize={this.pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country={this.country} pageSize={this.pageSize} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country={this.country} pageSize={this.pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country={this.country} pageSize={this.pageSize} category="technology" />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
