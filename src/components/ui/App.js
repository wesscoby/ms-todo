import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import Sidebar from '../containers/Sidebar';
import Main from '../containers/Main';

class App extends Component {

  render() {
    return (
        <MDBContainer fluid="true">
          <MDBRow>
            <Sidebar/>
            <Main />
          </MDBRow>
        </MDBContainer>
    )
  }
}

export default App;
