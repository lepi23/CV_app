
import './App.css'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import TestComp from "./components/TestComp"
import ContactInfoTable from "./components/ContactInfoTable.jsx"
import WorkExperience  from "./components/WorkExperience.jsx"
import Education from "./components/Education.jsx"
import Profile from "./components/Profile.jsx"
import Hobbies from "./components/Hobbies.jsx"
import Skills from "./components/Skills.jsx"
import Other from "./components/Other.jsx"


function App() {
  return (
    <div>
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
      <TestComp></TestComp>
    </div>
  )
}

export default App
