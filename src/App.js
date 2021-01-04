
import './App.css';
import ContactInfoTable from "./components/ContactInfoTable";
import SkillItem  from "./components/SkillItem";
import Education from "./components/Education"
import Profile from "./components/Profile"

function App() {
  const lukioText = "Tutkinto aluksi IB (kansainvälinen ylioppilastutkinto), mutta vaihto tavalliseen suomalaiseenylioppilastutkintoon vuonna 2016."
  const yliopistoText = "Diplomi-insinööri opintojen neljäs vuosi meneillään Tampereen yliopiston Hervannan kampuksella (edellinen nimi Tampereen teknillinen yliopisto)."
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
            <h3>Profiili</h3>
            <Profile/>
          </div>
          <div class="col-sm-8">
            <Education/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
              <h3>Työkokemus</h3>
              <SkillItem 
                title="Pihahuolto" 
                date = "13.5-31.8.2019"
                place="Lännen Kiinteistöpalvelu"
                btext="kaikenlaista tehtiin...">
              </SkillItem>
          </div>
          <div class="col-sm-8">
              <h3>Työkokemus</h3>
              <SkillItem 
                title="Pihahuolto" 
                date = "13.5-31.8.2019"
                place="Lännen Kiinteistöpalvelu"
                btext="kaikenlaista tehtiin...">
              </SkillItem>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
