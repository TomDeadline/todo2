import React, {Component} from 'react';
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
    }

    save(ourItem) {
        let elementNode = <Node
            delete={this.delete}
            edit={this.edit}
            turnCheckbox={this.turnCheckbox}
            value={document.getElementById('editItem').value}
        />;
        this.setState({...this.state.array.splice(ourItem, 1, elementNode)});
    }

    turnCheckbox(ourItem) {
        let a = this.state.array;
        a[ourItem].isThrough = !a[ourItem].isThrough;

        this.setState({array: a})

        // this.state.array[elementNode].
        // if (document.getElementById("textNode").style.textDecoration != "line-through")
        //     document.getElementById("textNode").style.textDecoration = "line-through";
        // else
        //     document.getElementById("textNode").style.textDecoration = "none";

        //console.log(elementNode.target.closest('label').id);

    }

    async addItem() {

        // console.log(this.state.array)
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
}