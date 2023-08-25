'use client';

import React, { useEffect } from 'react'
import { UserAuth } from "@/app/context/AuthContext";

const page = () => {
 const {  AppleSignin, logOut } = UserAuth();
  

   const handleAppleSignIn = async () => {
     try {
           await AppleSignin();
      //  console.log("Successfully logged in")
     } catch (error) {
      return "error"
       console.log("Apple Sign-In Error:", error);
     }
   };
    

  return (
    <div className="border-2 max-w-4xl mx-auto relative top-[50%] border-red-500">
      <h1 className="border-2 text-center text-lg m-auto text-rose-700">Apple Sign-In</h1>
      <div
        className="border-2 w-10 h-[20vh] m-auto"
        id="firebaseui-auth-container"
      >
        <button className="border-2 w-20 h-[20vh]
          bg-black text-white" onClick={handleAppleSignIn}>
          {" "}
          Sign in with Appple{" "}
        </button>
      </div>
    </div>
  );
}

export default page

