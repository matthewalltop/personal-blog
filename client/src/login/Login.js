import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';


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
        this.login = this.login.bind(this);
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

    //     axios
    //   .post(`${Config.apiPrefix}/api/login`, {
    //     username,
    //     password
    //   })
    //   .then(response => {
    //     if (response.status === 200) {
    //       window.sessionStorage.authToken = response.data;
    //       onSuccess(true);
    //     }
    //   })
    //   .catch(error => {
    //     let message;

    //     switch (error.response.status) {
    //       case 500:
    //         message = 'A server error occurred';
    //         break;
    //       case 401:
    //         message = 'User not authorized';
    //         break;
    //       case 409:
    //         message = `User not authorized`; // TODO: Resend
    //         this.setState({registrationExpired: true});
    //         break;
    //       case 400:
    //         message = error.response.data.Message;
    //         break;
    //       default:
    //         message = 'Sorry, something went wrong';
    //         break;
    //     }

    //     this.setState({ error: message });
    // });



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
                    <Button variant="primary"
                            onClick={this.login}>Log in</Button>
                </Form>
            </div>
        );
    }
}

export default Login;