import style from 'styled-components'

export const StyledForm = style.form`

    width: 400px;
    border: 1px solid silver;
    box-shadow: 3px 3px 20px 2px;
    margin: 50px;
    
    @media screen and (max-width: 1100px){
        margin: 10px;
    }
    
    @media screen and (max-width: 900px){
        width: 100%;
        margin: 10px auto;    
    }
   
`;