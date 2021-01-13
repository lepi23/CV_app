
import './App.css'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import ContactInfoTable from "./components/ContactInfoTable";
import WorkExperience  from "./components/WorkExperience";
import Education from "./components/Education"
import Profile from "./components/Profile"
import Hobbies from "./components/Hobbies"
import Skills from "./components/Skills"
import Other from "./components/Other"


const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div ref={componentRef}>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    </link>

      <div class="jumbotron text-center">
        <h1>Leevi Saarinen</h1>
        <ContactInfoTable/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <Profile/>
            <br></br>
            <Hobbies/>
            <br></br>
            <br></br>
            <Other/>
          </div>
          <div class="col-sm-8">
            <Education/>
            <br></br>
            <WorkExperience/>
            <br></br>
            <Skills/>
            <br></br>
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  )
}

export default App
