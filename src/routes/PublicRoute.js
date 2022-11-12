import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import { PrivateRoute } from "./PrivateRoute";
export const PublicRoute = () => {
    
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route exact path="/" element={<PrivateRoute />}>
          {/* <Route exact path="/payment" element={<Payment />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
