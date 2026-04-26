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
  "flex h-full w-full min-h-0 flex-col overflow-hidden bg-white/80 backdrop-blur-sm border border-white/40 text-[#0b2f4f] shadow-[0_8px_30px_rgba(0,0,0,0.12)]";

function clubButtonClass(isSelected: boolean): string {
  const base =
    "group w-full text-left px-4 py-3 md:px-6 md:py-4 rounded-xl transition-all duration-200 ease-out transform";
  return isSelected
    ? `${base} bg-white text-[#11426B] font-bold md:scale-[1.04] shadow-md`
    : `${base} bg-white/20 text-[#0b2f4f] hover:bg-white/35 hover:scale-[0.95]`;
}

export default function Sidebar({
  clubs,
  selectedClubId,
  onSelectClub,
}: SidebarProps) {
  return (
    <aside className={asideClassName}>
      <div className="shrink-0 border-b border-[#11426B]/15 px-5 py-5 md:px-7 md:py-7">
        <h2 className="text-[clamp(26px,2vw,34px)] font-bold tracking-wide">
          Clubs
        </h2>
        <p className="mt-2 text-sm text-[#11426B]/80">
          Explore accomplishments by organization
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain p-4 md:p-5">
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
