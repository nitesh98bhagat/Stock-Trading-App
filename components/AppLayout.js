import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillShopping,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

import { IoMdArrowDropdown } from "react-icons/io";
import { MdSettings, MdSpaceHomeTab } from "react-icons/md";
import Header from "../components/Header";
import MyPortfolioTab from "../components/TabBarView/MyPortfolioTab";
import HomeTab from "../components/TabBarView/HomeTab";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

function AppLayout({ children }) {
  // This is to handle sidebar's change menu funtionality
  const [menuIndex, setMenuIndex] = useState(0);

  const router = useRouter();
  const showHeader =
    router.pathname === "/login"
      ? false
      : true && router.pathname === "/404"
      ? false
      : true;

  return (
    <div className="flex-row flex min-h-screen relative justify-start items-start">
      {/* sidebar */}
      {showHeader && (
        <div className="flex-col hidden md:flex w-1/6 sticky top-0 min-h-screen  border-r border-zinc-100 dark:border-zinc-800">
          <h1 className="text-xl mx-8 my-3  flex items-center space-x-1">
            <span className="bg-purple-500 text-white px-2 py-0.5 rounded-lg  font-bold italic flex w-fit items-center space-x-1">
              <BsFillArrowUpCircleFill />
              <span>Stock</span>
            </span>
            <span>.ly</span>
          </h1>

          {[
            { title: "Home", icon: <AiFillHome size={20} /> },
            { title: "My Portfolio", icon: <AiOutlineUser size={20} /> },
            { title: "Watch list", icon: <AiOutlineEye size={20} /> },
          ].map((e, i) => (
            <button
              key={i}
              onClick={() => setMenuIndex(i)}
              className={`py-2 w-full flex flex-row items-center sm:px-2 md:px-3 lg:px-8 space-x-2 ${
                menuIndex === i &&
                "bg-purple-300 dark:bg-purple-600 border-r-4  border-purple-800"
              } dark:hover:bg-purple-800/20 hover:bg-purple-200 cursor-pointer`}
            >
              {e.icon ?? ""}
              <span>{e.title}</span>
            </button>
          ))}
          <div className="mt-auto"></div>

          <div className="relative w-full">
            <Menu>
              <Menu.Button className="w-full">
                <div className="flex-row flex  items-center justify-around mt-auto p-2 bg-zinc-100 dark:bg-zinc-900 rounded-xl m-2">
                  <div className="flex-col flex justify-start items-start">
                    <p className="text-xs">Signed in as</p>
                    <h1 className="text-sm">Nitesh Bhagat</h1>
                  </div>
                  <Image
                    src={"/defaultUser.jpg"}
                    width={40}
                    height={30}
                    alt="user_dp"
                    className="rounded-full ml-auto"
                  />
                  <IoMdArrowDropdown />
                </div>
                {/*  */}
              </Menu.Button>
              <div className="absolute bottom-16 w-full">
                <Menu.Items className=" flex-col flex mx-2   shadow-2xl border border-zinc-300 dark:border-zinc-700  rounded-md overflow-hidden">
                  {[
                    { title: "My Profile", icon: <AiOutlineUser size={20} /> },

                    { title: "Settings ", icon: <MdSettings size={20} /> },
                  ].map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={link.href} as={Fragment}>
                      {({ active }) => (
                        <div
                          className={`py-1 px-3 flex flex-row items-center space-x-1 cursor-pointer ${
                            active && "bg-zinc-200 dark:bg-zinc-700"
                          } ${!active && "bg-zinc-100 dark:bg-zinc-800 "}`}
                        >
                          {link.icon}
                          <span>{link.title}</span>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </div>
            </Menu>
          </div>
        </div>
      )}

      {/* Main Area */}
      <div className="flex-col flex flex-grow">
        {/* header */}
        {showHeader && <Header />}

        {children}
      </div>
    </div>
  );
}

export default AppLayout;
