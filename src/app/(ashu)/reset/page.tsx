"use client";

import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/Firebase/firebase";

interface Auth {
  sendPasswordResetEmail: string;
}

const page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [resetSent, setResetSent] = useState<boolean>(false);
 

  const handleReset = async () => {
    if (email.trim() !== "") {
      try {
       
        await sendPasswordResetEmail(auth, email);

        setResetSent(true);
      } catch (error) {
        console.error("Error sending password reset email", error);
      }
    }
  };

  return (
    <div className="border-2 border-green-800">
      <h2>Reset Password</h2>
      {resetSent ? (
        <p>Password reset email sent. Check your inbox.</p>
      ) : (
        <div className="border-2  w-[30%] h-[40vh] m-auto border-red-800  justify-center">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleReset}
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Send Reset Email
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
