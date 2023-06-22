import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import Panel from "./Panel";
import TechStack from "./TechStack";
import Collaborators from "./Collaborators";
import VideoModal from "./VideoModal";
import ProjectButtons from "./ProjectButtons";


const ProjectCard = ({ project, }) => {
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
                {project.video !== "" && <VideoModal project={project} text="Video" />}
                {project.collaborators.length !== 0 && <Collaborators collaborators={project.collaborators} />}
            </ProjectButtons>


        </CardPanel>);
}

const CardPanel = styled(Panel)`
    padding:0;  
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
   box-shadow: inset 0 0 2rem #00000055;
  
   
   h2{  
        background-color: ${props => props.theme.darkest + 99};
        margin:0;
        padding: 0.2rem
   }
`;

const ProjectDetails = styled.div`
    padding:1rem;
    display: flex;
    align-items:center;
    justify-content: center;

   p{
        text-align:center;
        margin:0;
   }
`;



export default ProjectCard;