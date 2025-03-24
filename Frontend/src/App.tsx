import React from "react"
import Mentis from "./Mentee/Mentis"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MenteeDashboard from "./Mentee/MenteeComp/MenteeDashboard/MenteeDashboard"
import Profie from "./Mentee/MenteeComp/MenteeDashboard/MDashComponenet/Profie"
import Bookings from "./Mentee/MenteeComp/MenteeDashboard/MDashComponenet/Bookings"

import Mentor from "./Mentor/Mentor"
import MentorPricing from "./Mentor/MentorPricing"
import MentorDashboard from "./Mentor/MentorDashboard/MentorDashboard"
import MentorSession from "./Mentor/MentorDashboard/MentorSession"
import MentorProfile from "./Mentor/MentorDashboard/MentorProfile"
import MdRizabul from "./Mentee/MenteeComp/Mentors/MdRizabul"

function App() {
  return (
    <div>
      <Appbar />
    </div>
  )
}

export default App

function Appbar() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mentis></Mentis>}></Route>

            <Route
              path="/menteedashboard"
              element={<MenteeDashboard />}
            ></Route>
            <Route path="/menteedashboard/profile" element={<Profie />}></Route>

            <Route
              path="/menteedashboard/booking"
              element={<Bookings />}
            ></Route>

            {/* For Mentor  */}

            <Route path="/mentor" element={<Mentor />}></Route>
            <Route
              path="/expertdashboard"
              element={<MentorDashboard />}
            ></Route>
            <Route
              path="/expertdashboard/profile"
              element={<MentorProfile />}
            ></Route>
            <Route
              path="/expertdashboard/session"
              element={<MentorSession />}
            ></Route>
            <Route path="/mentor/pricing" element={<MentorPricing />}></Route>
            <Route path="/mentor/mdrizabul" element={<MdRizabul
            />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
