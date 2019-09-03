import React, { Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';


const MenuItem = ({ tasks, icon, id, color, name, activeList, changeActive, removeList }) => {

    const makeActive = event => {
        const { value } = event.target;
        changeActive(value);
    }

    const remove = event => {
        const { value } = event.target;
        changeActive("1");
        removeList(value);
    }

    return (
        <MDBNavItem  className={`d-flex flex-row justify-content-between ${activeList}`}>
            <button onClick={makeActive} onDoubleClick={remove} type="submit" value={id} className="btn btn-link p-2">
                <MDBIcon icon={icon} className={`${color} mr-2`}/>{name}
            </button>
            <Fragment>
                {tasks.filter(task => task.id === id).length}
            </Fragment>
        </MDBNavItem>
    )
}

export default MenuItem;