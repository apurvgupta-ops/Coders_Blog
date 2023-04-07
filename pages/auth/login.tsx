import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-[525px] ">
      <div className="bg-slate-100  w-[70%] rounded-lg h-auto grid grid-cols-2">
        {/* Right */}
        <div className="flex flex-col justify-center items-center object-contain pt-10 pb-10">
          <Image
            src="/login4.jpg"
            alt="image"
            width={350}
            height={400}
            className="rounded-lg"
          />
          <Link
            className="mt-12 hover:decoration-2 hover:underline hover:decoration-primary hover:cursor-pointer "
            href={"/auth/signup"}
          >
            Create Account
          </Link>
        </div>
        {/* Left */}
        <div className="pt-10 pb-10 mx-auto flex flex-col justify-center gap-5 w-full">
          <h2 className="text-2xl font-extrabold mx-auto">Log In</h2>
          <div className="flex flex-col gap-5 w-[80%] mx-auto">
            <input
              placeholder="Your Email"
              type="email"
              className="p-2 rounded-sm outline-none bg-transparent border-b-2"
            />
            <input
              placeholder="Password"
              type="password"
              className="p-2 rounded-sm outline-none bg-transparent border-b-2"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            className="bg-green-300 px-2 py-1 rounded-md hover:bg-green-600 hover:text-white mx-auto w-[40%] "
          >
            <Link href={"/"}>Log In</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Login;
