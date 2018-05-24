import React from 'react';

export default class Summary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Please confirm the details'
    }
  }

  render(){
    const account = this.props.account;
    return(
      <div>{this.state.title}
        <button onClick={() => this.props.changePages(-1)}>Prev</button>
        <h1>Account</h1>
        <div>{account.name}</div>
        <div>{account.email}</div>
        <h1>Address</h1>
        <div>{account.address.line1}</div>
        <div>{account.address.line2}</div>
        <div>{account.address.city}</div>
        <div>{account.address.state}</div>
        <div>{account.address.zip}</div>
        <div>{account.address.phone}</div>
        <h1>Card</h1>
        <div>{account.card.number%1000}</div>
        <div>{account.card.exp}</div>
        <div>{account.card.cvv}</div>
        <div>{account.card.zip}</div>
        <button onClick={() => console.log('purchased, returning to home screen')}>Purchase</button>
      </div>
    )
  }
}
