"use client";
import MostLovedSlider from "@/app/components/mostLoved";
import Navbar from "@/app/components/navbar";
import Slider from "@/app/components/slider";
import SuggestedProducts from "@/app/components/suggestedProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";

export default function Women() {
  return (
    <main className="container mx-auto px-4">
      {/* Header */}
      <Navbar />

      {/* Carousel */}
      <Slider />

      {/* 2 by 2 Suggested Products */}
      <SuggestedProducts />

      {/* Most loved product */}
      <MostLovedSlider />
    </main>
  );
}
