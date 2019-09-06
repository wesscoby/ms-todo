import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Task from './Task';

// Unfinished component
// Only display lines
class TaskList extends React.Component {

    render() {
            // ({ lists, tasks, activeList, addTask, updateTask, removeTask })
        const activeTasks = this.props.tasks.filter(task => task.listId === this.props.activeList);
        
        return (
            <MDBCol>
                <MDBRow className="d-flex flex-column">
                    {
                        (this.props.activeList !== "5") ?
                            activeTasks.map(task => (
                                <Task 
                                    key={task.id}
                                    {...task}
                                    addTask={this.props.addTask}
                                    updateTask={this.props.updateTask}
                                    removeTask={this.props.removeTask}
                                />
                            )) :
                        this.props.tasks.map(task => (
                            <Task 
                                key={task.id}
                                {...task}
                                addTask={this.props.addTask}
                                updatetask={this.props.updateTask}
                                removeTask={this.props.removeTask}
                            />
                        ))
                    }
                </MDBRow>
            </MDBCol>
            
        )
    }
}


export default TaskList;
