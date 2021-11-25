import React, { Component } from 'react';
import './ManageStation.scss';
import AddStation from './AddStation';
import Table from "react-bootstrap/Table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ApiService from "../../../Service/ApiService";
import Button from 'react-bootstrap/Button';


export default class ManageStation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stations: [],
            message: null
        }
        this.deleteStation = this.deleteStation.bind(this);
        this.editUser = this.editUser.bind(this);
        this.getStations = this.getStations.bind(this);
    }

    componentDidMount() {
        this.getStations();
    }

    getStations() {
        ApiService.fetchStation()
            .then((res) => {
                this.setState({ stations: res.data.data })
                console.log(this.state.stations);
            });
    }

    deleteStation(id) {
        ApiService.deleteStation(id)
            .then(res => {
                this.setState({ stations: this.state.stations.filter(station => station.id !== id) });
                this.setState({ message: 'Station deleted successfully.' });
            })
    }

    editUser(id) {
        window.localStorage.setItem("station_id", id);
        this.props.history.push('/edit-station');
    }

    render() {
        return (
            <div>
                {/* Add Station and calling the event to trigger child to parent. */}
                <AddStation sendingStationUpdateEventToParent={this.getStations} />

                {/* Update And Delete Station List  */}
                <div style={{ width: '60rem' }} className="stationList">
                    <h5 className="text-center float-left">Station Details</h5>
                    <Button className="btn btn-primary btn-sm float-right mb-1" href="/admin"><ArrowBackSharpIcon /><span>Back</span></Button>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Station Name</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stations.map(
                                    station =>
                                        <tr key={station.id}>
                                            <td>{station.stationName}</td>
                                            <td>{station.latitude}</td>
                                            <td>{station.longitude}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteStation(station.id)} ><DeleteIcon /></button>
                                                <button className="btn btn-success btn-sm ml-2" onClick={() => this.editUser(station.id)} ><EditIcon /></button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div >
        );
    }
}