import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./sidebar.scss";
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to="/" className="sidebar-link">Dashboard</Link> 
            <Link to="/analytics" className="sidebar-link">Analytics</Link>
            <Link to="/insights" className="sidebar-link">Insights</Link>
        </div>
    );
}