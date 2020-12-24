import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Navbar>
        );
    }
}

export default Header;
