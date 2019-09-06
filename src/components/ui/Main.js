import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import TaskList from '../containers/TaskList';
import FormInput from './FormInput';

class Main extends React.Component {

    state = {
        isClicked: true
    }

    handleToggle = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }

    render() {
        const { name, icon, color } = this.props.lists.find(list => list.id === this.props.activeList);

        return (
            <MDBCol id="main" role="main" md="8" lg="9" className="ms-sm-auto p-4">
                <MDBRow className="d-flex flex-column">
                    <MDBCol>
                        <MDBRow className="d-flex flex-row justify-content-between">
                            <MDBCol className="d-flex flex-column mb-2">
                                <h4>
                                <MDBIcon icon={icon} className={`${(color === 'normal') ? 'black-text' : color} mr-2`}/>{name}
                                    <span id="elipsis" className="mx-3">...</span>
                                </h4>
                                <p id="date">Thursday, August 29</p>
                            </MDBCol>
                            <MDBCol className="d-flex flex-row justify-content-end">
                                <p className="mr-2"><MDBIcon far icon="lightbulb" /> Today</p>
                                <p className="ml-1"><MDBIcon icon="sort" /> Sort</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className="mb-3 lead">
                        {
                            (this.state.isClicked) ?
                                (<p className="add-task" onClick={this.handleToggle}><MDBIcon icon="plus" /> Add Task</p>) :
                                (<FormInput 
                                    taskFn={this.props.addTask} 
                                    listId={this.props.activeList} 
                                    handleToggle={this.handleToggle} 
                                />)
                        }
                    </MDBCol>
                    <TaskList  />
                </MDBRow>
            </MDBCol>
        )
    }
    
}
export default Main;