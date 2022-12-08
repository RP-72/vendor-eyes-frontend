import { Button } from "@mui/material";
import { GrowthIcon, MultiUserIcon, RupeeIcon, ShopIcon, UserIcon } from "../../assets/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStore, getRecentTransactions } from "../../apis/storeApis";
import Header from "../../headers";
import { setToast } from "../../redux/slices/toastSlice";
import "./style.css";
import Sidebar from "../../sidebar";
import Dropzone from "./Dropzone";


const UploadSection = ({title, type}) => {
  return(
    <div
      style={{display: "flex", flexDirection: "column", justifyContent: "center"}}
    >
      <div
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >{title}</div>
      <Dropzone type={type} />

    </div>
  )
}
const Upload = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="w-10/12 scrollable">
          <Header />
          <div style={{display: "flex", alignItems: "centre", justifyContent:"space-evenly" }}>
            <UploadSection title="Add Sales data" type="sale" />
            <UploadSection title="Update Inventory" type="inventory" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
