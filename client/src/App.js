import React from 'react';

import Container from 'react-bootstrap/Container';

import PostPage from './admin/PostPage';
import Login from './login/Login';
import Header from './common/header';
import logo from './logo.svg';
import './App.scss';
import { Col, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="container-fluid">
        <Header />
        <Container fluid>
          <Row className="pt-5 justify-content-center">
            <Col>
                <Login />
            </Col>
        </Row>
          </Container>
    </div>
  );
}

export default App;
