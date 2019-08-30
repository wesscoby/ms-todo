import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

// Unfinished component
// Only display lines
class TaskList extends Component {
    render() {
        return (
            <MDBCol>
                <MDBRow className="d-flex flex-column">
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                    <MDBCol className="line mb-5"></MDBCol>
                </MDBRow>
            </MDBCol>
            
        )
    }
}


export default TaskList;
