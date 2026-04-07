import { ACCOMPLISHMENT_CLUBS, accomplishmentsByClub, DataBox } from "./databox";
import { useState } from "react";
import Sidebar from "./Sidebar";

const clubList = ACCOMPLISHMENT_CLUBS;
export default function Accomplishments() {
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  return (
    <div className="relative isolate flex w-full min-h-0 flex-1 flex-col">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white to-[#f4f4f4]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[300px] bg-gradient-to-r from-white via-[#fafafa] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-transparent via-transparent to-[#eaeaea]/60"
        aria-hidden
      />
      <div className="absolute left-0 top-0 bottom-0 z-10 flex w-[300px] flex-col border-r border-black/10">
        <div className="box-border flex min-h-0 flex-1 p-3 pr-2">
          <Sidebar
            clubs={clubList}
            selectedClubId={selectedClubId ?? ""}
            onSelectClub={setSelectedClubId}
          />
        </div>
      </div>

      <div className="relative z-10 ml-[300px] flex min-h-0 min-w-0 flex-1 flex-col pt-20 px-6 pb-12">
        <h1 className="mb-6 text-left text-[clamp(28px,4vw,40px)] font-bold leading-tight text-black">
          Accomplishments
        </h1>
        <DataBox
          selectedClubId={selectedClubId}
          clubData={accomplishmentsByClub}
        />
        {/* Grows so short pages still fill the main region; footer stays at viewport bottom */}
        <div className="min-h-0 flex-1" aria-hidden />
      </div>
    </div>
  );
}