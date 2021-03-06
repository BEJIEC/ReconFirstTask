import style from "styled-components";

export const TextField = style.input`

    width: 70%;
    margin: 10px 15%;
    padding: 5px 5px;
    display: block;
    border: 2px solid ${props => props.validity ? 'green' : 'silver'};
    border-radius: 10px;
    outline: none;
    box-shadow: 1px 1px 3px 1px;
    
`;