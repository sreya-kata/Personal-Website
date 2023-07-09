import { RiCloseLine } from "react-icons/ri";
import {
  ModalBackdrop,
  CenteredModal,
  ModalContainer,
  ModalHeader,
  CloseButton,
  PositionDetails,
  Languages,
  Language,
  PLanguage,
  Description,
  Buttons,
} from "./Modal-Styles";
import { Button } from "../../../constants/buttons";
import { H4, P } from "../../../constants/typography";

export const Modal = ({ setShowModal, experience }) => {
  return (
    <>
      <ModalBackdrop onClick={() => setShowModal(false)} />
      <CenteredModal>
        <ModalContainer>
          <ModalHeader>
            <H4>{experience.name}</H4>
          </ModalHeader>
          <CloseButton onClick={() => setShowModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </CloseButton>
          <PositionDetails>
            <P>{experience.position}</P>
            <P>:&nbsp;</P>
            <P>{experience.time}</P>
          </PositionDetails>
          <Languages>
            {experience.languages &&
              experience.languages.map((language) => {
                return (
                  <Language>
                    <PLanguage>{language}</PLanguage>
                  </Language>
                );
              })}
          </Languages>
          <Description
            dangerouslySetInnerHTML={{ __html: experience.description }}
          ></Description>
          <Buttons>
            <a href={experience.url} target="_blank" rel="noreferrer">
              <Button>Website</Button>
            </a>
            {experience.projects &&
              experience.projects.map((project) => {
                return (
                  <a href={project} target="_blank" rel="noreferrer">
                    <Button secondary>Project</Button>
                  </a>
                );
              })}
          </Buttons>
        </ModalContainer>
      </CenteredModal>
    </>
  );
};
