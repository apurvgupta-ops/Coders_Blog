import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-full h-[525px] ">
      <div className="bg-slate-100  w-[70%] rounded-lg h-full grid grid-cols-2">
        {/* Right */}
        <div className=" flex justify-center items-center object-contain pt-10 pb-10">
          <Image
            src="/login2.jpg"
            alt="image"
            width={350}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* Left */}
        <div className="pt-10 pb-10 w-full  flex flex-col items-start justify-center gap-5 ">
          <h2 className="text-2xl font-extrabold mx-auto">Sign Up</h2>
          <div className="flex flex-col w-[90%] gap-6 mx-auto ">
            <div className="flex gap-2">
              <input
                placeholder="First Name"
                type="email"
                className="p-2 rounded-sm outline-none bg-transparent border-b-2 w-[50%]"
              />
              <input
                placeholder="Last Name"
                type="email"
                className="p-2 rounded-sm outline-none bg-transparent border-b-2"
              />
            </div>
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
            <input
              placeholder="Confirm Password"
              type="password"
              className="p-2 rounded-sm outline-none bg-transparent border-b-2"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            className="bg-green-300 mx-auto w-[40%] px-2 py-1 rounded-md hover:bg-green-600 hover:text-white"
          >
            <Link href={"/"}>Signup</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
