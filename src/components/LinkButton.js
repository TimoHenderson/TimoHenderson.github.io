import React from "react";
import styled from 'styled-components'

const LinkButton = ({ href, text, clickHandler }) => {

    if (!href) {
        return (
            <ButtonStyled onClick={clickHandler}>
                {text}
            </ButtonStyled>
        );
    }

    return (

        <LinkButtonStyled href={href} target="_blank" rel="noreferrer">
            {text}
        </LinkButtonStyled>
    );
}



const buttonStyles = {
    textDecoration: 'none',
    backgroundColor: props => props.theme.lightest,
    color: props => props.theme.textColor,
    padding: '0.5rem',
    borderRadius: '1rem',
    border: 'none',
    width: '5rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    ':hover': {
        transform: 'scale(1.1)',
    },
};

const ButtonStyled = styled.button(buttonStyles);

const LinkButtonStyled = styled.a(buttonStyles);

export default LinkButton;