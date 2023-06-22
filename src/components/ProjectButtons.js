import styled from "styled-components";



const ProjectButtons = ({ children }) => {
    return (
        <ButtonRow>
            {children}
        </ButtonRow>
    );
}

const ButtonRow = styled.div`
    display:flex;
    justify-content: space-around;
    margin:1rem;
    margin-top:auto;
`
export default ProjectButtons;