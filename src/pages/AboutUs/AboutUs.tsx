import { Helmet } from "react-helmet";
import { useState } from "react";
import useImagePreloader from "../../Hooks/useImagePreload";
import {
  pvpData,
  committeeLeadsData,
  social,
  tech,
  design,
  council,
  prodev
} from "./member-info.tsx";
import { Section } from "./Section.tsx";

const categories: string[] = [
  "All",
  "Leadership",
  "Committee Leads",
  "Social",
  "Tech",
  "Design",
  "Council",
  "ProDev"
];

// Helper function to find committee lead by role
const getCommitteeLead = (role: string) => {
  return committeeLeadsData.find(member => member[1].includes(role));
};

const categoryMap: { [key: string]: { data: string[][], title: string }[] } = {
  All: [
    { data: pvpData, title: "President, Vice President" },
    { data: committeeLeadsData, title: "Committee Leads" },
    { data: social, title: "Social Committee" },
    { data: tech, title: "Tech Committee" },
    { data: design, title: "Design Committee" },
    { data: council, title: "Council Committee" },
    { data: prodev, title: "ProDev Committee" }
  ],
  Leadership: [
    { data: pvpData, title: "President, Vice President" }
  ],
  "Committee Leads": [
    { data: committeeLeadsData, title: "Committee Leads" }
  ],
  Social: [
    { data: [getCommitteeLead("Social"), ...social].filter(Boolean) as string[][], title: "Social Committee" }
  ],
  Tech: [
    { data: [getCommitteeLead("Tech"), ...tech].filter(Boolean) as string[][], title: "Tech Committee" }
  ],
  Design: [
    { data: [getCommitteeLead("Design"), ...design].filter(Boolean) as string[][], title: "Design Committee" }
  ],
  Council: [
    { data: [getCommitteeLead("Council"), ...council].filter(Boolean) as string[][], title: "Council Committee" }
  ],
  ProDev: [
    { data: [getCommitteeLead("ProDev"), ...prodev].filter(Boolean) as string[][], title: "ProDev Committee" }
  ]
};

const AboutUs = () => {
  const [category, setCategory] = useState<string>("All");
  const imagePreloader = useImagePreloader(["AllPages/bear.png"]);

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/AllPages/bear.png"
          fetchPriority="high"
        />
      </Helmet>
      <div className="min-h-fit max-w-[90%] m-auto">
        <div className="mt-20 mb-20 flex-col flex justify-center items-center">
          <div className="flex flex-row justify-between items-center max-w-[80%] mx-auto">
            <div className="sm:max-w-full md:max-w-3/5 ">
              <p className="font-semibold text-[60px] text-[#11426B] leading-14 mb-3">
                Get to know our board members
              </p>
              <p className="font-semibold text-[22px] mb-3">
                Meet the leaders behind our organization! Our board members are
                dedicated to fostering community, innovation, and growth. Get to
                know the team working to bring our mission to life!
              </p>
            </div>
            {imagePreloader.imagesPreloaded && (
              <img
                src="AllPages/bear.png"
                alt="bear"
                className="hidden md:block w-72 h-auto ml-6 animate-[animate-in_1s]"
              ></img>
            )}
          </div>
          <div className="w-full mt-16">
            <div className="flex md:hidden justify-center px-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-[80%] max-w-xs px-4 py-3 text-base font-bold text-gray-700 bg-white border-[#0000001A] border rounded-full shadow-xl appearance-none focus:outline-none text-center"
              >
                {categories.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden md:flex flex-wrap justify-center items-center font-bold w-full max-w-[90%] mx-auto p-2 bg-white border-[#0000001A] border rounded-full shadow-xl gap-x-4 gap-y-1">
              {categories.map((type, index) => {
                return (
                  <p
                    key={index}
                    className={`hover:cursor-pointer ${
                      category == type && "p-1 px-3 rounded-full bg-[#0000001A]"
                    } ${index == 0 && "ml-4"} ${
                      index == categories.length - 1 && "mr-4"
                    } transition-all duration-600 ease-in-out transform`}
                    onClick={() => setCategory(type)}
                  >
                    {type}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="max-w-[80%] mx-auto mb-10 mt-10 w-full">
            <div className="flex flex-col gap-11">
              {categoryMap[category].map((section, index) => (
                <Section key={index} data={section.data} title={section.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
