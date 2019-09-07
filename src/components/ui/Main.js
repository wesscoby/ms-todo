import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Task from '../ui/Task';
import TaskForm from './TaskForm';

class Main extends Component {

    state = {
        taskFormToggle: false
    }

    // Toggle Task form 
    handleToggle = () => {
        this.setState({ taskFormToggle: !this.state.taskFormToggle });
    }


    // Update Task Details except taskId
    handleCallForUpdate = ({ id, listId = "", title = "", completed = false }) => {
        this.props.updateTask({ id, listId, title, completed })
    }

    // Update Task status [ completed at click of bullet icon ]
    toggleTaskStatus = taskId => {
        let { completed } = this.props.tasks.find(task => task.id === taskId);
        this.props.updateTask({id: taskId, completed: !completed});
    }

    // Receive Data from form and add new task to store
    addNewTask = ({id, title, listId, completed}) => {
        this.props.addTask({id, title, listId, completed})
    }

    // Mapping handler for rendering tasks 
    renderTasks = task => (
        <Task 
            key={task.id}
            {...task}
            addTask={this.props.addTask}
            updateTaskStatus={this.toggleTaskStatus}
            removeTask={this.props.removeTask}
            callForUpdate={this.handleCallForUpdate}
        />
    )

    

    render() {
        // Get properties from activeList
        const { name, icon, color } = this.props.lists.find(list => list.id === this.props.activeList);
        // Get tasks with listId === activeList
        const activeTasks = this.props.tasks.filter(task => task.listId === this.props.activeList);

        return (

            <MDBCol id="main" role="main" md="8" lg="9" className="ms-sm-auto p-4">
                <MDBRow className="d-flex flex-column justify-content-between">
                    
                    {/* Title Area */}
                    <MDBCol>
                        <MDBRow className="d-flex flex-row justify-content-between title-area">
                            <MDBCol className="d-flex flex-column mb-2">
                                <h4>
                                    <MDBIcon 
                                        icon={icon} 
                                        className={`${(color === 'normal') ? 'black-text' : color} mr-2`}
                                    />
                                    {name}
                                    <span id="elipsis" className="mx-3">...</span>
                                </h4>
                                <p id="date">Thursday, August 29</p>
                            </MDBCol>
                            <MDBCol className="d-flex flex-row justify-content-end">
                                <p className="mr-2"><MDBIcon far icon="lightbulb" /> Today</p>
                                <p className="ml-1"><MDBIcon icon="sort" /> Sort</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>{/* Title Area End */}

                    {/* Toggle between 'Add Task' form and button  */}
                    <MDBCol className="mb-3 form-toggle-section lead">
                        {
                            (this.state.taskFormToggle) ?
                                (<TaskForm 
                                    sendData={this.addNewTask} 
                                    listId={this.props.activeList} 
                                    handleToggle={this.handleToggle} 
                                />) : 
                                (<p className="add-task" onClick={this.handleToggle}><MDBIcon icon="plus" /> Add Task</p>)
                        }
                    </MDBCol>

                    {/* 
                        Tasks Section
                        If 'Tasks' is selected, list all tasks in the store.
                        If any other list is selected, list only tasks related to that list
                    */}
                    <MDBCol id="task-list" className="task-list">
                        <MDBRow className="d-flex flex-column">
                            {
                                (this.props.activeList !== "5") ?
                                    activeTasks.map(this.renderTasks) :
                                    this.props.tasks.map(this.renderTasks)
                            }
                        </MDBRow>
                    </MDBCol>{/* Tasks Section End */}
                
                </MDBRow>
            </MDBCol>
        )
    }
    
}
export default Main;