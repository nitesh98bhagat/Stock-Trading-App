import { getAuth } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function MyAccountPage() {
  const auth = getAuth();

  const [user, loading] = useAuthState(auth);

  return (
    <div className="min-h-screen flex flex-row p-5 w-full space-x-5">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className=" flex-col flex items-start flex-1 ">
          <Image
            src={user?.photoURL ?? "/defaultUser.jpg"}
            width={100}
            height={100}
            alt="user_dp"
            className="rounded-full "
          />

          <h1>{user?.displayName}</h1>
          <h1 className="text-sm">{user?.email}</h1>
          <button className="bg-purple-700 px-16 py-1 my-3">Edit</button>

          <div className="flex-col flex border w-full dark:border-zinc-600 p-2 my-4 space-y-2 rounded-lg overflow-hidden">
            {["Account ", "Security", "Notifications", "Help"].map((e) => (
              <p
                key={e}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                {e}
              </p>
            ))}
          </div>
        </div>
      )}
      {/* FAQs */}
      <div className="w-1/3 hidden sm:flex flex-col space-y-2 ">
        <h1 className="text-xl">FAQ</h1>
        {[
          "Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nesciunt?",
          "Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nesciunt?",
          "Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nesciunt?",
          "Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nesciunt?",
          "Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nesciunt?",
          "Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nesciunt?",
        ].map((e) => (
          <p key={e} className="text-blue-400 cursor-pointer hover:underline">
            {e}
          </p>
        ))}
        <button>More Question</button>
      </div>
    </div>
  );
}

export default MyAccountPage;
