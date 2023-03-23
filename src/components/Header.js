import React from "react";
import Panel from "./Panel";
import styled from "styled-components";
import { Github, LinkedinSquare } from "@styled-icons/boxicons-logos";
import { MailSend } from "@styled-icons/boxicons-regular";
import { StyledIconBase } from '@styled-icons/styled-icon'
import { devices } from "../helpers/ScreenSizes";



const Header = () => {
    return (
        <HeaderPanel>
            <SiteHeader>
                <LogoBox><img src={require("../assets/img/TH.png")} alt="logo" /></LogoBox>
                <TitleBox>
                    <h1>Timo Henderson</h1>
                    <p>Software Developer</p>
                </TitleBox>
                <LinksBox>
                    <a href="https://www.linkedin.com/in/timo-henderson-51a9516b" target="_blank" rel="noreferrer">LinkedIn  <LinkedinSquare /></a>
                    <a href="https://github.com/TimoHenderson" target="_blank" rel="noreferrer">GitHub  <Github /></a>
                    <a href="mailto: tjhenderson2@gmail.com" target="_blank" rel="noreferrer">Email  <MailSend /></a>

                </LinksBox>
            </SiteHeader>
        </HeaderPanel>
    );
}

const HeaderPanel = styled(Panel)`
    position: sticky;
    top:0;
`

const SiteHeader = styled.header`
    display:grid;
    grid-template-columns: 1.2fr 3fr 1.2fr;
    text-align:center;
    background-color:${props => props.theme.darkest};
    color:${props => props.theme.textColor};
    @media ${devices.tablet}{
        grid-template-columns: 1fr 4fr 1fr;       
    }

`

const TitleBox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:0.5rem; 
    p{ 
        margin:0;
        text-align: center;
    }
    h1{font-size:1.5rem;
        text-align:center;
        margin:0;
    }
    @media ${devices.tablet}{
        h1{
            font-size: 2rem;
        }     
    }
`

const LogoBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
        height:3rem;
    }
    @media ${devices.tablet}{
        justify-content: center;
        img{
            height:5rem;
        }   
    }   
`

const LinksBox = styled.div`
    
    display :grid;
    text-align: right;
    max-height:6rem;
    
    a{
        font-size:0.8rem;
        text-decoration: none;
        color: ${props => props.theme.textColor}
    }
    ${StyledIconBase}{
        width: 1.5rem;
        padding-bottom: 0.2rem;
    }
    @media ${devices.tablet}{
        a{
            font-size:1rem;
        }   
    }   
    

`
export default Header;