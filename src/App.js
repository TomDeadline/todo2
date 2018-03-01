import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp'
import ToDo from './ToDo'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {signIn: 1};

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    handleLogoutClick() {
        this.setState({signIn: 2});
    }

    handleSignInClick() {
        this.setState({signIn: 3});
    }


   selectTab() {
      switch(this.state.signIn) {
          case 1:
              return (
              <div>
                  <div className="field">
                      <label htmlFor="login-field">Login: </label>
                      <input type="text" name="login" id="login-field"></input>
                  </div>
                  <br></br>
                  <div className="field">
                      <label htmlFor="password-field">Password: </label>
                      <input type="password" name="password" id="password-field"></input>
                  </div>
                  <br></br>
                  <button onClick={this.handleSignInClick}>Sign in</button>
                  <br></br>
                  <br></br>
                  <button onClick={this.handleLogoutClick}>Registration</button>
              </div>)
              break;
          case 2:
              return (<SignUp/>);
              break;
          case 3:
              return <ToDo/>;
              break;
      }
   }

    render() {
        const tab = this.selectTab();

        return (
            <div className="App">
                <div className="app">
                    {tab}
                </div>
            </div>
        );
    }
}

export default App;
