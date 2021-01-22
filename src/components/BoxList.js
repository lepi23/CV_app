import { ListGroup } from "react-bootstrap"

const BoxList = ({stringList}) => {

    return(
        <div>
            <ListGroup>
                {stringList.map(listItem => (
                    <ListGroup.Item>{listItem}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
export default BoxList

