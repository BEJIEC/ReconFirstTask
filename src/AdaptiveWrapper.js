import style from 'styled-components'

export const AdaptiveWrapper = style.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 760px){
        display: block;
    }

`;