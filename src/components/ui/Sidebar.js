import React from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import MenuItem from '../ui/MenuItem';


const Sidebar = ({ lists, tasks, activeList, addList, removeList, changeActive }) => (
    <MDBCol md="3" className="d-none d-md-block sidebar p-3">
      <div className="sidebar-sticky">
        <MDBNav className="d-flex flex-column list">
          <button className="navbar-brand col-sm-3 col-md-2 mr-0 mb-3 hamburger">
            <MDBIcon icon="bars" size="1x" className="text-blue" />
          </button>
          {lists.map(list => (
            <MenuItem 
              key={list.id} 
              {...list}
              activeList={(list.id === activeList) ? 'active' : ''}
              changeActive={changeActive}
              removeList={removeList}
              tasks={tasks}
            />
          ))}
        </MDBNav>
      </div>
        <div className="new-list d-flex flex-row justify-content-between">
          <button className="btn btn-link p-2"><MDBIcon icon="plus" className="blue-text" /> New List</button>
          <button className="btn btn-link p-2"><MDBIcon far icon="object-group" className="blue-text"/></button>
        </div>
    </MDBCol>
  )

export default Sidebar;