import React, { Component, Fragment } from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import MenuItem from './MenuItem';
import MenuItems from '../data/menu-items.json';


class Sidebar extends Component {
  state = {
    items: MenuItems.items
  }

  render() {
      return (
          <MDBCol md="3" className="d-none d-md-block sidebar p-3">
            <Fragment className="sidebar-sticky">
              <MDBNav className="flex-column">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0 mb-3" href="#"><MDBIcon icon="bars" /></a>
                {this.state.items.map(
                  ({id, name, count, icon, active}) => 
                    <MenuItem 
                      key={id} 
                      name={name}
                      icon={icon}
                      count={(count > 0) ? count : ''}
                      active={(active) ? 'active' : ''}
                    />
                )}
              </MDBNav>
            </Fragment>
          </MDBCol>
      )
  }
}

export default Sidebar;