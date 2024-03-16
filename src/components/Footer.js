import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" flex flex-row justify-around">
      <div className="flex flex-col gap-2">
        <h1>Company</h1>
        <p>Address</p>
        <div className="flex flex-row gap-2">
          <FaPhone />
          <p>Phone</p>
        </div>
        <div className="flex flex-row gap-2">
          <MdOutlineEmail />
          <p>Email</p>
        </div>
      </div>
      <div>
        <h1>Links</h1>
        <p>Home</p>
        <p>Jobs</p>
        <p>Companies</p>
        <p>About</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Social Media</h1>
        <div className="flex flex-row gap-5">
          <p>
            <FaXTwitter />
          </p>
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaInstagram />
          </p>
          <p>
            <FaLinkedin />
          </p>
        </div>
        <h1>Email Newsletter</h1>
        <input className="" place />
      </div>
    </div>
  );
};

export default Footer;
