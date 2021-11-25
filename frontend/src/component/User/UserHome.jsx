import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ApiService from "../../Service/ApiService";
import Button from 'react-bootstrap/Button';


export default class UserHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stations: [],
            sourceId: '',
            destinationId: '',
            message: null
        };
        this.getStations = this.getStations.bind(this);
    }

    searchTrainHandler = (e) => {
        e.preventDefault();
        let sourceId = this.state.sourceId;
        let destinationId = this.state.destinationId;

        ApiService.fetchSearchingData(sourceId, destinationId)
            .then(res => {
                const { data: { data: { sourceName, sourceArrivalTime, sourceDepartureTime, destinationName, destinationArrivalTime, destinationDepartureTime, trainNumber, trainName, fares } } } = res;
                this.setState({ message: 'Search Result Found' });

                localStorage.setItem('searchResultObj', JSON.stringify({
                    sourceName: sourceName,
                    sourceArrivalTime: sourceArrivalTime,
                    sourceDepartureTime: sourceDepartureTime,
                    destinationName: destinationName,
                    destinationArrivalTime: destinationArrivalTime,
                    destinationDepartureTime: destinationDepartureTime,
                    trainNumber: trainNumber,
                    trainName: trainName,
                    fares: fares
                }))
                this.props.history.push('/book-page');
            }).catch(() => {
                alert('Failed to Search');
            });

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

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    onLogoutClick = () => {
        window.localStorage.clear()
        sessionStorage.clear();
    }

    render() {

        let roleObj = JSON.parse(localStorage.getItem('roleObj'));

        return (
            <div>
                <div>
                    <Card>
                        <Card.Header as="h6" className="text-left">
                            <AccountCircleIcon />
                            <span className="ml-2 mt-5">Welcome {roleObj ? roleObj.name : 'User'}</span>
                            <Button href="/" variant="btn btn-danger btn-sm float-right" onClick={this.onLogoutClick}>Logout</Button>
                        </Card.Header>
                    </Card>
                </div>
                <Button href="/metrocard" variant="btn btn-primary btn-sm float-right mt-3 mr-2">ADD METRO CARD</Button>
                <Button href="/recharge" variant="btn btn-primary btn-sm float-right mt-3 mr-2">RECHARGE METROCARD</Button>

                <div className="container mt-5">
                    <form>
                        <div className="row">
                            <div className="col-sm-4">
                                <h4><label className="font-weight-bold text-dark" for="exampleInputsource">Enter Source</label></h4>
                            </div>
                            <div className="col-sm-4">
                                <h4><label className="font-weight-bold text-dark" for="exampleInputdestination">Enter destination</label></h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <select className="mdb-select md-form form-control cp" id="source" name="sourceId" value={this.state.sourceId} onChange={this.onChange}>
                                    <option value="" disabled selected >Choose your Source</option>
                                    {this.state.stations.map(
                                        station =>
                                            <option value={station.id} >{station.stationName}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col">
                                <select className="mdb-select md-form form-control cp" id="destination" name="destinationId" value={this.state.destinationId} onChange={this.onChange}>
                                    <option value="" disabled selected>Choose your Destination</option>
                                    {this.state.stations.map(
                                        station =>
                                            <option value={station.id} >{station.stationName}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col">
                                <button type="submit" class="btn btn-outline-dark" onClick={this.searchTrainHandler}>Search Trains</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}
