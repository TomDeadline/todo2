import React, {Component} from 'react';
import './SignUp.css';
import axios from "axios/index";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleRegClick = this.handleRegClick.bind(this);
    }

    handleRegClick() {
        axios.post('http://localhost:8000/registration', {
            password: document.getElementById('regPass').value,
            username: document.getElementById('regUsername').value,
            email: document.getElementById('regEmail').value
        })
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {

        return (
            <div className="App">
                <div className="app">
                    <label>Enter e-mail: </label>
                    <input type="text" id="regEmail"/>
                    <br/>
                    <br/>
                    <label>Enter username: </label>
                    <input type="text" id="regUsername"/>
                    <br/>
                    <br/>
                    <label>Enter password: </label>
                    <input type="password" id="regPass"/>
                    <br/>
                    <br/>
                    <label>Repeat password: </label>
                    <input type="password" id="regPassConfirm"/>
                    <br/>
                    <br/>
                    <button onClick={this.handleRegClick}>Registration</button>
                </div>
            </div>
        );
    }
}

