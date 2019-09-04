import React, { Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';


const MenuItem = ({ tasks, icon, id, color, name, activeList, changeActive, removeList }) => {

    const makeActive = event => {
        const { value } = event.target;
        changeActive(value);
    }

    const remove = event => {
        const readOnlyLists = ["1", "2", "3", "4", "5"];
        const { value } = event.target;
        if (readOnlyLists.includes(value)) {
            alert("This List is ReadOnly!");
        } else {
            changeActive("1");
            removeList(value);
        }
    }

    const taskCountElement = count => (<p className="mr-2">{count}</p>)

    return (
        <MDBNavItem  className={`d-flex flex-row justify-content-between mx-1 ${activeList}`}>
            <button onClick={makeActive} onDoubleClick={remove} type="submit" value={id} className="btn btn-link p-2">
                <MDBIcon icon={icon} className={`${color} mr-2`}/>{name}
            </button>
            <Fragment>
                {/*
                    Filter number of tasks according to Active List
                    But return total number of tasks if active list is Tasks
                */}
                
                {((fn) => {
                    if(id !== "5") {
                        let filteredTasksLength = tasks.filter(task => task.listId === id).length
                        return (filteredTasksLength > 0) ? 
                            fn(filteredTasksLength) : fn('');
                    } else {
                        return fn(tasks.length) 
                    }
                })(taskCountElement)}
            </Fragment>
        </MDBNavItem>
    )
}

export default MenuItem;