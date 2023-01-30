import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

function StockTile({ props }) {
  return (
    <div className="flex-col flex bg-zinc-200 dark:bg-zinc-800 hover:text-white rounded-lg p-3 my-1 cursor-pointer hover:scale-105 dark:hover:bg-purple-600 hover:bg-purple-600">
      {/*headline */}
      <div className="flex-row flex flex-grow justify-between ">
        <h1 className="font-semibold">
          {props.id}. {props.symbol ?? "Name"}
        </h1>
        <h1 className="font-semibold">${props.c ?? "C"} </h1>
      </div>
      <span className="pb-2  text-xs ">{props.name ?? "Name"}</span>
      {/* Details Row */}
      <div className="flex-row flex space-x-5 w-full ">
        {/* High price */}
        <div className="flex-col flex text-xs text-green-500">
          <h1>Highest</h1>
          <span>{props.h ?? "H"}</span>
        </div>
        {/* Low price */}
        <div className="flex-col flex text-xs text-red-500 hover:dark:text-red-300">
          <h1>Lowest </h1>
          <span className="">{props.l ?? "L"}</span>
        </div>
        {/* open price */}
        <div className="flex-col flex text-xs">
          <h1>Open </h1>

          <span className="">{props.o ?? "O"}</span>
        </div>
        {/* open price */}
        <div className="flex-col flex text-xs">
          <h1> Close</h1>
          <span className="">{props.pc ?? "PC"}</span>
        </div>
        {/* Difference in percentage */}
        <div
          className={` flex-row flex items-center text-lg justify-end flex-1  text-right ${
            props.dp > 0 ? "text-green-600" : "text-red-500  "
          }`}
        >
          <span>{props.dp ?? "DP" + "%"}</span>
          {props.dp > 0 ? (
            <IoMdArrowDropupCircle size={20} />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </div>
      </div>
    </div>
  );
}

export default StockTile;

//  {/* Details Row */}
//       <div className="flex-row flex space-x-5 w-full ">
//         {/* High price */}
//         <div className="flex-col flex text-xs text-green-500">
//           <h1>Highest</h1>
//           <span>{props.h}</span>
//         </div>
//         {/* Low price */}
//         <div className="flex-col flex text-xs text-red-500 hover:dark:text-red-300">
//           <h1>Lowest </h1>
//           <span className="">{props.l}</span>
//         </div>
//         {/* open price */}
//         <div className="flex-col flex text-xs">
//           <h1>Open </h1>

//           <span className="">{props.o}</span>
//         </div>
//         {/* open price */}
//         <div className="flex-col flex text-xs">
//           <h1> Close</h1>
//           <span className="">{props.pc}</span>
//         </div>
//         {/* Difference in percentage */}
//         <div className="flex-col flex text-lg items-end justify-end flex-1  text-right ">
//           <span
//             className={`${props.dp > 0 ? "text-green-600" : "text-red-500  "}`}
//           >
//             {props.dp}
//           </span>
//         </div>
//       </div>
