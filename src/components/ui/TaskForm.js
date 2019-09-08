import React, { Component } from "react";
import { MDBFormInline, MDBInput, MDBIcon, MDBBtnGroup, MDBBtn } from "mdbreact";

class TaskForm extends Component {

    state = {
        taskIdInput: this.props.taskId || '',
        listIdInput: this.props.listId,
        titleInput: this.props.taskTitle || '',
        statusInput: this.props.taskCompleted || false
    }

    // Collect form input. Update state
    handleChange = event => {
        let { type, name, value } = event.target
        if(type === "checkbox") value = event.target.checked;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { taskIdInput, listIdInput, titleInput, statusInput } = this.state;

        // If handleChange is not called, use default values instead of value in state
        if(listIdInput === '') listIdInput = this.props.listId;
        if(titleInput === '') titleInput = this.props.taskTitle;

        // send form data to parent Component
        this.props.sendData({
            id: taskIdInput, 
            listId: listIdInput, 
            title: titleInput, 
            completed: statusInput
        });

        this.handleToggleClick();
    }

    handleToggleClick = () => {
        this.props.handleToggle();
    }

    render() {
        return (
            <MDBFormInline className="d-flex flex-row justify-content-between p-3">

                {/* Title field */}
                <div className="flex-grow-1 flex-fill mr-5">
                    <MDBInput
                        className="w-100"
                        label="Task Title" 
                        type="text"
                        value={this.state.titleInput}
                        name="titleInput" 
                        onInput={this.handleChange}
                    />
                </div>

                {/* ID field */}
                <div className="flex-shrink-1">
                    <MDBInput
                        className="w-50"
                        label="ID"
                        type="text"
                        name="taskIdInput"
                        value={this.state.taskIdInput}
                        onInput={this.handleChange}
                    />
                </div>

                {/* List ID field */}
                <div className="flex-shrink-1">
                <MDBInput
                    className="w-50" 
                    label="List ID"
                    disabled
                    type="text" 
                    name="listIdInput"
                    value={this.state.listIdInput} 
                    onInput={this.handleChange} 
                />
                </div>

                {/* Status checkbox */}
                <div className="flex-shrink-1 mr-5">
                    <MDBInput 
                        label="Done" 
                        className="w-50"
                        type="checkbox"
                        checked={this.state.statusInput}
                        id="statusCheckbox"
                        name="statusInput"
                        onChange={this.handleChange}
                    />
                </div>
                
                {/* Submit and Cancel buttons */}
                <div className="flex-shrink-1">
                    <MDBBtnGroup size="sm" className="w-50">
                        <MDBBtn
                            color="outline-success"
                            type="submit"
                            onClick={this.handleSubmit}
                        >
                            <MDBIcon size="1x" icon="plus" className="" />
                        </MDBBtn>
                        
                        <MDBBtn 
                            color="outline-danger"
                            type="reset"
                            onClick={this.handleToggleClick}
                        >
                            <MDBIcon size="1x" icon="times" className=""/>
                        </MDBBtn>
                    </MDBBtnGroup>
                </div>

            </MDBFormInline>
        )
    }
}

export default TaskForm;