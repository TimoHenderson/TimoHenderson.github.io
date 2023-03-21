import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { devices } from "../helpers/ScreenSizes";

const ProjectGrid = ({ projects }) => {
    return (
        <StyledGrid>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </StyledGrid>);
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
    

`

export default ProjectGrid;