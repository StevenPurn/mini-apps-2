import React from 'react';

export default class CreateAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Create your account'
    }
  }

  render(){
    return(
      <div>{this.state.title}
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
      </div>
    )
  }
}
