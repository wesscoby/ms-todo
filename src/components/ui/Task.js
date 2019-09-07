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
        this.setState({ taskFormToggle: !this.state.taskFormToggle })
    }

    // Icon to use if Task dependending on task status
    checkCompleted = completed => (completed) ? "check-circle" : "circle";
        
    // Send id of task to be updated to 'Main'
    handleTaskUpdate = ({ id, listId, title, completed}) => {


        // console.log({ id, listId, title, completed });
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

// const Task = ({ id, title, listId, completed, removeTask, updateTaskStatus, callForUpdate }) => {

//     // Change Task icon to reflect task status
//     const checkCompleted = completed => 
//         (completed) ? 
//             (<MDBIcon id={id} onClick={updateStatus} far icon="check-circle  mr-3"/>) : 
//             (<MDBIcon id={id} onClick={updateStatus} far icon="circle mr-3" />);


//     // Send id of task to be updated to 'Main'
//     const handleTaskUpdate = event => {
//         const { value } = event.target;
//         callForUpdate(value);
//     }
    
//     // Remove Task from store
//     const handleTaskRemoval = event => {
//         const { value } = event.target;
//         removeTask(value);
//     }

//     // Toggle status of task (completed)
//     const updateStatus = event => {
//         const { id } = event.target;
//         updateTaskStatus(id);
//     }

//     return (
//         <MDBCol className="mb-3 lead d-flex flex-row justify-content-between line">
//             <p className="task-status" >{ checkCompleted(completed) }{ title }</p>
            
//             {/* Task Buttons */}
//             <MDBBtnGroup size="xs" className="mb-1">
//                 <MDBBtn 
//                     color="primary" 
//                     className="px-3"
//                     value={id}
//                     onClick={handleTaskUpdate}
//                 >
//                     <MDBIcon far icon="edit" />
//                 </MDBBtn>

//                 <MDBBtn 
//                     color="danger" 
//                     className="px-3"
//                     value={id}
//                     onClick={handleTaskRemoval}
//                 >
//                     <MDBIcon far icon="trash-alt"/>
//                 </MDBBtn>
//             </MDBBtnGroup>

//         </MDBCol>
//     )
// }


export default Task;