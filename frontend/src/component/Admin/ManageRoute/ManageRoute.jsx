import React from 'react';
import ShowRoutes from './ShowRoutes';
import AddRoute from './AddRoute';


export default function ManageRoute() {

    return (
        <div>
            <div className="d-flex flex-row justify-content-center mt-4">
                <AddRoute />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <ShowRoutes />
            </div>
        </div>
    );
}