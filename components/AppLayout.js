import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import {
  AiFillBug,
  AiOutlineHome,
  AiFillShopping,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

import { IoMdArrowDropdown } from "react-icons/io";
import { MdSettings, MdSpaceHomeTab } from "react-icons/md";
import Header from "../components/Header";

import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import BottomNavbar from "./BottomNavbar";
import { auth } from "../firebaseConfig";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

function AppLayout({ children }) {
  // This is to handle sidebar's change menu funtionality

  const router = useRouter();
  const currentMenuIndex = router.pathname;

  const showHeader =
    router.pathname === "/login"
      ? false
      : true && router.pathname === "/404"
      ? false
      : true && router.pathname === "/signup"
      ? false
      : true;

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex-row flex min-h-screen  justify-start items-start">
      {/* sidebar */}
      {showHeader && (
        <div className="flex-col hidden md:flex w-1/6 sticky top-0 min-h-screen  border-r border-zinc-100 dark:border-zinc-800">
          <h1 className="text-xl mx-8 my-3  flex items-center space-x-1">
            <span className="bg-purple-800 text-white px-2 py-0.5 rounded-lg  font-bold italic flex w-fit items-center space-x-1">
              <BsFillArrowUpCircleFill />
              <span>Stock</span>
            </span>
            <span>.ly</span>
          </h1>

          {[
            { title: "Home", icon: <AiOutlineHome size={20} />, link: "/" },
            {
              title: "My Portfolio",
              icon: <AiOutlineUser size={20} />,
              link: "/my-portfolio",
            },
            {
              title: "Watch list",
              icon: <AiOutlineEye size={20} />,
              link: "/watchlist",
            },
          ].map((e, i) => (
            <Link key={i} href={e.link}>
              <button
                className={`py-2 w-full flex flex-row items-center sm:px-2 md:px-3 lg:px-8 space-x-2 ${
                  currentMenuIndex === e.link &&
                  "bg-purple-300 dark:bg-purple-600 border-r-4  border-purple-800"
                } dark:hover:bg-purple-800/20 hover:bg-purple-200 cursor-pointer`}
              >
                {e.icon ?? ""}
                <span>{e.title}</span>
              </button>
            </Link>
          ))}
          <div className="mt-auto"></div>

          <div className="relative w-full">
            <Menu>
              <Menu.Button className="w-full">
                <div className="flex-row flex  items-center justify-around mt-auto p-2 bg-zinc-100 dark:bg-zinc-900 rounded-xl m-2">
                  <div className="flex-col flex justify-start items-start">
                    <p className="text-xs">Signed in as</p>
                    <h1 className="text-sm">{!loading && user?.displayName}</h1>
                  </div>
                  <Image
                    src={user?.photoURL ?? "/defaultUser.jpg"}
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
                    {
                      title: "Testing",
                      icon: <AiFillBug size={20} />,
                      link: "/testing",
                    },
                    {
                      title: "My Profile",
                      icon: <AiOutlineUser size={20} />,
                      link: "/my-account",
                    },

                    {
                      title: "Settings ",
                      icon: <MdSettings size={20} />,
                      link: "/settings",
                    },
                    {
                      title: "Logout ",
                      icon: <FaSignOutAlt size={20} />,
                      link: "/logout",
                    },
                  ].map((e) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={e.href} as={Fragment}>
                      {({ active }) => (
                        <Link href={e.link}>
                          <div
                            className={`py-1 px-3 flex flex-row items-center space-x-1 cursor-pointer ${
                              active && "bg-zinc-200 dark:bg-zinc-700"
                            } ${!active && "bg-zinc-100 dark:bg-zinc-800 "}`}
                          >
                            {e.icon}
                            <span>{e.title}</span>
                          </div>
                        </Link>
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
        <div className="min-h-screen">{children}</div>
        {showHeader && <BottomNavbar />}
      </div>
    </div>
  );
}

export default AppLayout;
