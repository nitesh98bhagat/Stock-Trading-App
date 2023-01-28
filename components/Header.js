import { Combobox } from "@headlessui/react";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";

function Header() {
  const people = [
    { id: 1, name: "Apple Inc", symbol: "APPL" },
    { id: 2, name: "Meta Platforms, Inc.(Facebook)", symbol: "META" },
    { id: 3, name: "Microsoft Corporation", symbol: "MSFT" },
    { id: 4, name: "Alphabet Inc (Google)", symbol: "GOOG" },
    { id: 5, name: "Tesla, Inc.", symbol: "TSLA" },
    { id: 6, name: "NVIDIA Corporation", symbol: "NVDA" },
    { id: 7, name: "Intel Corporation", symbol: "INTC" },
    { id: 8, name: "Alibaba Group Holding Limited", symbol: "BABA" },
    { id: 9, name: "Salesforce, Inc.", symbol: "CRM" },
    { id: 10, name: "Advanced Micro Devices, Inc.", symbol: "AMD" },
    { id: 11, name: "PayPal Holdings, Inc.", symbol: "PYPL" },
    { id: 12, name: "Electronic Arts Inc.", symbol: "EA" },
    { id: 13, name: "Match Group, Inc.", symbol: "MTCH" },
    { id: 14, name: "The Trade Desk, Inc.", symbol: "TTD" },
    { id: 15, name: "Activision Blizzard, Inc.", symbol: "ATVI" },
    { id: 16, name: "Amazon.com, Inc.", symbol: "AMZN" },
  ];

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = async (e) => {
    setSelectedPerson(e);
  };

  const { systemTheme, theme, setTheme } = useTheme();

  // This is to determine whether components are mounted or not, so that it can show change theme button
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="flex flex-row items-center justify-center space-x-2  cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <span>Light Mode</span>
          <BsFillSunFill />
        </button>
      );
    } else {
      return (
        <button
          className="flex flex-row items-center justify-center space-x-2  cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <span>Dark Mode</span>
          <BsFillMoonFill />
        </button>
      );
    }
  };

  return (
    <nav className=" flex sticky top-0 bg-white dark:bg-neutral-900  z-50 flex-row items-center justify-start w-full  p-1 border-b border-zinc-100  dark:border-slate-800 ">
      {/* search bar */}
      {
        <div className="flex-row flex  items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md sm:w-1/2 md:w-1/3  mr-auto    focus-within:flex-grow  focus-within:ring-purple-300/30 focus-within:ring-1 relative">
          <Combobox
            value={selectedPerson}
            onChange={(e) => handleOnChangeCombobox(e)}
          >
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
              onClick={() => setSelectedPerson("")}
            >
              <MdClear />
            </Combobox.Button>
            <Combobox.Options className="absolute w-full top-10   ">
              {query === ""
                ? people.id
                : people
                    .filter((person) => {
                      return (
                        person.name
                          .toLowerCase()
                          .includes(query.toLowerCase()) ||
                        person.symbol
                          .toLowerCase()
                          .includes(query.toLowerCase())
                      );
                    })
                    .splice(0, 8)
                    .map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item.name}
                        className={({ active }) =>
                          `relative cursor-default flex space-x-3 select-none py-2  pl-10 pr-4 text-zinc-900 dark:text-zinc-400 shadow-lg ${
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
