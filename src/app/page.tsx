"use client";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as animationData from "@/utils/disc-lottie.json";

export default function Home() {
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quote, setQuote] = useState("");

  const fetchRandomQuote = async () => {
    setQuoteLoading(true);
    await supabase
      .from("random_quotes")
      .select("*")
      .limit(1)
      .single()
      .then(({ data }) => {
        setQuote(data.quote);
        setQuoteLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex min-h-4/6	 flex-col items-center justify-between pt-10">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="relative text-white text-l sm:text-2xl">
          Disappointment Panda
        </h1>
      </div>
      <div className="group relative block overflow-hidden mt-8">
        <div className="relative border border-gray-100 bg-white p-6 card w-96 bg-primary text-primary-content">
          <img
            src="/dis-panda.jpeg"
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="card-body flex justify-center items-centre align-center py-12 ">
            {quoteLoading ? (
              <Lottie options={defaultOptions} height={100} width={100} />
            ) : (
              <p className="text-black min-h-32 text-center flex justify-center items-center">
                {`"${quote}"`}
              </p>
            )}
          </div>
          <div className="card-actions">
            <button
              onClick={() => fetchRandomQuote()}
              className="block w-full rounded bg-[#02237c] p-4 text-sm font-medium transition hover:scale-105"
            >
              Another one!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
