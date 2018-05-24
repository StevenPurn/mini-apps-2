import React from 'react';

export default class CardDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'card details'
    }
  }

  render(){
    return(
      <div>{this.state.title}</div>
    )
  }
}