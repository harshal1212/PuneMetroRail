import React, { Component } from 'react';
import ApiService from "../../Service/ApiService";
import Header from "../../component/Header/Header";
import Footer from '../Footer/Footer';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userEmail: '',
            message: null
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    /**
     * Whenever end user changes the value from header dropdown (role) then componentDidUpdate() hook will get called.
     */
    componentDidUpdate() {
        if (this.props && this.props.location && this.props.location.state) {
            this.role = this.props.location.state.role;
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        let obj;
        const { email, password } = this.state;

        if (this.role === "user") {
            obj = { userEmail: email, userPassword: password };
        } else {
            obj = { adminEmail: email, adminPassword: password };
        }

        ApiService.authenticateLogin(obj, this.role).then(res => {
            const { data: { data: { userName, adminName, userEmail } } } = res;
            this.setState({ message: 'Authenticate successfully.' });
            let name;
            if (this.role === "user") {
                name = userName
            } else if (this.role === "admin") {
                name = adminName
            } else {
                name = 'User';
            }
            localStorage.setItem('roleObj', JSON.stringify({ name: name, role: this.role }))
            this.props.history.push('/' + this.role, { name: name });
            // for geting user data to the user page
            localStorage.setItem('userEmail', JSON.stringify({ userEmail: userEmail }));

        }).catch(() => {
            alert('Please Check Valid Credential');
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <Header role={this.props && this.props.location && this.props.location.state && this.props.location.state.role} />

                <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                    <div className="container">
                        <div className="card login-card">
                            <div className="row no-gutters">
                                <div className="col-md-5" >
                                    <img src="https://img2.pngio.com/welcome-to-pune-metroofficial-site-of-pune-metro-rail-project-pune-metro-png-300_300.png" alt="login" className="login-card-img" />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <p className="login-card-description">Sign into your account</p>
                                        <form>
                                            <div className="form-group">
                                                <label for="email" className="sr-only">Email</label> <input
                                                    type="email" name="email" id="email" className="form-control"
                                                    placeholder="Email address"
                                                    required autoFocus
                                                    value={this.state.email} onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group mb-4">
                                                <label for="password" className="sr-only">Password</label> <input
                                                    type="password" name="password" id="password"
                                                    className="form-control" placeholder="***********"
                                                    required
                                                    value={this.state.password} onChange={this.onChange}
                                                />
                                            </div>
                                            <button className="btn btn-outline-primary btn-block" onClick={this.handleLogin}>Login</button>
                                        </form>
                                        <a href="#!" className="forgot-password-link">Forgot password?</a>
                                        <nav className="login-card-footer-nav">
                                            <a href="#!">Terms of use.</a> <a href="#!">Privacy policy</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Login;