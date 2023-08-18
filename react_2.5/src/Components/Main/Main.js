import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../Pages/Home";
import Stuff from "../Pages/Stuff";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Performance Assessment 2.5</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/stuff" element={<Stuff />}/>
          </Routes>         
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;