import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PinDropIcon from '@material-ui/icons/PinDrop';

export default function addSubstation() {
    return (
        <div>
            <h6>Add Substation</h6>
            <Card border="dark" className="align-items-center">
                <PinDropIcon className="mt-2" />
                <Card.Body>
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" srOnly>substationName</Form.Label>
                                <Form.Control className="mb-2" placeholder="Enter Substation" id="inlineFormInput" type="text"
                                />
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" srOnly> arrivalTime</Form.Label>
                                <Form.Control className="mb-2" id="inlineFormInput" type="time" />
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" srOnly>departureTime</Form.Label>
                                <Form.Control className="mb-2" id="inlineFormInput" type="time" />
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" srOnly> routeId</Form.Label>
                                <Form.Control className="mb-2" id="inlineFormInput" placeholder="Route ID" type="number"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" className="mb-2"> Save</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}