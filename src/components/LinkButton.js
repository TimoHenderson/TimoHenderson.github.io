import React from "react";
import styled from 'styled-components'

const LinkButton = ({ href, text }) => {
    return (
        <LinkButtonStyled href={href} target="_blank">
            {text}
        </LinkButtonStyled>);
}

const LinkButtonStyled = styled.a`
    text-decoration: none;
    background-color: ${props => props.theme.lightest};
    color:${props => props.theme.textColor};
    padding:0.5rem;
    border-radius: 1rem;
    min-width: 5rem;
    text-align: center;
    
    :hover{
       scale:1.1;
    }
`;
export default LinkButton;