import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

export const CreateDevice = ({show, onHide}) => {

    const {devices} = useContext(Context)
    const [deviceInfo, setDeviceInfo] = useState([])

    const addDeviceInfo = () => {
        setDeviceInfo([...deviceInfo, {title: '', description: '', number: Date.now()}])
    }
    const removeDeviceInfo = (number) => {
        setDeviceInfo(deviceInfo.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={'mt-3 mb-3'}>
                        <Dropdown.Toggle>chose type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.types.map(item => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'mt-3 mb-3'}>
                        <Dropdown.Toggle>chose brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.brands.map(item => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        placeholder={'Enter name of device'}
                        className={'mt-4'}
                    />
                    <Form.Control
                        placeholder={'Enter price of device'}
                        className={'mt-4'}
                        type={'number'}
                    />
                    <Form.Control
                        placeholder={'Add image'}
                        type='file'
                        className={'mt-4'}
                    />
                    <hr/>
                    <Button
                        onClick={addDeviceInfo}
                        variant={"outline-dark"}>
                        Add new device info
                    </Button>
                    {deviceInfo?.map(i =>
                        <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="enter name of characteristics"/>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="enter description of characteristics"/>
                            </Col>
                            <Col>
                                <Button onClick={() => removeDeviceInfo(i.number)} variant={'outline-danger'}>Delete</Button>
                            </Col>
                        </Row>)}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};