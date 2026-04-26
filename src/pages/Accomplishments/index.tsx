import { ACCOMPLISHMENT_CLUBS, accomplishmentsByClub, DataBox } from "./databox";
import { useState } from "react";
import Sidebar from "./Sidebar";

const clubList = ACCOMPLISHMENT_CLUBS;
export default function Accomplishments() {
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="relative isolate flex w-full min-h-screen flex-1 flex-col">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white to-[#f4f4f4]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[300px] bg-gradient-to-r from-white via-[#fafafa] to-transparent md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-transparent via-transparent to-[#eaeaea]/60"
        aria-hidden
      />
      <div className="absolute left-0 top-0 bottom-0 z-10 hidden w-[300px] min-h-screen border-r border-black/10 md:flex md:flex-col">
        <div className="box-border flex min-h-0 h-full flex-1 p-3 pr-2">
          <Sidebar
            clubs={clubList}
            selectedClubId={selectedClubId ?? ""}
            onSelectClub={setSelectedClubId}
          />
        </div>
      </div>

      <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col px-4 pb-12 pt-8 md:ml-[300px] md:px-6 md:pt-20">
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

      <button
        type="button"
        onClick={() => setIsMobileSidebarOpen(true)}
        className="fixed left-4 top-24 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-[#11426B]/20 bg-white/75 text-xl font-bold text-[#11426B] shadow-lg backdrop-blur transition-all duration-300 ease-out hover:translate-x-2 hover:scale-110 hover:bg-white md:hidden"
        aria-label="Open clubs sidebar"
      >
        ☰
      </button>

      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden" aria-hidden={false}>
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileSidebarOpen(false)}
            aria-label="Close clubs sidebar"
          />
          <div className="absolute left-0 top-0 h-full w-[85vw] max-w-[320px] border-r border-black/10 p-3">
            <Sidebar
              clubs={clubList}
              selectedClubId={selectedClubId ?? ""}
              onSelectClub={(id) => {
                setSelectedClubId(id);
                setIsMobileSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}