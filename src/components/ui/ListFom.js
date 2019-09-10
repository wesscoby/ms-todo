import React, { Component } from 'react';


class ListForm extends Component {
    
    state = {
        idInput: this.props.id || '',
        nameInput: this.props.name || 'list',
        iconInput: this.props.icon || '',
        color: this.props.color || 'normal'
    }
    
    render() {
        return (<></>)
    }
}

export default ListForm;