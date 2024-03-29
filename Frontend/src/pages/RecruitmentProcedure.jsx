import React from 'react';
import { process_data } from '../assets/RecuitmentProcess';
import { Link } from 'react-router-dom';


const RecruitmentProcedure = () => {
    return (
        <div  className='flex flex-col flex-wrap justify-center items-center bg-white'>
            <div className='w-full  text-center bg-blue-950 p-4 '>
                <h1  className='text-2xl  text-white font-semibold'>Recruiters : Procedure</h1>
            </div>
            <div className='w-[70%] mb-2 mt-8'>
                    <p className='text-xl p-2  font-bold text-slate-700 text-center border-b'>Fill the JNF</p>
            </div>
            <div className='flex flex-wrap rounded-lg shadow-xl  justify-evenly w-[60%] m-6 p-4 items-center mx-auto h-[170px`]'>
                {/* Fill the form structure*/}
                <div className='flex flex-col'>
                    <p className='text-slate-500 p-2  text-left '>The very first step for Recruitment Procedure is to Fill the JNF <br /> or Summer JNF/JAF Form.
                    Company needs to fill JNF form in<br /> order to recruit from NITD.
                    For Filling JNF/Summer JNF <br /><span className='text-blue-600 py-2 '><Link to="https://nitdelhi.ac.in/Tnpcell/companyInterestForm.php">Click here</Link></span> </p>
                </div>
                <div>
                    <img src="https://www.tnpnsut.in/static/media/Procedure.46ac39cb32681d1bfff7.png" alt="" className='h-[150px]'/>
                </div>
            </div>

            
            {/* Requirement Process structure */}
            <div className=''>
                <h1 className='text-xl p-2 pt-6 w-[70%] mx-auto font-bold text-slate-700 text-center border-b '>Recruitment Process</h1>

                <div className='flex flex-col p-4'>
                    {
                        process_data.map((process)=>(
                            <div key={process.id} className='flex items-center  w-[60%] p-8  rounded-lg shadow-xl  m-6 mx-auto h-[170px]'>
                                <div>
                                    <div className='rounded-full w-10 h-10 text-2xl text-white font-semibold flex items-center justify-center px-2 bg-blue-400'>{process.id}</div>
                                </div>
                                <div>
                                    <p className='text-left pl-5 text-slate-500'>{process.decription}</p>
                                </div>
                            </div>
                        ))

                    }
                </div>

            </div>
        </div>
    );
};

export default RecruitmentProcedure;