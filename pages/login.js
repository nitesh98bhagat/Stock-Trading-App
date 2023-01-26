import { useTheme } from "next-themes";
import React from "react";
import { BsFillSunFill } from "react-icons/bs";

function LoginScreen() {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* <BsFillSunFill
        onClick={() => setTheme("dark")}
        className="cursor-pointer text-black dark:text-white"
      /> */}

      <div className="container w-1/3 bg-zinc-100 dark:bg-zinc-900 p-3 rounded-lg flex flex-col ">
        <p className="text-sm">Email:</p>
        <input type="email" placeholder="Email " className="p-2" />
        <p className="text-sm">Email:</p>
        <input type="password" placeholder="Password " className="p-2 my-1" />
        <button className="bg-purple-700 p-2">Login</button>
      </div>
    </div>
  );
}

export default LoginScreen;
