import { useState } from "react";
import CouncilMemberGrid from "./CouncilMemberGrid";
import {
  allCouncilMembers,
  bioengineeringOrgs,
  chemicalNanoOrgs,
  structuralOrgs,
  computerOrgs,
  electricalOrgs,
  mechanicalOrgs,
  roboticsOrgs,
  generalMiscOrgs,
  CouncilMember,
} from "./council-member-data";
import useImagePreloader from "../../Hooks/useImagePreload";

const categories: string[] = [
  "All",
  "Bioengineering",
  "Chemical/Nano",
  "Structural",
  "Computer",
  "Electrical",
  "Mechanical",
  "Robotics",
  "Interdisciplinary/General",
];

const categoryMap: { [key: string]: CouncilMember[] } = {
  All: allCouncilMembers,
  Bioengineering: bioengineeringOrgs,
  "Chemical/Nano": chemicalNanoOrgs,
  Structural: structuralOrgs,
  Computer: computerOrgs,
  Electrical: electricalOrgs,
  Mechanical: mechanicalOrgs,
  Robotics: roboticsOrgs,
  "Interdisciplinary/General": generalMiscOrgs,
};

const CouncilMembers = () => {
  const [category, setCategory] = useState<string>("All");
  const imagePreloader = useImagePreloader(["AllPages/council-page-image.webp"]);
  return (
    <div className="min-h-fit max-w-[90%] m-auto">
      <div className="mt-20 mb-20 flex-col flex justify-center items-center">
        <div className="flex flex-row justify-between items-center max-w-[80%] mx-auto">
          <div className="sm:max-w-full md:max-w-3/5 ">
            <p className="font-semibold text-[60px] text-[#11426B] leading-14 mb-3">
              Get to know our council members
            </p>
            <p className="font-semibold text-[22px] mb-3">
              Meet the council members behind our organization! We’re dedicated to supporting the
              engineering community through any means, whether that be through industry connections,
              financial support, or student support!
            </p>
          </div>
          {imagePreloader.imagesPreloaded && (
            <img
              src="AllPages/council-page-image.webp"
              alt="JSOE"
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
                    index == categories.length - 1 && "mr-16"
                  } transition-all duration-600 ease-in-out transform`}
                  onClick={() => setCategory(type)}
                >
                  {type}
                </p>
              );
            })}
          </div>
        </div>
        <p className="font-semibold text-[30px] text-[#11426B] leading-14 mb-3 mt-10">
          {category} Council Members
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-center items-center my-4 mx-auto w-[80%] gap-10">
          <CouncilMemberGrid data={categoryMap[category]} />
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;
