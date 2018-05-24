import React from 'react';

export default class AddressDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Enter your address'
    }
  }

  render(){
    return(
      <div>{this.state.title}
        <input type="text" placeholder="addr line 1"/>
        <input type="text" placeholder="addr line 2"/>
        <input type="text" placeholder="city" />
        <input type="text" placeholder="state" />
        <input type="text" placeholder="zip code" />
        <input type="text" placeholder="phone number" />
      </div>
    )
  }
}
