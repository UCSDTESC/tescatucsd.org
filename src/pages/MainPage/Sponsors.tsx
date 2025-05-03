import { Suspense } from "react";
import SponsorsGrid from "./SponsorsGrid";
import LoadingIcon from "./LoadingIcon";
import "./Sponsors.css";

export default function Sponsors() {
  return (
    <div className="mb-[7rem] flex justify-center">
      <div className="w-[70%]">
        <h1 className="text-[30px] text-[#003059] font-bold mb-4">Sponsors</h1>

        <div className="
          grid gap-[1rem] 
          grid-cols-3 
          justify-center 
          grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]
        ">
          <Suspense fallback={<LoadingIcon />}>
            <SponsorsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
