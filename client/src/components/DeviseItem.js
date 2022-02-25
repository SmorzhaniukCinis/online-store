import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {Context} from "../index";
import ratingStar from '../assets/ratingStar.jpg'
import {useLocation, useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/constants";


export const DeviseItem = ({device}) => {

    let navigate = useNavigate();

    return (
        <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card border={'light'} style={{width: 150, cursor:"pointer"}}>
                <Image style={{maxHeight: 150, maxWidth: 150}} src={device.img}/>
                <div className={'text-black-50 mt-1 d-flex justify-content-between aline-item-center'}>
                    <div>Samsung...</div>
                    <div className={'d-flex align-items-center'}>
                        <div style={{marginRight: 4}}>{device.rating}</div>
                        <Image width={15} height={15} src={ratingStar}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};
