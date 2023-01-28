import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counterSlice";
import StockTile from "../StockTile";

function MyPortfolioTab() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {true ? (
        <div className="flex-col flex items-center text-zinc-400 dark:text-zinc-700 justify-center min-h-screen">
          <BsFolder2Open size={150} />
          <h1 className="text-5xl font-bold py-2">{"It's so empty in here"}</h1>
          <span className="text-2xl">
            {"You don't have any stock in your portfolio"}
          </span>
          <h1>{count}</h1>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-row flex p-3 space-x-3 ">
          {/* My portfolio stock list */}
          <div className="p-2 rounded-lg h-full  bg-zinc-100 dark:bg-zinc-900 w-1/3 hidden sm:block">
            <h1 className="p-3 text-xl font-bold ">My Portfolio</h1>
          </div>
          {/* Right side content area */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-3 flex-col flex flex-grow space-y-3">
            <h1 className="text-xl font-bold">PAYTM</h1>

            <div className="flex-row flex space-x-4"></div>
          </div>
          {}
        </div>
      )}
    </>
  );
}

export default MyPortfolioTab;
