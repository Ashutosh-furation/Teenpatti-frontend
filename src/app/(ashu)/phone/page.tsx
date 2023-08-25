
'use client'

import { UserAuth } from '@/app/context/AuthContext';
import React, { useState } from "react";
import {auth} from "../../Firebase/firebase"

const page: React.FC = () => {
  const [number, setNumber] = useState("");
 const [error, setError] = useState("");



  const handleSendCode = async () => {
   
  };

  console.log("number", number);

  const handleSignIn = async () => {
    
  };

  return (
    <div className="auth-container">
      <h1>Phone phoneNumber Authentication</h1>

      <input
        type="tel"
        placeholder="Enter your phone phoneNumber"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleSendCode}>Send Verification Code</button>
      {/* <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button> */}
      <p>{error}</p>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default page;


