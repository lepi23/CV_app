import { ListGroup } from "react-bootstrap"


const Other = ({list}) => {
    return(
        <ListGroup>
            <h3>Muuta</h3>
            <ListGroup.Item>
                B-ajokortti
            </ListGroup.Item>
            <ListGroup.Item>
                Hygieniapassi
            </ListGroup.Item>
            <ListGroup.Item>
                Varusmiespalvelus suoritettu
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Other