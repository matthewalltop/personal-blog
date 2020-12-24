import React, { Component } from 'react';
import ReactMde from 'react-mde';
import { Button, InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap';
import "react-mde/lib/styles/css/react-mde-all.css";
import axios from 'axios';


export default class PostPage extends Component {
            constructor(props) {
                super(props);
                this.state = { 
                    postText: '',
                    postTitle: ''
                };

                this.handleChange = this.handleChange.bind(this);
                this.handlePostChange = this.handlePostChange.bind(this);
                this.submitPost = this.submitPost.bind(this);
            }

            handleChange(e) {
                this.setState({[e.target.name]: e.target.value}); 
            }

            /** TODO: This should be in a hook with the React MDE instead. */
            handlePostChange(e) {
                this.setState({postText: e}); 
            }

            submitPost() {
                const {postText, postTitle} = this.state;
                var post = {
                    title: postTitle,
                    author: 'handle this later',
                    body: postText
                };
                
                console.log(post);
                // axios
                //     .post(`$localhost:???/api/login`, post)
                //     .then(response => {
                //         if (response.status === 200) {
                        
                //         }
                //     })
                //     .catch(error => {
                //         let message;

                //         switch (error.response.status) {
                //             case 500:
                //                 message = 'A server error occurred';
                //                 break;
                //             case 401:
                //             message = 'User not authorized';
                //             break;
                //         case 409:
                //             message = `User not authorized`; // TODO: Resend
                //             this.setState({registrationExpired: true});
                //             break;
                //         case 400:
                //             message = error.response.data.Message;
                //             break;
                //         default:
                //             message = 'Sorry, something went wrong';
                //             break;
                //         }

                //             this.setState({ error: message });
                //         });
            };

            render() {
                return (
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Post Title"
                                            name="postTitle"
                                            onChange={this.handleChange}
                                        ></FormControl>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Row>
                                    <Col>
                                        <ReactMde
                                            onChange={this.handlePostChange} 
                                        />
                                    </Col>
                                </Row>
                            </Row>
                            <Row className="mt-3">
                                <Col className="justify-content-end">
                                    <Button
                                        variant="primary" 
                                        size="md"
                                        onClick={this.submitPost}>
                                            Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                );
            }
    };
