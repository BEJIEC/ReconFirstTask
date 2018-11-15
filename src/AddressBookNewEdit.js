import React from 'react'
import style from 'styled-components/'

const Button = style.button`

    border-radius: 7px;
    background-color: ${props => props.color};  
    float: ${props => props.delete ? "left" : "right"}
    margin: 5px auto;
    
`;

const TextField = style.input`

    width: 100%;
    margin: 5px auto;
    display: block;

`;

const Form = style.form`

    width: 300px;
    height: 400px;
    float: right;
    margin-right: 200px;
    border: 

`;

const Header = style.h1`

    text-align: center
    
`;

export class AddressBookEdit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            login: "",
            email: "",

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailValueChanged = this.emailValueChanged.bind(this);
        this.loginValueChanged = this.loginValueChanged.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        console.log("submitted");
    }

    emailValueChanged(event){
        var email = event.target.value;

        this.setState({email: email});

        //VALIDATION
    }

    loginValueChanged(event){
        this.setState({login: event.target.value});

        //VALIDATION
    }

    render(){
        return (
                <Form onSubmit={this.handleSubmit}>
                    <Header>My Address Book/Edit Contact</Header>
                    <TextField value={this.state.login} onChange={this.loginValueChanged} placeholder="Login"/>
                    <TextField value={this.state.email} onChange={this.emailValueChanged} placeholder="E-mail"/>
                    <Button delete color="red">Delete</Button>
                    <Button color="white">Cancel</Button>
                    <Button color="green">Ok</Button>
                </Form>
        )
    }
}

export class AddressBookNew extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            login: "",
            email: "",

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailValueChanged = this.emailValueChanged.bind(this);
        this.loginValueChanged = this.loginValueChanged.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        console.log("submitted");
    }

    emailValueChanged(event){
        var email = event.target.value;

        this.setState({email: email});

        //VALIDATION
    }

    loginValueChanged(event){
        this.setState({login: event.target.value});

        //VALIDATION
    }

    render(){
        return (
                <Form onSubmit={this.handleSubmit}>
                    <Header>My Address Book/Edit Contact</Header>
                    <TextField value={this.state.login} onChange={this.loginValueChanged} placeholder="Login"/>
                    <TextField value={this.state.email} onChange={this.emailValueChanged} placeholder="E-mail"/>
                    <Button color="white">Cancel</Button>
                    <Button color="green">Ok</Button>
                </Form>
        )
    }
}



