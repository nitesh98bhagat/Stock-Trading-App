function StockTile() {
  return (
    <div className="flex-row flex bg-zinc-200 dark:bg-zinc-800 hover:text-white rounded-lg p-2 my-1 cursor-pointer hover:scale-105 dark:hover:bg-purple-600 hover:bg-purple-600">
      <div className="flex-col flex flex-grow">
        <h1 className="font-semibold">Paytm</h1>
        <span className="text-sm">4,5864 Shares</span>
      </div>
      <div className="flex-col flex ">
        <h1>$124.46</h1>
        <span className="text-green-600">+0.37</span>
      </div>
    </div>
  );
}

export default StockTile;
