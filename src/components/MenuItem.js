import React, { Component, Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';


class MenuItem extends Component {
    render() {
        return (
            <MDBNavItem className={`d-flex flex-row justify-content-between ${this.props.active}`}>
                <NavLink to='#' className="p-2">
                    <MDBIcon icon={this.props.icon} className={`${this.props.iconColor} mr-2`}/>{this.props.name}
                </NavLink>
                <Fragment>
                    {this.props.count}
                </Fragment>
            </MDBNavItem>
        )
    }
}

export default MenuItem;