import React from 'react';
import { MDBCol, MDBIcon, MDBBtnGroup, MDBBtn } from 'mdbreact';



const Task = ({ id, title, listId, completed, removeTask, callForUpdate }) => {

    // Change Task icon to reflect task status
    const checkCompleted = completed => 
        (completed) ? 
            (<MDBIcon far icon="check-circle  mr-3"/>) : 
            (<MDBIcon far icon="circle mr-3" />);


    // Send id of task to be updated to 'Main'
    const handleTaskUpdate = event => {
        const { value } = event.target;
        callForUpdate(value);
    }
    
    // Remove Task from store
    const handleTaskRemoval = event => {
        const { value } = event.target;
        removeTask(value);
    }

    return (
        <MDBCol className="mb-3 lead d-flex flex-row justify-content-between line">
            <p>{ checkCompleted(completed) }{ title }</p>
            
            {/* Task Buttons */}
            <MDBBtnGroup size="xs" className="mb-1">
                <MDBBtn 
                    color="primary" 
                    className="px-3"
                    value={id}
                    onClick={handleTaskUpdate}
                >
                    <MDBIcon far icon="edit" />
                </MDBBtn>

                <MDBBtn 
                    color="danger" 
                    className="px-3"
                    value={id}
                    onClick={handleTaskRemoval}
                >
                    <MDBIcon far icon="trash-alt"/>
                </MDBBtn>
            </MDBBtnGroup>

        </MDBCol>
    )
}


export default Task;