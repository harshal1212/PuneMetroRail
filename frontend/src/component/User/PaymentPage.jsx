import React, { Component } from 'react';
import ApiService from '../../Service/ApiService';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

export default class PaymentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: null
        }
    }

    handlePayment = (e) => {
        e.preventDefault();

        let paymentObj;
        const { email, password } = this.state;
        paymentObj = { userEmail: email, userPassword: password }
        const searchResultObj = JSON.parse(localStorage.getItem('searchResultObj'));

        ApiService.fetchingPayment(paymentObj, searchResultObj.fares)
            .then(res => {
                this.setState({ message: 'Payment successful' });
                this.props.history.push('/loading')
                alert("Payment successful");
                this.props.history.push('/user')
            })
            .catch(() => {
                alert('Failed to Fetch Payment');
            });
    }

    onLogoutClick = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {

        let searchResultObj = JSON.parse(localStorage.getItem('searchResultObj'));
        // let userEmailObj = JSON.parse(localStorage.getItem('userEmail'));
        // this.setState.email = userEmailObj.userEmail;

        return (
            <div>
                <Card className="w-75 mx-auto mt-2 mb-2 pb-5">
                    <Card.Header as="h6" className="text-left">
                        <Button href="/" variant="btn btn-danger btn-sm float-right" onClick={this.onLogoutClick}>Logout</Button>
                    </Card.Header>
                    <Card.Body>
                        <Button variant="outline-primary btn-sm float-left" href="/user"><ArrowBackSharpIcon /><span>Back</span></Button>
                        <Card className="w-50 mx-auto" border="primary">
                            <Card.Header>Confirm Details and Proceed</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="float-left">Email</Form.Label>
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChange} />
                                        {/* <Form.Control type="email" name={userEmailObj.userEmail} value={userEmailObj.userEmail} readonly onChange={this.onChange} /> */}
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="float-left">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="float-left">Fares</Form.Label>
                                        <Form.Control type="text" name={searchResultObj.fares} value={searchResultObj.fares} onChange={this.onChange} readonly />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.handlePayment}>
                                            Proceed to Payment
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
