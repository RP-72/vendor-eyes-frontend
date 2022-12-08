import { Button } from "@mui/material";
import { GrowthIcon, MultiUserIcon, RupeeIcon, ShopIcon, StockUpIcon, UserIcon } from "../../assets/icons";
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
                  <div className="border-b-border1 pb-4 border-b">
                    <h3 className="font-semibold">Trending Products in your area 📍</h3>
                    <div className="mt-4 flex justify-around items-center">

                      <div className="flex flex-col gap-3 items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Veg Momos</h3>
                      </div>

                      <div className="flex flex-col gap-3 items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Veg Momos</h3>
                      </div>

                      <div className="flex flex-col gap-3 items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Veg Momos</h3>
                      </div>

                      <div className="flex flex-col gap-3 items-center justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" className="w-36 h-36 rounded-full" alt="" />
                        <h3 className="font-semibold text-base">Veg Momos</h3>
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <div className="flex items-center bg-background2 p-4 rounded-xl">
                      <div>
                        <StockUpIcon />
                      </div>
                      <p>Stock up these trending products to increase your profits</p>
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
