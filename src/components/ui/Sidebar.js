import React from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import MenuItem from '../ui/MenuItem';


const Sidebar = ({ lists, tasks, activeList, addList, removeList, changeActive }) => (
    // Sidebar
    <MDBCol md="3" className="d-none d-md-block sidebar">

        <div className="sidebar-sticky">
            <MDBNav className="d-flex flex-column">
            
                {/* Hamburger Button */}
                <div className="hamburger">
                    <button 
                        className="navbar-brand col-sm-3 col-md-2 mx-2 my-4"
                    >
                        <MDBIcon icon="bars" size="1x" className="text-blue" />
                    </button>
                </div>

                {/* Sidebar List Section */}
                <div id="sidebar-list" className="sidebar-list">
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
                </div>
            
            </MDBNav>
        </div>

        {/* New List Section */}
        <div className="new-list d-flex flex-row justify-content-start">
            <button className="btn btn-link"><MDBIcon icon="plus" className="blue-text" /> New List</button>
        </div>

    </MDBCol> // Sidebar End
)

export default Sidebar;