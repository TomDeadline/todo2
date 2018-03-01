import React, {Component} from 'react';
import './App.css';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {array: []};

        this.addItem = this.addItem.bind(this);
        this.handleDeleteClick = this.handleDeleteClick(this);
        this.handleEditClick = this.handleEditClick(this);
    }

    handleEditClick() {

    }

    handleDeleteClick() {
        
    }

    addItem() {
        let a = this.state.array;
        let b = (<div className="ToDoList" id={Date.now()}>
             <label>{document.getElementById('listItem').value}</label>
             <button onClick={this.handleEditClick}>edit</button>
             <button onClick={this.handleDeleteClick}>delete</button>
            <input  type="checkbox" />
         </div>);

        a.push(b);
        this.setState({array: a});
    }



    render() {

        const listItems = this.state.array.map((item, key) => <li key={key}>{item}</li>);


        // let a = <div className="ToDoList">
        //     <label>boroda</label>
        //     <button onClick={this.handleEditClick}>edit</button>
        //     <button onClick={this.handleDeleteClick}>delete</button>
        //     <input type="checkbox"/>
        // </div>;
        // let b = <div>
        //     <input type="text" />
        //     <button onClick={this.handleAddClick}>add</button>
        // </div>;
        //
        // let array = [];
        // array[0] = b;
        // for (let i = 1; i < 4; i++) {
        //     array[i] = a;
        //
        // }


        return (
            <div>
                <div>
                    <input  type="text" id="listItem"/>
                    <button onClick={this.addItem}>add</button>
                </div>
                {listItems}
            </div>);
    }
}