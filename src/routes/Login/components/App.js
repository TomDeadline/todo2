import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import SignUp from '../../Registration/components/SignUp'
import ToDo from '../../ToDo/components/ToDo'
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {signIn: 1};

        this.handleRegClick = this.handleRegClick.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    handleRegClick() {
        this.setState({signIn: 2});

    }

    handleSignInClick() {
        axios.post('http://localhost:8000/login', {
            password: document.getElementById('password-field').value,
            username: document.getElementById('login-field').value
        })
            .then((response) => {
                console.log(response);
                this.setState({signIn: 3});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    selectTab() {
        switch (this.state.signIn) {
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
                        <button onClick={this.handleRegClick}>Registration</button>
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
