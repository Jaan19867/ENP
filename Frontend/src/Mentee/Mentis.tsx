import React from "react"
import { Button } from "@/components/ui/button"
import Header from "@/CommonComp/Header"
import Footer from "@/CommonComp/Footer"
import MentorsList from "./MenteeComp/MentorsList"
import FHero from "./MenteeComp/FHero"
import BelowHer from "./MenteeComp/BelowHer"
import BelowMentorList from "./MenteeComp/BelowMentorList"

function Mentis() {
  return (
    <>
      <div className="flex flex-col  min-h-screen">
        <Header />
        <div className="flex-grow pt-16">
          <div className="hero-section">
            <FHero></FHero>
          </div>
          <div>
            <BelowHer />
          </div>

          <div>
            Mentors List
            <div>
              <MentorsList></MentorsList>
            </div>
          </div>

          <div>
            <BelowMentorList/>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Mentis
