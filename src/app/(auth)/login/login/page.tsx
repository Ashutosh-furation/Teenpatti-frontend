"use client";

// import Button from "@/components/ui/Button";
import { FC, useState } from "react";
// import { signIn } from "next-auth/react";
// import { toast } from "react-hot-toast";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    // setIsLoading(true);
    // try {
    //   await signIn("google");
    // } catch (error) {
    //   toast.error("something went wrong with your login");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      <div className="border-2 m-auto border-green-600 min-h-full items-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full border-2 border-yellow-600 m-auto items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>

        <div className="border-2 border-red-700 w-[40%] h-[70vh]  m-auto ">
          <div className="bg-gray-100  flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h1 className="text-2xl font-semibold mb-4">Login</h1>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
