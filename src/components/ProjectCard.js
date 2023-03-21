import React from "react";
import styled from "styled-components";
import Panel from "./Panel";


const ProjectCard = ({ project }) => {
    const image = require(`../assets/img/${project.image}`)
    return (
        <CardPanel>
            <ProjectTitle background={image}>
                <h2>{project.name}</h2>
            </ProjectTitle>
            <ProjectDetails>
                <p>{project.blurb}</p>
            </ProjectDetails>
            <ProjectButtons>
                <button>Repo</button>
                <button>Demo</button>
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
    padding:1rem;

   p{
        margin:0;
   }
`;

const ProjectButtons = styled.div`
    display:flex;
    justify-content: space-around;
`

export default ProjectCard;