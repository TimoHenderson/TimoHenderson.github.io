import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";



const SiteContainer = () => {
    return (
        <StyledMainContainer>
            <Header />
            <About />
            <ProjectGrid />
        </StyledMainContainer>
    );
}

const StyledMainContainer = styled.div`
    max-width:14s00px;
    margin: auto;
    padding:0 1rem;
`


export default SiteContainer;