import React, { } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import Table from "react-bootstrap/Table";

export default function BookPage() {

    let searchResultObj = JSON.parse(localStorage.getItem('searchResultObj'))
    let history = useHistory();

    function proceedHandler() {
        history.push("/proceed-payment");
    }

    return (

        <div className="w-50 mx-auto mt-2 mb-2">
            <h5 className="text-center">DETAILS</h5>
            <Table striped bordered hover variant="light">
                <tbody>
                    <tr>
                        <th>
                            Source Name:
                        </th>
                        <td>
                            {searchResultObj.sourceName}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Source Arrival Time:
                        </th>
                        <td>
                            {searchResultObj.sourceArrivalTime}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Source Departure Time:
                        </th>
                        <td>
                            {searchResultObj.sourceDepartureTime}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Destinaton Name:
                        </th>
                        <td>
                            {searchResultObj.destinationName}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Destinaton Arrival Time:
                        </th>
                        <td>
                            {searchResultObj.destinationArrivalTime}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Destinaton Departure Time:
                        </th>
                        <td>
                            {searchResultObj.destinationDepartureTime}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Train Number:
                        </th>
                        <td>
                            {searchResultObj.trainNumber}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Train Name:
                        </th>
                        <td>
                            {searchResultObj.trainName}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Fares:
                        </th>
                        <td>
                            {searchResultObj.fares}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-primary" onClick={proceedHandler}><span>Proceed To Payment</span></button>
            <button className="btn btn-primary btn-sm float-right" href="/user"><ArrowBackSharpIcon /><span>Back</span></button>
        </div>
    );
}

