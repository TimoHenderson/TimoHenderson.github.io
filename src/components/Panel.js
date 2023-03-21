import styled from "styled-components";
import Theme from "./Theme";



const Panel = ({ children }) => {
    return (<Theme>
        <StyledPanel>{children}</StyledPanel>
    </Theme>);
}

const StyledPanel = styled.div`
background-color: ${props => props.theme.darkest};
border: 2px solid ${props => props.theme.lightest};
margin: 1rem 0;
padding: 1.5rem;
color: ${props => props.theme.textColor};
`
export default Panel;