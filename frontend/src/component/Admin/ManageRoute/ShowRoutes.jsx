import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ApiService from "../../../Service/ApiService";



export default class ShowRoutes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            routes: [],
            message: null
        }
        this.getRoutes = this.getRoutes.bind(this);
    }

    componentDidMount() {
        this.getRoutes();
    }

    getRoutes() {
        ApiService.fetchRoute()
            .then((res) => {
                this.setState({ routes: res.data.data })
                console.log(this.state.routes);
            })
            .catch(() => {
                alert('Fetching Failed');
            });
    }

    render() {
        return (
            <div>
                <div >
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Arrival Time</th>
                                <th>Departure Time</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.routes.map(
                                    route =>
                                        <tr key={route.id}>
                                            <td>{route.arrivalTime}</td>
                                            <td>{route.departureTime}</td>
                                            <td>{route.sourceName}</td>
                                            <td>{route.destinationName}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm"  ><DeleteIcon /></button>
                                                <button className="btn btn-success btn-sm ml-2" ><EditIcon /></button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    <button className="btn btn-primary btn-sm float-right" href="/admin"><ArrowBackSharpIcon /><span>Back</span></button>
                </div>
            </div>
        );
    }
}