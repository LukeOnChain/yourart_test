import React from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

export default function ImageModal(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.setImageModalOpen(false)}
    >
      <div
        className="modal__cross"
        onClick={() => props.setImageModalOpen(false)}
      >
        <ImCross />
      </div>
      <div className="modal__content">
        <img src={props.image} style={{ height: "100%" }} />
      </div>
    </Modal>
  );
}
