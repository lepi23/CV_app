import { ListGroup } from "react-bootstrap"


const Hobbies = ({list}) => {
    const testList = ["moi","fafsdfsaf","uujoo"]
    return(
        
        <ListGroup>
            <h3>Harrastukset</h3>
            <ListGroup.Item>
                Pelailu
            </ListGroup.Item>
            <ListGroup.Item>
                Lukeminen
            </ListGroup.Item>
            <ListGroup.Item>
                Jalkapallon seuraaminen
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Hobbies