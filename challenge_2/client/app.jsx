import React from 'react';
import CreateAccount from './CreateAccount.jsx';
import CardDetails from './CardDetails.jsx';
import AddressDetails from './AddressDetails.jsx';

const pages = ['homePage', 'createAccount', 'addressDetails', 'cardDetails'];

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      curPage: 0,
      dbId: 0,
      account: {
        name: '',
        email: '',
        password: '',
        address: {
          line1: '',
          line2: '',
          city: '',
          state: '',
          zip: '',
          phone: ''
        },
        card: {
          number: '',
          exp: '',
          cvv: '',
          zip: ''
        }
      },
    }
    this.changePages = this.changePages.bind(this);
  }

  changePages(amount) {
    let pageNum = this.state.curPage;
    pageNum += amount;
    if (amount > 0) {
      if (pageNum === 1) {
        //start a new record in the db
      } else {
        //update record in the db
      }
    }
    if (pageNum >= pages.length) {
      pageNum = 0;
    } else if (pageNum < 0) {
      pageNum = pages.length - 1;
    }
    this.setState({
      curPage: pageNum
    });
  }

  render(){
    let page = undefined;
    const account = this.state.account;
    switch(pages[this.state.curPage]) {
      case 'homePage':
        page = <button onClick={() => this.changePages(1)}>Checkout</button>;
        break;
      case 'createAccount':
        page = <CreateAccount account={account}/>;
        break;
      case 'addressDetails':
        page = <AddressDetails address={account.address}/>;
        break;
      case 'cardDetails':
        page = <CardDetails card={account.card}/>;
        break;
      default:
        page = <div>Error</div>
    }
    return (
      <div>
        <button onClick={() => this.changePages(-1)}>Prev</button>
        <div>{page}</div>
        <button onClick={() => this.changePages(1)}>Next</button>
      </div>
    )
  }
}
