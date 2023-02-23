import ModalTemplate from "../templates/modal";
import { request } from "../../api/common";
const MyPage = document.createElement("section");
const profileContainer = document.createElement("box");
const profileBox = document.createElement("box");
const welcomeWordBox = document.createElement("box");
const profileImage = document.createElement("img");
const profileWords1 = document.createElement("span");
const profileWords2 = document.createElement("span");
const paymentPeriod = document.createElement("span");
const infoContainer = document.createElement("box");
const paymentsContainer = document.createElement("box");
const accountsContainer = document.createElement("box");
const accountsContainerTitle = document.createElement("div");
const accountsList = document.createElement("div");
const addAccountBtnBox = document.createElement("div");
const btnImg = document.createElement("img");
const btnTitle = document.createElement("span");

MyPage.className = "my-section";
profileContainer.className = "profile-container";
profileBox.className = "profile-box";
welcomeWordBox.className = "welcome-word-box";
profileImage.className = "profile-image";
profileWords1.className = "profile-words1";
profileWords2.className = "profile-words2";
paymentPeriod.className = "payment-period";
infoContainer.className = "info-container";
paymentsContainer.className = "payments-container";
accountsContainer.className = "accounts-container";
accountsContainerTitle.className = "accounts-container-title";
accountsList.className = "accounts-list";
addAccountBtnBox.className = "add-account-btn-box";
btnImg.className = "btn-img";
btnTitle.className = "btn-title";

profileImage.src = require("../../asset/myImg/profile.png");
btnImg.src = require("../../asset/btnImg/add_btn.png");
profileImage.alt = "profile-image";
btnImg.alt = "add-btn-image";
accountsContainerTitle.innerHTML = "계좌관리";
btnTitle.innerHTML = "계좌연결";

welcomeWordBox.append(profileImage, profileWords1);
profileBox.append(welcomeWordBox, profileWords2);
profileContainer.append(profileBox, paymentPeriod);
infoContainer.append(paymentsContainer, accountsContainer);

addAccountBtnBox.append(btnImg, btnImg);
accountsContainer.append(
	accountsContainerTitle,
	accountsList,
	addAccountBtnBox
);
MyPage.append(profileContainer, infoContainer, ModalTemplate);

welcomeWordBox.addEventListener("click", () => {
	const nameInputBox = document.createElement("box");
	const profileImgInputBox = document.createElement("box");
	const nowPasswordInputBox = document.createElement("box");
	const newPasswordInputBox = document.createElement("box");
	const modalBtnBox = document.createElement("box");
	const completeBtn = document.createElement("div");
	const cancelBtn = document.createElement("div");
	const editingInputTemplate = [
		nameInputBox,
		profileImgInputBox,
		nowPasswordInputBox,
		newPasswordInputBox,
	];
	const inputBarInfo = [
		{ innerText: "닉네임", placeholder: "별명(20자이내)" },
		{ innerText: "프로필이미지", placeholder: "프로필 URL주소" },
		{ innerText: "현재비밀번호", placeholder: "현재 비밀번호" },
		{ innerText: "신규비밀번호", placeholder: "신규 비밀번호" },
	];

	ModalTemplate.classList.remove("--hide");
	nameInputBox.classList.add("input-box");
	profileImgInputBox.classList.add("input-box");
	nowPasswordInputBox.classList.add("input-box");
	newPasswordInputBox.classList.add("input-box");
	modalBtnBox.classList.add("modal-btn-box");
	completeBtn.classList.add("complete-btn");
	cancelBtn.classList.add("cancel-btn");

	completeBtn.innerText = "수정완료";
	cancelBtn.innerText = "취소";

	editingInputTemplate.forEach((userInfoBox, idx) => {
		const inputBar = document.createElement("input");
		const inputBarName = document.createElement("span");

		inputBar.classList.add("input-bar");
		inputBarName.classList.add("input-bar-name");

		inputBar.type = "text";
		inputBarName.innerText = inputBarInfo[idx].innerText;
		inputBar.placeholder = inputBarInfo[idx].placeholder;

		userInfoBox.append(inputBarName, inputBar);
	});

	completeBtn.addEventListener("click", () => {
		const userName = nameInputBox.innerText;
		const profileImgUrl = profileImgInputBox.innerText;
		const nowPassword = nowPasswordInputBox.innerText;
		const newPassword = newPasswordInputBox.innerText;
		const params = [userName, profileImgUrl, nowPassword, newPassword];

		closeModal();
		setUserInfo(params);
	});

	cancelBtn.addEventListener("click", () => {
		closeModal();
	});

	modalBtnBox.append(completeBtn, cancelBtn);
	ModalTemplate.querySelector(".modal-template").append(
		...editingInputTemplate,
		modalBtnBox
	);

	ModalTemplate.addEventListener("click", e => {
		closeModal();
	});
});

export default MyPage;

function setUserInfo(params) {
	// 사용자 정보 수정 API로직
	try {
		if (localStorage.getItem("accessToken")) {
			const res = request("MEB05", params);
			// console.log(res);
		}
	} catch (error) {
		window.alert(error);
	}
}

function closeModal() {
	ModalTemplate.classList.add("--hide");
	ModalTemplate.querySelector(".modal-template").innerHTML = "";
}
