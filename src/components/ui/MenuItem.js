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

    return (
        <MDBNavItem  className={`d-flex flex-row justify-content-between ${activeList}`}>
            <button onClick={makeActive} onDoubleClick={remove} type="submit" value={id} className="btn btn-link p-2">
                <MDBIcon icon={icon} className={`${color} mr-2`}/>{name}
            </button>
            <Fragment>
                {
                    (id !== "5") ?
                    tasks.filter(task => task.listId === id).length :
                    tasks.length
                }
            </Fragment>
        </MDBNavItem>
    )
}

export default MenuItem;