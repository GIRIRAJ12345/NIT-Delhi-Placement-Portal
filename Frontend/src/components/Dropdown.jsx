import React from 'react';
import { NavLink } from 'react-router-dom';
const Dropdown = ({dropdownItems}) => {
    return (
        <div className='bg-white pl-2 pr-3 py-2 absolute -left-4 rounded-sm shadow-md'>
            <ul>
                {
                    dropdownItems.map((item) =>(
                        <li key={item.id} className='text-blue-800 hover:text-blue-400 p-2 font-normal  text-sm'>
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Dropdown;