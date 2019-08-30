import React, { Component, Fragment } from 'react';
import { MDBNavItem, MDBIcon } from 'mdbreact';


class MenuItem extends Component {
    render() {
        return (
            <MDBNavItem className={`d-flex flex-row justify-content-between ${this.props.active}`}>
                <Fragment>
                    <a href="#" className="nav-link"><MDBIcon icon={this.props.icon}/> {this.props.name}</a> 
                </Fragment>
                <Fragment>
                    {this.props.count}
                </Fragment>
            </MDBNavItem>
        )
    }
}

export default MenuItem;