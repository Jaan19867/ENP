import React from 'react'
import Mentis from './Mentee/Mentis'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Appbar/>
   
    </div>
  )
}

export default App


function Appbar(){

  return (

    <>
    <div>
      <BrowserRouter>

      <Routes>
        <Route  
         path='/'
         element={<Mentis></Mentis>}
        
        >

        </Route>



      </Routes>
      </BrowserRouter>
    </div>
    
    
    </>
  )
}
