import Image from "next/image";
import React, { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "/flags/en.png" },
  { code: "tr", name: "Türkçe", flag: "/flags/tr.png" },
  // Diğer diller
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (lang: any) => {
    setSelectedLanguage(lang);
    // Dil değişimi işlemleri burada yapılabilir (örn. locale değişimi)
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          <Image
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            width={20}
            height={20}
            className="mr-2"
          />
          {selectedLanguage.name}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={20}
                className="mr-2"
              />
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
