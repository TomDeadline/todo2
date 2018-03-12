import React, {Component} from 'react';
import './ToDo.css';
import Node from "./Node";
import EditNode from "./EditNode";
import axios from "axios/index";


export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {array: [], words: [], through: []};
        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.loadData();
    }

    loadData() {
        axios.get('http://localhost:8000/todo')
            .then((response) => {
                console.log(response);
                // this.setState({signIn: 3});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    delete(ourItem) {
        this.setState({...this.state.array.splice(ourItem, 1)});
        this.setState({...this.state.words.splice(ourItem, 1)});
        this.setState({...this.state.through.splice(ourItem, 1)});

        console.log(this.state.words);
        console.log(this.state.through);
    }

    edit(ourItem) {
        this.setState({...this.state.array.splice(ourItem, 1, <EditNode save={this.save}/>)});

        console.log(this.state.words);
        console.log(this.state.through);
    }

    save(ourItem) {
        let elementNode = <Node
            delete={this.delete}
            edit={this.edit}
            value={document.getElementById('editItem').value}
            through={this.state.through}
        />;
        this.setState({...this.state.array.splice(ourItem, 1, elementNode)});
        this.setState({...this.state.words.splice(ourItem, 1, document.getElementById('editItem').value)});

    }

    addItem() {

        let elementNode = <Node
            delete={this.delete}
            edit={this.edit}
            value={document.getElementById("listItem").value}
            through={this.state.through}
        />;

        let wordOfArray = this.state.words;
        let flag = this.state.through;
        this.setState({array: [...this.state.array, elementNode]});
        this.setState({});
        wordOfArray.push(document.getElementById("listItem").value);
        flag.push(false);
        document.getElementById("listItem").value = '';

        console.log(this.state.words);
        console.log(this.state.through);

    }

    render() {

        const listItems = this.state.array.map((item, index) => <li key={index} id={index}>{item}</li>);

        return (
            <div>
                <div className="ToDoList">
                    <input type="text" id="listItem"/>
                    <button onClick={this.addItem}>add</button>
                </div>
                {listItems}
            </div>);
    }
}