import React, { useEffect, useState } from "react";
import { CrossIcon, NavIcon } from "../assets/icons";
import { Button, useMediaQuery } from "@mui/material";
import "./style.css";
import logo1 from "./../assets/shop-n-earn-1.png";
import logo3 from "./../assets/shop-n-earn-3.png";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { setAuthToken, setIsAuthenticated } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const greaterThan768 = useMediaQuery("(min-width:768px)");
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.authenticated.isAuthenticated
      );
      const navigate = useNavigate();
    
      useEffect(() => {
        if (!isAuthenticated) {
          navigate("/login");
        }
      }, [isAuthenticated]);
    return (
        <>
            <div>
                
            </div>
        </>
    );
};

export default Header;
