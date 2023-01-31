import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import StockTile from "../components/StockTile";

function WatchList() {
  const myList = useSelector((state) => state.stockList.myWatchList);
  const dispatch = useDispatch();
  return (
    <>
      {myList.length <= 0 ? (
        <div className="flex-col flex items-center text-zinc-400 dark:text-zinc-700 justify-center min-h-screen">
          <BsFolder2Open size={150} />
          <h1 className="text-5xl font-bold py-2">{"It's so empty in here"}</h1>
          <span className="text-2xl">
            {"You don't have any stock in your portfolio"}
          </span>
          <h1>{myList.length}</h1>
        </div>
      ) : (
        <div className="flex-row flex p-3 space-x-3 ">
          {/* My portfolio stock list */}
          <div className="p-2 rounded-lg h-full  bg-zinc-100 dark:bg-zinc-900 w-1/3 hidden sm:block">
            <h1 className="p-3 text-xl font-bold ">My Watch list</h1>
            {myList.map((e) => (
              <StockTile key={e.id} props={e} />
            ))}
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

export default WatchList;
