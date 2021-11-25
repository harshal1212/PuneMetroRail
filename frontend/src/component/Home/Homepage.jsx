import React, { Component } from 'react';
import "./Home.scss";
import Header from "../../component/Header/Header";
import Footer from '../Footer/Footer';
import ApiService from '../../Service/ApiService';

export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }

    handlerFeedback = (e) => {
        e.preventDefault();

        let feedbackObj;
        const { name, email, subject, message } = this.state;
        feedbackObj = { name: name, email: email, subject: subject, message: message }

        ApiService.feedbackReport(feedbackObj)
            .then(res => {
                this.props.history.push('/loading')
                alert("Feedback Sent");
                this.props.history.push('/')
            })
            .catch(() => {
                alert('Failed to Sent');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <main>
                {/* call Header Component */}
                < Header />

                {/* main Homepage Image */}
                <div className="thumbnail text-center index-image-outer" >
                    <img src="https://img2.pngio.com/flag-off-date-for-pune-metro-will-be-decided-after-trial-run-pune-metro-png-1200_675.jpg"
                        alt="HomeImage" className="index-image" />
                    <div className="overlay"></div>
                    <div className="index-title">WELCOME TO PUNE METRO
                    <h4>Safety | Security | Punctuality </h4>
                    </div>
                </div >

                {/* -- ======= About Section =======  */}
                < section id="about" className="about-outer" >
                    <div className="container-fluid pl-4 pr-4" >
                        <div className="row about-container">
                            <div className="col-lg-8 content order-lg-1 order-2 pt-4">
                                <h2 className="title">Few Words About Us</h2>
                                <div>
                                    <p>
                                        Pune, the cultural and historical capital of the state of Maharashtra, known as the ‘Queen of Deccan’ due to its scenic beauty and rich natural resources.
                                </p>
                                    <p>
                                        Pune city is known in the world map because of its educational, research and development institutions, IT Parks and automobiles industry in western Maharashtra.
                                  </p>
                                    <p>
                                        In last decades, the city witnessed a rise in population and people migrating from a different part of the country for job opportunities. However, the sustainable infrastructure to facilitate easy commute to the citizens was missing. Average travel time for citizens using public transport in Pune is over ~100 mins a day. This makes more and more citizens use their personal vehicle, which causes traffic chaos and congestion issues.
                                </p>
                                    <p>
                                        Here in, Pune Metro, will help tackle all these issues, provide comfortable and convenient commute in the city by significantly reducing the travel time by 75%. It will facilitate many youths, students, professionals, etc. traveling to their destination. Metro rail will act as the back bone to the public transport system of the Smart City Project and strengthen on various parameters:
                                </p>
                                    <p>
                                        Thus there is a need for a safe, reliable, efficient, affordable, commuter friendly and environmentally sustainable rapid public transport system for the Pune Metro Region.
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-4 background order-lg-1 maha-metro-logo">
                                <img src="https://img2.pngio.com/welcome-to-pune-metroofficial-site-of-pune-metro-rail-project-pune-metro-png-300_300.png"
                                    alt="AboutLogoImage" className="about-image" />
                            </div>
                        </div>
                    </div>
                </section >
                {/* End About Section  */}

                {/* ======= Contact Section =======  */}
                <section className="contact-outer">
                    <div className="container-fluid pb-4">
                        <div className="row">
                            <div className="col">
                                <iframe title="Pune Metro Map" src="https://www.google.com/maps/d/embed?mid=1SEhkZv74wWCqYz92FOl9CD30rIc" width="100%" height="480"></iframe>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center pt-4">
                            <div className="col-sm-4">
                                <h3 className="section-title text-center">Contact Us</h3>
                                <div className="form">
                                    <form className="email-form" id="contact">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name"
                                                placeholder="Your Name" data-rule="minlen:4"
                                                data-msg="Please enter at least 4 chars"
                                                required
                                                value={this.state.name} onChange={this.onChange} />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email"
                                                id="email" placeholder="Your Email" data-rule="email"
                                                data-msg="Please enter a valid email"
                                                required
                                                value={this.state.email} onChange={this.onChange} />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject"
                                                id="subject" placeholder="Subject" data-rule="minlen:4"
                                                data-msg="Please enter at least 8 chars of subject"
                                                required
                                                value={this.state.subject} onChange={this.onChange} />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5"
                                                data-rule="required" data-msg="Please write something for us"
                                                placeholder="Message"
                                                required
                                                value={this.state.message} onChange={this.onChange}></textarea>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.handlerFeedback} >Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Contact Section */}
                <Footer />
            </main >

        );
    }
}