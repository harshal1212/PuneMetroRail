import React, { Component } from 'react';
import ApiService from '../../../Service/ApiService';
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

class Feedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feedbacks: [],
            message: null
        }
        this.getFeedback = this.getFeedback.bind(this);
    }

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback() {

        ApiService.fetchFeedback()
            .then((res) => {
                this.setState({ feedbacks: res.data.data })
                console.log(this.state.feedbacks);
            })
            .catch(() => {
                alert('Failed To Access Feedback List');
            });
    }

    render() {
        return (
            <div className="feedbackList">
                <h5 className="text-center float-left mr-5 mt-2 pl-4">Feedback Details</h5>

                <Button href="/admin" className="btn btn-primary btn-sm float-right mb-1 mr-5 mt-2" ><ArrowBackSharpIcon /><span>Back</span></Button>

                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.feedbacks.map(
                                feedback =>
                                    <tr key={feedback.id}>
                                        <td>{feedback.name}</td>
                                        <td>{feedback.email}</td>
                                        <td>{feedback.subject}</td>
                                        <td>{feedback.message}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Feedback;