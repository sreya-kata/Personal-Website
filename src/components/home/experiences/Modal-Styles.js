import styled from "styled-components";
import { orange, white } from "../../../constants/colors";
import { P } from "../../../constants/typography";
import { devices } from "../../../constants/devices";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const CenteredModal = styled.div`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  background: ${white};
  color: ${white};
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  border: 2px solid #d9d9d9;
  overflow-y: auto;
  max-height: 24rem;
  max-width: 45rem;
  padding: 0.6em 2.5em 1.5em;

  @media ${devices.tablet} {
    max-height: 26rem;
    max-width: 50rem;
  }

  @media ${devices.laptop} {
    max-height: 33rem;
  }
`;

const ModalHeader = styled.div`
  text-align: center;
`;

const CloseButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: ${white};
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;

  :hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
`;

const PositionDetails = styled.span`
  display: flex;
  justify-content: center;
  font-style: italic;
  margin-top -1.2rem;
  margin-bottom: -0.5rem;
`;

const Languages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  list-style: none;
  padding-inline-start: 0;
`;

const Language = styled.li`
  margin: 1.3rem 0.5rem 0;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const PLanguage = styled(P)`
  display: inline;
  color: ${orange};
  border-radius: 20px;
  border: 2px solid ${orange};
  padding: 0.3rem 1rem;
`;

const Description = styled(P)`
  margin-top: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export {
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
};
