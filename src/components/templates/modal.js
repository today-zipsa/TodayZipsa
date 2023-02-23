const Modal = document.createElement("box");
const ModalTemplate = document.createElement("box");

Modal.className = "modal";
// Modal.className = "--hide";
ModalTemplate.className = "modal-template";

Modal.appendChild(ModalTemplate);

export default Modal;
