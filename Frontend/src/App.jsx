import React from "react";
import Navbar from "./components/Navbar"
import { Routes ,Route } from "react-router-dom";
import RecruitmentProcedure from "./pages/RecruitmentProcedure";
import Academic from "./pages/Academic";
import Department from "./pages/Department";

function App() {
  return (
    <div>
       <div className="pb-16">
          <Navbar/>      
       </div>

          <Routes>
            <Route path="/process" element={<RecruitmentProcedure/>}/>
            <Route path="/academics" element={<Academic/>}/>
            <Route path="/department" element={<Department/>}/>
          </Routes>
    </div>
  );
}

export default App;