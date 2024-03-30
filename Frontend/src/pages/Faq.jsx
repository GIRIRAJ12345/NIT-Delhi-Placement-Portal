import React from 'react';
import faqData from '../assets/FaqData';
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";


const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
    return (
        <div >
            <div className='w-full  text-center bg-blue-950 p-4 '>
                <h1 className='text-2xl  text-white font-semibold'>Students : F.A.Q</h1>
            </div>
            <div className='p-12'>
                <div className='flex flex-col justify-center items-center w-2/3 mx-auto'>
                    {faqData.map((item) => (
                        <div key={item.id} className="text-center border  w-full cursor-pointer">
                            <div className="flex justify-between p-5 " onClick={() => toggleQuestion(item.id)}>
                                <div className={`${openQuestion === item.id ?" font-semibold ":"font-medium"}`}>
                                    {item.question}
                                </div>
                                <div className=''>
                                    {openQuestion === item.id ? <RiArrowDropUpLine className='text-2xl'/> : <RiArrowDropDownLine className='text-2xl'/>}
                                </div>
                            </div>
                            {openQuestion === item.id && (
                                <div className='transition-all duration-200 ease-linear'>
                                    <div className="text-left p-5 border-t text-blue-600 font-medium ">{item.answer}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Faq;