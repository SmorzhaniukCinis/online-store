import React, {useContext} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Context} from "../index";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";

export const NavBar = observer( () => {

    const {user} = useContext(Context)
    console.log(user.isAuth)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Web-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={ADMIN_ROUTE}>Device</Nav.Link>
                        <Nav.Link href={ADMIN_ROUTE}>Shop</Nav.Link>
                    </Nav>
                    {user?.isAuth
                        ? <Nav>
                            <Nav.Link href={ADMIN_ROUTE}>Device</Nav.Link>
                            <Nav.Link href={ADMIN_ROUTE}>Shop</Nav.Link>
                            <Nav.Link href={ADMIN_ROUTE}>More deets</Nav.Link>
                            <Nav.Link href={ADMIN_ROUTE}>More deets</Nav.Link>
                        </Nav>
                        : <Nav>
                            <Nav.Link href={ADMIN_ROUTE}>Device</Nav.Link>
                            <Nav.Link href={ADMIN_ROUTE}>Shop</Nav.Link>
                            <Nav.Link href={ADMIN_ROUTE}>More deets</Nav.Link>
                            <Nav.Link  href={SHOP_ROUTE}>test</Nav.Link>
                            <button onClick={()=>user.setIsAuth(true)}> test 2</button>
                        </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})
