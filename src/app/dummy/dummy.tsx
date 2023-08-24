"use client";

import { UserAuth } from "@/app/context/AuthContext";
import React, { useState } from "react";
import { auth } from "../../Firebase/firebase";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "../../firebaseConfig";

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const page: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [message, setMessage] = useState("");

  const { SetupRecaptcha } = UserAuth();
  //  console.log( "set", SetupRecaptcha)

  const handleSendCode = async () => {
    // try {
    //   const confirmationResult = await firebase
    //     .auth()
    //     .signInWithPhoneNumber(phoneNumber);
    //   setVerificationId(confirmationResult.verificationId);
    //   setMessage("Verification code sent!");
    // } catch (error) {
    //   setMessage("Error sending verification code.");
    // }
    try {
      const response = await SetupRecaptcha(phoneNumber);
      console.log(response);
      setMessage("Verification code sent!");
      //  setResult(response);
      //  setFlag(true);
    } catch (err) {
      //  setError(err.message);
      setMessage("Error sending verification code.");
      // console.log(err)
    }
  };

  const handleSignIn = async () => {
    // try {
    //   const credential = firebase.auth.PhoneAuthProvider.credential(
    //     verificationId,
    //     verificationCode
    //   );
    //   await firebase.auth().signInWithCredential(credential);
    //   setMessage("Successfully authenticated!");
    // } catch (error) {
    //   setMessage("Error authenticating.");
    // }
  };

  return (
    <div className="auth-container">
      <h1>Phone Number Authentication</h1>

      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendCode}>Send Verification Code</button>
      {/* <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button> */}
      <p>{message}</p>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default page;

// // src/components/PhoneNumberInput.tsx
// import React, { useState } from 'react';
// interface formdata{
//    number:number
// }

// const page: React.FC = () => {
//   const [number, setPhoneNumber] = useState <formdata>(0);
//   const { user, SetupRecaptcha } = UserAuth();
//   const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleSubmit =  async (event: React.FormEvent) => {
//     event.preventDefault();
//       try{
//      const res =    await SetupRecaptcha(number)
//         console.log(res)
//       }catch(err){
//         console.log(err)
//       }
//    };

//   console.log("phone", number);
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
//         <label className="block mb-2 font-medium" htmlFor="phone">
//           Phone Number
//         </label>
//         <input
//           type="tel"
//           id="phone"
//           value={number}
//           onChange={handlePhoneNumberChange}
//           className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
//           placeholder="Enter your phone number"
//           required
//         />
//         <div id="recaptcha-container">captcha</div>
//         <button
//           type="submit"
//           className="mt-4 w-full p-2 bg-blue-500 text-white rounded"
//         >
//           Continue
//         </button>
//       </form>
//     </div>
//   );
// };

// export default page;
