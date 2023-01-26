import React from "react";
import { BsBoxSeam, BsPeopleFill } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi";
import { MdStickyNote2 } from "react-icons/md";
import StockTile from "../StockTile";

function HomeTab() {
  return (
    <div className="flex-row flex p-5 ">
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-3 flex-col flex flex-grow space-y-3">
        <div className="flex-row flex justify-between">
          <h1 className="text-xl font-bold">{"Today's Sales"}</h1>
        </div>
        <div className="flex-row flex space-x-4">
          <PriceCard
            icon={<HiCurrencyRupee size={35} />}
            title="Total Earnings"
            subtitle={"$14.5K"}
            lowerline={"Lorem ipsum dolor sit."}
          />
          <PriceCard
            icon={<BsBoxSeam size={35} />}
            title="Total Items"
            subtitle={"$36.2K"}
            lowerline={"Lorem ipsum dolor sit."}
          />
          <PriceCard
            icon={<BsPeopleFill size={35} />}
            title="Total Customers"
            subtitle={"256"}
            lowerline={"Lorem ipsum dolor sit."}
          />
          <PriceCard
            icon={<MdStickyNote2 size={35} />}
            title="Total Orders"
            subtitle={"1,450"}
            lowerline={"Lorem ipsum dolor sit."}
          />
        </div>
      </div>
      <div className="p-2 rounded-lg h-full mx-5 bg-zinc-100 dark:bg-zinc-900 w-1/3">
        <h1 className="p-3 text-xl font-bold">Top Performing Stocks</h1>

        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
        <StockTile />
      </div>
    </div>
  );
}

export default HomeTab;

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
