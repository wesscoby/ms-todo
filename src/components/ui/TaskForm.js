import React, { Component } from "react";
import { MDBFormInline, MDBInput, MDBIcon, MDBBtnGroup, MDBBtn } from "mdbreact";

class TaskForm extends Component {

    state = {
        taskIdInput: '',
        listIdInput: '',
        titleInput: '',
        statusInput: false
    }

    handleChange = event => {
        let { type, name, value } = event.target

        if(type === "checkbox") value = event.target.checked;

        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { taskIdInput, listIdInput, titleInput, statusInput } = this.state;

        // If handleChange is not called, use default value instead of value in state
        if(listIdInput === '') listIdInput = this.props.listId;

        this.props.taskFn({
            id: taskIdInput, 
            listId: listIdInput, 
            title: titleInput, 
            completed: statusInput
        });

        this.handleToggleClick()
    }

    handleToggleClick = () => {
        this.props.handleToggle();
    }

    render() {
        return (
            <MDBFormInline className="d-flex flex-row justify-content-around">

                <MDBInput 
                    className="w-100"
                    label="Task Title" 
                    type="text" 
                    name="titleInput" 
                    onChange={this.handleChange}
                />

                <MDBInput
                    className="w-50"
                    label="ID"
                    type="text"
                    name="taskIdInput"
                    onChange={this.handleChange}
                />

                <MDBInput
                    className="w-50" 
                    label="List ID"
                    disabled
                    type="text" 
                    name="listIdInput"
                    value={this.props.listId} 
                    onChange={this.handleChange} 
                />

                <MDBInput 
                    label="Done" 
                    className="w-25"
                    type="checkbox"
                    checked={this.props.checked}
                    id="statusCheckbox"
                    name="statusInput"
                    onChange={this.handleChange}
                />
                
                <MDBBtnGroup size="sm" className="">
                    <MDBBtn
                        color="outline-success"
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        <MDBIcon size="2x" icon="plus" className="" />
                    </MDBBtn>
                    
                    <MDBBtn 
                        color="outline-danger"
                        type="reset"
                        onClick={this.handleToggleClick}
                    >
                        <MDBIcon size="2x" icon="times" className=""/>
                    </MDBBtn>
                </MDBBtnGroup>

            </MDBFormInline>
        )
    }
}

export default TaskForm;