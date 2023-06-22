import React from "react";
import styled from "styled-components";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import {
    menuSelector,
    menuItemSelector
} from "@szhsin/react-menu/style-utils";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


const Collaborators = ({ collaborators }) => {
    const collaboratorNodes = collaborators.map((collaborator, index) => {
        return <MenuItem key={collaborator.url + index}><a href={collaborator.url} target="_blank" rel="noreferrer">{collaborator.name}</a></MenuItem>
    })
    return (
        <StyledMenu menuButton={<StyledMenuButton>Collaborators</StyledMenuButton>} transition>
            {collaboratorNodes}
        </StyledMenu>
    );
}

const StyledMenu = styled(Menu)`
    ${menuSelector.name}{
        background-color: ${props => props.theme.darkest};
        border: 2px solid ${props => props.theme.lightest};
        margin: 1rem 0;
        padding: 0.5;
        color: ${props => props.theme.textColor};
    }

    ${menuItemSelector.name}{
        a{
            text-decoration: none;
            color: ${props => props.theme.textColor}
        }
    }
    ${menuItemSelector.hover}{
        
        background-color: ${props => props.theme.dark};
    }
    
`
const StyledMenuButton = styled(MenuButton)`
    text-decoration: none;
    background-color: ${props => props.theme.lightest};
    color:${props => props.theme.textColor};
    padding:0.5rem;
    border:none;
    border-radius: 1rem;
    min-width: 5rem;
    text-align: center;
    :hover{
       scale:1.1;
    }
`;



export default Collaborators;

