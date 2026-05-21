"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FiActivity, FiAward, FiClock, FiUsers } from "react-icons/fi";
import { useLanguage } from "@/context/language";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

interface ExperienceData {
  value: number;
  postfix: string;
}

function getExperienceYears(startDateStr: string): ExperienceData {
  const parts = startDateStr.split(/[.-]/);
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  const startDate = new Date(year, month, day);
  const today = new Date();

  let monthsDiff =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    monthsDiff--;
  }

  if (monthsDiff < 0) return { value: 0, postfix: "" };

  const years = Math.floor(monthsDiff / 12);
  const remainingMonths = monthsDiff % 12;

  if (remainingMonths === 0) {
    return { value: years, postfix: "" };
  } else if (remainingMonths >= 1 && remainingMonths <= 9) {
    return { value: years, postfix: "+" };
  } else {
    return { value: years + 1, postfix: "" };
  }
}

const Archive = () => {
  const { language } = useLanguage();
  const { projects, users, awards, years } = language;

  const archives = [
    {
      metric: projects,
      value: "10",
      postfix: "+",
      icon: FiActivity,
    },
    {
      metric: users,
      value: "100000",
      prefix: "~",
      icon: FiUsers,
    },
    {
      metric: awards,
      value: "7",
      icon: FiAward,
    },
    {
      metric: years,
      ...getExperienceYears("02-01-2023"),
      icon: FiClock,
    },
  ];

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
                  key={`${language.value}-${index}`}
                  includeComma
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={Number(archive.value)}
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
