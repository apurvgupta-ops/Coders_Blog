import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="image" width={35} height={35} />
          <span className="font-bold">Coders Blog</span>
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="text-gray-400 font-bold">
            <a href="#">Products</a>
          </li>
          <li className="text-gray-400 font-bold">
            <a href="#">Pricing</a>
          </li>
          <li className="text-gray-400 font-bold">
            <a href="#">Docs</a>
          </li>
          <li className="text-gray-400 font-bold">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <ul className="flex items-center gap-4">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          <Link
            href="/login"
            className="bg-primary hover:bg-primary-dark py-1 px-3 rounded-sm text-white"
          >
            Login
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
          <Link
            href="#"
            className="bg-primary hover:bg-primary-dark py-1 px-3 rounded-sm text-white"
          >
            Sign Up
          </Link>
        </motion.button>
      </ul>
    </nav>
  );
};

export default Header;
