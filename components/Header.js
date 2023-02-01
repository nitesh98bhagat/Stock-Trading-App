import { Combobox } from "@headlessui/react";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

import { BiSearch } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { useSelector } from "react-redux";

function Header() {
  const stockList = useSelector((state) => state.stockList.predefinedStockList);

  const [selectedStock, setSelectedStock] = useState({});
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = async (e) => {
    console.log("Header", e);
    setSelectedStock(e);
  };

  const { systemTheme, theme, setTheme } = useTheme();

  // This is to determine whether components are mounted or not, so that it can show change theme button
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // THIS code will render a change theme button
  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex flex-row items-center justify-center space-x-2  cursor-pointer "
          onClick={() => setTheme("light")}
        >
          <span className="hidden sm:block ">Light Mode</span>
          <BsFillSunFill
            className="bg-zinc-100 dark:bg-zinc-700 rounded-full p-1 mr-2"
            size={25}
          />
        </button>
      );
    } else {
      return (
        <button
          className="flex flex-row items-center justify-center space-x-2  cursor-pointer "
          onClick={() => setTheme("dark")}
        >
          <span className="hidden sm:block ">Dark Mode</span>
          <BsFillMoonFill
            className="bg-zinc-100 dark:bg-zinc-700 rounded-full m-1 p-1"
            size={25}
          />
        </button>
      );
    }
  };

  return (
    <nav className=" flex sticky top-0 bg-white dark:bg-neutral-900  z-50 flex-row items-center justify-start w-full space-x-2 sm:px-10 px-3 py-2 border-b border-zinc-100  dark:border-slate-800 ">
      {/* search bar */}
      {
        <div className="flex-row flex  items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md w-full sm:w-1/2 md:w-1/3  mr-auto    focus-within:flex-grow  focus-within:ring-purple-300/30 focus-within:ring-1 relative">
          <Combobox value={selectedStock} onChange={handleOnChangeCombobox}>
            <Combobox.Button className="pr-2">
              <BiSearch />
            </Combobox.Button>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="focus-ring outline-none bg-transparent flex-1"
              placeholder="Search..."
              type="text"
              autoComplete="off"
            />

            <Combobox.Button
              className="absolute inset-y-0 right-0 flex items-center pr-2"
              onClick={() => setSelectedStock({})}
            >
              <MdClear />
            </Combobox.Button>
            <Combobox.Options className="absolute w-full top-10   ">
              {query === ""
                ? stockList.id
                : stockList
                    .filter((e) => {
                      return (
                        e.name.toLowerCase().includes(query.toLowerCase()) ||
                        e.symbol.toLowerCase().includes(query.toLowerCase())
                      );
                    })
                    .splice(0, 8)
                    .map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item.name}
                        className={({ active }) =>
                          `relative cursor-default flex space-x-3 select-none py-2  pl-5 pr-4 text-zinc-900 dark:text-zinc-400 shadow-lg ${
                            active
                              ? "bg-zinc-200 dark:bg-zinc-800"
                              : "bg-zinc-100 dark:bg-zinc-900 "
                          }`
                        }
                      >
                        <span className="font-bold text-black dark:text-white">
                          {item.symbol} -
                        </span>
                        <span>{item.name}</span>
                      </Combobox.Option>
                    ))}
            </Combobox.Options>
          </Combobox>
        </div>
      }

      {renderThemeChanger()}
    </nav>
  );
}

export default Header;
