import React from "react";

const MainContainer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <button>Get a New Quote</button>
      </div>
      <div className="space-y-5">
        <h1 className="text-center text-2xl font-medium">
          quote:this is the quote
        </h1>
        <div>
          <p className="text-lg font-medium">Author :</p>
          <p>Amine Omari Alaoui</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
