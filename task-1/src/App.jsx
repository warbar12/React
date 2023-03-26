import React, { Component } from 'react';
import { Button, Modal } from './components';
import './App.css';

class App extends Component {
  state = {
    showModal1: false,
    showModal2: false,
  };

  openModal1 = () => {
    this.setState({ showModal1: true });
  };

  openModal2 = () => {
    this.setState({ showModal2: true });
  };

  closeModal1 = () => {
    this.setState({ showModal1: false });
  };

  closeModal2 = () => {
    this.setState({ showModal2: false });
  };

  render() {
    
    return (

      <div className="App">

        <Button text="Open first modal" onClick={this.openModal1} />
        <Button text="Open second modal" onClick={this.openModal2} />

        {this.state.showModal1 && (
          <Modal
            header="Do you want to delete this file?"
            closeButton={true}
            text="Once you delete this file, it won’t be possible to undo this action. 
            Are you sure you want to delete it?"
            actions={
              <div className='btnModal'>
                <Button text="Ok" onClick={this.closeModal1} />
                <Button text="Cancel" onClick={this.closeModal1} />
              </div>
            }
            onClose={this.closeModal1}
          />
        )}

        {this.state.showModal2 && (
          <Modal
            header="Second Modal"
            closeButton={false}
            text="This is the second modal."
            actions={
              <div className='btnModal'>
                <Button backgroundColor="green" text="OK" onClick={this.closeModal2} />
              </div>
            }
            onClose={this.closeModal2}
          />
        )}
      </div>
    );
  }
}

export default App;