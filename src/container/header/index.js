import React from 'react';
import {Container, Row} from 'react-bootstrap'

const HeaderContainer = ({children, classes}) => {
    return (
        <div className={`header-section section mb-3 ${classes}`}>
            <Container fluid>
                <Row className={'align-items-center'}>
                    {children}
                </Row>
            </Container>
        </div>
    );
};

export default HeaderContainer;