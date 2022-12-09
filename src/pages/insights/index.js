import { Button } from "@mui/material";
import { GrowthIcon, MultiUserIcon, RupeeIcon, ShopIcon, StockUpIcon, StockDownIcon, UserIcon } from "../../assets/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStore, getRecentTransactions } from "../../apis/storeApis";
import Header from "../../headers";
import { setToast } from "../../redux/slices/toastSlice";
import "./style.css";
import Sidebar from "../../sidebar";

const Insights = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="w-10/12 scrollable">
          <Header />
          <div>
            <div className="px-12">
              <h3 className="font-bold text-xl mb-4">Insights</h3>
              <div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="border-b-border1 pb-4 border-b" style={{marginBottom: "20px"}}>
                    {/* <h3 className="font-semibold">Trending Products in Navrangpura 📍</h3> */}
                    <div className="mt-4 flex justify-around items-center">

                      <div className="flex flex-col gap-3 items-center justify-center bg-background2 p-4 rounded-xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dumplings_of_Gilgit.jpg/220px-Dumplings_of_Gilgit.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Veg Momos</h3>
                      </div>

                      <div className="flex flex-col gap-3 items-center justify-center bg-background2 p-4 rounded-xl">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Momo101.jpg/200px-Momo101.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Chilli Momos</h3>
                      </div>
                      <div className="flex flex-col gap-3 items-center justify-center rounded-xl p-4"
                        style={{backgroundColor: "rgb(254 226 226)"}}
                      >
                        <img src="https://smedia2.intoday.in/indiatoday/images/stories/2017July/momo3-mos_070617053948.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Chocolate Momos</h3>
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="flex items-center bg-background2 p-4 rounded-xl"
                      style={{marginBottom: "10px"}}
                    >
                      <div>
                        <StockUpIcon />
                      </div>
                      <p style={{marginLeft: "5px"}}>Stock up these trending products to increase Momoman Navrangpura's revenue</p>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="flex items-center bg-background2 p-4 rounded-xl"
                      style={{marginBottom: "10px"}}
                    >
                      <div>
                        <StockUpIcon />
                      </div>
                      <p style={{marginLeft: "5px"}}> Consider increase stock of momo flour at the Navrangpura store by 5kgs in the next week </p>
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="flex items-center p-4 rounded-xl"
                      style={{marginBottom: "10px", backgroundColor: "rgb(254 226 226)"}}
                    >
                      <div
                        style={{transform: "rotate(180deg)"}}
                      >
                        <StockDownIcon />
                      </div>
                      <p style={{marginLeft: "5px"}}> There has been a 23% decrease in the sale of Chocolate momos. Consider decreasing the stock of chocolate by 1kg from next week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
