interface Props {
  image: string;
  name: string;
  location: string;
  date: string;
  tags: string[];
  onClick: () => void;
}
export function EventCard({
  image,
  name,
  location,
  date,
  tags,
  onClick,
}: Props) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      onClick={onClick}
    >
      <div className="relative min-w-xs w-max bg-white shadow-2xl rounded-standard">
        <img
          className="h-auto max-h-72 w-full p-3 mx-auto object-cover rounded-standard"
          src={image}
          alt={name}
        />
        <div className="p-3 pt-0 pb-5">
          <p className="font-bold text-[#003059]">{date}</p>
          <div className="py-3">
            <p className="italic">{name}</p>
            <p>
              <span className="font-semibold text-[#003059]">Where? </span>
              {location}
            </p>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-2">
            {tags.map((tag) => (
              <div className="bg-[#A1C7E7] px-2 w-fit font-semibold text-[14px] rounded-standard">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
