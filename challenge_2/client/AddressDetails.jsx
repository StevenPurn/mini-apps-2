import React from 'react';

export default class AddressDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account:{
        address: {
          line1: '',
          line2: '',
          city: '',
          state: '',
          zip: '',
          phone: ''
        }
      }
    };
  }

  changePages(amount) {
    this.props.getDataFromComponents('address', this.state);
    this.props.changePages(amount);
  }

  updateState(event, property) {
    let newAccount = this.state.account;
    newAccount[property] = event.target.value;
  }

  render(){
    return(
      <div>Enter your address
        <button onClick={() => this.changePages(-1)}>Prev</button>
        <input type="text" placeholder="addr line 1" onChange={e => this.updateState(e, 'line1')}/>
        <input type="text" placeholder="addr line 2" onChange={e => this.updateState(e, 'line2')}/>
        <input type="text" placeholder="city" onChange={e => this.updateState(e, 'city')}/>
        <input type="text" placeholder="state" onChange={e => this.updateState(e, 'state')}/>
        <input type="text" placeholder="zip code" onChange={e => this.updateState(e, 'zip')}/>
        <input type="text" placeholder="phone number" onChange={e => this.updateState(e, 'phone')}/>
        <button onClick={() => this.changePages(1)}>Next</button>
      </div>
    )
  }
}