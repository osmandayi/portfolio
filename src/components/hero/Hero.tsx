"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/language";

const Hero = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [animation, setAnimation] = useState("animate-fade-in");
  const { language } = useLanguage();
  const { quote1, quote2, quote3, quote4, quote5, hire, cv } = language;

  const quotes = [
    {
      text: quote1,
      author: "Robert Collier",
    },
    {
      text: quote2,
      author: "Nelson Mandela",
    },
    {
      text: quote3,
      author: "Anonim",
    },
    {
      text: quote4,
      author: "Anonim",
    },
    {
      text: quote5,
      author: "Anonim",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate-fade-out");
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setAnimation("animate-fade-in");
      }, 1000);
    }, 10000); // 10 saniye

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* col-span-8 */}

        <motion.div
          className="col-span-8 place-self-center text-left justify-self-start"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-7xl font-semibold font-poppins">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mycolor-200 to-mycolor-100">
              Hello I&apos;m
            </span>
            <div className="h-2"></div>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Osman",
                1000,
                "Frontend Developer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p
            className={`text-mycolor-100 text-base mb-6 lg:text-lg ${animation} transition-all duration-1000`}
          >
            &quot;{quotes[currentQuoteIndex].text}&quot; –{" "}
            {quotes[currentQuoteIndex].author}
          </p>
          <div className="">
            <Link
              href={"/#contact"}
              className="mr-0 md:mr-4 px-6 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-br from-mycolor-200 to-mycolor-100 text-white text-center"
            >
              {hire}
            </Link>
            <a
              href={"/osman_dayi_fe.pdf"}
              download
              className="px-1 inline-block py-1 w-full md:w-fit 
              rounded-full bg-gradient-to-br from-mycolor-200 
              to-mycolor-100 text-mycolor-700 text-center mt-3"
            >
              <span
                className="block bg-mycolor-300 rounded-full 
              px-5 py-2"
              >
                {cv}
              </span>
            </a>
          </div>
        </motion.div>

        {/* col-span-4 */}

        <motion.div
          className="col-span-4 place-self-center mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative rounded-full 
            bg-gradient-to-bl from-mycolor-100 
            to-mycolor-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
          >
            <Image
              // src={"/png/azetech_2.jpeg"}
              src={"/1.png"}
              alt=""
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[220px] h-[220px] lg:w-[370px] lg:h-[370px]"
              width={370}
              height={370}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
