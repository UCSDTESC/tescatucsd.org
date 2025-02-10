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
            className=" flex flex-col justify-center items-center mb-3"
          >
            <img
              className="h-full w-full object-cover rounded-standard"
              src={member[3]}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => {}}
            ></img>
            <p className="text-center">
              <span className="text-bold">{member[0]}</span> <br />
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
