import ShareIcon from "@/icons/ShareIcon";
import React from "react";

const MainContainer = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-center">
        <button className="rounded-full border text-sm md:text-base bg-zinc-700 px-6 py-2 text-white duration-300 hover:border-zinc-700 hover:bg-white hover:text-zinc-700 hover:shadow-2xl">
          Get a New Quote
        </button>
      </div>
      <div className="space-y-3 rounded-xl border border-zinc-700 p-6">
        <h1 className="rounded-xl bg-zinc-700 py-3 px-8 text-center font-medium text-white">
          quote:this is the quote
        </h1>
        <div>
          <p className="text-xs font-medium">Author :</p>
          <p className="text-[10px]">Amine Omari Alaoui</p>
        </div>
        <div className="flex justify-end">
          <button className="rounded-full border p-1 duration-300 hover:border-zinc-700 hover:bg-white">
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
