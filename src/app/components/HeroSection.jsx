"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          {/* this shows text size, font, and margin*/}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">
              Hello, I'm{" "}
            </span>
            John
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UX/UI",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          {/* text-lg = larger text && lg:text-xl does nothing*/}
          <p className="text-[#75a35f] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            culpa quidem adipisci aperiam porro distinctio perferendis aliquid
            esse minima eius, in ut natus magnam id ipsam explicabo. Iusto, est
            voluptatibus?
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-blue-650 to-purple-950 text-black">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-blue-650 to-purple-950 text-white mt-3">
              <span className="block bg-[#121212] rounded-full px-6 py-3  hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/*
         "lg:w-[300px] lg:h-[300px]" - means for larger screens set this ratio
        "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" - Setting the absolute position
                      1/2 of -x         1/2 of -y
        */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/me.JPG"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
