import React from 'react'
import style from 'styled-components'
import {Link} from 'react-router-dom'
import Cancel from "./resources/cancel.svg"
import Add from "./resources/plus.svg"
import {observable, computed, action} from 'mobx'

const Form = style.form`

    width: 300px;
    float: left;
    
`;

const Header = style.h1`

    text-align: center;
    
    
`;

const TodoElement = style.li`

    list-style-type: none;

`;

class AddressBook extends React.Component{

    @observable todos = [
        {
            id: 1,
            login: "Bejiec",
            email: "bejiec0607@gmail.com"
        }
    ];

    @computed get check(){
        console.log("todos chanched");
        return 0;
    };

    @action addTodo = (todo) => {
        this.state.todoes.push(todo);
    };


    constructor(props) {
        super(props);

        this.state = {
            items: this.todos,
        }
    }

    render(){
        return (
            <div>
                <Form>
                    <Header>My Address Book</Header>
                    <ul>
                        {
                            this.state.items.map(todo =>{
                                return(
                                    <TodoElement key={todo.id}>
                                        {/*Add delete function*/}
                                        <input
                                            type="image"
                                            src={Cancel}
                                            style={{float : "right", width : "30px"}}
                                        />
                                        <p>{todo.login}</p>
                                        <p>{todo.email}</p>
                                    </TodoElement>
                                )
                            })
                        }
                    </ul>
                    <Link style={{display : "block", textAlign : "center", backgroundColor : "silver", }} to="/New">
                        <img
                            src={Add}
                            style={{width : "25px", marginTop : "5px"}}
                        />
                    </Link>
                </Form>
            </div>
        )
    }
}

export default AddressBook

