function StockTile() {
  const data = {
    c: 128.87,
    d: -0.27,
    dp: -0.2091,
    h: 130.57,
    l: 128.79,
    o: 129.14,
    pc: 129.14,
    t: 1674853204,
  };

  return (
    <div className="flex-col flex bg-zinc-200 dark:bg-zinc-800 hover:text-white rounded-lg p-2 my-1 cursor-pointer hover:scale-105 dark:hover:bg-purple-600 hover:bg-purple-600">
      {/*headline */}
      <div className="flex-row flex flex-grow justify-between py-2">
        <h1 className="font-semibold">META</h1>
        <h1 className="font-semibold">${data.c}</h1>
      </div>

      {/* Details Row */}
      <div className="flex-row flex space-x-5 w-full">
        {/* High price */}
        <div className="flex-col flex text-sm text-green-500">
          <h1 className="text-xs">Highest</h1>
          <span className="">{data.h}</span>
        </div>
        {/* Low price */}
        <div className="flex-col flex text-sm text-red-500 hover:dark:text-red-300">
          <h1 className="text-xs">Lowest </h1>
          <span className="">{data.l}</span>
        </div>
        {/* open price */}
        <div className="flex-col flex text-sm">
          <h1 className="text-xs">Open </h1>

          <span className="">{data.o}</span>
        </div>
        {/* open price */}
        <div className="flex-col flex text-sm">
          <h1 className="text-xs"> Close</h1>
          <span className="">{data.pc}</span>
        </div>
        {/* Difference in percentage */}
        <div className="flex-col flex text-lg items-end justify-end flex-1  text-right ">
          <span
            className={`${data.dp > 0 ? "text-green-600" : "text-red-500  "}`}
          >
            {data.dp}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StockTile;
