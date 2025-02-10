import { Suspense } from "react";
import SponsorsGrid from "./SponsorsGrid";
import LoadingIcon from "./LoadingIcon";

export default function Sponsors() {
  return (
    <div className="mb-[7rem] flex justify-center">
      <div className="w-[70%]">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Sponsors
        </h1>

        <div className="grid gap-[1rem] grid-cols-3 justify-center">
          <Suspense fallback={<LoadingIcon />}>
            <SponsorsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
