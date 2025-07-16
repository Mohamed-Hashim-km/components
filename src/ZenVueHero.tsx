"use client";

import Image from "next/image";

export default function ZenVueHero() {
  return (
  <section className="relative w-full min-h-screen bg-gradient-to-b from-[#1A0000] via-[#a82137] to-[#1A0000] text-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row  justify-between">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center  lg:text-left">
          <p className="text-sm text-white/70">Control at Your Fingertips</p>
          <h1 className="text-[260px] leading-none  mt-10 font-bold text-white">Zen</h1>
          <p className="text-white/80 text-base max-w-md mx-auto lg:mx-0">
            The Pioneer ZenVue Dash Camera App gives you instant access to your recordings,
            making it easy to view, download, and share footage on the go. With its intuitive,
            user-friendly interface, the experience is seamless from start to finish.
          </p>
          
        </div>

        {/* Right Title */}
        <div className="hidden lg:block mt-20 flex-1 text-right">
          <h1 className="text-[260px] leading-none font-bold text-white">Vue</h1>
        </div>
        
      </div>

      {/* Center Phone Image - Absolute Positioned */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] z-20">
        <Image
          src="/mobilebg.png" // Replace with correct image path
          alt="Mobile Device"
          width={3000}
          height={3000}
          className="drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
