import { ListGroup } from "react-bootstrap"
import store from "../store"
import BoxList from "./BoxList"
import listData from "../data/listData"

const Hobbies = () => {
    const state = store.getState()
    var mainTitle = "empty"
    var sentenceList = []
    if (state === "FIN")
    {
        mainTitle = listData.FIN.hobbies.mainTitle
        sentenceList = listData.FIN.hobbies.hobbyList
    }
    else if (state === "EN")
    {
        mainTitle = listData.EN.hobbies.mainTitle
        sentenceList = listData.EN.hobbies.hobbyList
    }
    
    return(
        <div>
            <h3>{mainTitle}</h3>
            <BoxList stringList={sentenceList}></BoxList>
        </div>
    )
}

export default Hobbies