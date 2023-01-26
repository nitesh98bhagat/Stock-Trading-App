import { Combobox } from "@headlessui/react";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";

function Header() {
  const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
    { id: 6, name: "Tanmay Bhatt" },
    { id: 7, name: "Abhimanuyu Uday" },
    { id: 8, name: "Akash Gupta" },
    { id: 9, name: "Nikhil Sharma" },
    { id: 10, name: "Gaurav Chaudhary" },
    { id: 11, name: "Carryminati" },
    { id: 12, name: "Gaurav Taneja" },
    { id: 13, name: "Nikhil Gupta" },
  ];

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = async (e) => {
    setSelectedPerson(e);

    // router.push(`/${e}`);
  };

  // const handleSearch = async (event) => {
  //   setQuery(`"${event.target.value}"`);
  // };

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
        <BsFillSunFill
          onClick={() => setTheme("light")}
          className="cursor-pointer text-black dark:text-white"
        />
      );
    } else {
      return (
        <BsFillMoonFill
          onClick={() => setTheme("dark")}
          className="text-black cursor-pointer"
        />
      );
    }
  };

  return (
    <nav className=" flex sticky top-0 bg-white dark:bg-neutral-900  z-50 flex-row items-center justify-start w-full  p-1 border-b border-zinc-100  dark:border-slate-800 ">
      {/* search bar */}
      {
        <div className="flex-row flex  items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md  w-1/5  mr-auto    focus-within:flex-grow  focus-within:ring-purple-300/30 focus-within:ring-1 relative">
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
                      return person.name
                        .toLowerCase()
                        .includes(query.toLowerCase());
                    })
                    .splice(0, 8)
                    .map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item.name}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 text-zinc-900 dark:text-zinc-400 shadow-lg ${
                            active
                              ? "bg-zinc-200 dark:bg-zinc-800"
                              : "bg-zinc-100 dark:bg-zinc-900 "
                          }`
                        }
                      >
                        {item.name}
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
