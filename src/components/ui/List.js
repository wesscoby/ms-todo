import React, { Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';


const List = ({ tasks, icon, id, color, name, activeList, changeActive, removeList }) => {

    // Remove list [ delete from store ]
    // Exception: Lists with ids 1 to 5 cannot be deleted
    const remove = () => {
        const readOnlyLists = ["1", "2", "3", "4", "5"];
        if (readOnlyLists.includes(id)) {
            alert("This List is ReadOnly!");
        } else {
            changeActive("1"); // Default to 'My Day'
            removeList(id);
        }
    }

    // Render number of tasks belonging to a list
    const taskCountElement = count => 
        (<p className="mr-2 p-1 badge badge-primary rounded">{ (count > 0) ? count : '' }</p>);

    return (
        <MDBNavItem  className={`d-flex flex-row justify-content-between mx-1 ${activeList}`}>
            {/*
                DoubleClick to Remove or Delete List. 
                Tasks associated with a deleted list will still show in 'Tasks'
            */}
            <button 
                value={id}
                onClick={() => changeActive(id)} 
                onDoubleClick={remove}
                className="btn btn-link p-2"
                title="DoubleClick to Delete"
            >
                <MDBIcon icon={icon} className={`${color} mr-2`}/>
                {name}
            </button>

            <Fragment>
                {/*
                    Filter number of tasks according to Active List
                    But return total number of tasks if active list is 'Tasks'
                */}
                
                {((display) => {
                    if(id !== "5") {
                        let filteredTasksLength = tasks.filter(task => task.listId === id).length
                        return display(filteredTasksLength)
                    } else {
                        return display(tasks.length);
                    }
                })(taskCountElement)}
            </Fragment>

        </MDBNavItem>
    )
}

export default List;