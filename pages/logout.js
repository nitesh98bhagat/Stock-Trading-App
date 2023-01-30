import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { auth } from "../firebaseConfig";

function Logout() {
  const router = useRouter();

  useEffect(() => {
    auth.signOut();

    router.push("/login");
  }, []);

  return <div>Logging out</div>;
}

export default Logout;
