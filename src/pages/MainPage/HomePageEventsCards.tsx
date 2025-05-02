import useImagePreloader from "../../Hooks/useImagePreload";
interface event {
  link: string;
  image: string;
  name: string;
  description: string;
}
export default function HomePageEventCards({ event, index }: { event: event; index: number }) {
  const ImagePreloader = useImagePreloader([event.image]);
  return (
    <>
      {ImagePreloader.imagesPreloaded ? (
        <a
          className={`${
            index === 2 && "block lg:hidden xl:block"
          } flex-col justify-center items-center`}
          href={event.link}
        >
          <div className="relative h-fit w-full bg-white shadow-2xl rounded-[20px]">
            <img
              className="aspect-[1/1.1] w-full p-6 pb-3 mx-auto object-cover rounded-[40px] animate-[animate-in_1s]"
              src={event.image}
              alt={event.name}
            />
            <div className="w-full h-[12rem] overflow-hidden px-7">
              <p className="line-clamp-6 xl:text-[clamp(12px,0.9vw,20px)] md:text-[clamp(10px,2vw,16px)] text-[16px]">
                {event.description}
              </p>
            </div>
          </div>
        </a>
      ) : (
        <a className={` flex-col justify-center items-center`}>
          <div className="relative h-fit w-full bg-white shadow-2xl rounded-[20px]">
            <div className="aspect-[1/1.1] w-full p-6 pb-3 mx-auto">
              <div className="bg-lightBlue animate-pulse w-full h-full rounded-[40px]"></div>
            </div>
            <div className="w-full h-[12rem] overflow-hidden px-7">
              <span className="line-clamp-6 flex flex-col gap-2 px-2">
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-full xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
                <p className="w-[80%] xl:h-[clamp(12px,0.9vw,20px)] rounded-standard md:h-[clamp(10px,2vw,16px)] h-[16px] bg-lightBlue animate-pulse"></p>
              </span>
            </div>
          </div>
        </a>
      )}
    </>
  );
}
