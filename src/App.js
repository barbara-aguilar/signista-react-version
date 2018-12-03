import React, { Component } from 'react';
import Select from './components/select';
import Container from './components/container';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Container>
           <Select/>
        </Container>
         
      </div>
    );
  }
}

export default App;
