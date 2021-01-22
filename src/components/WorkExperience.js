import  SkillItem  from "./SkillItem";
import store from "../store"
import workExperinceData from "../data/workExperienceData"

const mystyle = {
    backgroundColor: 'lightblue',
    border: '2px solid darkGrey',
    borderRadius: "6px",
    padding:"5px"
  };

const WorkExperience = () => {
  const state = store.getState()
  var workList = []
  var mainTitle = "empty"
  if (state === "FIN")
      {
          mainTitle = workExperinceData.FIN.mainTitle
          workList  = workExperinceData.FIN.work
      }

  else if (state === "EN")
  {
      mainTitle = workExperinceData.EN.mainTitle
      workList  = workExperinceData.EN.work
  } 

  return(
  <div class="container" style={mystyle}>
      <h3><i class="fas fa-graduation-cap"></i>{mainTitle}</h3>
      {workList.map(workExp => (
              <SkillItem 
                  title={workExp.title}
                  place={workExp.place}
                  date={workExp.date}
                  btext={workExp.btext}>
              </SkillItem>
          ))}
      <br></br>
  </div>  
  )
}

export default WorkExperience