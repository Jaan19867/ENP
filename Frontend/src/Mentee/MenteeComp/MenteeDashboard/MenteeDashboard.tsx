
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import React from 'react'

import Navbar from "./MDashComponenet/Navbar"
const MenteeDashboard = () => {


  return (

    <>

    <div>
      <Navbar/>

      <div className="lower-section">

        Hey Rizabul How are you "!" Hope you are doing fine . 


        <div>
          Your Stats : 
          <div>
            Number of Bookings :{}
          </div>

          <div>
            Satisfied Session : {}
          </div>
        </div>
      </div>
    </div>
    
    
    </>






  )
    
}

export default MenteeDashboard


