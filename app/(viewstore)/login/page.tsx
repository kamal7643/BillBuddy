"use client";
import { useState } from "react";
export default function Login(){
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        // e.preventDefault();
        // console.log(number);
        // console.log(otp);
        // const response = await fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         number: number,
        //         otp: otp
        //     })
        // });
        // const data = await response.json();
        // console.log(data);
        // if(data.success)
        {
            window.location.href = "/profile";
        }
    }

    // login component for application
    return (
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center text-black select-none cursor-default">
            <div className="border rounded-t-xl w-[500px] h-[400px] p-10 justify-center bg-white shadow-2xl flex flex-col space-y-4">
                <h3>
                    Phone Number
                </h3>
                <input type="text" placeholder="Enter Phone Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
                <h3>
                    OTP
                </h3>
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} />
                <div></div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}