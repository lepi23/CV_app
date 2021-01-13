import {React, useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SkillItem = ({title, date, place, btext}) => {
    const [showInfo, setShowInfo] = useState(true)
    const [text, setText] = useState(btext)
    const [buttonImg, setButtonImg] = useState("Piilota")

    const handleClick = () => {
        if (showInfo === true)
        {
            setShowInfo(false)
            setText(null)
            setButtonImg("Lisää")
        }
        else
        {
            setShowInfo(true)
            setText(btext)
            setButtonImg("Piilota")
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
                <Button variant="primary" onClick={handleClick}>{buttonImg} </Button>
            </div>
        
    )
}

export default SkillItem;