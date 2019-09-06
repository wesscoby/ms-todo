import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';



const Task = ({ id, title, listId, completed , addTask, updateTask, removeTask }) => {

    const checkCompleted = done => 
        (done) ? 
            (<MDBIcon far icon="check-circle  mr-3"/>) : 
            (<MDBIcon far icon="circle mr-3" />);

    const handleTaskUpdate = event => {
        const { value } = event.target;
        console.log(value);
    }
    
    const handleTaskRemoval = event => {
        const { value } = event.target;
        removeTask(value)
    }

    return (
        <MDBCol className="mb-3 lead d-flex flex-row justify-content-between line">
            <p>{ checkCompleted(completed) }{ title }</p>
            <div className="d-flex flex-row justify-content-end">
                <button 
                    className="btn btn-sm btn-primary rounded"
                    value={id}
                    onClick={handleTaskUpdate}
                >
                    <MDBIcon far icon="edit" />
                </button>
                <button 
                    className="btn btn-sm btn-danger rounded"
                    value={id}
                    onClick={handleTaskRemoval}
                >
                    <MDBIcon far icon="trash-alt"/>
                </button>
            </div>
        </MDBCol>
    )
}


export default Task;