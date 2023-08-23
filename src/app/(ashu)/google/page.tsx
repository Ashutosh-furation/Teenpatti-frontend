'use client';

import { useEffect } from "react";
import { useRouter } from "next/router";
// import firebase from "../../firebase";

const page = () => {
//   const router = useRouter();

  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      router.push("/"); // Redirect after successful sign-in
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    // Check if user is already signed in
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     router.push("/"); // Redirect if user is already signed in
    //   }
    // });
    // return () => unsubscribe();
  }, []);

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
    </div>
  );
};

export default page;
