// import { request } from "../src/api/common.js";
import { payments } from "../api/my_payment_dummy.js";
import { accounts } from "../api/my_accounts_dummy.js";
// import { banks } from "../api/my_usable_banks_dummy.js";

const app = document.querySelector("#app");
const paymentsContainer = document.querySelector(".payments-container");
const profileWelcomeWord = document.querySelector(".profile-words1");
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

const paymentsList = paymentsInfo.map(payment => {
	const isTransactionCompleted = payment.done;
	const isCanceled = payment.isCanceled;
	const productPrice = payment.product.price;
	const productName = payment.product.title;
	const thumbnailUrl = "https://picsum.photos/id/237/200/300"; //myimg; //payment.product.thumbnail;
	const paymentTime = payment.timePaid
		.slice(5, 10)
		.split("-")
		.map(digit => (digit.length < 2 ? "0" + digit : digit));

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
	deleteBtn.src = require("../asset/btnImg/close_btn.png");
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

profileWelcomeWord.innerText = `안녕하세요, ${memberName}님`;
peoriodOfPayment.innerText = `${firstDateToPay} ~ ${lastDateToPay} 동안 구매해주신 내역이에요.`;
paymentsContainer.append(...paymentsList);
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
