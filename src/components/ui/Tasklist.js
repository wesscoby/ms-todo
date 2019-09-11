import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Task from './Task';

const Tasklist = ({ tasks, activeList, addTask, updateTask, removeTask }) => {

    // Get tasks with listId === activeList
    const activeTasks = tasks.filter(task => task.listId === activeList);

    // Mapping handler for rendering tasks 
    const renderTasks = task => (
        <Task 
            key={task.id}
            {...task}
            addTask={addTask}
            removeTask={removeTask}
            updateTask={updateTask}
        />
    )

    return (
        // If 'Tasks' is selected, list all tasks in the store.
        // If any other List is selected, list only tasks related to that list
        <MDBCol id="task-list" className="task-list">
            <MDBRow className="d-flex flex-column">
                {
                    (activeList !== "0B59aIXY") ?
                        activeTasks.map(renderTasks) :
                        tasks.map(renderTasks)
                }
            </MDBRow>
        </MDBCol>
    )
}

export default Tasklist;