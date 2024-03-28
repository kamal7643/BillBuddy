"use client";
import { useState, useEffect } from "react";
import { FaUser, FaHome } from 'react-icons/fa';



function NavBar() {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(500);
    useEffect(() => {
        setWidth(window.innerWidth);
    })
    return (
        <div className="bg-white w-full cursor-default select-none text-black rounded-b-lg">
            <div className="w-full h-full flex justify-between items-center">
                <div className="p-4">
                    {/* logo */}
                    {/* name */}
                    <div className="text-lg p-2 flex items-center " onClick={() => { location.href = "/" }}>
                        <FaHome/> &nbsp; &nbsp;BillBuddy
                    </div>
                </div>
                {
                    width <= 799 && <div className="p-4" onClick={() => { setOpen(!open); }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </div>
                }
                {
                    width > 799 && <ul className={"p-4 text-gray-800 flex space-x-4 "}>
                        <span onClick={() => { location.href = "/team" }}>Team</span>
                        <span onClick={() => { location.href = "/contact" }}>Contact</span>
                        <span onClick={() => { location.href = "/login" }}>Login</span>
                        <span className="mt-1 pl-2 pr-2" onClick={() => { location.href = "/profile" }}>
                            <FaUser />
                        </span>
                    </ul>
                }

            </div>
            {
                width <= 799 && open && <ul className={"w-full p-4 text-gray-800 flex space-x-4 flex-col text-left"}>
                    <span onClick={() => { location.href = "/team" }}>Team</span>
                    <span onClick={() => { location.href = "/contact" }}>Contact</span>
                    <span onClick={() => { location.href = "/login" }}>Login</span>
                    <span className="mt-1 pl-2 pr-2" onClick={() => { location.href = "/profile" }}>
                        <FaUser />
                    </span>
                </ul>
            }
        </div>
    );
}

export default NavBar;
