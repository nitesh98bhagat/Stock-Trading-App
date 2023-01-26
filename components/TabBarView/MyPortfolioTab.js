import React from "react";
import StockTile from "../StockTile";

function MyPortfolioTab() {
  return (
    <div className="flex-row flex p-3 space-x-3 ">
      {/* My portfolio stock list */}
      <div className="p-2 rounded-lg h-full  bg-zinc-100 dark:bg-zinc-900 w-1/3">
        <h1 className="p-3 text-xl font-bold">My Portfolio</h1>

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
      {/* Right side content area */}
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-3 flex-col flex flex-grow space-y-3">
        <h1 className="text-xl font-bold">PAYTM</h1>

        <div className="flex-row flex space-x-4"></div>
      </div>
    </div>
  );
}

export default MyPortfolioTab;
