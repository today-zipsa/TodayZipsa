import ModalTwo from "../templates/modalTwo";
import { request } from "../../api/common";
import { payments } from "../../api/my_payment_dummy";
import { accounts } from "../../api/my_accounts_dummy";
import profileImg from "../../asset/myImg/profile.png";
import addBtnImg from "../../asset/btnImg/add_btn.png";
import deleteBtnImg from "../../asset/btnImg/close_btn.png";
const paymentsInfo = payments; //request("PRD12");

export default function MyPage() {
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
	MyPage.append(profileContainer, infoContainer, ModalTwo);

	// console.log(MyPage.outerHTML); 문자열 html 태그값

	btnImg.addEventListener("click", () => {
		const accountInputBox = document.createElement("box");
		showModalTwo();
	});

	// 프로필 수정모달창 로직
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

			closeEditProfileModal();
			setUserInfo(params);
		});

		cancelBtn.addEventListener("click", () => {
			closeEditProfileModal();
		});

		ModalTemplate.addEventListener("click", (e) => {
			closeEditProfileModal();
		});

		modalBtnBox.append(completeBtn, cancelBtn);
		document
			.querySelector(".modal-two")
			.querySelector(".modal-two-template")
			.append(...editingInputTemplate, modalBtnBox);
		showEditProfileModal();
	});

	renderTest(MyPage);

	return MyPage;

	function setUserInfo(params) {
		// 사용자 정보 수정 API로직
		try {
			if (localStorage.getItem("accessToken")) {
				// const res = request("MEB05", params);
				// console.log(res);
			}
		} catch (error) {
			window.alert(error);
		}
	}
}

async function renderTest(page) {
	// app만 querySelector로 잘 불러와지고 나머지는 null이 됨
	// const app = document.querySelector("#app");
	const [profileContainer, infoContainer, profileEditmodal] = Array.from(
		page.children
	);
	// const memberName = request("MEB03").displayName;
	const paymentsInfo = payments; // request("PRD12");
	const lastDateToPay = paymentsInfo[0].timePaid
		.slice(0, 10)
		.split("-")
		.join(".");
	const firstDateToPay = paymentsInfo[paymentsInfo.length - 1].timePaid
		.slice(0, 10)
		.split("-")
		.join(".");

	profileContainer.innerHTML = `
				<box class="profile-box">
					<box class="welcome-word-box">
						<img class="profile-image" src="${profileImg}" alt="profile-image">
						<span class="profile-words1">안녕하세요, 이지영님</span>
					</box>
					<span class="profile-words2">${firstDateToPay} ~ ${lastDateToPay} 동안 구매해주신 내역이에요.</span>
				</box>
			`;

	infoContainer.innerHTML = `
				<box class="payments-container">${paymentsList()
					.map((x) => x.outerHTML)
					.join("")}</box>
				<box class="accounts-container">
					<div class="accounts-container-title">계좌관리</div>
					<div class="accounts-list">${accountsList()
						.map((x) => x.outerHTML)
						.join("")}</div>
					
					<div class="add-account-btn-box">
					<img class="btn-img" src="${addBtnImg}" alt="add-btn-image"/>
					<span class="btn-title">계좌연결</span>
					</div>
				</box>
				`;
}

function setDetailInfoButtonState(paymentState) {
	switch (paymentState) {
		case "구매확정완료":
			return "주문상세>";
		default:
			return "결제상세>";
	}
}

function setDetailInfoHref(paymentState) {
	switch (paymentState) {
		case "구매확정완료":
			return "../pages/my_order_detail.html";
		default:
			return "../pages/my_payment_detail.html";
	}
}

function getKRW(digit) {
	const digitArray = digit.toString().split("");
	const newArray = [];
	let index = 0;
	while (digitArray.length > 0) {
		newArray.push(digitArray.pop());
		index += 1;
		if (index === 3) {
			newArray.push(",");
			index = 0;
		}
	}
	if (newArray[newArray.length - 1] === ",") {
		newArray.pop();
	}
	return newArray.reverse().join("") + "원";
}

function paymentsList() {
	return payments.map((payment) => {
		const isTransactionCompleted = payment.done;
		const isCanceled = payment.isCanceled;
		const productPrice = payment.product.price;
		const productName = payment.product.title;
		const thumbnailUrl = "https://picsum.photos/id/237/200/300"; //myimg; //payment.product.thumbnail;
		const paymentTime = payment.timePaid
			.slice(5, 10)
			.split("-")
			.map((digit) => (digit.length < 2 ? "0" + digit : digit));

		let paymentState = "결제완료";

		const paymentContainer = document.createElement("box");
		const paymentStateBox = document.createElement("div");
		const paymentStateWord = document.createElement("span");
		const paymentInfoBox = document.createElement("div");
		const itemImage = document.createElement("img");
		const itemInfoBox = document.createElement("div");
		const paymentDate = document.createElement("span");
		const itemName = document.createElement("span");
		const itemPrice = document.createElement("span");
		const detailInfoBtn = document.createElement("a");
		const deleteBtn = document.createElement("img");
		const twoBtnBox = document.createElement("div");
		const btnPayConfirmed = document.createElement("div");
		const btnPayCanceled = document.createElement("div");

		paymentContainer.classList.add("payment-container");
		paymentStateBox.classList.add("payment-state-box");
		paymentStateWord.classList.add("payment-state");
		paymentInfoBox.classList.add("payment-info-box");
		itemImage.classList.add("item-image");
		itemInfoBox.classList.add("item-info-box");
		paymentDate.classList.add("payment-date");
		itemName.classList.add("item-name");
		itemPrice.classList.add("item-price");
		detailInfoBtn.classList.add("detail-info-btn");
		deleteBtn.classList.add("my-payment-list-delete-btn");
		twoBtnBox.classList.add("two-btn-box");
		btnPayConfirmed.classList.add("btn-pay-confirmed");
		btnPayCanceled.classList.add("btn-pay-canceled");

		if (isCanceled) {
			twoBtnBox.classList.add("none");
			paymentState = "결제취소";
			paymentStateBox.style.color = "#909190";
		}
		if (isTransactionCompleted) {
			btnPayConfirmed.classList.add("none");
			paymentState = "구매확정완료";
			paymentStateBox.style.color = "#909190";
		}

		detailInfoBtn.href = setDetailInfoHref(paymentState);
		detailInfoBtn.innerText = setDetailInfoButtonState(paymentState);
		detailInfoBtn.setAttribute("data-navigo", "");
		paymentStateWord.innerText = paymentState;
		paymentDate.innerText = `${paymentTime[0]}.${paymentTime[1]} 결제`;
		itemName.innerText = productName;
		itemPrice.innerText = getKRW(productPrice);
		itemImage.src = thumbnailUrl;
		itemImage.alt = "상품이미지";
		deleteBtn.src = deleteBtnImg;
		btnPayConfirmed.innerText = "구매확정";
		btnPayCanceled.innerText = "주문취소";

		paymentStateBox.append(paymentStateWord);
		itemInfoBox.append(paymentDate, itemName, itemPrice, detailInfoBtn);
		paymentInfoBox.append(itemImage, itemInfoBox);
		twoBtnBox.append(btnPayConfirmed, btnPayCanceled);
		paymentContainer.append(
			paymentStateBox,
			paymentInfoBox,
			twoBtnBox,
			deleteBtn
		);
		return paymentContainer;
	});
}

const accountsInfo = accounts.accounts;
export const accountsList = () => {
	return accountsInfo.map((account) => {
		const accountContainer = document.createElement("box");
		const bankImgBox = document.createElement("div");
		const bankImg = document.createElement("img");
		const accountInfoBox = document.createElement("div");
		const accountInfo = document.createElement("span");
		const accountBalance = document.createElement("span");
		const deleteBtn = document.createElement("img");

		accountContainer.classList.add("account-container");
		bankImgBox.classList.add("bank-img-box");
		bankImg.classList.add("bank-img");
		accountInfoBox.classList.add("account-info-box");
		accountInfo.classList.add("account-info");
		accountBalance.classList.add("account-balance");
		deleteBtn.classList.add("delete-btn");

		setBankImage(account.bankName);
		accountInfo.innerText = `${account.bankName} ${account.accountNumber}`;
		accountBalance.innerText = getKRW(account.balance);
		deleteBtn.src = require("../../asset/btnImg/close_btn.png");

		bankImgBox.append(bankImg);
		accountInfoBox.append(accountInfo, accountBalance);
		accountContainer.append(bankImgBox, accountInfoBox, deleteBtn);
		return accountContainer;

		function setBankImage(bankName) {
			switch (bankName) {
				case "KB국민은행":
					bankImg.src = require("../../asset/bankImg/kb_bank.png");
					break;
				case "신한은행":
					bankImg.src = require("../../asset/bankImg/sh_bank.png");
					break;
				case "우리은행":
					bankImg.src = require("../../asset/bankImg/woori_bank.png");
					break;
				case "하나은행":
					bankImg.src = require("../../asset/bankImg/hana_bank.png");
					break;
				case "케이뱅크":
					bankImg.src = require("../../asset/bankImg/k_bank.png");
					break;
				case "카카오뱅크":
					bankImg.src = require("../../asset/bankImg/kakao_bank.png");
					break;
				case "NH농협은행":
					bankImg.src = require("../../asset/bankImg/nh_bank.png");
					break;
			}
		}
	});
};
