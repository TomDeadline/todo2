import React, {Component} from 'react';
import './Node.css';


export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {class: 'line-none'};
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    }

    handleDeleteClick(e) {
        const deleteItem = e.target.closest('li').id;
        this.props.delete(deleteItem);
    }

    handleEditClick(e) {
        const editItem = e.target.closest('li').id;
        this.props.edit(editItem);
    }

    handleCheckboxClick() {
        if (this.state.class == 'line-none') {
            this.setState({class: 'line-through'})
        } else {
            this.setState({class: 'line-none'})
        }
    }

    render() {
        return (
            <div className="ToDoList">
                <label id="textNode" className={this.state.class}>{this.props.value}</label>
                <button onClick={this.handleEditClick}>edit</button>
                <button onClick={this.handleDeleteClick}>delete</button>
                <input onClick={this.handleCheckboxClick} type="checkbox"/>
            </div>
        )
    }
}