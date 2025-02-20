import useImagePreloader from "../../Hooks/useImagePreload";
import LoadingIcon from "../MainPage/LoadingIcon.tsx";
import { membersData } from "./member-info.tsx";

export default function AboutUsContent() {
  const imagePreloader = useImagePreloader(
    membersData.map((member) => member[3])
  );
  return (
    <>
      {imagePreloader?.imagesPreloaded ? (
        membersData.map((member: string[], index: number) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <img
              className="h-80 w-64 object-cover rounded-standard"
              src={member[3]}
              alt=""
            ></img>
            <p className="text-center">
              <span className="font-bold">{member[0]}</span> <br />
              {member[1]}
            </p>
          </div>
        ))
      ) : (
        <LoadingIcon />
      )}
    </>
  );
}
