import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ApiService from "../../Service/ApiService";


export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            mobileNumber: '',
            gender: ''
        }
    }

    handleSignup = (e) => {
        e.preventDefault();

        let signupUserObj;
        const { name, email, password, mobileNumber, gender } = this.state;
        signupUserObj = { userName: name, userEmail: email, userPassword: password, userMobile: mobileNumber, userGender: gender }

        ApiService.signupUser(signupUserObj).then(res => {
            alert("Successfully User Added");
        }).catch(() => {
            alert('Failed to Add User');
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <Card className="w-50 mx-auto mt-2 mb-2 pb-5">
                    <Card.Body>
                        <Button variant="outline-primary btn-sm float-left" href="/" ><ArrowBackSharpIcon /><span>Back</span></Button>
                        <Card className="w-50 mx-auto" border="primary">
                            <Card.Header>Sign Up</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="float-left">Name</Form.Label>
                                        <Form.Control type="name" placeholder="User Name" name="name" value={this.state.name} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="float-left">Email</Form.Label>
                                        <Form.Control type="email" placeholder="User Email" name="email" value={this.state.email} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="float-left">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="float-left">Mobile Number</Form.Label>
                                        <Form.Control type="number" placeholder="Contact Number" name="mobileNumber" value={this.state.mobileNumber} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select" name="gender" value={this.state.gender} onChange={this.onChange} >
                                            <option disabled></option>
                                            <option value="MALE">MALE</option>
                                            <option value="FEMALE">FEMALE</option>
                                            <option value="OTHER">OTHER</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.handleSignup}>
                                            SIGN UP
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </div >
        );
    }
}
