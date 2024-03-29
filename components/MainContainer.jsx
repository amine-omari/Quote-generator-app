import FacebookIcon from "@/icons/FacebookIcon";
import ShareIcon from "@/icons/ShareIcon";
import StarIcon from "@/icons/StarIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import WhatsappIcon from "@/icons/WhatsappIcon";
import React, { useState } from "react";

const MainContainer = () => {
  const [quote, setQuote] = useState();
  const [shareIcons, setShareIcons] = useState();

  const apiUrl = "https://api.quotable.io/random";

  const getQuote = async () => {
    const response = await fetch(apiUrl);
    const quoteData = await response.json();

    setQuote(quoteData);
  };

  return (
    <div className="w-full max-w-[550px] rounded-2xl border-4 border-zinc-700 p-6 dark:border-white">
      <div className="mb-8 flex justify-center">
        <button
          onClick={getQuote}
          className="rounded-full border bg-zinc-700 px-6 py-2 text-sm text-white duration-300 hover:border-zinc-700 hover:bg-white hover:text-zinc-700 hover:shadow-2xl md:px-8 md:py-3 md:text-lg dark:bg-white dark:text-zinc-700 dark:hover:border-white dark:hover:bg-zinc-700 dark:hover:text-white"
        >
          Get a New Quote
        </button>
      </div>
      {quote && (
        <div className="space-y-3 md:py-3">
          <h1 className="rounded-xl bg-zinc-700 px-6 py-3 text-center font-medium text-white md:text-2xl dark:bg-white dark:text-zinc-700">
            "{quote.content}"
          </h1>
          <div>
            <p className="text-xs font-medium md:text-sm">Author :</p>
            <p className="text-[8px] md:text-xs">{quote.author}</p>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onMouseEnter={() => setShareIcons(true)}
              onMouseLeave={() => setShareIcons(false)}
              className="relative rounded-full border p-1 duration-300 hover:scale-105 hover:border-zinc-700"
            >
              {shareIcons && (
                <div className="absolute -top-7 right-0 flex space-x-2 rounded-xl bg-zinc-700 px-2 py-1 dark:bg-white">
                  <button>
                    <WhatsappIcon />
                  </button>
                  <button>
                    <TwitterIcon />
                  </button>
                  <button>
                    <FacebookIcon />
                  </button>
                </div>
              )}
              <ShareIcon />
            </button>
            <button className="rounded-full border p-1 duration-300 hover:scale-105 hover:border-zinc-700">
              <StarIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
