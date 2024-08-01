"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FiActivity, FiAward, FiClock, FiUsers } from "react-icons/fi";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const archives = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
    icon: FiActivity,
  },
  {
    metric: "Users",
    value: "100000",
    prefix: "~",
    icon: FiUsers,
  },
  {
    metric: "Awards",
    value: "7",
    icon: FiAward,
  },
  {
    metric: "Years",
    value: "5",
    icon: FiClock,
  },
];

const Archive = () => {
  return (
    <div className="py-8 px-4 mt-0 md:mt-5 lg:mt-12 xl:gap-16">
      <div className="py-6 px-16 flex flex-col md:flex-row items-center justify-between">
        {archives.map((archive, index) => {
          const IconComponent = archive.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 md:my-0"
            >
              <div className="flex items-center justify-center">
                <IconComponent className="text-4xl text-white mr-2" />
                <h2 className="text-white text-4xl font-semibold flex flex-row">
                  {archive.prefix}
                </h2>
                <AnimatedNumbers
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={parseInt(archive.value)}
                  className="text-white font-semibold"
                  fontStyle={{
                    fontSize: 40,
                    //   color: "red",
                  }}
                />
                <h2 className="text-white text-4xl font-semibold flex flex-row ml-2">
                  {archive.postfix}
                </h2>
              </div>
              <p className="text-mycolor-700 text-base">{archive.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;
