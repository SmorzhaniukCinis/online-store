import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import DeviseStore from "../store/DeviseStore";

export const DeviceTypeBar = observer(() => {
    const {devices} = useContext(Context)

    return (
        <ListGroup>
            {devices?.types?.map((type:any)=>
                <ListGroup.Item key={type.id}>{type.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
})

