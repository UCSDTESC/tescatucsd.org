import { useEffect, useMemo, useState } from "react";
import supabase from "../../supabase/supabase";
import Editor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";

export default function Bulletin() {
  const [data, setData] = useState<
    {
      id: number;
      UID: string;
      created_at: string;
      Title: string;
      Content: string;
      Location: string;
      Location_Str: string;
      Start_Date: any;
      End_Date: any;
    }[]
  >();
  const postId = useParams();
  const [selection, setSelection] = useState<number>(Number(postId.postId));
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    return search
      ? data?.filter((daton) => daton.Title.toLowerCase().includes(search))
      : data;
  }, [search, data]);
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("Events")
        .select()
        .order("created_at", { ascending: false });
      if (data) {
        setData(data);
      } else {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const formatDate = (date: string) => {
    const DateObject = new Date(date);
    const parseDate = DateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).split("/");
    const parseTime = DateObject.toLocaleTimeString("en-us", {
      hour: "2-digit",
      second: "2-digit",
      minute: "2-digit"
    });

    return (
      parseDate[2] +
      parseDate[0]+parseDate[1] +
      "T" +
      parseTime
        .toString()
        .replace(",", "")
        .replaceAll(":", "")
        .replace("PM", "")
        .replace("AM", "")
        .replace(" ", "")
    );
  };
  return (
    <div className="w-full flex justify-center">
      <div className="grid w-[80%] border border-black border-spacing-1 grid-cols-[200px_1fr] min-h-[80vh]  grid-rows-[auto_1fr] my-20">
        <div className="col-span-2">
          <form action="" className="p-3">
            <input
              type="Search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className=" border rounded-standard p-1 focus:outline-none"
            />
          </form>
        </div>
        <div className="grid grid-rows-[repeat(auto-fill,100px)] border-t border-black overflow-y-auto ">
          {filtered?.map((daton) => {
            return (
              <button
                className=" cursor-pointer flex flex-col p-1 h-full"
                onClick={() => {
                  navigate(`/bulletin/${daton.id}`);
                  setSelection(daton.id);
                }}
              >
                <div className="border  border-black h-full w-full p-1 rounded-standard bg-lightBlue">
                  <div className="font-bold w-max">{daton.Title}</div>
                  <span className="line-clamp-3 w-max">
                    posted: {new Date(daton.created_at).toDateString()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="border-l border-t border-black flex justify-center">
          <div className="w-[90%] p-10">
            <div className="">
              {data?.map((daton) => {
                if (daton.id === selection)
                  return (
                    <span className="">
                      <h1 className="font-bold text-[30px]">
                        {daton.Title} -&nbsp;
                        {new Date(daton.created_at).toDateString()}
                      </h1>
                      <div className="">
                        Start Date:&nbsp;
                        {new Date(daton.Start_Date).toDateString()}
                        &nbsp;
                        {new Date(daton.Start_Date).toLocaleTimeString()}
                      </div>
                      <div className="">
                        End Date: &nbsp;
                        {new Date(daton.End_Date).toDateString()}
                        &nbsp;
                        {new Date(daton.End_Date).toLocaleTimeString()}
                      </div>
                      {daton.Location_Str && (
                        <div className="">
                          Location: &nbsp;
                          {daton.Location_Str} |{" "}
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${daton.Location_Str.replace(
                              " ",
                              "+"
                            ).replace(",", "%2C")}&travelmode=walking`}
                            className=" hover:underline decoration-auto"
                          >
                            directions
                          </a>
                        </div>
                      )}

                      <a
                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${daton.Title.replace(
                          " ",
                          "+"
                        )}&details=More+details+see:+${
                          window.location.href
                        }&location=${daton.Location_Str}&dates=${formatDate(
                          daton.Start_Date
                        )}/${formatDate(daton.End_Date)}&ctz=America/Los_Angeles
`}
                        className="hover:underline decoration-auto"
                      >
                        Add to Calendar
                      </a>

                      <Editor content={daton.Content}></Editor>
                    </span>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
