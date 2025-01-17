import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {login, registration} from "../http/userAPI";

export const Auth = () => {

    const location = useLocation()
    const isLoginPath = location.pathname === LOGIN_ROUTE
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const click = async () => {
        if(isLoginPath) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        }

    }

    console.log(email)
    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 56}}
        >
            <Card className={'p-5'} style={{width: 600}}>
                <h2 className={'m-auto'}>{isLoginPath ? 'Authorization' : 'Registration'}</h2>
                <Form className={'mt-2 d-flex flex-column'}>
                    <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={'mt-3'}
                        placeholder={"Enter your email"}
                    />
                    <Form.Control
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        className={'mt-3'}
                        placeholder={"Enter your password"}
                    />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{marginTop: 25}}>
                            <span style={{marginRight: 15}}>
                                {isLoginPath ? 'No account?' : 'Have account?'}
                            </span>
                            <NavLink to={isLoginPath ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
                                {isLoginPath ? "Registration" : 'Log in'}
                            </NavLink>
                        </div>
                        <Button onClick={click} style={{width: 140}} className={'mt-3'}
                                variant={'outline-success'}>{isLoginPath ? 'Login' : 'Submit'}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};
