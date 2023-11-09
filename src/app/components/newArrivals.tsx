"use client";
import importedData from "@/app/data.json";
import { useState } from "react";
import CommonSlider from "./utils/slider";

export default function NewArrivals() {
  const [data, setData] = useState(importedData);
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:max-w-none">
        <div className="flex justify-between align-baseline">
          <h2 className="text-2xl">New Arrivals</h2>
          <div>
            <button className="bg-gray-100 rounded-full py-2 px-6">
              See all
            </button>
            <button className="bg-gray-100 rounded-full py-1 px-2 align-bottom ml-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-gray-100 rounded-full py-1 px-2 align-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <CommonSlider data={data.newArrivals} />
      </div>
    </div>
  );
}
