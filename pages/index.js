import React from "react";
import { MdAttachMoney } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import StockTile from "../components/StockTile";
import { AiFillEye } from "react-icons/ai";
import { useSelector } from "react-redux";

function HomePage() {
  const stockList = useSelector((state) => state.stockList.predefinedStockList);

  const companyProfile = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ NMS - GLOBAL MARKET",
    finnhubIndustry: "Technology",
    ipo: "1980-12-12",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.svg",
    marketCapitalization: 2310978.6549064885,
    name: "Apple Inc",
    phone: "14089961010.0",
    shareOutstanding: 15836.2,
    ticker: "AAPL",
    weburl: "https://www.apple.com/",
  };

  const quote = {
    c: 145.93,
    d: 1.97,
    dp: 1.3684,
    h: 147.23,
    l: 143.1,
    o: 143.155,
    pc: 143.96,
    t: 1674853204,
  };

  return (
    <div className="flex-row flex p-5 justify-start items-start">
      {/* Selected stock performance details */}
      <div className=" rounded-xl p-3 flex-col flex flex-1 space-y-3">
        {/* Header- Logo,Symbol & Name */}
        <div className="flex-row flex items-center ">
          <h1 className="text-xl font-bold px-3 mr-auto">
            {companyProfile.ticker}
          </h1>

          <button className="bg-purple-700 px-3 text-white py-1 rounded-full font-semibold flex flex-row items-center space-x-2 mx-5">
            <MdAttachMoney />
            <span>BUY</span>
          </button>
          <button className="bg-purple-700 px-3 text-white py-1 rounded-full font-semibold flex flex-row items-center space-x-2 ">
            <AiFillEye />
            <span>Add to Watchlist</span>
          </button>
        </div>

        {/* Stock Details */}
        {/* -------------QUOTE companyProfile--------------- */}
        {/*headline */}
        <div className="flex-row flex flex-grow items-center py-2">
          <img
            src={companyProfile.logo}
            alt="logo"
            className="w-10 rounded-full"
          />

          <div className=" px-3 flex-col flex">
            <h1 className="text-xl font-bold ">{companyProfile.name}</h1>
            <span className="text-xs">Country: {companyProfile.country}</span>
          </div>

          <div className=" px-3 flex-col flex ml-auto">
            <h1 className="text-xl font-bold ">${quote.c}</h1>
            <span
              className={`${
                quote.dp > 0 ? "text-green-600" : "text-red-500  "
              }`}
            >
              {`${quote.dp > 0 ? `+${quote.dp}%` : `${quote.dp}%`}`}
            </span>
          </div>
        </div>

        {/* Details Row */}
        <div className="flex-row flex items-center justify-around w-full space-x-5 ">
          {/* High price */}
          <div className="flex-col flex text-sm text-green-500 -space-y-1">
            <h1 className="text-sm">Highest</h1>
            <span className="text-base">{quote.h}</span>
          </div>
          {/* Low price */}
          <div className="flex-col flex text-sm text-red-500 hover:dark:text-red-300 -space-y-1">
            <h1 className="text-sm">Lowest </h1>
            <span className="text-base">{quote.l}</span>
          </div>
          {/* open price */}
          <div className="flex-col flex text-sm -space-y-1">
            <h1 className="text-sm">Open </h1>

            <span className="text-base">{quote.o}</span>
          </div>
          {/* open price */}
          <div className="flex-col flex text-sm -space-y-1">
            <h1 className="text-sm"> Close</h1>
            <span className="text-base">{quote.pc}</span>
          </div>
          {/* Market Capitalization */}
          <div className="flex-col flex text-sm -space-y-1">
            <h1 className="text-sm"> Market Capitalization</h1>
            <span className="text-base">
              {companyProfile.marketCapitalization}
            </span>
          </div>
          {/* Share Outstanding */}
          <div className="flex-col flex text-sm -space-y-1">
            <h1 className="text-sm">Outstanding</h1>
            <span className="text-base">{companyProfile.shareOutstanding}</span>
          </div>
        </div>

        {/* Graph performance */}
        <div className="container bg-black/10 rounded-lg p-3 h-96 text-center ">
          <h1 className="text-6xl text-zinc-800">
            {"Oops!!! Can't load the graph"}
          </h1>
        </div>
        {/* -----------COMPANY PROFILE--------------------------- */}
        {/* Share Outstanding */}
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">Exchange</h1>
          <span className="text-base">{companyProfile.exchange}</span>
        </div>
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">I.P.O Date</h1>
          <span className="text-base">{companyProfile.ipo}</span>
        </div>
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">Industry</h1>
          <span className="text-base">{companyProfile.finnhubIndustry}</span>
        </div>
        <div className="flex-col flex text-sm -space-y-1">
          <h1 className="text-sm">Currency</h1>
          <span className="text-base">{companyProfile.currency}</span>
        </div>
      </div>

      {/* Top Performing Stocks */}
      <div className="p-2 rounded-xl h-full mx-5 bg-zinc-100 dark:bg-zinc-900 w-1/3">
        <h1 className="p-3 text-xl font-bold">
          {stockList.length / 2} Top Performing Stocks
        </h1>

        {stockList.map((e) => <StockTile key={e.id} props={e} />).splice(0, 8)}
      </div>
    </div>
  );
}

export default HomePage;

// Components

function PriceCard({ icon, title, subtitle, lowerline }) {
  return (
    <div className="bg-purple-400 dark:text-purple-900 text-purple-100 hover:scale-105 cursor-pointer   p-5  rounded-md flex-col flex justify-start items-start ">
      {icon ?? <HiCurrencyRupee size={35} />}
      <span>{title ?? "Total Earnings"}</span>
      <h1 className="text-xl font-black ">{subtitle ?? "$14.5K"}</h1>
      <p className="text-xs">{lowerline ?? "Lorem ipsum dolor sit."}</p>
    </div>
  );
}
