"use client";
import Carousel from "@/app/components/carousel";
import LeatherGoods from "@/app/components/leatherGoods";
import MostLovedSlider from "@/app/components/mostLoved";
import Navbar from "@/app/components/navbar";
import NewArrivals from "@/app/components/newArrivals";
import WomenShoes from "@/app/components/womenShoes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";

export default function Women() {
  return (
    <main className="container mx-auto px-4">
      {/* Header */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* 2 by 2 Suggested Products */}
      <WomenShoes />

      {/* Most loved product */}
      <MostLovedSlider />

      {/* Leather Goods */}
      <LeatherGoods />

      {/* New Arrivals */}
      <NewArrivals />

      {/* Footer */}
      {/* Todo: add Footer component when it's done */}
    </main>
  );
}
