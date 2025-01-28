import { ReactNode } from "react";

export default function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center text-white p-5 bg-[#1c2e4a]">
      <p
        className="text-center m-0 text-2xl leading-[1.5]"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {children}
      </p>
    </div>
  );
}
