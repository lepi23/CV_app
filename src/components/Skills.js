import GenerateListObject from "./GenerateListObject"
import store from "../store"

const mystyle = {
    backgroundColor: 'lightblue',
    border: '2px solid darkGrey',
    borderRadius: "6px",
    padding:"5px"
  };
  const skillHeader = {
    paddingLeft: "20px",
    fontFamily: "Arial",
    fontWeight: "bold"
  };
  const programmingList = ["JavaScript", "React.JS", "Python", "C++", "Html", "Scala","SQL"]
  const languagesListFin = ["Suomi (äidinkieli)", "Englanti (hyvä)", "Ruotsi (Perusteet)"]
  const otherSkillsListFin = ["git-versionhallinta", "MicrosoftOffice", "Linux"]
  const languagesListEn = ["Finnish (Native)", "English (Good)", "Swedish (Basics)"]
  const otherSkillsListEn = ["git", "MicrosoftOffice", "Linux"]
const Skills = () => {
    const state = store.getState()
    if (state === "FIN")
    {
      return(
    <div class="container" style={mystyle}>
        <h3><i class="fas fa-tools"></i>Taidot</h3>
        <div class="row">
          <div class="col-sm-4">
              <p class="lead" style={skillHeader}>Ohjelmointikielet</p>
              <GenerateListObject stringList={programmingList}/>
            <br></br>
          </div>
          <div class="col-sm-4">
            <p class="lead" style={skillHeader}>Kielet</p>
            <GenerateListObject stringList={languagesListFin}/>
            <br></br>
          </div>
          <div class="col-sm-4">
            <p class="lead" style={skillHeader}>Muut</p>
            <GenerateListObject stringList={otherSkillsListFin}/>
            <br></br>
          </div>
        </div>

        <br></br>
    </div>  
    )}
    else if (state === "EN")
    {
      return(
    <div class="container" style={mystyle}>
        <h3><i class="fas fa-tools"></i>Skills</h3>
        <div class="row">
          <div class="col-sm-4">
              <p class="lead" style={skillHeader}>Programming</p>
              <GenerateListObject stringList={programmingList}/>
            <br></br>
          </div>
          <div class="col-sm-4">
            <p class="lead" style={skillHeader}>Languages</p>
            <GenerateListObject stringList={languagesListEn}/>
            <br></br>
          </div>
          <div class="col-sm-4">
            <p class="lead" style={skillHeader}>Other skills</p>
            <GenerateListObject stringList={otherSkillsListEn}/>
            <br></br>
          </div>
        </div>

        <br></br>
    </div>  
    )
    }
    
}

export default Skills