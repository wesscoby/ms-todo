import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Tasklist from './Tasklist';
import TaskForm from './TaskForm';
import TitleArea from './TitleArea';

class Main extends Component {

    state = {
        taskFormToggle: false
    }

    // Toggle Task form 
    handleToggle = () => {
        this.setState(prevState => ({ 
                taskFormToggle: !prevState.taskFormToggle 
            })
        );
    }

    render() {
        // Get properties from activeList
        const { name, icon, color } = this.props.lists.find(list => list.id === this.props.activeList);

        return (

            <MDBCol id="main" role="main" md="8" lg="9" className="ms-sm-auto p-4">
                <MDBRow className="d-flex flex-column justify-content-between">
                    
                    {/* Title Area */}
<<<<<<< HEAD
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
                                <p className="mr-2">
                                    <MDBIcon far icon="lightbulb" /> 
                                    Today
                                </p>
                                <p className="ml-1">
                                    <MDBIcon icon="sort" />
                                    Sort
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>{/* Title Area End */}
=======
                    <TitleArea 
                        name={name}
                        icon={icon}
                        color={color}
                    />
>>>>>>> feature/adding-lists

                    {/* Toggle between 'Add Task' form and button  */}
                    <MDBCol className="mb-3 form-toggle-section lead">
                        {
                            (this.state.taskFormToggle) ?
                                (<TaskForm 
                                    sendData={this.props.addTask} 
                                    listId={this.props.activeList} 
                                    handleToggle={this.handleToggle} 
                                />) : 
                                (<p 
                                    className="add-task" 
                                    onClick={this.handleToggle}
                                    >
                                        <MDBIcon icon="plus" className="mr-2" /> 
                                        Add Task
                                </p>)
                        }
                    </MDBCol>

                    {/* Tasks Section */}
                    <Tasklist
                        activeList={this.props.activeList}
                        tasks={this.props.tasks}
                        addTask={this.props.addTask}
                        updateTask={this.props.updateTask}
                        removeTask={this.props.removeTask}
                    />
                
                </MDBRow>
            </MDBCol>
        )
    }
}

export default Main;