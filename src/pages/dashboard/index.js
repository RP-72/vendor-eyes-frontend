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

const graphData = {
  "x": ['17-10-2022', '18-10-2022', '19-10-2022', '20-10-2022', '21-10-2022', '22-10-2022', '23-10-2022', '24-10-2022', '25-10-2022', '26-10-2022', '27-10-2022', '28-10-2022', '29-10-2022', '30-10-2022', '31-10-2022', '01-11-2022', '02-11-2022', '03-11-2022', '04-11-2022', '05-11-2022', '06-11-2022', '07-11-2022', '08-11-2022', '09-11-2022', '10-11-2022', '11-11-2022', '12-11-2022', '13-11-2022', '14-11-2022', '15-11-2022', '16-11-2022', '17-11-2022', '18-11-2022', '19-11-2022', '20-11-2022', '21-11-2022', '22-11-2022', '23-11-2022', '24-11-2022', '25-11-2022', '26-11-2022', '27-11-2022', '28-11-2022', '29-11-2022', '30-11-2022', '01-12-2022', '02-12-2022', '03-12-2022', '04-12-2022', '05-12-2022', '06-12-2022', '07-12-2022', '08-12-2022', '09-12-2022', '10-12-2022']
,  "y": [80, 72, 76, 77, 84, 83, 82, 77, 83, 86, 84, 81, 82, 93, 87, 85, 91, 96, 91, 92, 97, 100, 96, 97, 99, 100, 99, 99, 104, 103, 100, 111, 106, 107, 109, 105, 108, 116, 109, 114, 110, 115, 117, 122, 116, 122, 120, 117, 125, 121, 121, 126, 129, 128, 129]
}

const Dashboard = () => {
  const token = useSelector(state => state.authenticated.token)
  const offset = useSelector(state => state.data.offset)
  const [dashboardData, setDashboardData] = useState({dailySales : graphData})
  useEffect(() => {
    // axios.get(urls.dashboard, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "token": token
    //   }
    // })
    // .then(res => {
    //   setDashboardData(res.data)
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    let total = 0, sum = 0;
    for(let i = 22; i < dashboardData.dailySales.y.length; i++) {
      sum += dashboardData.dailySales.y[i];
    }
    for(let i = 0; i < dashboardData.dailySales.y.length; i++) {
      total += dashboardData.dailySales.y[i];
    }
    console.log(total, sum);
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
                    <h2 className="text-2xl font-bold mt-1">₹{ 241010 + offset || dashboardData.monthlyRevenue}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <TotalRevenueIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Total Revenue</p>
                    <h2 className="text-2xl font-bold mt-1">₹{372540 + offset || dashboardData.totalProducts}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <NumberOfStoresIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Number of Stores</p>
                    <h2 className="text-2xl font-bold mt-1">{1 || dashboardData.totalStores}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-6 bg-white px-4 py-8 rounded-xl shadow-md justify-center">
                  <div>
                    <NumberOfProductsIcon />
                  </div>
                  <div>
                    <p className="text-text2 text-xs">Number of Products</p>
                    <h2 className="text-2xl font-bold mt-1">{15 || dashboardData.totalRevenue}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "50px"
            }}
          >
            <div className="px-12" style={{marginBottom: "30px"}}>
              <h3 className="font-bold text-xl">Sales per day for the last {dashboardData.dailySales?.x.length} days</h3>
            </div>
            <Graph 
            data={
              dashboardData.dailySales?.x?.map((val, ind) => {
                return {
                  name: dashboardData.dailySales?.x[ind],
                  sale: dashboardData.dailySales?.y[ind]
                }
              })
            } />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
