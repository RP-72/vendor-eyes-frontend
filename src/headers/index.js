import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../redux/slices/authSlice";
import "./style.css";



const Header = () => {
  const [today, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setAuthToken(null));  
    window.location.href = "/";
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
    return (
        <>
            <div>
                <div className="py-6 px-4 flex gap-4 items-center justify-end">
                    <div>
                        <p className="text-2xl font-bold">{today.getHours()}:{today.getMinutes()}:{today.getSeconds()}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" className="w-8 h-8 rounded-full" alt="" />
                        <p className="text-text3 text-lg">
                            
                        </p>
                        <button onClick={logout}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
