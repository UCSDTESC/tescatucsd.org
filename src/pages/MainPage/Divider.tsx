import { ReactNode } from "react";

export default function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-[20vh] mb-[5vh] text-white p-5 bg-navy">
      <p
        className="text-center m-0 text-[1.1vw] leading-[1.5] font-medium"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {children}
      </p>
    </div>
  );
}
