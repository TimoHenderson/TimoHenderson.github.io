import styled from "styled-components";
const VideoIFrame = ({ project }) => {
    return (
        <VideoContainer>
            <IFrameStyled
                src={project.video}
                title={project.name}
                allowFullScreen

            />

        </VideoContainer>
    );
}
//  " <iframe src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7076945634196414464?compact=1' height='399' width='710' frameborder='0' allowfullscreen='' title='Embedded post'></iframe>",

const VideoContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    overflow: hidden;
    margin:0;
    border: 10px solid ${props => props.theme.darkest};
`;

const IFrameStyled = styled.iframe`
    position: absolute;
    border: 0;
    align-self: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export default VideoIFrame;