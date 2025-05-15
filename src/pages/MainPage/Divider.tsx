import { ReactNode } from "react";

export default function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-[26vh] mb-[5vh] text-white p-5 bg-radial from-[#114675] from-40% to-navy">
      <p className="max-w-[60%] text-center m-0 leading-[1.5] font-xl whitespace-normal">
        {children}
      </p>
    </div>
  );
}
