import Link from "next/link";
import React from "react";
import { FaHeartBroken } from "react-icons/fa";

function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <FaHeartBroken size={150} />
      <h1 className="text-6xl font-bold">Hmm, Sorry</h1>
      <h1 className="text-2xl font-bold">
        We can't find what you are looking for.
      </h1>
      <Link href={"/"}>
        <button className="p-2 bg-purple-800 rounded-lg my-5">
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
