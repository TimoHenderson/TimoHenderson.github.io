import React, { useState, useEffect } from "react";
import styled from "styled-components";
import projectData from '../data/projects.json'
import Header from "../components/Header";
// import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";
import { ModalProvider } from "styled-react-modal";




const SiteContainer = () => {

    const [projects, setProjects] = useState([]);



    useEffect(() => {
        setProjects(projectData);
    }, [])


    return (
        <ModalProvider>
            <StyledMainContainer>
                <Header />
                {/* <About /> */}
                <ProjectGrid projects={projects} />
            </StyledMainContainer>
        </ModalProvider>
    );
}

const StyledMainContainer = styled.div`
    max-width:1200px;
    margin: auto;
    padding:0 1rem;
`


export default SiteContainer;