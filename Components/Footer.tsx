import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center border-r-2 pr-3">
            <Image src="/logo.png" alt="image" width={35} height={35} />
            <span className="font-bold">Coders Blog</span>
          </Link>
          <p className="">Coders @2023</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Link href={"/"}>
            <FaFacebook />
          </Link>
          <Link href={"/"}>
            <RiWhatsappFill />
          </Link>
          <Link href={"/"}>
            <AiFillLinkedin />
          </Link>
          <Link href={"/"}>
            <BsGithub />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
