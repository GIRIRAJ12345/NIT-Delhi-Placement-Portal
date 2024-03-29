import React from 'react';
import { NavLink } from 'react-router-dom';
import { navbarItems } from '../assets/NavItem';
import Dropdown from './Dropdown';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {

    return (
        <nav className='w-full  fixed flex flex-wrap  justify-between items-center px-8  bg-white border-b shadow-2xl p-2 ' >
            <div className=' flex items-center' >
                <NavLink to='https://nitdelhi.ac.in/' className="hover:shadow-md rounded-full hover:shadow-slate-400">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/NIT-Delhi_Logo.svg/330px-NIT-Delhi_Logo.svg.png" alt="" className='h-10' />
                </NavLink>
                <div className='px-2'>
                    <p className='text-base font-semibold'>NIT DELHI</p>
                    <p className='text-sm '>Training and Placement Cell</p>
                </div>
            </div>

            <div >
                <ul className=' flex flex-wrap space-x-6 py-4 pr-9 relative '>
                    {
                        navbarItems.map((item) => (
                            <div key={item.id} className='group'>

                                <div>
                                    <li className='text-blue-800 group-hover:text-blue-500'><NavLink to={item.path} className="flex flex-wrap">
                                        <p className='text-sm font-medium'>{item.title}</p>
                                        {
                                            item.submenu &&
                                            <RiArrowDropDownLine className='text-xl' />
                                        }
                                    </NavLink></li>
                                </div>
                                <div className='absolute top-9 w-[30%] hidden group-hover:block hover:block'>
                                    {
                                        item.submenu &&

                                        (<Dropdown dropdownItems={item.sublink} />)
                                    }
                                </div>

                            </div>
                        ))
                    }
                </ul>
                {

                }
            </div>
        </nav>
    );
};

export default Navbar;