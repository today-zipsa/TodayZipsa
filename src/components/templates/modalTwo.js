const ModalTwo = document.createElement("box");
const ModalTwoTemplate = document.createElement("box");

ModalTwo.classList.add("modal-two");
ModalTwo.classList.add("--hide");
ModalTwoTemplate.className = "modal-two-template";

ModalTwo.appendChild(ModalTwoTemplate);

export default ModalTwo;
