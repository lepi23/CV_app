import  SkillItem  from "./SkillItem";


const mystyle = {
    backgroundColor: 'lightblue',
    border: '2px solid darkGrey',
    borderRadius: "6px",
    padding:"5px"
  };

const WorkExperience = () => {
    return(
    <div class="container" style={mystyle}>
        <h3><i class="fas fa-briefcase"></i>Työkokemus</h3>
              <SkillItem 
                title="Pihahuolto" 
                date = "13.5-31.8.2019"
                place="Lännen Kiinteistöpalvelu"
                btext="Nurmikoiden leikkaus, roskakorien tyhjentäminen, roskakatosten ja pihojen siistiminen. Sekä pakettiautolla ajaminen.">
              </SkillItem>
              <SkillItem 
                title="Kesätyöläinen" 
                date = "06/2013, 06/2014, 06/2015 "
                place="SCA"
                btext="Paperitehtaan yksinkertaiset kesätyötehtävät, joihin kuuluivat: pihan siivoaminen, papereiden kierrätys, arkistointi, tavaroiden kantaminen.">
              </SkillItem>
        <br></br>
    </div>  
    )
}

export default WorkExperience