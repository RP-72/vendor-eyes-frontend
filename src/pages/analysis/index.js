import { Button } from "@mui/material";
import { GrowthIcon, MonthlyRevenueIcon, MultiUserIcon, RupeeIcon, SearchIcon, ShopIcon, StockUpIcon, StockDownIcon, UserIcon } from "../../assets/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStore, getRecentTransactions } from "../../apis/storeApis";
import Header from "../../headers";
import { setToast } from "../../redux/slices/toastSlice";
import "./style.css";
import Sidebar from "../../sidebar";

const Analysis = () => {
  const offset = useSelector((state) => state.data.offset);
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
                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between"
                    style={{marginBottom: "20px"}}
                  >
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div
                      className="flex flex-col justify-center"
                    >
                      <p>Monthly Revenue for Veg Momos</p>
                      <h2 className="text-2xl font-bold mt-1">₹{52000 + offset}</h2>
                    </div>
                    <div>
                      <StockUpIcon />
                    </div>
                  </div>

                  <div className="flex items-center bg-white px-4 py-8 rounded-xl shadow-md justify-between"
                    style={{marginBottom: "20px"}}
                  >
                    <div>
                      <MonthlyRevenueIcon />
                    </div>
                    <div>
                      <p className="text">Monthly Revenue for Chilli Momos</p>
                      <h2 className="text-2xl font-bold mt-1">₹45000</h2>
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
                      <p className="text">Monthly Revenue for Chocolate Momos</p>
                      <h2 className="text-2xl font-bold mt-1">₹9600</h2>
                    </div>
                    <div
                      style={{transform: "rotate(180deg)"}}
                    >
                      <StockDownIcon />
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

              <div className="bg-white shadow-md rounded-lg p-6 mb-5">
                <div>
                  <h3 className="font-semibold">Trending Products in Navrangpura 📍</h3>
                  <div className="mt-4 flex justify-around items-center">

                    <div className="flex flex-col gap-3 items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dumplings_of_Gilgit.jpg/220px-Dumplings_of_Gilgit.jpg" className="w-36 h-36 rounded-full" alt="" />
                      <h3 className="font-semibold text-base">Veg Momos</h3>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Plateful_of_Momo_in_Nepal.jpg/220px-Plateful_of_Momo_in_Nepal.jpg" className="w-36 h-36 rounded-full" alt="" />
                      <h3 className="font-semibold text-base">Cheese Momos</h3>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Momo101.jpg/200px-Momo101.jpg" className="w-36 h-36 rounded-full" alt="" />
                      <h3 className="font-semibold text-base">Chilli Momos</h3>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kothey_momo.JPG/200px-Kothey_momo.JPG" className="w-36 h-36 rounded-full" alt="" />
                      <h3 className="font-semibold text-base">Pan fried Momos</h3>
                    </div>

                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 mb-5">
                <div>
                  <h3 className="font-semibold">Products that have not been performing well in Navrangpura 📍</h3>
                  <div className="mt-4 flex justify-around items-center">

                    <div className="flex flex-col gap-3 items-center justify-center">
                      <img src="https://smedia2.intoday.in/indiatoday/images/stories/2017July/momo3-mos_070617053948.jpg" className="w-36 h-36 rounded-full" alt="" />
                      <h3 className="font-semibold text-base">Chocolate Momos</h3>
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

export default Analysis;
