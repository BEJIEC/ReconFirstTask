import React from 'react';
import {TextField} from "./TextField.js";

export default class FindingField extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            filteredText : ""
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let filteredText = e.target.value;

        this.setState({
            filteredText: filteredText,
        });

        this.props.filter(filteredText);
    };

    render(){
        return (
                <TextField id="filterField" value={this.state.filteredText} type="text" onChange={this.onChange}/>
        );
    }
}