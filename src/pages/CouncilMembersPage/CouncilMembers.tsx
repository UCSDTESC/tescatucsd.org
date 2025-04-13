import { Suspense } from "react";
import CouncilMemberGrid from "./CouncilMemberGrid";
import LoadingIcon from "../MainPage/LoadingIcon";
import { allCouncilMembers } from "./council-member-data";
const CouncilMembers = () => {
  return (
    <div className="min-h-fit max-w-[90%] m-auto">
      <div className="mt-20 mb-20 flex-col flex justify-center items-center">
        <div className="flex flex-row justify-between items-center max-w-[80%] mx-auto">
          <div className="sm:max-w-full md:max-w-3/5 ">
            <p className="font-semibold text-[60px] text-[#11426B] leading-14 mb-3">
              Get to know our council members
            </p>
            <p className="font-semibold text-[22px] mb-3">
              Meet the council members behind our organization! We’re dedicated
              to supporting the engineering community through any means, whether
              that be through industry connections, financial support, or
              student support!
            </p>
          </div>
          <img
            src="AllPages/council-page-image.png"
            alt="JSOE"
            className="hidden md:block w-72 h-auto"
          ></img>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center my-4 mx-auto w-[80%] gap-10">
          <Suspense fallback={<LoadingIcon />}>
            <CouncilMemberGrid data={allCouncilMembers} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;
