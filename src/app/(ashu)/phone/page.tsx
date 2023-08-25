
// 'use client'

// import { UserAuth } from '@/app/context/AuthContext';
// import React, { useState } from "react";
// import {auth} from "../../Firebase/firebase"

// const page: React.FC = () => {
//   const [number, setNumber] = useState("");
//  const [error, setError] = useState("");
//   const [result, setResult] = useState("");
//    const [flag, setFlag] = useState(false);
//   const {SetupRecaptcha} = UserAuth()
//   //  console.log( "set", SetupRecaptcha)

//   const handleSendCode = async () => {
//     //  console.log(phoneNumber);
//      setError("");
//      if (number === "" || number === undefined)
//        return setError("Please enter a valid phone phoneNumber!");
//      try {
//        const response = await SetupRecaptcha(number);
//        setResult(response);
//        setFlag(true);
//      } catch (err){
//       //  console.log(err)
//        setError("err");
//      }
    
//   };

//   console.log("number", number);

//   const handleSignIn = async () => {
    
//   };

//   return (
//     <div className="auth-container">
//       <h1>Phone phoneNumber Authentication</h1>

//       <input
//         type="tel"
//         placeholder="Enter your phone phoneNumber"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button onClick={handleSendCode}>Send Verification Code</button>
//       {/* <input
//         type="text"
//         placeholder="Enter verification code"
//         value={verificationCode}
//         onChange={(e) => setVerificationCode(e.target.value)}
//       />
//       <button onClick={handleSignIn}>Sign In</button> */}
//       <p>{error}</p>
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };

// export default page;




// // // src/components/PhonephoneNumberInput.tsx
// // import React, { useState } from 'react';
// // interface formdata{
// //    phoneNumber:phoneNumber
// // }

// // const page: React.FC = () => {
// //   const [phoneNumber, setPhonephoneNumber] = useState <formdata>(0);
// //   const { user, SetupRecaptcha } = UserAuth();
// //   const handlePhonephoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     setPhonephoneNumber(event.target.value);
// //   };

// //   const handleSubmit =  async (event: React.FormEvent) => {
// //     event.preventDefault();
// //       try{
// //      const res =    await SetupRecaptcha(phoneNumber)
// //         console.log(res)
// //       }catch(err){
// //         console.log(err)
// //       }
// //    };

// //   console.log("phone", phoneNumber);
// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
// //         <label className="block mb-2 font-medium" htmlFor="phone">
// //           Phone phoneNumber
// //         </label>
// //         <input
// //           type="tel"
// //           id="phone"
// //           value={phoneNumber}
// //           onChange={handlePhonephoneNumberChange}
// //           className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
// //           placeholder="Enter your phone phoneNumber"
// //           required
// //         />
// //         <div id="recaptcha-container">captcha</div>
// //         <button
// //           type="submit"
// //           className="mt-4 w-full p-2 bg-blue-500 text-white rounded"
// //         >
// //           Continue
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default page;
