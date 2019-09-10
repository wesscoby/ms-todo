import React, { Component } from "react";
import { MDBFormInline, MDBInput, MDBIcon, MDBBtnGroup, MDBBtn } from "mdbreact";
import shortId from 'shortid';

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
        this.setState({ 
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { taskIdInput, listIdInput, titleInput, statusInput } = this.state;

        // send form data to parent Component
        this.props.sendData({
            id: taskIdInput || shortId.generate(), 
            listId: listIdInput, 
            title: titleInput, 
            completed: statusInput
        });

        this.props.handleToggle()
    }

    render() {
        return (
            <MDBFormInline className="d-flex flex-row justify-content-between p-3">

                {/* Title field */}
                <div className="flex-grow-1 flex-fill mr-5">
                    <MDBInput
                        className="w-100"
                        label="Title" 
                        type="text"
                        value={this.state.titleInput}
                        name="titleInput" 
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
                    <MDBBtnGroup size="sm" className="w-100">
                        <MDBBtn
                            color="outline-success"
                            type="submit"
                            title="Submit"
                            onClick={this.handleSubmit}
                        >
                            <MDBIcon size="1x" icon="plus" className="" />
                        </MDBBtn>
                        
                        <MDBBtn 
                            color="outline-danger"
                            type="reset"
                            title="Cancel"
                            onClick={() => this.props.handleToggle()}
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