import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-[525px] ">
      <div className="bg-slate-100 flex w-[70%] rounded-lg h-[80%]">
        {/* Right */}
        <div className="w-[50%] flex justify-center items-center object-contain pt-10 pb-10">
          <Image
            src="/login2.jpg"
            alt="image"
            width={350}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* Left */}
        <div className="pt-10 pb-10 mx-auto flex flex-col items-start justify-center gap-5">
          <h2 className="text-2xl font-extrabold ">Log In</h2>
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

          <button className="bg-green-300 px-2 py-1 rounded-md hover:bg-green-600 hover:text-white">
            <Link href={"/"}>Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
