import { ListGroup } from "react-bootstrap"
import BoxList from "./BoxList"
import listData from "../data/listData"
import store from "../store"

const Profile = () => {
    const state = store.getState()
    var mainTitle = "empty"
    var sentenceList = []
    if (state === "FIN")
    {
        mainTitle = listData.FIN.profile.mainTitle
        sentenceList = listData.FIN.profile.profileSentences
    }
    else if (state === "EN")
    {
        mainTitle = listData.EN.profile.mainTitle
        sentenceList = listData.EN.profile.profileSentences
    }
    
    return(
        <div>
            <h3>{mainTitle}</h3>
            <BoxList stringList={sentenceList}></BoxList>
        </div>
    )
}

export default Profile