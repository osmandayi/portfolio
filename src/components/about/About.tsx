"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
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
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Zonguldak Bülent Ecevit University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <div className="h-5">None Certifications !</div>
        {/* <li>Google Professional Cloud Developer</li>
        <li>Cisco</li> */}
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4">
        <Image alt="" src={"/2.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Zonguldak Bülent Ecevit Üniversitesi&apos;nden mezun bir yazılım
            geliştiricisiyim. Next.js, TypeScript, JavaScript ve React
            konularında geniş bir bilgiye sahibim. Teknolojik yenilikleri takip
            ederek, etkili ve kullanıcı dostu çözümler üretmeye odaklanıyorum.
            Projelerde kaliteli ve verimli sonuçlar elde etmek için sürekli
            öğrenme ve gelişmeye önem veriyorum.
            {/* I am a software developer with
            a degree from Zonguldak Bülent Ecevit University. I have extensive
            knowledge in Next.js, TypeScript, JavaScript, and React. I focus on
            producing effective and user-friendly solutions by keeping up with
            technological innovations. I emphasize continuous learning and
            development to achieve high-quality and efficient results in
            projects. */}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
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
