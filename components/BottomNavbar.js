import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineEye, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsCollection, BsFillCollectionFill } from "react-icons/bs";

function BottomNavbar() {
  const router = useRouter();
  const currentMenuIndex = router.pathname;

  return (
    <div className="flex flex-row sm:hidden sticky  bottom-0 w-full bg-zinc-50 dark:bg-zinc-800 justify-around p-2">
      {[
        { title: "Home", icon: <AiOutlineHome size={22} />, link: "/" },
        {
          title: "My Portfolio",
          icon: <BsCollection size={22} />,
          link: "/my-portfolio",
        },
        {
          title: "Watch list",
          icon: <AiOutlineEye size={22} />,
          link: "/watchlist",
        },
        {
          title: "My Account",
          icon: (
            <Image
              src={"/defaultUser.jpg"}
              width={25}
              height={22}
              alt="user_dp"
              className="rounded-full"
            />
          ),
          link: "/my-account",
        },
      ].map((e) => (
        <Link key={e.link} href={e.link}>
          <div
            className={`flex-col flex justify-center items-center text-zinc-700 dark:text-zinc-400 ${
              currentMenuIndex === e.link &&
              "text-purple-900 dark:text-white  font-black"
            }`}
          >
            {e.icon}
            <span className="text-[10px]">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BottomNavbar;
