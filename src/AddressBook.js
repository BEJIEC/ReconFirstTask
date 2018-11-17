import React from 'react'
import style from 'styled-components'
import {Link} from 'react-router-dom'
import Cancel from "./resources/cancel.svg"
import Add from "./resources/plus.svg"
import {observer} from 'mobx-react'
import {localStore} from "./App.js";
import {collection} from "./FirestoreWorker.js";
import FirestoreWorker from "./FirestoreWorker.js"

const Form = style.form`

    width: 300px;
    float: left;
    
`;

const Header = style.h1`

    text-align: center;
    
    
`;

const UserItem = style.li`

    list-style: none;
    list-style-position: inside;
    border: 2px solid silver;
    margin: 1px -2px;
    width: 100%;

`;

export var currentEditingUser;

@observer
class AddressBook extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users : localStore.users,
        };

        collection.get().then(querySnapshot =>{
            querySnapshot.forEach(userDoc => {
                let user = {
                    login : userDoc.data().login,
                    email : userDoc.data().email,
                    userRef : userDoc.id,
                };

                console.log(user);

                this.state.users.push(user);
            })
        });

        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(userRef){
        FirestoreWorker.deleteUser(userRef);
        return (event) => {
            event.preventDefault();
        }
    }

    editUser(userRef){
        currentEditingUser = userRef;

        return (event) => {
            event.preventDefault();
        }
    }

    render(){
        return (
            <div>
                <Form>
                    <Header>My Address Book</Header>
                    <ul>
                        {
                            this.state.users.map(user => {
                                return(
                                    <UserItem key={user.userRef}>
                                        <div style={{width : "100%"}}>
                                        <Link
                                            to=""
                                            onClick={() => this.deleteUser(user.userRef)}
                                            style={{float : "right", width : "30px"}}
                                        >
                                            <img src={Cancel} width="30px"/>
                                        </Link>

                                            <Link to="/Edit" onClick={() => this.editUser(user.userRef)}>
                                                <p id="login">{user.login}</p>
                                                <p id="email">{user.email}</p>
                                            </Link>
                                        </div>
                                    </UserItem>
                                )
                            })
                        }
                    </ul>
                    <Link style={{display : "block", textAlign : "center", backgroundColor : "silver", }} to="/New">
                        <img
                            src={Add}
                            style={{width : "20px", marginTop : "5px"}}
                        />
                    </Link>
                </Form>
            </div>
        )
    }
}

export default AddressBook

