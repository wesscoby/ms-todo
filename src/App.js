import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import List from './data/menu-items.json';


class App extends Component {

  state = {
    lists: List.items,
    tasks: []
  }

  render() {
    return (
      <MDBContainer className="" fluid="true">
        <MDBRow>
          <Sidebar menuItems={this.state.lists}/>
          <Main activeList={this.state.lists.find(({active}) => active === true) || "Microsoft ToDo"}/>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default App;
