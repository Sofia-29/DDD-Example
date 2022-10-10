import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>DDD Example</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/createEmployee">
                <Nav.Link>Create Employees</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/getEmployees">
                <Nav.Link>Get Employees</Nav.Link>
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
