import React from "react";
import styled from "styled-components";
import { ReactOriginal, JavascriptOriginal, Html5Original, Css3Original, PythonOriginal, FlaskOriginal, PostgresqlOriginal } from 'devicons-react';

const TechStack = ({ techStack }) => {
    const techStackNodes = techStack.map((tech, index) => {
        switch (tech) {
            case 'react':
                return <ReactOriginal key={index} size="100%" />
            case 'js':
                return <JavascriptOriginal key={index} size="100%" />
            case 'html':
                return <Html5Original key={index} size="100%" />
            case 'css':
                return <Css3Original key={index} size="100%" />
            case 'python':
                return <PythonOriginal key={index} size="100%" />
            case 'flask':
                return <FlaskOriginal key={index} size="100%" />
            case 'postgres':
                return <PostgresqlOriginal key={index} size="100%" />
            default:
                return null;

        }
    })
    return (<TechStackStyled>{techStackNodes}</TechStackStyled>);
}

const TechStackStyled = styled.div`
    display:flex;
    height:3rem;
    padding: 0.5rem 1rem 1rem 1rem;
`;

export default TechStack;