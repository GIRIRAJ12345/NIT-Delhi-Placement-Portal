import React from "react";
import Navbar from "./components/Navbar"
import { Routes ,Route } from "react-router-dom";
import RecruitmentProcedure from "./pages/RecruitmentProcedure";
import Academic from "./pages/Academic";
import Department from "./pages/Department";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Faq from "./pages/Faq";
import StudentAchievements from "./pages/StudentAchievements";

function App() {
  return (
    <div className="relative min-h-[100vh]">
       <div className="pb-16">
          <Navbar/>      
       </div>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/process" element={<RecruitmentProcedure/>}/>
            <Route path="/academics" element={<Academic/>}/>
            <Route path="/department" element={<Department/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/achievements" element={<StudentAchievements/>}/>
          </Routes>

        <div className=" w-full">
          <Footer/>
        </div>
    </div>
  );
}

export default App;