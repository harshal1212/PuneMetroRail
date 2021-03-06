import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PinDropIcon from '@material-ui/icons/PinDrop';
import ApiService from "../../../Service/ApiService";

export default class AddStation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stationName: '',
            latitude: '',
            longitude: ''
        }
        this.saveStation = this.saveStation.bind(this);
    }

    saveStation = (e) => {
        e.preventDefault();
        let stationObj = { stationName: this.state.stationName, latitude: this.state.latitude, longitude: this.state.longitude };
        ApiService.addStation(stationObj)
            .then(res => {
                this.setState({ message: 'Station  added successfully.' });
                alert("Station  added successfully");
                this.props.sendingStationUpdateEventToParent();  //child to parent call
            })
            .catch(() => {
                alert('Station Failed to Add');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <Card border="dark" style={{ width: '47rem' }} className="card2">
                    <PinDropIcon className="mt-2" />
                    <Card.Body>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly> stationName</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="stationName" placeholder="Enter Station" type="text"
                                        value={this.state.stationName} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly>latitude</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="latitude" placeholder="Enter Latitude" type="number"
                                        value={this.state.latitude} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" srOnly> longitude</Form.Label>
                                    <Form.Control className="mb-2" id="inlineFormInput" name="longitude" placeholder="Enter Longitude" type="number"
                                        value={this.state.longitude} onChange={this.onChange} />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2" onClick={this.saveStation}> Save </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        );
    }
}