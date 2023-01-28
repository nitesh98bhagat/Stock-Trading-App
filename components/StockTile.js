function StockTile({ props }) {
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
    <div className="flex-col flex bg-zinc-200 dark:bg-zinc-800 hover:text-white rounded-lg p-3 my-1 cursor-pointer hover:scale-105 dark:hover:bg-purple-600 hover:bg-purple-600">
      {/*headline */}
      <div className="flex-row flex flex-grow justify-between ">
        <h1 className="font-semibold">
          {props.id}. {props.symbol ?? "Name"}
        </h1>
        <h1 className="font-semibold">${data.c}</h1>
      </div>
      <span className="pb-2  text-xs ">{props.name}</span>

      {/* Details Row */}
      <div className="flex-row flex space-x-5 w-full ">
        {/* High price */}
        <div className="flex-col flex text-xs text-green-500">
          <h1>Highest</h1>
          <span>{data.h}</span>
        </div>
        {/* Low price */}
        <div className="flex-col flex text-xs text-red-500 hover:dark:text-red-300">
          <h1>Lowest </h1>
          <span className="">{data.l}</span>
        </div>
        {/* open price */}
        <div className="flex-col flex text-xs">
          <h1>Open </h1>

          <span className="">{data.o}</span>
        </div>
        {/* open price */}
        <div className="flex-col flex text-xs">
          <h1> Close</h1>
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
