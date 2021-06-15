import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ApiService from "../../../Service/ApiService";

export default class AddRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrivalTime: '',
            departureTime: '',
            sourceName: '',
            destinationName: '',
            message: ''
        }
        this.saveRoute = this.saveRoute.bind(this);
    }

    saveRoute = (e) => {
        e.preventDefault();
        let routeObj = { arrivalTime: this.state.arrivalTime, departureTime: this.state.departureTime, sourceName: this.state.sourceName, destinationName: this.state.destinationName };
        ApiService.addRoute(routeObj)
            .then(res => {
                this.setState({ message: 'Route  added successfully.' });
                alert("Route  added successfully");
            })
            .catch(() => {
                alert('Route Not Added');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h6>Add Route</h6>
                <Card border="dark" className="align-items-center">
                    <SwapHorizIcon className="mt-2" />
                    <Card.Body>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly>arrivalTime</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="arrivalTime" type="time" value={this.state.arrivalTime} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly>departureTime</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="departureTime" type="time" value={this.state.departureTime} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly>sourceName</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="sourceName" placeholder="Enter Source" type="text" value={this.state.sourceName} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly> destinationName</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="destinationName" placeholder="Enter Destination" type="text" value={this.state.destinationName} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2" onClick={this.saveRoute}>Save</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        );
    }
}