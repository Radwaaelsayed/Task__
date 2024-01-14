import React from "react";

const Search = (): JSX.Element => {
  return (
    <div className="Frame40 w-[1029px] h-11 justify-start items-center gap-[644px] inline-flex">
      <div className="Frame38 grow shrink basis-0 h-9 justify-start items-start gap-4 flex">
        <div className="Frame36 w-[122px] px-5 py-2.5 bg-white rounded-[22.50px] justify-start items-center gap-[23px] flex">
          <div className="New text-zinc-600 text-base font-medium font-['Poppins']">
            New
          </div>
          <div className="IconStrokeDownward w-6 h-6 relative" />
        </div>
        <div className="Frame37 w-[143px] px-5 py-2.5 bg-white rounded-[22.50px] justify-start items-center gap-[23px] flex">
          <div className="New text-zinc-600 text-base font-medium font-['Poppins']">
            Toyota
          </div>
          <div className="IconStrokeDownward w-6 h-6 relative" />
        </div>
      </div>
      <div className="Frame39 justify-start items-start gap-4 flex">
        <div className="Icon p-2.5 bg-white rounded-[30px] shadow justify-start items-start gap-2.5 flex">
          <div className="IconsGridLine w-6 h-6 relative" />
        </div>
        <div className="Filter p-2.5 bg-purple-500 rounded-[30px] justify-start items-start gap-2.5 flex">
          <div className="IconsSettings01Line w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
};

export default Search;
