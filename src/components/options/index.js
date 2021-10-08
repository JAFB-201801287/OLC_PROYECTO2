import React from 'react';

import { Button, Row, Col } from 'react-bootstrap';

const Options = ( props ) => {


    function createPestania(e) {
        e.preventDefault();
        props.createPestania();
    }

    function deleteTab(e) {
        e.preventDefault();
        props.deleteTab();

    }

    return (
        <>
            <div className="mb-2">
                <Row className="mx-4">
                    <Button as={Col} variant="danger">ABRIR</Button>
                    <Button as={Col} variant="dark" className="mx-2">GUARDAR</Button>
                    <Button as={Col} variant="danger" className="mx-2" onClick={createPestania.bind(this)}>NUEVA PESTAÑA</Button>
                    <Button as={Col} variant="dark" className="mx-2" onClick={deleteTab.bind(this)}>CERRAR PESTAÑA</Button>
                    <Button as={Col} variant="danger" className="mx-2">REPORTE AST</Button>
                    <Button as={Col} variant="dark" className="mx-2">GRAMATICAS</Button>
                    <Button as={Col} variant="danger">COMPILAR</Button>
                </Row>
            </div>

        </>
    );

};

export default Options;