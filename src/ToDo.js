/*import React, {Component} from 'react';
import './ToDo.css';
import Node from "./Node";
import EditNode from "./EditNode";


export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {array: []};
        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.turnCheckbox = this.turnCheckbox.bind(this);
    }

    delete(ourItem) {
        this.setState({...this.state.array.splice(ourItem, 1)});
    }

    edit(ourItem) {

        this.setState({...this.state.array.splice(ourItem, 1, <EditNode save={this.save}/>)});
        console.log(this.state.array);
    }

    save(ourItem) {
        let elementNode = <Node
            delete={this.delete}
            edit={this.edit}
            turnCheckbox={this.turnCheckbox}
            value={document.getElementById('editItem').value}
            //isThrough={this.state.array.item.isThrough}
        />;
        this.setState({...this.state.array.splice(ourItem, 1, elementNode)});
    }

    turnCheckbox(ourItem) {
        let a = this.state.array;
        a[ourItem].isThrough = !a[ourItem].isThrough;

        this.setState({array: a})
    }

    async addItem() {
        await   this.setState({
            array: [...this.state.array, {value:document.getElementById("listItem").value , isThrough: false}],

        });
        document.getElementById("listItem").value = '';
        console.log(this.state.array)

    }


    render() {

        const listItems = this.state.array.map((item, index) => <li key={index} id={index}>{
            <Node
                delete={this.delete}
                edit={this.edit}
                turnCheckbox={this.turnCheckbox}
                value={item.value}
                isThrough={item.isThrough}
            />}</li>);

        return (
            <div>
                <div className="ToDoList">
                    <input type="text" id="listItem"/>
                    <button onClick={this.addItem}>add</button>
                </div>
                {listItems}

            </div>);
    }
}*/


import React, {Component} from 'react';
import './ToDo.css';
import Node from "./Node";
import EditNode from "./EditNode";


export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {array: [], words: [], through: []};
        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.turnCheckbox = this.turnCheckbox.bind(this);
    }

    delete(ourItem) {
        this.setState({...this.state.array.splice(ourItem, 1)});
        this.setState({...this.state.words.splice(ourItem, 1)});
        this.setState({...this.state.through.splice(ourItem, 1)});
    }

    edit(ourItem) {
        this.setState({...this.state.array.splice(ourItem, 1, <EditNode save={this.save}/>)});
    }

    save(ourItem) {
        let elementNode = <Node
            delete={this.delete}
            edit={this.edit}
            turnCheckbox={this.turnCheckbox}
            value={document.getElementById('editItem').value}
        />;
        this.setState({...this.state.array.splice(ourItem, 1, elementNode)});
        this.setState({...this.state.words.splice(ourItem, 1, document.getElementById('editItem').value)});

    }

    turnCheckbox(ourItem) {
        let a = this.state.through[ourItem];
        a = !a;
        this.setState({...this.state.words.splice(ourItem, a)});
    }

    addItem() {

        let elementNode = <Node
            delete={this.delete}
            edit={this.edit}
            turnCheckbox={this.turnCheckbox}
            value={document.getElementById("listItem").value}
        />;

        let wordOfArray = this.state.words;
        let flag = this.state.through;
        this.setState({array: [...this.state.array, elementNode]});
        this.setState({})
        wordOfArray.push(document.getElementById("listItem").value);
        flag.push(false);
        document.getElementById("listItem").value = '';

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