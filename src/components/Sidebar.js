import React, { Component, Fragment } from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
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
                <NavLink to='/' 
                  class="navbar-brand col-sm-3 col-md-2 mr-0 mb-3 hamburger text-blue" 
                >
                  <MDBIcon icon="bars" size="1x"/>
                </NavLink>
                {/* List of  menu items:
                    Pass each object in state.items as prop to MenuItem component 
                */}
                {this.state.items.map(
                  ({id, name, count, icon, active, color}) => 
                    <MenuItem className="mb-2"
                      key={id} 
                      name={name}
                      icon={icon}
                      iconColor={color}
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