import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillArrowUpCircleFill, BsFillSunFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

function LoginScreen() {
  const router = useRouter();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, loading] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const result = await signInWithRedirect(auth, googleProvider);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    router.push("/");
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-5">
      <div className="container w-full sm:w-1/3 bg-zinc-100 dark:bg-zinc-900 p-3 rounded-lg flex flex-col ">
        {/* logo */}

        <h1 className="text-3xl mx-auto  flex items-center space-x-1 pt-5">
          <span className="bg-purple-800 text-white px-2 py-1 rounded-lg  font-bold italic flex w-fit items-center space-x-1">
            <BsFillArrowUpCircleFill />
            <span>Stock</span>
          </span>
          <span>.ly</span>
        </h1>
        <p className="mx-auto text-sm py-2">Stock your happiness</p>

        {/* form */}

        <button
          className="bg-purple-700 p-2 my-4 flex flex-row justify-center items-center space-x-3 rounded-xl"
          onClick={signInWithGoogle}
        >
          <FcGoogle size={30} />
          <span>Continue with Google</span>
        </button>
        <span>
          By clicking on <b>Continue</b> {"You're"} Agreed to
          <b>Terms & Condition</b>,
          <Link href={"/terms-and-condition"}>
            <span className="dark:text-purple-500 px-1 font-semibold">
              click here
            </span>
          </Link>
          to read them.
        </span>
      </div>
    </div>
  );
}

export default LoginScreen;
