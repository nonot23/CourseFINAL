import React from "react";
import { SiCoursera } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="shadow-md  font-roboto bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-60 lg:gap-x-32 gap-y-5 md:gap-y-10 space-y-10">
          <div>
            <div className="flex items-center mb-2 gap-2 text-2xl dark:text-white text-[var(--color-primary)] font-bold">
              <SiCoursera />
              <h1 className="whitespace-nowrap">Online Course</h1>
            </div>
            <p className="ml-1 whitespace-nowrap">คอร์สเรียนออนไลน์สาย IT </p>
          </div>
          <ul className="grid text-[17px] font-kanit text-left">
            <li className="font-bold text-[var(--color-primary)] dark:text-white whitespace-nowrap">
              <h2>คอร์สเรียนออนไลน์</h2>
            </li>
            <li className="">
              <Link to="/Course">คอร์สทั้งหมด</Link>
            </li>

          </ul>
          <ul className="grid  text-[17px] font-kanit text-left">
            <li>
              <h2 className="whitespace-nowrap text-[var(--color-primary)] dark:text-white font-bold">Online Course</h2>
            </li>
            <li>
                <Link to="/About">เกี่ยวกับเรา</Link>
            </li>
          </ul>
          <ul className="grid text-[17px] text-left">
            <li className="font-bold text-[var(--color-primary)] font-kanit dark:text-white">
              <h2>ติดต่อเรา</h2>
            </li>
            <li className="mt-2 flex gap-6 text-[var(--color-primary)] text-2xl dark:text-white">
              <Link to="/">
                <FaFacebookSquare />
              </Link>
              <Link to="/">
                <FaLine />
              </Link>
              <Link to="/">
                <FaTwitterSquare />
              </Link>
            </li>
            <li className="text-[17px]  font-kanit mt-2 w-full">
              <p>Email: giga12123@gmail.com</p>
              <p>Tel: 094-xxx-xxx</p>
            </li>
          </ul>
        </div>
        <div className="w-full border-t border-gray-200 mt-5">
          <p className="container mx-auto text-sm text-gray-600 py-4 text-center font-bold font-kanit">
            © {new Date().getFullYear()} Online Course สงวนลิขสิทธิ์
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
