import React from "react";

const MainContainer = () => {
  return (
    <div>
      <div className="mb-10 flex justify-center">
        <button className="rounded-full border bg-zinc-700 px-5 py-2 text-white duration-300 hover:border-zinc-700 hover:bg-white hover:text-zinc-700 hover:shadow-2xl">
          Get a New Quote
        </button>
      </div>
      <div className="space-y-5">
        <h1 className="rounded-xl bg-zinc-700 p-4 text-center text-2xl font-medium text-white">
          quote:this is the quote
        </h1>
        <div>
          <p className="font-medium">Author :</p>
          <p className="text-sm">Amine Omari Alaoui</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
