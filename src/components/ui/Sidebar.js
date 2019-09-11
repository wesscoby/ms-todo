import React, { Component } from 'react';
import { MDBCol, MDBNav, MDBIcon } from 'mdbreact';
import List from './List';
import FormModal from './FormModal';


class Sidebar extends Component {

<<<<<<< HEAD
    render() {

        const listComponents = this.props.lists.map(list => (
=======
    state = {
        modalToggle: false
    }

    handleToggle = () => {
        this.setState(prevState => ({
            modalToggle: !prevState.modalToggle
        }))
    }

    render() {

        const renderListComponents = this.props.lists.map(list => (
>>>>>>> feature/adding-lists
            <List 
                key={list.id} 
                {...list}
                activeList={(list.id === this.props.activeList) ? 'active' : ''}
                changeActive={this.props.changeActive}
                removeList={this.props.removeList}
                updateList={this.props.updateList}
                tasks={this.props.tasks}
            />
<<<<<<< HEAD
        ))
=======
        ));
>>>>>>> feature/adding-lists

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
<<<<<<< HEAD
                            {listComponents}
=======
                            {renderListComponents}
>>>>>>> feature/adding-lists
                        </div>
                    
                    </MDBNav>
                </div>

                {/* Add List Section */}
                <div className="new-list d-flex flex-row justify-content-start">
<<<<<<< HEAD
                    <p className="add-list blue-text mx-3 lead"><MDBIcon icon="plus" className="blue-text mr-2" />
                        New List
                    </p>
=======
                    {(this.state.modalToggle) ? 
                        (
                            <FormModal
                                submitData={this.props.addList}
                                modalTitle="Add New List"
                                handleToggle={this.handleToggle}
                            />
                        ) :
                        (
                            <p
                                onClick={this.handleToggle}
                                className="add-list blue-text mx-3"
                            >
                                <MDBIcon icon="plus" className="blue-text mr-2" />
                                New List
                            </p>
                        )
                    }
>>>>>>> feature/adding-lists
                </div>

            </MDBCol> // Sidebar End
        )
    }
}

export default Sidebar;