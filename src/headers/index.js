import React, { useEffect, useState } from "react";
import { DownArrowIcon } from "../assets/icons";
import "./style.css";

const Header = () => {
    const [today, setDate] = useState(new Date());

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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" className="w-8 h-8 rounded-full" alt="" />
                        <p className="text-text3 text-lg">Gautam Reddy</p>
                        <DownArrowIcon />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
