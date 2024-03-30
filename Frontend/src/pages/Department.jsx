import React from 'react';
import { departments } from '../assets/DepartmentsData';
import { NavLink } from 'react-router-dom';
import { TbPointFilled } from "react-icons/tb";

const Department = () => {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            <div className='w-full  text-center bg-blue-950 p-4 '>
                <h1 className='text-2xl  text-white font-semibold'>Departments</h1>
            </div>

            <div className='w-[90%] mb-2 mt-8'>
                    <p className='text-xl p-2  font-bold text-slate-700 text-center border-b'>NIT Delhi has following 6 Departments</p>
            </div>
            
            <div className='grid grid-cols-2 mt-2 p-6 mx-6 gap-10'>
                {
                    departments.map((department)=>(
                        <div className=' p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white z-10' >
                            <div >
                                <NavLink to={department.path} className="text-blue-600 text-xl font-semibold hover:text-blue-900">{department.title}</NavLink>
                            </div>
                            <div>
                                <h1 className='font-medium mt-1 text-slate-700'>Programmes</h1>
                                {
                                    department.programme.map((program)=>(
                                        <div className='flex pt-2 '>
                                            <TbPointFilled className='m-1'/>
                                            <p className='text-sm text-left text-slate-600'>{program}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Department;