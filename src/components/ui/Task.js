import React, { Component } from 'react';
import { MDBCol, MDBIcon, MDBBtnGroup, MDBBtn } from 'mdbreact';
import TaskForm from './TaskForm';

class Task extends Component {

    state = {
        taskFormToggle: false
    }

    // Toggle Task Form
    handleToggle = () => {
        // alert("Form closed")
        this.setState(prevState => ({ 
                taskFormToggle: !prevState.taskFormToggle 
            })
        );
    }

    // Icon to use if Task dependending on task status
    checkCompleted = completed => (completed) ? "check-circle" : "circle";
        
    // Send form data to 'Main' to handle Task update
    handleTaskUpdate = ({ id, listId, title, completed}) => {
        this.props.callForUpdate({ id, listId, title, completed });
    }

    // Remove Task from store
    handleTaskRemoval = event => {
        const { value } = event.target;
        this.props.removeTask(value);
    }

    // Toggle status of task (completed)
    updateStatus = event => {
        const { id } = event.target;
        this.props.updateTaskStatus(id);
    }

    render() {
        return (
            <div>
                {
                    (this.state.taskFormToggle) 
                    
                    ?
                    
                        <TaskForm 
                            taskId={this.props.id}
                            listId={this.props.listId}
                            taskTitle={this.props.title}
                            taskCompleted={this.props.completed}
                            sendData={this.handleTaskUpdate}
                            handleToggle={this.handleToggle}
                        /> 
                        
                    :

                        <MDBCol className="mb-3 lead d-flex flex-row justify-content-between line">
                            <p>
                                <MDBIcon 
                                    id={this.props.id} 
                                    onClick={this.updateStatus} 
                                    far 
                                    icon={`${this.checkCompleted(this.props.completed)}  mr-3`}
                                    className="task-status"
                                />
                                { this.props.title }
                            </p>
            
                            {/* Task Buttons */}
                            <MDBBtnGroup size="xs" className="mb-1">
                                <MDBBtn 
                                    color="primary" 
                                    className="px-3"
                                    value={this.props.id}
                                    onClick={this.handleToggle}
                                >
                                    <MDBIcon far icon="edit" />
                                </MDBBtn>

                                <MDBBtn 
                                    color="danger" 
                                    className="px-3"
                                    value={this.props.id}
                                    onClick={this.handleTaskRemoval}
                                >
                                    <MDBIcon far icon="trash-alt"/>
                                </MDBBtn>
                            </MDBBtnGroup>

                        </MDBCol>
                }
            </div>
            
        )
    }
}

export default Task;