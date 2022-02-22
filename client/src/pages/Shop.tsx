import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {DeviceTypeBar} from "../components/DeviceTypeBar";
import {BrandBar} from "../components/BrandBar";

export const Shop = () => {
    return (
        <Container>
            <Row>
                <Col className={'mt-4'} md={3}>
                    <DeviceTypeBar/>
                </Col >
                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};
