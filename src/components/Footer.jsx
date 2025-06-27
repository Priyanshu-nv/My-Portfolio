import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300  bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="flex gap-10 p-4 justify-center text-white">
          <a
            href="https://www.linkedin.com/in/priyanshu-navidolatwala-03b377295/"
            className="border p-2 text-2xl rounded hover:-translate-y-0.5 translate-all bg-blue-800 text-white"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Priyanshu-nv"
            className="border p-2 text-2xl rounded hover:-translate-y-0.5 translate-all bg-gray-900 text-white"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/priyanshu__nv/?hl=en"
            className="border p-2 text-2xl rounded hover:-translate-y-0.5 translate-all bg-[#d62976] text-white"
            target="_blank"
          >
            <FaSquareInstagram />
          </a>
        </div>
        <p className="text-white text-base">
          <span className="text-xl font-none">&copy;</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
