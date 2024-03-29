import React, { useState } from 'react';
import { academicData } from '../assets/AcademicData';
import DegreeDetails from '../components/DegreeDetails';
import { twMerge } from 'tailwind-merge'


const Academic = () => {
    const [degree, setDegree] = useState(0);

    return (
        <div className='flex flex-col flex-wrap justify-center items-center bg-white mx-auto'>
            <div className='w-full  text-center bg-blue-950 p-4 '>
                <h1 className='text-2xl  text-white font-semibold'>Academics</h1>
            </div>

            <div className='flex md:flex-row flex-col items-center gap-4 max-w-7xl m-4'>
                <div className='md:w-1/2 max-w-xl'>
                    <div className='flex justify-start gap-4'>
                        <button onClick={() => setDegree(0)} className={twMerge("text-lg text-blue-900 font-semibold", degree === 0 && "text-blue-600 border-b-4 border-b-blue-600")}>UNDERGRADUATE</button>
                        <button onClick={() => setDegree(1)} className={twMerge("text-lg text-blue-900 font-semibold", degree === 1 && "text-blue-600 border-b-4 border-b-blue-600")}>POSTGRADUATE</button>
                        <button onClick={() => setDegree(2)} className={twMerge("text-lg text-blue-900 font-semibold", degree === 2 && "text-blue-600 border-b-4 border-b-blue-600")}>PH.d.</button>
                    </div>

                    <DegreeDetails key={degree} degreeDetails={academicData[degree]} />
                </div>
                <div className='w-1/2 max-w-xl'>
                    <img src="https://ocs.iitd.ac.in/ocs/assets/img/features-2.png" />
                </div>
            </div>
        </div>
    );
};


export default Academic;