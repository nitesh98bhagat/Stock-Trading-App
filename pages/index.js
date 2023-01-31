import React, { useEffect, useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import StockTile from "../components/StockTile";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToMyWatchList, addToPortfolio } from "../features/stockSlice";

function HomePage() {
  const dispatch = useDispatch();

  const fetchedStockList = useSelector(
    (state) => state.stockList.fetchedStockList
  );

  const [selectedStock, setSelectedStock] = useState(fetchedStockList[0]);

  const getCompanyProfileData = async (symbol) => {
    const resData = await axios
      .get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cf96kkaad3i9ljn7ea10cf96kkaad3i9ljn7ea1g`
      )
      .catch((error) => {
        console.error("Error", error.message);
      });

    return resData?.data;
  };

  useEffect(() => {
    getCompanyProfileData(selectedStock?.symbol).then((e) => {
      console.log(e);
      setSelectedStock({ ...selectedStock, ...e });
    });
  }, []);

  return (
    <div className="flex-row flex sm:p-5 justify-start items-start sm:relative">
      {/* Selected stock performance details */}
      <div className=" sm:sticky sm:top-0 rounded-xl p-3 flex-col flex flex-1 space-y-3">
        {/* Header- Logo,Symbol & Name */}
        <div className="flex-row flex items-center ">
          <h1 className="text-xl font-bold px-3 mr-auto">
            #{selectedStock?.symbol}
          </h1>

          <button
            onClick={() => dispatch(addToPortfolio(selectedStock))}
            className="bg-purple-700 px-3   text-white py-1 rounded-full font-semibold hidden sm:flex flex-row items-center space-x-2 mx-5"
          >
            <MdAttachMoney />
            <span>BUY</span>
          </button>
          <button
            onClick={() => dispatch(addToMyWatchList(selectedStock))}
            className="bg-purple-400 sm:bg-purple-700  px-3 text-white py-1 rounded-full font-semibold flex flex-row items-center space-x-2 "
          >
            <AiFillEye />
            <span>Add to Watchlist</span>
          </button>
        </div>

        {/* Stock Details */}
        {/* -------------QUOTE companyProfile--------------- */}
        {/*headline */}
        <div className="flex-row flex flex-grow items-center py-2">
          <img
            src={selectedStock?.logo ?? "/defaultUser.jpg"}
            alt="logo"
            className="w-10 rounded-full"
          />

          <div className=" px-3 flex-col flex">
            <h1 className="text-xl font-bold ">{selectedStock?.name}</h1>
            <span className="text-xs">Country: {selectedStock?.country}</span>
          </div>

          <div className=" px-3 flex-col flex ml-auto">
            <h1 className="text-xl font-bold ">${selectedStock?.c}</h1>
            <span
              className={`${
                selectedStock?.dp > 0 ? "text-green-600" : "text-red-500  "
              }`}
            >
              {`${
                selectedStock?.dp > 0
                  ? `+${selectedStock?.dp}%`
                  : `${selectedStock?.dp}%`
              }`}
            </span>
          </div>
        </div>

        {/* Details Row */}
        <div className="flex-wrap flex items-center justify-around w-full space-x-5 ">
          {/* High price */}
          <div className="flex-col flex text-sm text-green-500 -space-y-1">
            <h1 className="text-sm">Highest</h1>
            <span className="text-base">${selectedStock?.h}</span>
          </div>
          {/* Low price */}
          <div className="flex-col flex text-sm text-red-500 hover:dark:text-red-300 -space-y-1">
            <h1 className="text-sm">Lowest </h1>
            <span className="text-base">${selectedStock?.l}</span>
          </div>
          {/* open price */}
          <div className="flex-col flex text-sm -space-y-1">
            <h1 className="text-sm">Open </h1>

            <span className="text-base">{selectedStock?.o}</span>
          </div>
          {/* open price */}
          <div className="flex-col flex text-sm -space-y-1">
            <h1 className="text-sm"> Close</h1>
            <span className="text-base">{selectedStock?.pc}</span>
          </div>
          {/* Market Capitalization */}
          <div className="flex-col sm:flex text-sm -space-y-1 hidden ">
            <h1 className="text-sm"> Market Capitalization</h1>
            <span className="text-base">
              {selectedStock?.marketCapitalization}
            </span>
          </div>
          {/* Share Outstanding */}
          <div className="flex-col sm:flex hidden text-sm -space-y-1">
            <h1 className="text-sm">Outstanding</h1>
            <span className="text-base">{selectedStock?.shareOutstanding}</span>
          </div>
        </div>

        {/* Graph performance */}
        <div className="container bg-black/10 rounded-lg p-3 min-h-fit max-h-72 text-center ">
          <h1 className="text-6xl text-zinc-800">
            {"Oops!!! Can't load the graph"}
          </h1>
        </div>
        {/* -----BUY BUTTON---- */}
        <button className="bg-purple-700  p-3  text-white  rounded-full font-semibold   sm:hidden flex  flex-row items-center">
          <MdAttachMoney />
          <span>BUY</span>
        </button>

        {/* -----------COMPANY PROFILE--------------------------- */}
        {/* Share Outstanding */}
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">Exchange</h1>
          <span className="text-base">{selectedStock?.exchange}</span>
        </div>
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">I.P.O Date</h1>
          <span className="text-base">{selectedStock?.ipo}</span>
        </div>
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">Industry</h1>
          <span className="text-base">{selectedStock?.finnhubIndustry}</span>
        </div>
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">Currency</h1>
          <span className="text-base">{selectedStock?.currency}</span>
        </div>
      </div>

      {/* Top Performing Stocks */}
      <div className="p-2 rounded-xl h-full mx-5 bg-zinc-100 dark:bg-zinc-900 w-1/3 hidden sm:block">
        <h1 className="p-3 text-xl font-bold">
          {fetchedStockList.length} Top Performing Stocks
        </h1>

        {fetchedStockList.map((e) => (
          <StockTile key={e.id} props={e} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
