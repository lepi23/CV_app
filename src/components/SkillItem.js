import {React, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

const SkillItem = ({title, date, place, btext}) => {
    const [showInfo, setShowInfo] = useState(true)
    const [text, setText] = useState(btext)
    const [buttonImg, setButtonImg] = useState("hide")

    const handleClick = () => {
        if (showInfo === true)
        {
            setShowInfo(false)
            setText(null)
            setButtonImg("...")
        }
        else
        {
            setShowInfo(true)
            setText(btext)
            setButtonImg("hide")
        }
    }

    const mystyle = {
        padding: "1px",
        fontFamily: "Arial",
        fontWeight: "bold"
      };
    return(
        
            <div class="container">
                <p class="lead" style={mystyle}>
                    {title} | {place}
                </p>
                <p>
                    {date}
                </p>
                <p>
                    {text}
                </p>
                <button onClick={handleClick}>{buttonImg}
                </button>
            </div>
        
    )
}

export default SkillItem;