import React from 'react'
import style from 'styled-components'
import {Link} from 'react-router-dom'
import Cancel from "./resources/cancel.svg"
import Add from "./resources/plus.svg"
import {observer} from 'mobx-react'
import {localStore} from "./App.js";
import {collection} from "./FirestoreWorker.js";
import FirestoreWorker from "./FirestoreWorker.js"
import './resources/index.css'
import {StyledForm} from "./SyledForm.js";
import {StyledHeader} from "./StyledHeader.js";

const UserItem = style.li`

    list-style: none;
    list-style-position: inside;
    border: 2px solid silver;
    border-radius: 10px;
    padding: 2px 8px;
    margin: 2px 2%;
    width: 90%;

`;

const Table = style.ul`

    padding: 0;
    margin: 0;

`;

export var currentEditingUser;

@observer
class AddressBook extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            users : localStore.users,
        };

        this.i = 0;

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
                <StyledForm className="left">
                    <StyledHeader>My Address Book</StyledHeader>
                    <Table className="table">
                        {
                            this.state.users.map(user => {
                                this.i++;

                                return(
                                    <UserItem className={(this.i%2 == 0) ? "secondChild" : null} key={user.userRef}>
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
                    </Table>
                    <Link style={{display : "block", textAlign : "center", backgroundColor : "silver", }} to="/New">
                        <img
                            src={Add}
                            style={{width : "20px", marginTop : "5px"}}
                        />
                    </Link>
                </StyledForm>
            </div>
        )
    }
}

export default AddressBook

