import React, { Component } from 'react';
import { 
    MDBInput, MDBModalBody, 
    MDBBtn, MDBModal, MDBModalHeader 
} from 'mdbreact';
import shortId from 'shortid';


class FormModal extends Component {
    
    state = {
        idInput: this.props.id || shortId.generate(),
        nameInput: this.props.name || '',
        iconInput: this.props.icon || 'list',
        colorInput: this.props.color || 'normal'
    }

    handleFormInput = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.submitData({
            id: this.state.idInput,
            name: this.state.nameInput,
            icon: this.state.iconInput,
            color: this.state.colorInput
        });
        this.props.handleToggle();
    }

    render() {
        return (
            <MDBModal
                isOpen={true} 
                toggle={this.props.handleToggle} size="sm" 
                side 
                position="bottom-left"
            >
                <MDBModalHeader toggle={this.props.handleToggle}>{this.props.modalTitle}</MDBModalHeader>
                <MDBModalBody className="d-flex justify-content-center w-100">
                    <form className="w-100">
                        <MDBInput
                            label="Name" 
                            type="text"
                            value={this.state.nameInput}
                            name="nameInput" 
                            onInput={this.handleFormInput}
                        />

                        <div className="d-flex flex-row justify-content-between">
                            <MDBInput
                                className="w-75"
                                label="Icon" 
                                type="text"
                                value={this.state.iconInput}
                                name="iconInput" 
                                onInput={this.handleFormInput}
                            />

                            <MDBInput
                                className="w-75"
                                label="Color" 
                                type="text"
                                value={this.state.colorInput}
                                name="colorInput" 
                                onInput={this.handleFormInput}
                            />
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                            <MDBBtn size="sm" type="submit" color="primary" onClick={this.handleFormSubmit}>Save</MDBBtn>
                            <MDBBtn size="sm" color="danger" onClick={this.props.handleToggle}>Close</MDBBtn>
                        </div>
                        
                    </form>
                </MDBModalBody>
            </MDBModal>
        )
    }
}

export default FormModal;