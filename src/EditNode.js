import React, {Component} from 'react';
import './App.css';
import Node from "./Node";


export default class EditNode extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleSaveClick(e) {
        const saveItem = e.target.closest('li').id;
        this.props.save(saveItem);

    }

    render() {


        return (
            <div className="ToDoList">
                <input type="text" id="editItem"/>
                <button onClick={this.handleSaveClick}>save</button>
            </div>
        )
    }
}