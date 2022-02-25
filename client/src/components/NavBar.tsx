import React, {useContext} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

export const NavBar = observer( () => {

    let navigate = useNavigate();
    const {user} = useContext(Context)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Web-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={SHOP_ROUTE}>Shop</Nav.Link>
                    </Nav>
                    {user?.isAuth
                        ? <Nav>
                            <Nav.Link href={ADMIN_ROUTE}>Admin panel</Nav.Link>
                        </Nav>
                        : <Nav>
                            <Nav.Link href={LOGIN_ROUTE}>Out</Nav.Link>
                        </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})
