import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import firebase from "firebase/app";

// type User = firebase | null;
interface AuthContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

interface AuthContextType {
  // user: User;
  googleSignIn: () => void;
  AppleSignin: () => void;
  logOut: () => void;
}
 interface AuthUserData {
  user: string;
}

const AuthContext = createContext < AuthContextType> ({} as AuthContextType);

export  function AuthContextProvider ({ children ,
}:AuthContextProviderProps){  

   const [user, SetUser] = useState<AuthUserData | null>();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const AppleSignin = () => {
    const Appleprovider = new OAuthProvider("apple.com");
    signInWithPopup(auth, Appleprovider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // SetUser(currentUser);
      console.log("yser",currentUser)
    });
    return () => unsubscribe();
  }, []);

  // const SetupRecaptcha = (number: string): Promise<void> => {
  //   // const recaptchaVerifier = new RecaptchaVerifier(
  //   //   "recaptcha-container",
  //   //   {},
  //   //   auth
  //   // );

  //   // recaptchaVerifier.render();
  //   // return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  // };

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut,  AppleSignin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => useContext(AuthContext);

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };

// export const useUserAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useUserAuth must be used within an AuthContextProvider");
//   }
//   return context;
// };

// import { useContext, createContext, useState, useEffect } from "react";
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   OAuthProvider
// } from "firebase/auth";
// import { auth } from "../Firebase/firebase";

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   //   console.log("user",user)

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   const AppleSignin = () => {
//     const Appleprovider = new OAuthProvider("apple.com");
//     signInWithPopup(auth, Appleprovider);
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [user]);

//   const SetupRecaptcha = (number) => {
//     const recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {},
//       auth
//     );

//     recaptchaVerifier.render();
//      return signInWithPhoneNumber(auth, number, recaptchaVerifier);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, googleSignIn, logOut, SetupRecaptcha, AppleSignin }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
