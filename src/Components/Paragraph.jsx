//Q2 
import React, { Component } from 'react';

class Paragraph extends Component {
  constructor() {
    super();

    this.state = {
        P: "Hello! This is HIBA KREISHAN!"
    };
  }

  HideParagraph () {
    this.setState ({
      P:""
    });
  };
  DisplayParagraph = () => {
    this.setState({
      P: "Hello! This is HIBA KREISHAN!"
    });
  };
  render() {
    return (
      <div>
         {this.state.P}
        <button onClick={() => this.HideParagraph()}>
          Hide
        </button>
        <button onClick={() => this.DisplayParagraph()}>
          Display
        </button>
      </div>
    );
  }
}

export default Paragraph;
