import { CouncilMember } from "./council-member-data";
import { InstagramOutlined, GlobalOutlined } from "@ant-design/icons";

interface Props {
  councilMember: CouncilMember;
}
export default function CouncilMemberCard({ councilMember }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full max-w-xs bg-white shadow-2xl rounded-[20px]">
        <img
          className="h-60 w-full p-4 mx-auto object-contain rounded-[40px]"
          src={`council-member-logos/${councilMember.Image}`}
          alt={councilMember.OrgAcronym}
        />
        <p className="text-center font-bold">{councilMember.Name}</p>
        <div className="flex flex-row gap-4 justify-center my-3">
          <GlobalOutlined
            className="hover:cursor-pointer"
            style={{ fontSize: "20px" }}
          >
            <a href={councilMember.Links[0]} />
          </GlobalOutlined>

          <InstagramOutlined
            className="hover:cursor-pointer"
            style={{ fontSize: "21px" }}
          >
            <a href={councilMember.Links[1]} />
          </InstagramOutlined>
        </div>
      </div>
    </div>
  );
}
