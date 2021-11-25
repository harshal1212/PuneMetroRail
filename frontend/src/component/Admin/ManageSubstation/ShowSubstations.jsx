import React from 'react';
import Table from "react-bootstrap/Table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function ShowSubstations() {
    return (
        <div>
            <div >
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
                        <tr >
                            <td>ABC</td>
                            <td>1234.4321</td>
                            <td>2345.5432</td>
                            <td>
                                <button className="btn btn-danger btn-sm"><DeleteIcon /></button>
                                <button className="btn btn-success btn-sm ml-2"><EditIcon /></button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}