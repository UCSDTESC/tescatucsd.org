import { useEffect, useMemo, useState } from "react";
import supabase from "../../supabase/supabase";

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
  const [selection, setSelection] = useState<number>(-1);
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

  return (
    <div className="w-full flex justify-center">
      <div className="grid w-[80%] border border-black border-spacing-1 grid-cols-[200px_1fr] min-h-[80vh] max-h-[100vh] grid-rows-[auto_1fr] my-20">
        <div className="col-span-2">
          <form action="" className="p-3">
            <input
              type="Search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border- border rounded-standard p-1 focus:outline-none"
            />
          </form>
        </div>
        <div className="grid grid-rows-[repeat(auto-fill,minmax(100px,1fr))] border-t border-black overflow-y-auto">
          {filtered?.map((daton) => {
            return (
              <button
                className="border-b border-black cursor-pointer "
                onClick={() => {
                  setSelection(daton.id);
                }}
              >
                <div className="">{daton.Title}</div>
                <span className="line-clamp-3">
                  <div
                    dangerouslySetInnerHTML={{ __html: daton.Content }}
                  ></div>
                </span>
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
                      <div className="">
                        Location: &nbsp;{" "}
                        {daton.Location_Str === null
                          ? "unknown"
                          : daton.Location_Str}
                      </div>
                      <div
                        className="border border-black rounded-standard min-h-[40vh] p-4"
                        dangerouslySetInnerHTML={{ __html: daton.Content }}
                      ></div>
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
