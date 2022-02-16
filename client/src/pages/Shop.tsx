import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {DeviceTypeBar} from "../components/DeviceTypeBar";

export const Shop = () => {
    return (
        <Container>
            <Row>
                <Col className={'mt-4'} md={3}>
                    <DeviceTypeBar/>
                </Col >
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
};
