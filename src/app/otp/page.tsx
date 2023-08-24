'use client'

import Link from "next/link";
import React, {useState} from "react";

const page = () => {
  const [otp, setOtp] = useState("");

//   const verifyOtp = async (e):any => {
//     e.preventDefault();
//     // setError("");
//     if (otp === "" || otp === null) return;
//     try {
//     const ans =  await result.confirm(otp);
//     //   navigate("/home");
//    console.log(ans)
//     } catch (err) {
//     //   setError(err.message);
//      console.log(err)
//     }
//   };
   const verifyOtp = async (
     e: React.FormEvent<HTMLFormElement>
   ): Promise<void> => {
     e.preventDefault();

     if (otp === "" || otp === null) return;

     try {
       const ans = await result.confirm(otp);
       // navigate("/home");
       console.log(ans);
     } catch (err) {
       // setError(err.message);
       console.log(err);
     }
   };

  return (
    <div>
      <form onSubmit={verifyOtp} >
        {/* <label className="mb-3" controlId="formBasicOtp"> */}
        <input
          type="otp"
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />
        {/* </form.Group> */}
        <div className="button-right">
          &nbsp;
          <button type="submit">Verify</button>
        </div>
      </form>
    </div>
  );
};

export default page;
