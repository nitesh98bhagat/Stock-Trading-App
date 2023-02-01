import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import StockTile from "../components/StockTile";
import { decrement, increment } from "../features/counterSlice";
import { removeFromPortfolio } from "../features/stockSlice";

function MyPortfolioPage() {
  const myList = useSelector((state) => state.stockList.myPortfolio);
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
        </div>
      ) : (
        <div className="flex-row flex p-3 space-x-3 min-h-screen">
          {/* My portfolio stock list */}
          <div className="p-2 rounded-lg h-full  bg-zinc-100 dark:bg-zinc-900 w-1/3 hidden sm:block">
            <h1 className="p-3 text-xl font-bold ">My Portfolio</h1>
            {myList.map((e) => (
              <StockTile key={e.id} props={e} />
            ))}
          </div>
          {/* Right side content area */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-3 flex-col flex w-full  justify-start items-start space-y-3">
            <div className="flex-row flex w-full justify-between">
              <h1 className="text-xl font-bold">{myList[0]?.name}</h1>
              <button onClick={() => dispatch(removeFromPortfolio(myList[0]))}>
                <AiFillDelete size={25} />
              </button>
            </div>

            <div className="flex-row flex items-center py-2">
              <img
                src={myList[0]?.logo ?? "/defaultUser.jpg"}
                alt="logo"
                className="w-10 rounded-full"
              />

              <div className=" px-3 flex-col flex">
                <h1 className="text-xl font-bold ">{myList[0]?.name}</h1>
                <span className="text-xs">Country: {myList[0]?.country}</span>
              </div>

              <div className=" px-3 flex-col flex ml-auto">
                <h1 className="text-xl font-bold ">${myList[0]?.c}</h1>
                <span
                  className={`${
                    myList[0]?.dp > 0 ? "text-green-600" : "text-red-500  "
                  }`}
                >
                  {`${
                    myList[0]?.dp > 0
                      ? `+${myList[0]?.dp}%`
                      : `${myList[0]?.dp}%`
                  }`}
                </span>
              </div>
            </div>
            {/* Details Row */}
            <div className="flex-wrap flex items-center justify-around w-full space-x-5 ">
              {/* High price */}
              <div className="flex-col flex text-sm text-green-500 -space-y-1">
                <h1 className="text-sm">Highest</h1>
                <span className="text-base">${myList[0]?.h}</span>
              </div>
              {/* Low price */}
              <div className="flex-col flex text-sm text-red-500 hover:dark:text-red-300 -space-y-1">
                <h1 className="text-sm">Lowest </h1>
                <span className="text-base">${myList[0]?.l}</span>
              </div>
              {/* open price */}
              <div className="flex-col flex text-sm -space-y-1">
                <h1 className="text-sm">Open </h1>

                <span className="text-base">{myList[0]?.o}</span>
              </div>
              {/* open price */}
              <div className="flex-col flex text-sm -space-y-1">
                <h1 className="text-sm"> Close</h1>
                <span className="text-base">{myList[0]?.pc}</span>
              </div>
              {/* Market Capitalization */}
              <div className="flex-col sm:flex text-sm -space-y-1 hidden ">
                <h1 className="text-sm"> Market Capitalization</h1>
                <span className="text-base">
                  {myList[0]?.marketCapitalization}
                </span>
              </div>
              {/* Share Outstanding */}
              <div className="flex-col sm:flex hidden text-sm -space-y-1">
                <h1 className="text-sm">Outstanding</h1>
                <span className="text-base">{myList[0]?.shareOutstanding}</span>
              </div>
            </div>

            <div className="flex-row flex space-x-4"></div>
          </div>
          {}
        </div>
      )}
    </>
  );
}

export default MyPortfolioPage;
