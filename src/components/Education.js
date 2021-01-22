import  SkillItem  from "./SkillItem";
import store from "../store"
import educationData from "../data/educationData"

const lukioText = "Tutkintoni oli aluksi IB (kansainvälinen ylioppilastutkinto), mutta vaihdoin tavalliseen suomalaiseen ylioppilastutkintoon vuonna 2016 ja valmistuin ylioppilaaksi keväällä 2017."
const yliopistoText = "Minulla on tietotekniikan maisteriopintojen ensimmäinen vuosi meneillään Tampereen yliopiston Hervannan kampuksella. Pääaineenani on ohjelmistotuotanto. Kandidaatin tutkinnosta minulla on jäljellä yksi kurssi. Opintopisteideni määrä on 190/300. "

const mystyle = {
    backgroundColor: 'lightblue',
    border: '2px solid darkGrey',
    borderRadius: "6px",
    padding:"5px"
  };



const Education = () => {
    const state = store.getState()
    var educationList = []
    var mainTitle = "empty"
    if (state === "FIN")
        {
            mainTitle = educationData.FIN.mainTitle
            educationList  = educationData.FIN.educations
        }
    else if (state === "EN")
    {
        mainTitle = educationData.EN.mainTitle
        educationList  = educationData.EN.educations
    } 

    return(
    <div class="container" style={mystyle}>
        <h3><i class="fas fa-graduation-cap"></i>{mainTitle}</h3>
        {educationList.map(education => (
                <SkillItem 
                    title={education.title}
                    place={education.place}
                    date={education.date}
                    btext={education.btext}>
                </SkillItem>
            ))}
        <br></br>
    </div>  
    )
}

export default Education