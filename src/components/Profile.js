import { ListGroup } from "react-bootstrap"


const Profile = ({list}) => {
    const testList = ["moi","fafsdfsaf","uujoo"]
    return(
        <ListGroup>
            <ListGroup.Item>
                Etsin kesäksi työpaikkaa web-ohjelmointi alalta. 
            </ListGroup.Item>
            <ListGroup.Item>
                En ole aiemmin ollut yliopisto-opintojani vastaavan alan työtehtävissä.
            </ListGroup.Item>
            <ListGroup.Item>
                Minulla on myös haussa ensi vuonna aloittamani diplomityöpaikka.
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Profile