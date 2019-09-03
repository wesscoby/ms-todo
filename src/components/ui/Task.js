import React from 'react';
import { MDBCol } from 'mdbreact';



const Task = ({ title }) => {
    return (
        <MDBCol className="line mb-2">
            {title}
        </MDBCol>
    )
}


export default Task;