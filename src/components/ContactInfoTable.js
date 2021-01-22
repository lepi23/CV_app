import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import kuva22 from './kuva22.jpg';

const ContactInfoTable = () => {
    return(
    <div>    
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <img src={kuva22} alt="kuva22"/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <p><i class="fas fa-home"></i> Ylisenkatu 4 B 15, Tampere</p>
                </Col>
                <Col xs lg="5">
                    <p><i class="fas fa-phone"></i> +358 509128619</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <p><i class="fas fa-envelope-square"></i> leevi.saarinen@tuni.fi</p>
                </Col>
                <Col xs lg="5">
                    <p><i class="fab fa-linkedin"></i> www.linkedin.com/in/leevi-saarinen-98a225179</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <p><i class="fab fa-github"></i> https://github.com/lepi23</p>
                </Col>
                <Col xs lg="5">
                    <br></br>
                </Col>
            </Row>

        </Container>
    </div>
)
}

export default ContactInfoTable;