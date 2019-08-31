import React, { Component } from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';
// import MenuItems from '../data/menu-items.json';


class Sidebar extends Component {

  render() {
      return (
          <MDBCol md="3" className="d-none d-md-block sidebar p-3">
            <div className="sidebar-sticky">
              <MDBNav className="d-flex flex-column list">
                <NavLink to='/' 
                  className="navbar-brand col-sm-3 col-md-2 mr-0 mb-3 hamburger text-blue" 
                >
                  <MDBIcon icon="bars" size="1x"/>
                </NavLink>
                {/* List of  menu items:
                    Pass each object in state.items as prop to MenuItem component 
                */}
                {this.props.menuItems.map(
                  ({id, name, count, icon, active, color}) => 
                    <MenuItem className=""
                      key={id} 
                      name={name}
                      icon={icon}
                      iconColor={color}
                      count={(count > 0) ? count : ''}
                      active={(active) ? 'active' : ''}
                      id={id}
                    />
                )}
              </MDBNav>
            </div>
              <div className="new-list d-flex flex-row justify-content-between">
                <button className="btn btn-link p-2"><MDBIcon icon="plus" className="blue-text" /> New List</button>
                <button className="btn btn-link p-2"><MDBIcon far icon="object-group" className="blue-text"/></button>
              </div>
          </MDBCol>
      )
  }
}

export default Sidebar;