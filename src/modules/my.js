// import { request } from "../src/api/common.js";
// import { banks } from "../api/my_usable_banks_dummy.js";
export async function renderMypage() {
	const app = document.querySelector("#app");

	const paymentsContainer = document.querySelector(".payments-container");
	// const profileWelcomeWord = document.querySelector(".profile-words1");
	const peoriodOfPayment = document.querySelector(".profile-words2");
	const accountsBoxs = document.querySelector(".accounts-list");
	const paymentsInfo = payments; // request("PRD12");
	const accountsInfo = accounts.accounts;
	const memberName = "이지영"; //request("MEB03").displayName;
	const lastDateToPay = paymentsInfo[0].timePaid
		.slice(0, 10)
		.split("-")
		.join(".");
	const firstDateToPay = paymentsInfo[paymentsInfo.length - 1].timePaid
		.slice(0, 10)
		.split("-")
		.join(".");

	const accountsList = accountsInfo.map(account => {
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
		deleteBtn.src = require("../asset/btnImg/close_btn.png");

		bankImgBox.append(bankImg);
		accountInfoBox.append(accountInfo, accountBalance);
		accountContainer.append(bankImgBox, accountInfoBox, deleteBtn);
		return accountContainer;

		function setBankImage(bankName) {
			switch (bankName) {
				case "KB국민은행":
					bankImg.src = require("../asset/bankImg/kb_bank.png");
					break;
				case "신한은행":
					bankImg.src = require("../asset/bankImg/sh_bank.png");
					break;
				case "우리은행":
					bankImg.src = require("../asset/bankImg/woori_bank.png");
					break;
				case "하나은행":
					bankImg.src = require("../asset/bankImg/hana_bank.png");
					break;
				case "케이뱅크":
					bankImg.src = require("../asset/bankImg/k_bank.png");
					break;
				case "카카오뱅크":
					bankImg.src = require("../asset/bankImg/kakao_bank.png");
					break;
				case "NH농협은행":
					bankImg.src = require("../asset/bankImg/nh_bank.png");
					break;
			}
		}
	});

	// if (
	// 	profileWelcomeWord &&
	// 	peoriodOfPayment &&
	// 	paymentsContainer &&
	// 	accountsBoxs
	// ) {

	// }
	profileWelcomeWord.innerText = `안녕하세요, ${memberName}님`;
	peoriodOfPayment.innerText = `${firstDateToPay} ~ ${lastDateToPay} 동안 구매해주신 내역이에요.`;
	paymentsContainer.append(...Array.from(paymentsList));
	accountsBoxs.append(...accountsList);

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
}
