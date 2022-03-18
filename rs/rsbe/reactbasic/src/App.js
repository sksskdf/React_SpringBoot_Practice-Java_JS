import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import SignUp from "./SignUp";

const App = () => {
  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
      </div>
  );
};

export default App;
