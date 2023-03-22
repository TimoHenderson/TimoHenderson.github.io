import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import Panel from "./Panel";
import TechStack from "./TechStack";


const ProjectCard = ({ project }) => {
    const image = require(`../assets/img/${project.image}`)
    return (
        <CardPanel>
            <ProjectTitle background={image}>
                <h2>{project.name}</h2>
            </ProjectTitle>
            <TechStack techStack={project.techStack} />
            <ProjectDetails>
                <p>{project.blurb}</p>
            </ProjectDetails>
            <ProjectButtons>
                <LinkButton href={project.repo} text="Repo" />
                {project.demo !== "" && <LinkButton href={project.demo} text="Demo" />}
            </ProjectButtons>

        </CardPanel>);
}

const CardPanel = styled(Panel)`
    padding:0;  
`;

const ProjectTitle = styled.div`
   background-image :${props => `url(${props.background})`} ;
   background-size:cover;
   background-position:center;
   height:15rem; 
   display:flex;
   justify-content:flex-end;
   align-items: flex-end;
   padding:1rem;
   border: 10px solid ${props => props.theme.darkest};
   
   h2{  
        background-color: ${props => props.theme.darkest + 99};
        margin:0;
        padding: 0.2rem
   }
`;

const ProjectDetails = styled.div`
    padding:0.5rem 1.5rem 0.5rem 1.5rem;

   p{
        text-align:center;
        margin:0;
   }
`;

const ProjectButtons = styled.div`
    display:flex;
    justify-content: space-around;
    margin:1rem;
`

export default ProjectCard;