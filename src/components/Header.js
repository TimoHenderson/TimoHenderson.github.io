import Panel from "./Panel";
import styled from "styled-components";

const Header = () => {
    return (
        <Panel>
            <SiteHeader>
                <HeaderTitle>Timo Henderson</HeaderTitle>
                <SubTitle>Software Developer</SubTitle>
            </SiteHeader>
        </Panel>
    );
}


const SiteHeader = styled.header`
text-align:center;
background-color:${props => props.theme.darkest};
color:${props => props.theme.textColor};
`
const HeaderTitle = styled.h1`
margin:0;
`
const SubTitle = styled.p`
margin:0;
margin-top:1rem;
text-align: center;
`
export default Header;