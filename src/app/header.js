import React from 'react';
import {
    Media,
    Navbar,
    Nav,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="bg">
                <Container className="p-0 m-0  ml-auto mr-auto">
                    <Row className="p-0 m-0">
                        <Col sm="12" className="p-0 m-0">
                            <Navbar expand="md" className="p-0 m-0">
                                <NavLink
                                    tag={Link}
                                    className="logo"
                                    to="/"
                                >
                                    <Media alt="aaaa" src="https://images.clarin.com/collections/static/ultimas-noticias-de-argentina-y-el-mundo-clarin.svg" />
                                </NavLink>
                                <Nav className="ml-auto" navbar />
                                <div className="vl short"> </div>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
