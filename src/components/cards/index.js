import React from 'react';

import { Row, Col, Card, Tabs, Tab, FloatingLabel, Form } from 'react-bootstrap'

const CardComponents = ( props ) => {

    var parser = require('../../assets/grammar').parser;

    function exec(input) {
        return parser.parse(input);
    }

    function handleChange(e) {
        props.setConsole(exec(e.target.value));
    }

    function prueba(e) {
        props.setCurrentTab(e)
    }

    const listItems = props.tabs.map((tab) =>
        <Tab key={tab.keyTab} eventKey={tab.keyTab} title={tab.nameTab}>
            <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                key={tab.keyInput}
                as="textarea"
                onChange={handleChange.bind(tab)}
                style={{ height: '500px' }}
                />
            </FloatingLabel>
        </Tab>
    );

    return (
        <>
            <Row xs={1} md={2} className="g-4 mx-3 mt-3">

                <Col>
                    <Card className="border border-3">
                        <Card.Body>
                            <Card.Title>EDITOR</Card.Title>
                        </Card.Body>
                        <Tabs
                            key = "key"
                            defaultActiveKey="tab1"
                            onSelect={prueba}
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                            >

                            {listItems}
                            
                        </Tabs>
                        
                    </Card>
                </Col>

                <Col>
                    <Card className="border border-3">
                        <Card.Body>
                            <Card.Title>CONSOLA</Card.Title>
                        </Card.Body>
                        <FloatingLabel controlId="txtConsole">
                                    <Form.Control
                                    as="textarea"
                                    defaultValue={props.console}
                                    style={{ height: '550px' }}
                                    />
                        </FloatingLabel>

                    </Card>
                </Col>

            </Row>
            


        </>
    );
};

export default CardComponents;