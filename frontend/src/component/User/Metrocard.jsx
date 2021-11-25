import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ApiService from "../../Service/ApiService";

export default class Metrocard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            email: '',
            password: '',
            date: '',
            city: '',
            state: '',
            country: '',
            balance: '',
            message: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onLogoutClick = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let metroObj;
        const { cardNumber, email, password, date, city, state, country, balance } = this.state;
        metroObj = { cardNumber: cardNumber, userEmail: email, userPassword: password, userDateOfBirth: date, city: city, state: state, country: country, balance: balance }

        ApiService.saveMetrocard(metroObj).then(res => {
            this.setState({ message: 'Metro Card Saved Successfully.' });
            alert("Metrocard  added successfully");
        }).catch(() => {
            alert('Failed to Add');
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {

        let roleObj = JSON.parse(localStorage.getItem('roleObj'));
        // let userEmailObj = JSON.parse(localStorage.getItem('userEmail'));
        // this.setState.email = userEmailObj.userEmail;

        return (
            <div>
                <Card className="w-75 mx-auto mt-2 mb-2 pb-5">
                    <Card.Header as="h6" className="text-left">
                        <AccountCircleIcon />
                        <span className="ml-2 mt-5">Welcome {roleObj ? roleObj.name : 'User'}</span>
                        <Button href="/" variant="btn btn-danger btn-sm float-right" onClick={this.onLogoutClick}>Logout</Button>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="outline-primary btn-sm float-left" href="/user" ><ArrowBackSharpIcon /><span>Back</span></Button>
                        <Card className="w-50 mx-auto" border="primary">
                            <Card.Header>Metro Card Details</Card.Header>
                            <Card.Body>
                                <Form style={{ height: '32rem' }}>
                                    <Form.Group controlId="formBasicNumber">
                                        <Form.Label className="float-left">Enter Card Number</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Card Number" name="cardNumber" value={this.state.cardNumber} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="float-left">User Email</Form.Label>
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChange} />
                                        {/* <Form.Control type="email" name={userEmailObj.userEmail} value={userEmailObj.userEmail} readonly onChange={this.onChange} /> */}
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="float-left">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDOB">
                                        <Form.Label className="float-left">Date Of Birth</Form.Label>
                                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Row>
                                            <Col>
                                                <Form.Control placeholder="City" name="city" value={this.state.city} onChange={this.onChange} />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="State" name="state" value={this.state.state} onChange={this.onChange} />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="Country" name="country" value={this.state.country} onChange={this.onChange} />
                                            </Col>
                                        </Form.Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="float-left">Balance</Form.Label>
                                        <Form.Control placeholder="0" type="number" name="balance" value={this.state.balance} min="0" max="0" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                            Submit
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
