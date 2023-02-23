const Modal = document.createElement("box");
const ModalTemplate = document.createElement("box");

Modal.classList.add("modal");
Modal.classList.add("--hide");
ModalTemplate.className = "modal-template";

Modal.appendChild(ModalTemplate);

export default Modal;
