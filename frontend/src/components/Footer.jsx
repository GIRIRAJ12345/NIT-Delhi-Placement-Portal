import React from 'react';
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerBg from "../assets/footer-bg.png";

const Footer = () => {
    return (
        <div className='w-full max-w-7xl mx-auto text-[#012970] pt-4'>
            <div className='relative overflow-hidden max-auto pl-10 sm:pl-0 pb-5 flex justify-between flex-col sm:flex-row tracking-tight'>
                <div className='absolute w-full h-96 -top-10'>
                    <img src={footerBg} alt="footerBg"
                        className='w-full sm:h-full h-[200%] object-cover' />
                </div>

                <div className='relative w-40 px-3 pt-5 font-semibold text-black'>
                    <h1 className='font-bold text-lg text-blue-900'>QUICK LINKS</h1>
                    <a href="https://nitdelhi.ac.in/"><p className='text-xs py-2 font-semibold hover:text-blue-700'>NIT DELHI HOME PAGE</p></a>
                    <div className='flex'>
                        <a href="https://m.facebook.com/nitdelhiofficialpage"><FaMeta className='mx-1 text-xl hover:text-blue-700' /></a>
                        <a href="https://www.linkedin.com/in/nit-delhi-placement-cell-4a70a9122?originalSubdomain=in">
                            <FaLinkedinIn className='mx-1 text-xl hover:text-blue-700' /></a>
                        <a href="https://twitter.com/NITDofficial"><FaXTwitter className='mx-1 text-xl hover:text-blue-700' /></a>
                        <a href="https://www.instagram.com/nitdelhiofficial/"><FaInstagram className='mx-1 text-xl hover:text-blue-700' /></a>
                    </div>
                </div>

                <div className='relative w-60 px-3 text-sm pt-5 text-black'>
                    <h1 className='font-bold text-lg text-blue-900'>INFORMATION LINK</h1>
                    <Link to="/"><p className='my-2 font-semibold hover:text-blue-700'>Home</p></Link>
                    <Link to="/"><p className='my-2 font-semibold hover:text-blue-700'>Why Recruite @ NITD</p></Link>
                    <Link to="/"><p className='my-2 font-semibold hover:text-blue-700'>For Recruiters</p></Link>
                    <Link to="/"><p className='my-2 font-semibold hover:text-blue-700'>Team</p></Link>
                    <Link to="/"><p className='my-2 font-semibold hover:text-blue-700'>Contact</p></Link>
                </div>

                <div className='relative w-60 px-3 text-sm pt-5 font-semibold text-black'>
                    <h1 className='font-bold text-lg text-blue-900'>Contact Details</h1>
                    <a href="mailto:headtnp@nitdelhi.ac.in"><p className='my-2 hover:text-blue-700'>headtnp@nitdelhi.ac.in</p></a>
                    <a href="mailto:tnp@nitdelhi.ac.in"><p className='my-2 hover:text-blue-700'>tnp@nitdelhi.ac.in</p></a>
                    <h2 className='font-bold'>Address:</h2>
                    <p>R48J+6V, National Institute of Technology Plot No.
                        FA7,Zone, P1, GT Karnal Rd, Delhi, 110036</p>
                </div>

                <div className='relative w-60 px-3 text-sm pt-5 font-semibold text-black'>
                    <h1 className='font-bold text-lg text-blue-900'>Head T&P Cell</h1>
                    <h2 className='my-2'>Dr. Kapil Sharma</h2>
                    <a href="mailto:headtnp@nitdelhi.ac.in"><p className='my-2 hover:text-blue-700'>headtnp@nitdelhi.ac.in</p></a>
                    <a href="tel:+918755604422"><p className='my-2 hover:text-blue-700'>Phone: +918755604422</p></a>
                </div>
            </div>
            <div className='text-center my-4 font-semibold'>
                <p>Copyright &copy; Training & Placement Cell</p>
            </div>
        </div>
    )
}

export default Footer;