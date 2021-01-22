import { ListGroup } from "react-bootstrap"
import store from "../store"
import BoxList from "./BoxList"
import listData from "../data/listData"

const Other = () => {
    const state = store.getState()
    var mainTitle = "empty"
    var sentenceList = []
    if (state === "FIN")
    {
        mainTitle = listData.FIN.other.mainTitle
        sentenceList = listData.FIN.other.otherList
    }
    else if (state === "EN")
    {
        mainTitle = listData.EN.other.mainTitle
        sentenceList = listData.EN.other.otherList
    }
    
    return(
        <div>
            <h3>{mainTitle}</h3>
            <BoxList stringList={sentenceList}></BoxList>
        </div>
    )
    
}

export default Other