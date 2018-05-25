import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Crypto Charter'
    }
  }

  render(){
    return (
      <div>{this.state.title}</div>
    )
  }
}