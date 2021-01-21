import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';


class Login extends Component {
    constructor(props, context){
        super(props, context);

        this.state =  {
            credentials: {
                username: '',
                password: ''
            },
            error: ''
        };
        this.updateCredential = this.updateCredential.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    onSuccess(response) {
        console.log(response);
        // TODO
        // Pass this to the server and authenticate.
        // Redirect admin to post page.
    }

    onFailure(response) {
        console.log(response);
        // Display error message on-screen.
    }


    updateCredential(e) {
        const {credentials} = this.state;
        credentials[e.target.name] = e.target.value;
        this.setState({credentials});
    }

    login() {
        const {credentials } = this.state;
        
        const username = credentials.username.trim();
        const password = credentials.password;

        if(!username || !password) {
            this.setState({error: 'Please enter both username and password'});
            return;
        }

        console.log(`It's getting this far username:${username}, password:${password}`);
    }



    render() {
        const {credentials, error } = this.state;

        return (
            <div className="container">
                <Form>
                    <Form.Group className="col-6">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            placeholder="Username" 
                                    value={credentials.username} 
                                    aria-label="Username"
                                    onChange={this.updateCredential}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control  value={credentials.password}
                                    placeholder="Password"
                                    aria-label="Password"
                                    onChange={this.updateCredential}
                        />
                    </Form.Group>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Login with Google"
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    {/* <Button variant="primary"
                            onClick={this.login}>Log in</Button> */}
                </Form>
            </div>
        );
    }
}

export default Login;