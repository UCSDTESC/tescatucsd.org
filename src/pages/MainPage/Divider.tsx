import { ReactNode } from "react";

export default function Divider({ children }: { children: ReactNode }) {
  return (
    <div className="divider flex justify-center items-center text-white p-5">
      <p
        className="text-center m-0 text-2xl leading-[1.5]"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {children}
      </p>
    </div>
  );
}
