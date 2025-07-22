import { useState } from "react";
import { createPortal } from "react-dom";
import ModalStructure from "./ModalStructure";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  
  return (
    <div>
        <h1>Modal</h1>
        <button onClick={handleShowModal}>open modal</button>
        {showModal && createPortal(
          <ModalStructure hideModal={handleHideModal}/>,
          document.body
        )}
    </div>
  );
}