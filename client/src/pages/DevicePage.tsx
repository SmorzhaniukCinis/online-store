import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
// @ts-ignore
import Star from '../assets/Gold_Star.png'

export const DevicePage = () => {

    const devise = {
        id: 1,
        name: "iPhone 7",
        price: 23323,
        rating: 5,
        img: 'https://avic.ua/assets/cache/products/18806/apple-iphone-7-plus-128gb-black-01-prod_md.jpg'
    }

    const description = [
        {id: 1, title: 'аовіаоі', description: '5мп'},
        {id: 2, title: 'віа', description: '51мп'},
        {id: 3, title: 'іва', description: '53мп'},
        {id: 4, title: 'аовівіавіаоі', description: '15мп'},
        {id: 5, title: 'ав', description: '45мп'}
    ]

    return (
        <Container className={'mt-4'}>
            <Row>
                <Col md={4}>
                    <Image style={{maxWidth: 430, maxHeight: 430}} src={devise.img}/>
                </Col>
                <Col md={4}>
                    <Row className={'d-flex flex-column align-items-center'}>
                        <h2 style={{textAlign: "center"}}>{devise.name}</h2>
                        <div style={{
                            background: `url(${Star}) no-repeat center center`,
                            backgroundSize: 'cover',
                            width: 200,
                            height: 200,
                            fontSize: 42
                        }}
                             className={'d-flex align-items-center justify-content-center'}>
                            {devise.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className={'d-flex flex-column align-items-center justify-content-around'}
                          style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>Price: {devise.price} $</h3>
                        <Button variant={'outline-dark'}>Buy</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-3'}>
                <h3>Characteristics</h3>
                {description.map((item, index) =>
                    <Row key={item.id} style={{background: index % 2 ===0 ? 'lightgray' : "transparent" , padding: 10}}>
                        {item.title}: {item.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};
