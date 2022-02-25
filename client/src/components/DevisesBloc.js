import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../index";
import {DeviseItem} from "./DeviseItem";



export const DevisesBloc = () => {

    const {devices} = useContext(Context)

    return (
        <Row style={{marginTop: 20}} className={'d-flex'}>
            {devices.devices.map(device =>
                <DeviseItem device={device} key={device.id}/>
            )}
        </Row>
    );
};
