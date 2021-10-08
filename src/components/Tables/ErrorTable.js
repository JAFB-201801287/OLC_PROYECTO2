import React from 'react';

import { Table, Card, Row, Col, } from 'react-bootstrap';

const ErrorTable = () => {
    return (
        <>
            <Row xs={1} md={1} className="g-4 mx-3 mt-3 mb-10">
                <Col>
                    <Card className="border border-3">
                        <Card.Body>
                            <Card.Title>TABLA DE ERRORES</Card.Title>
                        </Card.Body>
                        <Table striped bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>TIPO</th>
                                    <th>ERROR</th>
                                    <th>FILA</th>
                                    <th>COLUMNA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>VACIO</td>
                                    <td>VACIO</td>
                                    <td>VACIO</td>
                                    <td>VACIO</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ErrorTable;