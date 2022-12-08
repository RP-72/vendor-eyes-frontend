import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import { PrivateRoute } from "./PrivateRoute";
import Analysis from "../pages/analysis";
import Insights from "../pages/insights";
import Upload from "../pages/upload";
import Register from "../pages/register";
export const PublicRoute = () => {
    
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/analysis" element={<Analysis />} />
        <Route exact path="/insights" element={<Insights />} />
        <Route exact path="/upload" element={<Upload />} />
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route exact path="/" element={<PrivateRoute />}>
          {/* <Route exact path="/payment" element={<Payment />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
