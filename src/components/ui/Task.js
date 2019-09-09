import React, { Component } from 'react';
import { MDBCol, MDBIcon, MDBBtnGroup, MDBBtn } from 'mdbreact';
import TaskForm from './TaskForm';

class Task extends Component {

    state = {
        taskFormToggle: false
    }

    // Toggle Task Form
    handleToggle = () => {
        this.setState(prevState => ({ 
                taskFormToggle: !prevState.taskFormToggle 
            })
        );
    }

    // Icon to use if Task dependending on task status
    checkCompleted = completed => (completed) ? "check-circle" : "circle";

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
                        sendData={this.props.updateTask}
                        handleToggle={this.handleToggle}
                    /> 
                        
                    :

                    <MDBCol className="mb-3 lead d-flex flex-row justify-content-between line">
                        <p>
                            <MDBIcon 
                                id={this.props.id} 
                                onClick={
                                    () => this.props.updateTask({ id: this.props.id, completed: !this.props.completed })
                                } 
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
                                onClick={ () => this.props.removeTask(this.props.id) }
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