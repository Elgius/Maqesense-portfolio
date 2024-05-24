"use client";
import React from "react";
import { ParallaxScroll } from "@/components/animations/parallel-scroll";

const image = [];

const page = () => {
  return (
    <>
      {/* <main className="flex items-center justify-center min-h-screen overflow-hidden"> */}
      <div>
        <ParallaxScroll images={pics} />
      </div>
      {/* </main> */}
    </>
  );
};

const pics = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpeg",
];

export default page;

// added comment to test push
