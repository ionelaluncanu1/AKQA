"use client";
import ml1 from "../assets/images/ml1.png";
import ml2 from "../assets/images/ml2.png";
import ml3 from "../assets/images/ml3.png";
import ml4 from "../assets/images/ml4.png";

import Image from "next/image";

export default function MostLovedSlider() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:max-w-none">
        <h2 className="text-2xl">Most Loved</h2>

        <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg ">
              <Image
                alt="ml1"
                src={ml1}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <p className="mt-4 text-base">Exowrap</p>
            <p className="mt-1 text-base text-gray-200">Women&apos;s Sandal</p>
            <p className="mt-1 text-base text-gray-200">2 Colors</p>
            <p className="mt-4 text-base">$ 120.00</p>
          </a>
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                alt="ml2"
                src={ml2}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <p className="mt-4 text-base">Offroad</p>
            <p className="mt-1 text-base text-gray-200">Women&apos;s Sandal</p>
            <p className="mt-1 text-base text-gray-200">2 Colors</p>
            <p className="mt-4 text-base">
              <span>$ 160.00 </span>
              <span className="line-through text-gray-200">$ 200.00</span>
            </p>
          </a>
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                alt="ml3"
                src={ml3}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <p className="mt-4 text-base">Exowrap</p>
            <p className="mt-1 text-base text-gray-200">Women&apos;s Sandal</p>
            <p className="mt-1 text-base text-gray-200">2 Colors</p>
            <p className="mt-4 text-base">$ 90.00</p>
          </a>
          <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                alt="ml4"
                src={ml4}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <p className="mt-4 text-base">Trinsic</p>
            <p className="mt-1 text-base text-gray-200">Women&apos;s Sandal</p>
            <p className="mt-1 text-base text-gray-200">2 Colors</p>
            <p className="mt-4 text-base">$ 89.00</p>
          </a>
        </div>
      </div>
    </div>
  );
}
