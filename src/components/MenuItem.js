import React, { Component, Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';


class MenuItem extends Component {

    render() {
        return (
            <MDBNavItem className={`d-flex flex-row justify-content-between ${this.props.active}`}>
                <button type="submit" value={this.props.id} className="btn btn-link p-2">
                    <MDBIcon icon={this.props.icon} className={`${this.props.iconColor} mr-2`}/>{this.props.name}
                </button>
                <Fragment>
                    {this.props.count}
                </Fragment>
            </MDBNavItem>
        )
    }
}

export default MenuItem;