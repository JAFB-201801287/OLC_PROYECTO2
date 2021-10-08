import React from 'react';

import { Navbar, Container } from 'react-bootstrap';

const NavBarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">ORGANIZACION DE LENGUAJES Y COMPILADORES 1</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBarComponent;