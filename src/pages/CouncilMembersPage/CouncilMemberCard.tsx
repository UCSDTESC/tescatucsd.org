import useImagePreloader from "../../Hooks/useImagePreload";
import { CouncilMember } from "./council-member-data";
import { InstagramOutlined, GlobalOutlined } from "@ant-design/icons";

interface Props {
  councilMember: CouncilMember;
}
export default function CouncilMemberCard({ councilMember }: Props) {
  const ImagePreloader = useImagePreloader([`council-member-logos/${councilMember.Image}`]);
  return (
    <>
      {ImagePreloader.imagesPreloaded ? (
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
            <img
              className="aspect-[1/1.1] w-full p-4 mx-auto object-contain rounded-[40px] animate-[animate-in_1s]"
              src={`council-member-logos/${councilMember.Image}`}
              alt={councilMember.OrgAcronym}
            />
            <p className="text-center font-bold h-10">{councilMember.Name}</p>
            <div className="flex flex-row gap-4 justify-center my-3">
              {/* <GlobalOutlined className="hover:cursor-pointer" style={{ fontSize: "20px" }}>
                <a href={councilMember.Links[0]} />
              </GlobalOutlined>

              <InstagramOutlined className="hover:cursor-pointer" style={{ fontSize: "21px" }}>
                <a href={councilMember.Links[1]} />
              </InstagramOutlined> */}

              <a href={councilMember.Links[0]} target="_blank" rel="noopener noreferrer">
                <GlobalOutlined className="hover:cursor-pointer" style={{ fontSize: "20px" }} />
              </a>
              <a href={councilMember.Links[1]} target="_blank" rel="noopener noreferrer">
                <InstagramOutlined className="hover:cursor-pointer" style={{ fontSize: "21px" }} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
            <div className="aspect-[1/1.1] w-full p-4 mx-auto ">
              <div className="bg-lightBlue w-full h-full rounded-[40px] animate-pulse"></div>
            </div>
            <p className="text-center font-bold h-10">
              <div className="bg-lightBlue animate-pulse h-8 w-[80%] mx-auto rounded-standard"></div>
            </p>
            <div className="flex flex-row gap-4 justify-center my-3">
              <GlobalOutlined className="hover:cursor-pointer" style={{ fontSize: "20px" }}>
                <a href={councilMember.Links[0]} />
              </GlobalOutlined>

              <InstagramOutlined className="hover:cursor-pointer" style={{ fontSize: "21px" }}>
                <a href={councilMember.Links[1]} />
              </InstagramOutlined>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
