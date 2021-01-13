import GenerateListObject from "./GenerateListObject"


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
  const programmingList = ["JavaScript", "React.JS", "Python", "C++", "Html", "Scala"]
  const languagesList = ["Suomi (äidinkieli)", "Englanti (hyvä)", "Ruotsi (Perusteet)"]
  const otherSkillsList = ["git-versionhallinta", "MicrosoftOffice", "Linux"]
const Skills = () => {
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
            <GenerateListObject stringList={languagesList}/>
            <br></br>
          </div>
          <div class="col-sm-4">
            <p class="lead" style={skillHeader}>Muut</p>
            <GenerateListObject stringList={otherSkillsList}/>
            <br></br>
          </div>
        </div>

        <br></br>
    </div>  
    )
}

export default Skills