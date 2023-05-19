import React from "react";
import styled from "styled-components";
import { ReactOriginal, JavascriptOriginal, Html5Original, Css3Original, PythonOriginal, FlaskOriginal, PostgresqlOriginal, ExpressOriginal, MongodbOriginal, JavaOriginal, SpringOriginalWordmark } from 'devicons-react';

const TechStack = ({ techStack }) => {
    const techStackNodes = techStack.map((tech, index) => {
        switch (tech) {
            case 'react':
                return <TechItem><ReactOriginal key={index} size="100%" /><p>React</p></TechItem>
            case 'js':
                return <TechItem><JavascriptOriginal key={index} size="100%" /><p>Javascript</p></TechItem>
            case 'html':
                return <TechItem><Html5Original key={index} size="100%" /><p>HTML5</p></TechItem>
            case 'css':
                return <TechItem><Css3Original key={index} size="100%" /><p>CSS3</p></TechItem>
            case 'python':
                return <TechItem><PythonOriginal key={index} size="100%" /><p>Python3</p></TechItem>
            case 'flask':
                return <TechItem><FlaskOriginal key={index} size="100%" color="white" /><p>Flask</p></TechItem>
            case 'postgres':
                return <TechItem><PostgresqlOriginal key={index} size="100%" /><p>Postgresql</p></TechItem>
            case 'express':
                return <TechItem><ExpressOriginal key={index} size="100%" /><p>Express</p></TechItem>
            case 'mongodb':
                return <TechItem><MongodbOriginal key={index} size="100%" /><p>MongoDB</p></TechItem>
            case 'java':
                return <TechItem><JavaOriginal key={index} size="100%" /><p>Java</p></TechItem>
            case 'spring':
                return <TechItem><SpringOriginalWordmark key={index} size="100%" /><p>Spring</p></TechItem>
            default:
                return null;

        }
    })
    return (<TechStackStyled>{techStackNodes}</TechStackStyled>);
}

const TechStackStyled = styled.div`
    display:flex;
    justify-content: space-around;
    height:3rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: ${props => props.theme.dark};
    margin: 0 0.5rem 0 0.5rem;
`;

const TechItem = styled.div`
    display:grid;
    grid-template-rows: 4fr 1fr;

    p{margin:0;
        font-size:x-small;
        line-height: 1;
        text-align: center;

    }
`

export default TechStack;