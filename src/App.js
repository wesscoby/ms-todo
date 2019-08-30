import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <MDBContainer className="" fluid="true">
        <MDBRow>
          <Sidebar />
          <Main />
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default App;
