import React, { Component, Fragment } from 'react';
import { MDBCol, MDBNav, MDBNavItem, MDBIcon } from 'mdbreact';


class Sidebar extends Component {
  state = {
    
  }

  render() {
      return (
          <MDBCol md="3" className="d-none d-md-block sidebar" style={{ height: "100vh" }}>
            <Fragment className="sidebar-sticky">
              <MDBNav className="flex-column">
                <MDBNavItem>
                  <Fragment className="nav-link active">
                    <MDBIcon icon="home" /> My Day
                  </Fragment>
                </MDBNavItem>
              </MDBNav>
            </Fragment>
          </MDBCol>
      )
  }
}

export default Sidebar;