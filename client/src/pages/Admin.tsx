import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {CreateDevice} from "../components/modals/CreateDevice";
import {CreateBrand} from "../components/modals/CreateBrand";
import {CreateType} from "../components/modals/CreateType";

export const Admin = () => {

    const [branVisible , setBrandVisible] = useState(false)
    const [typeVisible , setTypeVisible] = useState(false)
    const [deviceVisible , setDeviseVisible] = useState(false)

    return (
        <Container className={'d-flex flex-column'}>
            <Button variant={'outline-dark mt-5 p-2'} onClick={()=> setTypeVisible(true)}>add type</Button>
            <Button variant={'outline-dark mt-4 p-2'} onClick={()=> setBrandVisible(true)}>add brand</Button>
            <Button variant={'outline-dark mt-4 p-2'} onClick={()=> setDeviseVisible(true)}>add device</Button>
            <CreateBrand show={branVisible} onHide={()=>setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=> setDeviseVisible(false)}/>
        </Container>
    );
};
