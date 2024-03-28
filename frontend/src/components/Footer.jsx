import React from 'react';
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerBg from "../assets/footer-bg.png";

const Footer = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto'>
            <div className='relative w-full pt-10 flex justify-between'>
                <div className='absolute w-full h-96 -top-10'>
                    <img src={footerBg} alt="footerBg"
                        className='w-full h-full object-cover' />
                </div>

                <div className='relative w-40 px-3'>
                    <h1 className='font-bold text-xl'>QUICK LINKS</h1>
                    <p className='text-xs py-2 font-semibold'>NIT DELHI HOME PAGE</p>
                    <div className='flex'>
                        <a href="https://m.facebook.com/nitdelhiofficialpage"><FaMeta className='mx-1 text-xl' /></a>
                        <a href="https://www.linkedin.com/in/nit-delhi-placement-cell-4a70a9122?originalSubdomain=in">
                            <FaLinkedinIn className='mx-1 text-xl' /></a>
                        <a href="https://twitter.com/NITDofficial"><FaXTwitter className='mx-1 text-xl' /></a>
                        <a href="https://www.instagram.com/nitdelhiofficial/"><FaInstagram className='mx-1 text-xl' /></a>
                    </div>
                </div>
                <div className='relative w-60 px-3'>
                    <h1 className='font-bold text-xl'>Information Link</h1>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/"><p>WHY RECRUITE @ NITD</p></Link>
                    <Link to="/"><p>FOR RECRUITERS</p></Link>
                    <Link to="/"><p>TEAM</p></Link>
                    <Link to="/"><p>CONTACT</p></Link>
                </div>
                <div className='relative w-60 px-3'>
                    <h1 className='font-bold text-xl'>Contact Details</h1>
                    <a href="mailto:tnp@nitdelhi.ac.in"><p>tnp@nitdelhi.ac.in</p></a>
                    <a href="mailto:tnp@nitdelhi.ac.in"><p>tnp@nitdelhi.ac.in</p></a>
                    <h2>Address:</h2>
                    <p>R48J+6V, National Institute of Technology Plot No.
                        FA7,Zone, P1, GT Karnal Rd, Delhi, 110036</p>
                </div>
                <div className='relative w-60 px-3'>
                    <h1 className='font-bold text-xl'>Head T&P Cell</h1>
                    <h2>Dr. Kapil Sharma</h2>
                    <a href="mailto:headtnp@nitdelhi.ac.in"><p>headtnp@nitdelhi.ac.in</p></a>
                    <a href="tel:+918755604422"><p>+918755604422</p></a>
                </div>
            </div>
            <div>
                <p>Copyright &copy; Training & Placement Cell</p>
            </div>
        </div>
    )
}

export default Footer;