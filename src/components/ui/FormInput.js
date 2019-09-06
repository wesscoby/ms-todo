import React from "react";
import { MDBInput, MDBIcon } from "mdbreact";

class FormInput extends React.Component {

    state = {
        taskIdInput: '',
        listIdInput: '',
        titleInput: '',
        statusInput: false
    }

    coerceToBool = string => (string === "true") ? true : false;

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: (value) })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { taskIdInput, listIdInput, titleInput, statusInput } = this.state;
        

        this.props.taskFn({
            id: taskIdInput, 
            listId: listIdInput, 
            title: titleInput, 
            completed: this.coerceToBool(statusInput)
        });
    }

    handleToggleClick = () => {
        this.props.handleToggle();
    }

    render() {
        return (
            <div className="d-flex flex-row justify-content-between h-25 form-input">
                <MDBInput
                    label="Task ID"
                    type="text"
                    name="taskIdInput"
                    value={this.props.id || ''} 
                    onChange={this.handleChange}
                />
                <MDBInput 
                    label="List ID" 
                    className="flex-1"
                    type="text" 
                    name="listIdInput"
                    value={this.props.listId || ''} 
                    onChange={this.handleChange} 
                />
                <MDBInput 
                    label="Title" 
                    className="flex-4"
                    type="text" 
                    name="titleInput"
                    value={this.props.title || ''} 
                    onChange={this.handleChange}
                />
                <MDBInput 
                    label="Completed" 
                    className="flex-1"
                    hint="true/false"
                    type="text" 
                    name="statusInput"
                    value={this.props.completed || false} 
                    onChange={this.handleChange}
                />
                <div className="d-flex flex-row justify-content-end">
                <button 
                    type="submit"
                    className="btn btn-link"
                    onClick={this.handleSubmit}
                >
                    <MDBIcon size="2x" icon="plus" className="green-text" />
                </button>
                <button 
                    type="reset"
                    className="btn btn-link"
                    onClick={this.handleToggleClick}
                >
                    <MDBIcon size="2x" icon="times" className="red-text" />
                </button>
                </div>
            </div>
        )
    }
}

export default FormInput;