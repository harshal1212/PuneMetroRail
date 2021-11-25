import React, { Component } from 'react';
import "./Footer.scss";
class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-center text-white p-3 w-100">
                <div className="footer-top">
                    <div className="container"></div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>Pune Metro</strong>. All Rights Reserved
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;