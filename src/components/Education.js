import  SkillItem  from "./SkillItem";

const lukioText = "Tutkinto aluksi IB (kansainvälinen ylioppilastutkinto), mutta vaihto tavalliseen suomalaiseen ylioppilastutkintoon vuonna 2016."
const yliopistoText = "Tietotekniikan maisteriopintojen ensimmäinen vuosi meneillään Tampereen yliopiston Hervannan kampuksella. Pääaineena Ohjelmistotuotanto Kandidaatin tutkinnosta jäljellä kaksi kurssia. Kokonais opinto pisteet 185/300 "

const mystyle = {
    backgroundColor: 'lightblue',
    border: '2px solid darkGrey',
    borderRadius: "6px",
    padding:"5px"
  };


const Education = () => {
    return(
    <div class="container" style={mystyle}>
        <h3><i class="fas fa-graduation-cap"></i>Koulutus</h3>
        <SkillItem 
            title="Ylioppilas" 
            place="Tampereen lyseon lukio"
            date="SYKSY 2013 - KEVÄT 2017"
            btext={lukioText}>
        </SkillItem>
        <SkillItem 
            title="Tietotekniikka, kandidaatti ja DI" 
            place="Tampereen yliopisto"
            date="Elokuu 2017 -"
            btext={yliopistoText}>
        </SkillItem>
        <br></br>
    </div>  
    )
}

export default Education