import { Suspense } from "react";
import CouncilMemberGrid from "./CouncilMemberGrid";
import LoadingIcon from "../MainPage/LoadingIcon";
const CouncilMembers = () => {
  return (
    <div className="min-h-fit">
      <div className="mt-20 mb-20 flex-col flex justify-center items-center">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Council Members
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-5 mx-auto w-[80%]">
          <Suspense fallback={<LoadingIcon />}>
            <CouncilMemberGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;
