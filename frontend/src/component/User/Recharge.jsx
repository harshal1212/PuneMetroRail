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
            amount: '',
            message: null
        }
    }

    handlePayment = (e) => {
        e.preventDefault();
        let rechargeObj;
        const { email, password, amount } = this.state;
        rechargeObj = { userEmail: email, userPassword: password }

        ApiService.rechargeMetrocard(rechargeObj, amount)
            .then(res => {
                this.setState({ message: 'Recharge successful' });
                this.props.history.push('/loading')
                alert("Recharge successful");
                this.props.history.push('/user')
            })
            .catch(() => {
                alert('Failed to Recharge');
            });
    }

    onLogoutClick = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {

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
                            <Card.Header>Recharge</Card.Header>
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
                                        <Form.Label className="float-left">Amount</Form.Label>
                                        <Form.Control type="text" name="amount" value={this.state.amount} onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.handlePayment}>
                                            Recharge
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
