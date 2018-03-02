import React, {Component} from 'react';
import './SignUp.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="App">
                <div className="app">
                    <label>Enter login: </label>
                    <input type="text"/>
                    <br/>
                    <br/>
                    <label>Enter username: </label>
                    <input type="text"/>
                    <br/>
                    <br/>
                    <label>Enter password: </label>
                    <input type="password"/>
                    <br/>
                    <br/>
                    <label>Repeat password: </label>
                    <input type="password"/>
                </div>
            </div>
        );
    }
}

