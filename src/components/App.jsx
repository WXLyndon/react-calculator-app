import React, { Component } from "react";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./contents/Home";
import Calculator from "./contents/Calculator";
import Login from "./contents/Login";
import Register from "./contents/Register";
import NotFound from "./contents/NotFound";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
