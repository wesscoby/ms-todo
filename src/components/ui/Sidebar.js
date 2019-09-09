import React, { Component } from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import List from './List';


class Sidebar extends Component {

    render() {

        const listComponents = this.props.lists.map(list => (
            <List 
                key={list.id} 
                {...list}
                activeList={(list.id === this.props.activeList) ? 'active' : ''}
                changeActive={this.props.changeActive}
                removeList={this.props.removeList}
                updateList={this.props.updateList}
                tasks={this.props.tasks}
            />
        ))

        return (
            // Sidebar
            <MDBCol md="3" className="d-none d-md-block sidebar">
                <div className="sidebar-sticky">
                    
                    <MDBNav className="d-flex flex-column">
                        
                        {/* Hamburger Button [ not really a button 😉] */}
                        <div className="hamburger">
                            <p className="navbar-brand col-sm-3 col-md-2 mx-2 my-4">
                                <MDBIcon icon="bars" size="1x" className="blue-text" />
                            </p>
                        </div>

                        {/* List Section */}
                        <div id="sidebar-list" className="sidebar-list">
                            {listComponents}
                        </div>
                    
                    </MDBNav>
                </div>

                {/* Add or Update List Section */}
                <div className="new-list d-flex flex-row justify-content-start">
                    <p className="add-list blue-text mx-3"><MDBIcon icon="plus" className="blue-text mr-2" />
                        New List
                    </p>
                </div>

            </MDBCol> // Sidebar End
        )
    }
}

export default Sidebar;