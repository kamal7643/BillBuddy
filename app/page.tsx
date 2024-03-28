"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const tasks = ["create backend in go", "design frontend", "redis server"];

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to BillBuddy!</h1>
        <p className="text-gray-700">
          This is a simple example of how to use MongoDB with Next.js.
        </p>
      </div>
      {/* TODO tasks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black mt-[100px]">
        {
          tasks.map((task) => (
            <div key={task} className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <p>{task}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
