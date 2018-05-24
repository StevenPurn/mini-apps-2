import React from 'react';

export default class CardDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      account: {
        card: {
          number: '',
          exp: '',
          cvv: '',
          zip: ''
        }
      }
    }
    this.changePages = this.changePages.bind(this);
  }

  changePages(amount) {
    this.props.getDataFromComponents('address', this.state);
    this.props.changePages(amount);
  }

  render(){
    return(
      <div>Enter Credit Card Details
        <button onClick={() => this.changePages(-1)}>Prev</button>
        <input type="text" placeholder="card number"/>
        <input type="text" placeholder="exp"/>
        <input type="text" placeholder="security code" />
        <input type="text" placeholder="billing zip" />
        <button onClick={() => this.changePages(1)}>Next</button>
      </div>
    )
  }
}
