import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { Card, ExperienceImage } from "./Experiences-Styles";
import { Modal } from "./Modal";

const ExperienceCard = ({ experience }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card
        key={experience.name}
        onClick={openModal}
        data-tooltip-id="learn-more"
        data-tooltip-content="Click to learn more!"
      >
        <Tooltip id="learn-more" />

        <ExperienceImage src={experience.image} />
      </Card>
      {showModal && (
        <Modal setShowModal={setShowModal} experience={experience} />
      )}
    </>
  );
};

export default ExperienceCard;
