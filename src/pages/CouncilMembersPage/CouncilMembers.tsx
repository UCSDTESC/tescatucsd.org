import { Suspense } from "react";
import CouncilMemberGrid from "./CouncilMemberGrid";
import LoadingIcon from "../MainPage/LoadingIcon";
const CouncilMembers = () => {
  return (
    <div className="min-h-fit max-w-[90%] m-auto">
      <div className="mt-20 mb-20 flex-col flex justify-center items-center">
        <h1 className="font-medium [line-height:1.2] text-[3vw] mb-2">
          Council Members
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center my-4 mx-auto w-[80%] gap-10">
          <Suspense fallback={<LoadingIcon />}>
            <CouncilMemberGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;
