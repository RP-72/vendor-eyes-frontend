import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AnalysisIconBlue, AnalysisIconGray, DashboardIconBlue, DashboardIconGray, InsightsIconBlue, InsightsIconGray, Logo, UploadIconBlue, UploadIconGray } from '../assets/icons'

const Sidebar = () => {
    const [selected, setSelected] = useState(window.location.href.split('/')[3]);
    const navigate = useNavigate()
    return (
        <>
            <div className='w-2/12 bg-white h-screen'>
                <div className='p-4 '>

                    <div className='flex items-center justify-center'>
                        <div className='mt-3 flex gap-2 items-center cursor-pointer' onClick={() => navigate("/dashboard")}>
                            <Logo />
                            <h1 className='font-bold'>Business Analytica</h1>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col gap-4'>
                        <div
                            className={"flex items-center cursor-pointer gap-4 py-3 pl-8 rounded-lg font-semibold " + (selected === "dashboard" ? "bg-background1" : "bg-white")}
                            onClick={() => {
                                setSelected("dashboard")
                                navigate("/dashboard")
                            }}
                        >
                            {selected === "dashboard" ? <DashboardIconBlue /> : <DashboardIconGray />}
                            <p className={' ' + (selected === "dashboard" ? "text-text1" : "text-text2")}>Dashboard</p>
                        </div>

                        <div
                            className={"flex items-center cursor-pointer gap-4 py-3 pl-8 rounded-lg font-semibold " + (selected === "analysis" ? "bg-background1" : "bg-white")}
                            onClick={() => {
                                setSelected("analysis")
                                navigate("/analysis")
                            }}
                        >
                            {selected === "analysis" ? <AnalysisIconBlue /> : <AnalysisIconGray />}
                            <p className={' ' + (selected === "analysis" ? "text-text1" : "text-text2")}>Analysis</p>
                        </div>

                        <div
                            className={"flex items-center cursor-pointer gap-4 py-3 pl-8 rounded-lg font-semibold " + (selected === "insights" ? "bg-background1" : "bg-white")}
                            onClick={() => {
                                setSelected("insights")
                                navigate("/insights")
                            }}
                        >
                            {selected === "insights" ? <InsightsIconBlue /> : <InsightsIconGray />}
                            <p className={' ' + (selected === "insights" ? "text-text1" : "text-text2")}>Insights</p>
                        </div>

                        <div
                            className={"flex items-center cursor-pointer gap-4 py-3 pl-8 rounded-lg font-semibold " + (selected === "upload" ? "bg-background1" : "bg-white")}
                            onClick={() => {
                                setSelected("upload")
                                navigate("/upload")
                            }}
                        >
                            {selected === "upload" ? <UploadIconBlue /> : <UploadIconGray />}
                            <p className={' ' + (selected === "upload" ? "text-text1" : "text-text2")}>Upload</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar