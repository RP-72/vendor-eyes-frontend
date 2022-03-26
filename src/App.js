import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import { BrowserRouter, Routes,
  Route, } from "react-router-dom";
import React, { Component } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Analytics from "./Analytics";
import Insights from "./Insights";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{width: "100%", display: "flex", flexDirection: "column"}}>
        <Header />
        <div style={{display: "flex", marginTop: "58px"}}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="insights" element={<Insights />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
