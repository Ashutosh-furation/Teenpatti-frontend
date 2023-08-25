"use client";

import { UserAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";

const page = () => {
  const {  googleSignIn, logOut } = UserAuth();

  const handleSignInWithGoogle = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
   

  return (
    <div className="flex border-2 w-[60%] m-auto border-red-700 items-center justify-center h-screen">
   
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-xl mb-4">Sign in with Google</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            onClick={handleSignInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
     
        <div>
          {/* <h1>welcome page {user.displayName} </h1> */}
          <h1 onClick={handleSignOut} className="border-2 border-green-500">
            {" "}
            SignOut{" "}
          </h1>
        </div>
     
    </div>
  );
};

export default page;
