import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Header = (props) => {
    let history = useHistory();
    let [selectedRole, setSelectedRole] = useState(props.role);

    function loginAs(role) {
        switch (role) {
            case "user":
                history.push('/login', { role: 'user' });
                selectedRole = setSelectedRole('User');
                break;
            case "admin":
                history.push('/login', { role: 'admin' });
                selectedRole = setSelectedRole('Admin');
                break;
            default:
                history.push('/login', { role: 'user' });
                break;
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="https://img2.pngio.com/welcome-to-pune-metroofficial-site-of-pune-metro-rail-project-pune-metro-png-300_300.png" width="45" height="45" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse topnav-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selectedRole ? <span>{selectedRole.toUpperCase()}</span> : <span style={{ verticalAlign: "text-bottom" }}> Login</span>}
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item cp" onClick={() => loginAs('user')}> USER</a>
                    <a className="dropdown-item cp" onClick={() => loginAs('admin')}> ADMIN</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle ml-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Signup
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item cp" href="/user-signup">USER</a>
                    <a className="dropdown-item cp" href="/admin-signup">ADMIN</a>
                </div>
            </div>
        </nav >
    );
}

export default Header;
