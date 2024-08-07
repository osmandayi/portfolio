"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { useLanguage } from "@/context/language";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { language } = useLanguage();
  const {
    skills,
    aboutMe,
    certifications,
    education,
    university,
    noneCertificate,
  } = language;
  const handleChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: skills,
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>NextJS</li>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: education,
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Zonguldak Bülent Ecevit {university}</li>
        </ul>
      ),
    },
    {
      title: certifications,
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <div className="h-5">{noneCertificate}</div>
          {/* <li>Google Professional Cloud Developer</li>
          <li>Cisco</li> */}
        </ul>
      ),
    },
  ];

  return (
    <div className="text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4">
        <Image alt="" src={"/2.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">{aboutMe}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              {skills}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              {education}
            </TabButton>
            <TabButton
              selectTab={() => handleChange("certifications")}
              active={tab === "certifications"}
            >
              {certifications}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
