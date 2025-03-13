import { ReactNode } from "react";

export default function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-[20vh] mb-[5vh] text-white p-5 bg-radial from-[#3B7DB6] from-40% to-[#296293]">
      <p className="max-w-[50%] text-center m-0 text-[1.1vw] leading-[1.5] font-medium whitespace-normal">
        {children}
      </p>
    </div>
  );
}
