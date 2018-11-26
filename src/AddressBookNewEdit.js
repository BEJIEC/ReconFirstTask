import React from 'react'
import style from 'styled-components/'
import FirestoreWorker from './FirestoreWorker.js'
import {Link} from 'react-router-dom'
import './resources/index.css'
import {currentEditingUser} from "./AddressBook.js";
import {StyledForm} from "./SyledForm.js";
import {StyledHeader} from "./StyledHeader.js"
import {TextField} from "./TextField.js"

const Button = style.button`

    border-radius: 5px;
    background-color: ${props => props.color};  
    float: ${props => props.delete ? "left" : "right"}
    margin: 7px 10px;
    outline: none;
    font-style: italic;
    
`;

export class AddressBookEdit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            login: "",
            email: "",
            loginValid : false,
            emailValid : false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailValueChanged = this.emailValueChanged.bind(this);
        this.loginValueChanged = this.loginValueChanged.bind(this);
        this.checkLoginValidity = this.checkLoginValidity.bind(this);
        this.checkEmailValidity = this.checkEmailValidity.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    checkLoginValidity(){
        let login = this.state.login;

        if (login.length > 4){
            this.setState({loginValid: true});
        } else{
            this.setState({loginValid: false})
        }
    }

    checkEmailValidity(){
        let email = this.state.email;

        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.email.match(regex)){
            this.setState({emailValid: true});
        } else{
            this.setState({emailValid:false});
        }
    }

    emailValueChanged(event){
        var email = event.target.value;

        this.setState({email: email});
        this.checkEmailValidity();
    }

    loginValueChanged(event){
        let login = event.target.value;

        this.setState({login: login});
        this.checkLoginValidity();
    }

    editUser(){
        if (!this.state.emailValid || !this.state.loginValid){
            alert("Invalid login or e-mail, try again.");
            return;
        }

        let login = this.state.login;
        let email = this.state.email;


        FirestoreWorker.editUser(currentEditingUser, {
            login : login,
            email : email,
        });

    }

    deleteUser(){
        FirestoreWorker.deleteUser(currentEditingUser);
    }

    //EDIT
    render(){
        return (
                <StyledForm className="right" onSubmit={this.handleSubmit}>
                    <StyledHeader>Edit Contact</StyledHeader>
                    <TextField value={this.state.login} validity={this.state.loginValid} onChange={this.loginValueChanged} placeholder="Name"/>
                    <TextField value={this.state.email} validity={this.state.emailValid} onChange={this.emailValueChanged} placeholder="E-mail"/>
                    <Button onClick={this.deleteUser} delete color="red"><Link to="/">Delete</Link></Button>
                    <Button color="white"><Link to="/">Cancel</Link></Button>
                    <Button onClick={this.editUser} color="green"><Link to="/">Ok</Link></Button>
                </StyledForm>
        )
    }
}

export class AddressBookNew extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            login: "",
            email: "",
            loginValid : false,
            emailValid : false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailValueChanged = this.emailValueChanged.bind(this);
        this.loginValueChanged = this.loginValueChanged.bind(this);
        this.checkLoginValidity = this.checkLoginValidity.bind(this);
        this.checkEmailValidity = this.checkEmailValidity.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    checkLoginValidity(){
        let login = this.state.login;

        if (login.length > 4){
            this.setState({loginValid: true});
        } else{
            this.setState({loginValid: false})
        }
    }

    checkEmailValidity(){
        let email = this.state.email;

        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.email.match(regex)){
            this.setState({emailValid: true});
        } else{
            this.setState({emailValid:false});
        }
    }

    emailValueChanged(event){
        var email = event.target.value;

        this.setState({email: email});
        this.checkEmailValidity();
    }

    loginValueChanged(event){
        let login = event.target.value;

        this.setState({login: login});
        this.checkLoginValidity();
    }

    addUser(){
        if (!this.state.emailValid || !this.state.loginValid){
            alert("Invalid login or e-mail, try again.");
            return;
        }

        let email = this.state.email;
        let login = this.state.login;

        FirestoreWorker.addUser({
            login : login,
            email : email,
        })
    }

    //NEW
    render(){
        return (
                <StyledForm className="right" onSubmit={this.handleSubmit}>
                    <StyledHeader>New Contact</StyledHeader>
                    <TextField value={this.state.login} validity={this.state.loginValid} onChange={this.loginValueChanged} placeholder="Name"/>
                    <TextField value={this.state.email} validity={this.state.emailValid} onChange={this.emailValueChanged} placeholder="E-mail"/>
                    <Button color="white"><Link to="/">Cancel</Link></Button>
                    <Button onClick={this.addUser} color="green"><Link to="/">Ok</Link></Button>
                </StyledForm>
        )
    }
}



