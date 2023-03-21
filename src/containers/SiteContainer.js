import React, { useState } from "react";
import styled from "styled-components";
import projectData from '../data/projects.json'
import Header from "../components/Header";
import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";



const SiteContainer = () => {

    const [projects, setProjects] = useState(projectData);



    return (
        <StyledMainContainer>
            <Header />
            <About />
            <ProjectGrid projects={projects} />
        </StyledMainContainer>
    );
}

const StyledMainContainer = styled.div`
    max-width:1200px;
    margin: auto;
    padding:0 1rem;
`


export default SiteContainer;