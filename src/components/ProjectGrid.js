import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Panel from "./Panel";
import { devices } from "../helpers/ScreenSizes";

const ProjectGrid = ({ projects }) => {

    const projectNodes = projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
    ));

    return (
        <>
            <TitlePanel><h2>Projects</h2></TitlePanel>
            <StyledGrid>
                {projectNodes}
            </StyledGrid>
        </>
    );
}

const StyledGrid = styled.main`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media ${devices.tablet}{
        grid-template-columns: 1fr 1fr;
        
    }

    @media ${devices.laptop}{
        grid-template-columns: 1fr 1fr 1fr;
        
    }
`;

const TitlePanel = styled(Panel)`
    padding:1rem;
   
`;

export default ProjectGrid;