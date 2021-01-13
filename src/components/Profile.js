import { ListGroup } from "react-bootstrap"


const Profile = ({list}) => {
    return(
        <ListGroup>
            <h3>Profiili</h3>
            <ListGroup.Item>
                Etsin kesäksi web-ohjelmointiin tai ohjelmistokehitykseen liittyvää työ- tai harjoittelupaikkaa. 
            </ListGroup.Item>
            <ListGroup.Item>
                En ole aiemmin ollut yliopisto-opintojani vastaavan alan (ohjelmistotekniikka) työtehtävissä.
            </ListGroup.Item>
            <ListGroup.Item>
                Olen suunnitellut aloittavani diplomityön tekemisen ensi vuoden keväällä, joten diplomityöpaikka on myös etsinnässä.
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Profile