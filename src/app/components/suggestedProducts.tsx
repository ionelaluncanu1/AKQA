"use client";
import Image from "next/image";
import image1 from "../assets/images/2by21.png";
import image2 from "../assets/images/2by22.jpeg";

export default function SuggestedProducts() {
  return (
    <div>
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:max-w-none">
          <h2 className="text-3xl">Women&apos;s Shoes</h2>

          <div className="mt-8 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:space-y-0">
            <div className="group relative">
              <div className="relative w-full overflow-hidden rounded-lg bg-white aspect-square group-hover:opacity-75">
                <Image
                  alt=""
                  src={image1}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-6 text-2xl">
                <span className="absolute inset-0"></span>
                <span className="flex">
                  Slip into exceptional
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
                </span>
              </div>
              <p className="text-base text-gray-200">
                Iconic summer style from day to night. Feel-good summer energy
                at home and on holiday.
              </p>
            </div>
            <div className="group relative">
              <div className="relative w-full overflow-hidden rounded-lg bg-white aspect-square group-hover:opacity-75">
                <Image
                  alt=""
                  src={image2}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-6 text-2xl">
                <span className="absolute inset-0"></span>
                <span className="flex">
                  It&apos;s how you wear them
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
                </span>
              </div>
              <p className="text-base text-gray-200">
                Take modern life in your stride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
