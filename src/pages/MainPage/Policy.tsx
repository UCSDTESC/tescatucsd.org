export default function Policy() {
  return (
    <div className="mb-28 flex justify-center">
      <div className="w-[70%]">
        <h1 className="text-[30px] text-[#11426B] font-bold mb-2">
          Non-Discrimination Policy
        </h1>

        <div className="flex items-center justify-between gap-8">
          <p className="text-lg text-gray-800 leading-relaxed flex-1">
            <span>
              In accordance with applicable Federal and State law and University
              policy,{" "}
            </span>
            <span className="font-bold text-[#003059]">TESC</span>
            <span>
              {" "}
              does not discriminate, or grant preferences, on the basis of race,
              color, national origin, religion, sex, gender identity,
              citizenship, disability, and/or other protected categories.{" "}
            </span>
            <span className="font-bold text-gray-900">All</span>
            <span> enrolled students are encouraged to participate in </span>
            <span className="font-bold text-[#003059]">TESC</span>
            <span> events and activities.</span>
          </p>

          <img
            className="w-72 h-auto flex-shrink-0"
            alt="Group"
            src={"/AllPages/non-disc-policy.png"}
          />
        </div>
      </div>
    </div>
  );
}
