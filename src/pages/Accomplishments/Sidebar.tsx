import React from "react";
export interface SidebarItem {
  id: string;
  name: string;
}

interface SidebarProps {
  clubs: SidebarItem[];
  selectedClubId: string;
  onSelectClub: (id: string) => void;
}

const asideClassName =
  "flex h-full w-full min-h-0 flex-col overflow-hidden bg-radial from-[#114675] from-[40%] to-navy text-offWhite shadow-xl";

function clubButtonClass(isSelected: boolean): string {
  const base =
    "group w-full text-left px-6 py-4 rounded-xl transition-all duration-200 ease-out transform";
  return isSelected
    ? `${base} bg-white text-[#11426B] font-bold scale-[1.04] shadow-md`
    : `${base} bg-white/5 text-offWhite hover:bg-white/10 hover:scale-[0.95]`;
}

export default function Sidebar({
  clubs,
  selectedClubId,
  onSelectClub,
}: SidebarProps) {
  return (
    <aside className={asideClassName}>
      <div className="shrink-0 border-b border-white/10 px-7 py-7">
        <h2 className="text-[clamp(26px,2vw,34px)] font-bold tracking-wide">
          Clubs
        </h2>
        <p className="mt-2 text-sm text-offWhite/80">
          Explore accomplishments by organization
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain p-5">
        {clubs.map((club) => {
          const isSelected = selectedClubId === club.id;
          return (
            <button
              key={club.id}
              type="button"
              onClick={() => onSelectClub(club.id)}
              className={clubButtonClass(isSelected)}
            >
              <span className="text-inherit text-[clamp(18px,1.2vw,20px)] font-semibold tracking-wide">
                {club.name}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
