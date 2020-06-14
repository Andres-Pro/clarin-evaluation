import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="padding-top">
                    <Col sm={{ offset: 4, size: 4 }}>
                        <p className="text-white text-center mt-4">
                            Sistema de Prueba para Clarín
                            </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;
