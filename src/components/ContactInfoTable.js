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
                    <p><i class="fas fa-home"></i> Tampere</p>
                </Col>
                <Col xs lg="3">
                    <p><i class="fas fa-phone"></i> +358 509128619</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <p><i class="fas fa-envelope-square"></i> leevi.saarinen@tuni.fi</p>
                </Col>
                <Col xs lg="3">
                    <p><i class="fab fa-linkedin"></i> Tampere</p>
                </Col>
            </Row>

        </Container>
    </div>
)
}

export default ContactInfoTable;