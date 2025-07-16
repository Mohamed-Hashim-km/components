"use client";
import { Compare } from "@/Compare";
import { useState } from "react";
 const tabs = [
    {
      title: "Drive late?",
      image1: "/images/GLOW_BEFORE.webp",
      image2: "/images/GLOW_AFTER.webp",
    },
    {
      title: "On the road daily?",
      image1: "/images/NOISE_BEFORE.webp",
      image2: "/images/NOISE_AFTER.webp",
    },
    {
      title: "Car left unattended?",
      image1: "/images/GLOW_BEFORE.webp",
      image2: "/images/GLOW_AFTER.webp",
    },
  ];
export default function CameraComparison() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(tabs[0]);
  console.log(data);
  

 

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">See What Most Cameras Miss</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real footage in real conditions. The Viofo ZS300C captures true colors, clarity and detail in total darkness.
          </p>
        </div>

        {/* Tabs */}

        {/* Content */}

        {/* Compare Component */}
        <div className="mb-8">
          <Compare
            firstImage={data.image1}
            secondImage={data.image2}
         
            className="h-[400px] w-full md:h-[500px] rounded-lg"
            slideMode="hover"
            initialSliderPercentage={50}
          />
        </div>

        <div className="flex justify-center space-x-12 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {setActiveTab(index),setData(tab)}}
              className={`font-semibold transition-all duration-300 ${
                activeTab === index ? "border-b-2 border-white pb-1" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
