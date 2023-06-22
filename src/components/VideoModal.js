import Modal from 'styled-react-modal'
import { useState, useEffect } from 'react'

import Panel from './Panel'
import LinkButton from './LinkButton'
import ProjectButtons from './ProjectButtons'
import Collaborators from './Collaborators'
import VideoIFrame from './VideoIframe'



const VideoModal = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = (e) => {
        setIsOpen(!isOpen)
    }


    useEffect(() => {
        const params = new URLSearchParams(document.location.search);
        const videoId = params.get('video');
        if (videoId === project.id) {
            setIsOpen(true)
        }
    }, [project]);


    return (
        <div>
            <LinkButton clickHandler={toggleModal} text="Video" />
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                <Panel width="100%">
                    <h2>{project.name}</h2>
                    <br />
                    {/* <div>{parse(project.video)}</div> */}
                    <VideoIFrame project={project} />
                    <br />
                    <ProjectButtons>
                        <LinkButton href={project.repo} text="Repo" />
                        {project.demo !== "" && <LinkButton href={project.demo} text="Demo" />}
                        {project.collaborators.length !== 0 && <Collaborators collaborators={project.collaborators} />}
                        {project.linkedInPost && <LinkButton href={project.linkedInPost} text="LinkedIn" />}
                        <LinkButton clickHandler={toggleModal} text="Close" />
                    </ProjectButtons>


                </Panel>
            </StyledModal>
        </div>
    )

}

const StyledModal = Modal.styled`
  
  min-width:10rem;
  width: 100%;
  /* height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* background-color :${props => props.theme.dark}; */
  
  @media (min-width: 768px) { /* Media query for desktop */
    width: 60%;
  }
`;


export default VideoModal;