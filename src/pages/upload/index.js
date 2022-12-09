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
import urls from "../../constants"

const UploadSection = ({title, uploadUrl, type}) => {

  const handleDownloadFile = () => {
    // open the csv file present in the public folder
    // const file = new File(, '', { type: 'text/csv' });
    // const fileUrl = file.toURL();

    // const file = new File(, '', { type: 'text/csv' });
    // const fileUrl = file.toURL();
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', type === "sale" ? 'https://drive.google.com/file/d/1HMvt-uJeSUOnHkAxVBmmNnuhQ1o1fhNE/view?usp=sharing' : '');
    downloadLink.setAttribute('download', `${type}.csv`);
    downloadLink.click();
  }

  return(
    <div
      style={{display: "flex", flexDirection: "column", justifyContent: "center"}}
    >
    <div
      style={{display:"flex", alignItems: "center", marginBottom: "10px"}}
    >
      <div
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {title}
      </div>
        <button
          style={{background: "white", border: "1px solid grey", marginLeft: "2rem", padding: "0.5rem", borderRadius: "0.5rem", cursor: "pointer"}}
          onClick={() => handleDownloadFile()}
        >
          Download template
        </button>
    </div>
      <Dropzone uploadUrl={uploadUrl} />
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
            <UploadSection title="Add Sales data" uploadUrl={urls.uploadSales} type="sale" />
            <UploadSection title="Update Inventory" uploadUrl={urls.uploadInventory} type="inventory" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
