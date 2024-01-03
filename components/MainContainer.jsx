import ShareIcon from "@/icons/ShareIcon";
import StarIcon from "@/icons/StarIcon";
import React from "react";

const MainContainer = () => {
  return (
    <div className="w-full max-w-[550px]">
      <div className="mb-8 flex justify-center">
        <button className="rounded-full border bg-zinc-700 px-6 py-2 text-sm text-white duration-300 hover:border-zinc-700 hover:bg-white hover:text-zinc-700 hover:shadow-2xl md:px-8 md:py-3 md:text-lg">
          Get a New Quote
        </button>
      </div>
      <div className="space-y-3 rounded-xl border border-zinc-700 p-3 md:p-6">
        <h1 className="rounded-xl bg-zinc-700 py-3 px-6 text-center font-medium text-white md:text-2xl">
          quote:this is the quote
        </h1>
        <div>
          <p className="text-xs font-medium md:text-sm">Author :</p>
          <p className="text-[8px] md:text-xs">Amine Omari Alaoui</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button className="rounded-full border p-1 duration-300 hover:scale-105 hover:border-zinc-700">
            <ShareIcon />
          </button>
          <button className="rounded-full border p-1 duration-300 hover:scale-105 hover:border-zinc-700">
            <StarIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
