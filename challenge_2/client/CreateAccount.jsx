import React from 'react';

export default class CreateAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      account: {
        name: '',
        email: '',
        password: ''
      }
    }
    this.updateState = this.updateState.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
  }

  updateState(event, property) {
    let newAccount = Object.assign(this.state.account);
    newAccount[property] = event.target.value;
    this.setState({
      account: newAccount
    })
  }

  onEmailChange(event) {
    const email = event.target.value;
    if (this.isValidEmail(email)) {
      this.updateState(event, 'email');
    }
  }

  isValidEmail(email) {
    return true;
  }

  onPasswordChange(event) {
    //if both fields match
    this.updateState(event, 'password');
  }

  onComponentDidMount() {
    this.setState({
      account: this.props.account
    });
  }

  changePages(amount) {
    this.props.getDataFromComponents("account", this.state.account);
    this.props.changePages(amount);
  }

  render(){
    return(
      <div>Create your account
        <button onClick={() => this.changePages(-1)}>Prev</button>
        <input type="text" placeholder="name" onChange={e => this.updateState(e, 'name')} />
        <input type="text" placeholder="email" onChange={e => this.onEmailChange(e)} />
        <input type="password" placeholder="password" onChange={e => this.onPasswordChange(e)} />
        <input type="password" placeholder="confirm password" onChange={e => this.onPasswordChange(e)} />
        <button onClick={() => this.changePages(1)}>Next</button>
      </div>
    )
  }
}
