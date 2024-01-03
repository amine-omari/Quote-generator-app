import ShareIcon from "@/icons/ShareIcon";
import React from "react";

const MainContainer = () => {
  return (
    <div>
      <div className="mb-8 flex justify-center">
        <button className="rounded-full border bg-zinc-700 px-5 py-2 text-white duration-300 hover:border-zinc-700 hover:bg-white hover:text-zinc-700 hover:shadow-2xl">
          Get a New Quote
        </button>
      </div>
      <div className="space-y-5 rounded-xl border border-zinc-700 p-6">
        <h1 className="p-3 text-center text-2xl font-medium">
          quote:this is the quote
        </h1>
        <div>
          <p className="text-sm font-medium">Author :</p>
          <p className="text-xs">Amine Omari Alaoui</p>
        </div>
        <div className="flex justify-end">
          <button>
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
