import { lazy, Suspense, useState } from "react";
const CouncilMemberGrid = lazy(() => import("./CouncilMemberGrid"));
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
  CouncilMember
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
  "General/Misc"
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
  "General/Misc": generalMiscOrgs
};

const CouncilMembers = () => {
  const [category, setCategory] = useState<string>("All");
  const imagePreloader = useImagePreloader(["AllPages/council-page-image.png"]);
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
              src="AllPages/council-page-image.png"
              alt="JSOE"
              className="hidden md:block w-72 h-auto ml-6 animate-[animate-in_1s]"
            ></img>
          )}
        </div>
        <div className="flex flex-row justify-between items-center font-bold w-[90%] h-[2vw] p-5 mt-16 bg-white border-[#0000001A] border-1 rounded-full shadow-xl">
          {categories.map((type, index) => {
            return (
              <p
                key={index}
                className={`hover:cursor-pointer ${
                  category == type && "p-1 px-3 rounded-full bg-[#0000001A]"
                } ${index == 0 && "ml-16"} ${
                  index == categories.length - 1 && "mr-16"
                } transition-all duration-600 ease-in-out transform`}
                onClick={() => setCategory(type)}
              >
                {type}
              </p>
            );
          })}
        </div>
        <p className="font-semibold text-[30px] text-[#11426B] leading-14 mb-3 mt-10">
          {category} Council Members
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center items-center my-4 mx-auto w-[80%] gap-10">
          <Suspense>
            <CouncilMemberGrid data={categoryMap[category]} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;
