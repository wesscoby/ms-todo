import React, { Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';


const MenuItem = ({ icon, id, color, name, activeList, changeActive }) => {

    const handleClick = event => {
        const { value } = event.target;
        changeActive(value);
    }

    return (
        <MDBNavItem className={`d-flex flex-row justify-content-between ${activeList}`}>
            <button onClick={handleClick} type="submit" value={id} className="btn btn-link p-2">
                <MDBIcon icon={icon} className={`${color} mr-2`}/>{name}
            </button>
            <Fragment>
                {5}
            </Fragment>
        </MDBNavItem>
    )
}

export default MenuItem;