import React, { } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TrainIcon from '@material-ui/icons/Train';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import FeedbackIcon from '@material-ui/icons/Feedback';
import PinDropIcon from '@material-ui/icons/PinDrop';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import "./AdminHome.scss";
import { useHistory } from "react-router-dom"

export default function AdminHome() {
    let roleObj = JSON.parse(localStorage.getItem('roleObj'))
    let history = useHistory();

    const cardClickHandler = (params) => {
        switch (params) {
            case "MS":
                history.push('/manage-station');
                break;
            case "MR":
                history.push('/manage-route');
                break;
            case "MT":
                history.push('**');
                break;
            case "MF":
                history.push('**');
                break;
            case "MSS":
                history.push('**');
                break;
            case "UF":
                history.push('/feedback');
                break;
        }
    }
    const onLogoutClick = () => {
        window.localStorage.clear()
    }

    return (
        <div>
            <Card>
                <Card.Header as="h6" className="text-left">
                    <AccountCircleIcon />
                    <span className="ml-2 mt-5">Welcome {roleObj ? roleObj.name : 'Admin'}</span>
                    <Button href="/" variant="btn btn-danger btn-sm float-right" onClick={onLogoutClick}>Logout</Button>
                </Card.Header>
                <Card.Body>
                    <CardColumns className="cardMain">
                        <Card border="success" className="shadow p-3 mb-5 bg-white rounded indivisual-card" onClick={() => cardClickHandler("MS")}>
                            <Card.Body className="cp">
                                <PinDropIcon />
                                <Card.Title>Manage Stations</Card.Title>
                                <hr></hr>
                            </Card.Body>
                        </Card>
                        <Card border="success" className="shadow p-3 mb-5 bg-white rounded indivisual-card" onClick={() => cardClickHandler("MR")}>
                            <Card.Body className="cp">
                                <SwapHorizIcon />
                                <Card.Title>Manage Routes</Card.Title>
                                <hr></hr>
                            </Card.Body>
                        </Card>
                        <Card className="text-center" border="success" className="shadow p-3 mb-5 bg-white rounded indivisual-card" onClick={() => cardClickHandler("MT")}>
                            <Card.Body className="cp">
                                <TrainIcon />
                                <Card.Title>Manage Train</Card.Title>
                                <hr></hr>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                    <CardColumns className="cardMain">
                        <Card className="text-center" border="success" className="shadow p-3 mb-5 bg-white rounded indivisual-card" onClick={() => cardClickHandler("MF")}>
                            <Card.Body className="cp">
                                <MonetizationOnIcon />
                                <Card.Title>Manage Fares</Card.Title>
                                <hr></hr>
                            </Card.Body>
                        </Card>
                        <Card className="text-center" border="success" className="shadow p-3 mb-5 bg-white rounded indivisual-card" onClick={() => cardClickHandler("MSS")}>
                            <Card.Body className="cp">
                                <PinDropIcon />
                                <Card.Title>Manage Substation</Card.Title>
                                <hr></hr>
                            </Card.Body>
                        </Card>
                        <Card className="text-center" border="success" className="shadow p-3 mb-5 bg-white rounded indivisual-card" onClick={() => cardClickHandler("UF")}>
                            <Card.Body className="cp">
                                <FeedbackIcon />
                                <Card.Title>User Feedbacks</Card.Title>
                                <hr></hr>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Card.Body>
            </Card>
        </div>
    );
}
