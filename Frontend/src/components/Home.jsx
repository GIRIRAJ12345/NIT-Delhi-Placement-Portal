import React from 'react';
import CampusImg1 from "../assets/CampusImg1.jpg";
import { TiMail } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import "./home.css";
import adminBlock from "../assets/admin.jpg";

const Home = () => {
    return (
        <div>
          <div className="flex items-center justify-center w-full p-12 pr-10 grad shadow-inner h-[470px]">
            <div>
              <div>
                <p className="text-4xl font-bold text-left text-gray-800">
                  NATIONAL INSTITUTE OF TECHNOLOGY DELHI
                </p>
                <p className="text-xl font-medium text-left text-gray-800 py-2">
                  Training and Placements
                </p>
                <div className="flex gap-10 my-8">
                  <div className="">
                    <NavLink
                      to="mailto:tnp@nitdelhi.ac.in"
                      className="flex bg-blue-700 rounded-md text-white px-6 py-2 hover:bg-blue-500"
                    >
                      <p className="font-semibold pr-1">tnp@nitdelhi.ac.in</p>
                      <TiMail className="text-2xl" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="tel:+918755604422"
                      className="flex bg-blue-700 rounded-md text-white px-6 py-2 hover:bg-blue-500"
                    >
                      <p className="font-semibold pr-1">+918755604422</p>
                      <IoCallOutline className="text-2xl" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={CampusImg1} alt="" className="h-[350px] " />
            </div>
          </div>
    
          {/* Start About Part */}
          <div className="mx-auto my-6">
            <div className="max-w-7xl  w-11/12 px-4 py-8 mx-auto">
              <h1 className="text-center text-2xl font-bold text-blue-800  mb-2">
                About NIT Delhi
              </h1>
              <div className="flex gap-6 flex-wrap-reverse md:flex-nowrap justify-between items-center">
                <p className="mx-w-2xl md:w-1/2 w-full mx-auto text-justify text-gray-700 leading-7">
                  National Institute of Technology Delhi is an autonomous Institute,
                  established in 2010 by an act of parliament, which functions under
                  the aegis of Ministry of Education, Government of India. NIT Delhi
                  aims to provide instructions and research facilities in various
                  disciplines of Engineering, Science and Technology, Management,
                  Social Sciences and Humanities for advance learning and
                  dissemination of knowledge. NIT Delhi started its academic session
                  in 2010 with three undergraduate B.Tech degree programmes in
                  Computer Science and Engineering, Electronics and Communication
                  Engineering and Electrical and Electronics Engineering. The
                  academic activities of NIT Delhi were initiated at NIT Warangal in
                  year 2010 which were then transferred to a transit campus at IAMR,
                  Narela. The permanent campus is now operational with unsurpassed
                  infrastructure, state-of-the-art laboratories and volume for the
                  expansion of our students' intellect.
                </p>
                <div className="md:w-1/2 w-11/12 mx-auto">
                  <img src={adminBlock} alt="admin Block" />
                </div>
              </div>
            </div>
            <div className="max-w-7xl px-12 mx-auto mt-2 py-6 w-[90%] bg-sky-50">
              <h1 className="text-center text-2xl font-bold text-blue-800 my-2 pb-4">
                Student Life
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2">
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-a560e97b96290875dab136f2385001c2"
                    alt="admin Block"
                  />
                </div>
                <div className="max-w-2xl md:w-1/2 md:pl-6 py-4 md:py-0">
                  <h1 className="text-xl font-bold text-blue-900 pb-0.5">Fests</h1>
                  <p className="text-justify text-gray-700 ">
                    The college is known for its brilliantly organized inter college
                    fests - Sentience, Innovision & Resonanz, which are frequented
                    by stars and musicians of international repute & attended by
                    students from all over India. These fests facilitate holistic
                    development, promote team culture and help free the mind &
                    spirit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="max-w-2xl md:w-1/2 md:pr-6 py-4 md:py-0">
                  <h1 className="text-xl font-bold text-blue-900 pb-0.5 ">Societies</h1>
                  <p className="text-justify text-gray-700">
                    NIT Delhi has a strong culture of student activities. Numerous
                    societies are active on campus that aim to inculcate team values
                    & nurture talent within students. These clubs attract students
                    from all walks of life, cutting across departments. This gives
                    students a chance to experiment with their interests and
                    hobbies.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-a560e97b96290875dab136f2385001c2"
                    alt="admin Block"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2">
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-a560e97b96290875dab136f2385001c2"
                    alt="admin Block"
                  />
                </div>
                <div className="max-w-2xl md:w-1/2 md:pl-6 py-4 md:py-0">
                  <h1 className="text-xl font-bold text-blue-900 pb-0.5">Sports</h1>
                  <p className="text-justify text-gray-700">
                    NIT Delhi offers state of art facilities in the domain of
                    physical education, and both college and the students have been
                    proactive in hosting and participating in many sports events,
                    and have been competetive on an All India Inter University
                    level.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="max-w-2xl md:w-1/2 md:pr-6 py-4 md:py-0">
                  <h1 className="text-xl font-bold text-blue-900 pb-0.5">Others</h1>
                  <p className="text-justify text-gray-700">
                    Laboratories, Workshops, Computer centre, Medical facility,
                    Incubator, Yoga centre, Gym facility, Fully Wi-Fi campus, CCTV
                    cameras, Bio metric system, Sports complex, Banks, ATM, Post
                    office, Shopping complex. A prominent feature of NSUT’s campus
                    is the vast expanse of flora & fauna that envelopes its
                    entirety. The lush green campus welcomes a diverse community of
                    students, faculty, staff & visitors in its midst.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-a560e97b96290875dab136f2385001c2"
                    alt="admin Block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Home;