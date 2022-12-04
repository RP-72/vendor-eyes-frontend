import { Button } from "@mui/material";
import { GrowthIcon, MonthlyRevenueIcon, MultiUserIcon, RupeeIcon, SearchIcon, ShopIcon, StockUpIcon, UserIcon } from "../../assets/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStore, getRecentTransactions } from "../../apis/storeApis";
import Header from "../../headers";
import { setToast } from "../../redux/slices/toastSlice";
import "./style.css";
import Sidebar from "../../sidebar";

const Analysis = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="w-10/12 scrollable">
          <Header />
          <div>
            <div className="mx-12">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-text1 text-xl mb-4">Product Analysis</h1>
                <div className="bg-white rounded-lg flex items-center py-1 px-2">
                  <input type="text" className="outline-none w-64 text-sm" placeholder="Search Products" />
                  <SearchIcon />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between">
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Monthly Revenue</p>
                      <h2 className="text-2xl font-bold mt-1">$52.6k</h2>
                    </div>
                    <div>
                      <StockUpIcon />
                    </div>
                  </div>

                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between">
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Monthly Revenue</p>
                      <h2 className="text-2xl font-bold mt-1">$52.6k</h2>
                    </div>
                    <div>
                      <StockUpIcon />
                    </div>
                  </div>

                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between">
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Monthly Revenue</p>
                      <h2 className="text-2xl font-bold mt-1">$52.6k</h2>
                    </div>
                    <div>
                      <StockUpIcon />
                    </div>
                  </div>
                </div>

                <div>

                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <h1 className="font-semibold text-text1 text-lg mb-4">Store Analysis</h1>
                <div className="bg-white rounded-lg flex items-center py-1 px-2">
                  <input type="text" className="outline-none w-64 text-sm" placeholder="Search Products" />
                  <SearchIcon />
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <div>
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
              </div>


              <div className="mt-4 grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between">
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Monthly Revenue</p>
                      <h2 className="text-2xl font-bold mt-1">$52.6k</h2>
                    </div>
                    <div>
                      <StockUpIcon />
                    </div>
                  </div>

                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between">
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div>
                      <p className="text-text2 text-xs">Monthly Revenue</p>
                      <h2 className="text-2xl font-bold mt-1">$52.6k</h2>
                    </div>
                    <div>
                      <StockUpIcon />
                    </div>
                  </div>

                </div>

                <div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
