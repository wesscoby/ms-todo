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
                    <TitleArea 
                        name={name}
                        icon={icon}
                        color={color}
                    />

                    {/* Toggle between 'Add Task' form and button  */}
                    <MDBCol className="mb-3 form-toggle-section lead">
                        {
                            (this.state.taskFormToggle) ?
                                (<TaskForm 
                                    sendData={this.addNewTask} 
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