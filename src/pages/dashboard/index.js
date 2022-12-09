import { Button } from "@mui/material";
import { GrowthIcon, MonthlyRevenueIcon, MultiUserIcon, NumberOfProductsIcon, NumberOfStoresIcon, RupeeIcon, ShopIcon, TotalRevenueIcon, UserIcon } from "../../assets/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStore, getRecentTransactions } from "../../apis/storeApis";
import Header from "../../headers";
import { setToast } from "../../redux/slices/toastSlice";
import Graph from "./Graph"
import "./style.css";
import Sidebar from "../../sidebar";
import axios from "axios";
import urls from "../../constants"

const Dashboard = () => {
  const token = useSelector(state => state.authenticated.token)
  const [dashboardData, setDashboardData] = useState({})
  useEffect(() => {
    axios.get(urls.dashboard, {
      headers: {
        "Content-Type": "application/json",
        "token": token
      }
    })
    .then(res => {
      setDashboardData(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="w-10/12 scrollable">
          <Header />
          <div>
            <div className="px-12">
              <h3 className="font-bold text-xl">Analytics</h3>
              <div className="grid grid-cols-4 gap-8 mt-8">
                
                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <MonthlyRevenueIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Monthly Revenue</p>
                    <h2 className="text-2xl font-bold mt-1">${dashboardData.monthlyRevenue}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <TotalRevenueIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Total Revenue</p>
                    <h2 className="text-2xl font-bold mt-1">${dashboardData.totalProducts}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <NumberOfStoresIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Number of Stores</p>
                    <h2 className="text-2xl font-bold mt-1">{dashboardData.totalStores}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <NumberOfProductsIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Number of Products</p>
                    <h2 className="text-2xl font-bold mt-1">{dashboardData.totalRevenue}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <Graph data={
              dashboardData.dailySales?.x?.map((val, ind) => {
                return {
                  name: dashboardData.dailySales?.x[ind],
                  sale: dashboardData.dailySales?.y[ind]
                }
              })
            } />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
