import { Button } from "@mui/material";
import { GrowthIcon, MultiUserIcon, RupeeIcon, ShopIcon, UserIcon } from "../../assets/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStore, getRecentTransactions } from "../../apis/storeApis";
import Header from "../../headers";
import { setToast } from "../../redux/slices/toastSlice";
import "./style.css";
import Sidebar from "../../sidebar";

const Upload = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="w-10/12 scrollable">
          <Header />
          <div>
            <p>Upload</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
