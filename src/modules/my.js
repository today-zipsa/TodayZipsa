// import { request } from "../src/api/common.js";
import { datas } from "../api/my-dummy.js";

const paymentsContainer = document.querySelector(".payments-container");
const profileWelcomeWord = document.querySelector(".profile-words1");
const peoriodOfPayment = document.querySelector(".profile-words2");
const paymentsInfo = datas; // request("PRD12");
const isMember = "이지영"; //request("MEB03");
profileWelcomeWord.innerText = "안녕하세요, 이지영님"; //isMember.displayName;
peoriodOfPayment.innerText =
	"2023.02.09 ~ 2023.02.10 동안 구매해주신 내역이에요.";

// - [x]  결제 항목 박스 맨 상단엔 ‘결제완료, 구매확정완료, 결제취소’ 결제 상태값이 보여져야 한다.
// - [x]  결제완료는 검정색, 나머지는 연한 회색으로 상태값 처리해야한다.
// - [x]  결제항목 좌측에는 상품 썸네일 이미지가 보여야 한다.
// - [x]  결제항목 우측에는 상품결제일, 상품명, 상품가격 및 ‘결제상세 / ‘주문상세’ 버튼이 보여야한다

console.dir(paymentsInfo);
paymentsInfo.forEach(payment => {
	console.log(payment);
	const isTransactionCompleted = payment.done;
	const isCanceled = payment.isCanceled;
	const productPrice = payment.product.price;
	const productName = payment.title;
	const thumbnailUrl = payment.thumbnail;
	const paymentTime = payment.timePaid.slice(5, 10).split("-");
	let paymentState = "결제완료";

	const paymentContainer = document.createElement("box");
	const paymentStateBox = document.createElement("div");
	const paymentInfoBox = document.createElement("div");
	const itemImage = document.createElement("img");
	const itemInfoBox = document.createElement("div");
	const paymentDate = document.createElement("span");
	const itemName = document.createElement("span");
	const itemPrice = document.createElement("span");
	const detailInfoBtn = document.createElement("button");

	paymentContainer.classList.add("payment-container");
	paymentStateBox.classList.add("payment-state-box");
	paymentInfoBox.classList.add("payment-info-box");
	itemImage.classList.add("item-image");
	itemInfoBox.classList.add("item-info-box");
	paymentDate.classList.add("payment-date");
	itemName.classList.add("item-name");
	itemPrice.classList.add("item-price");
	detailInfoBtn.classList.add("detail-info-btn");

	if (isCanceled) {
		paymentState = "결제취소";
	}
	if (isTransactionCompleted) {
		paymentState = "구매확정완료";
	}
	paymentStateBox.innerHTML = `<span class="payment-state">${paymentState}<span>`;
	detailInfoBtn.innerText = setDetailInfoButtonState(paymentState);
	paymentDate.innerText = `${paymentTime[0]}월${paymentTime[1]}일`;
	itemName.innerText = productName;
	itemPrice.innerText = productPrice;
	itemImage.src = thumbnailUrl;
	itemImage.alt = "상품이미지";

	console.log("되고 있는거임?");
	itemInfoBox.append(paymentDate, itemName, itemPrice, detailInfoBtn);
	paymentInfoBox.append(itemImage, itemInfoBox);
	paymentContainer.append(paymentStateBox, paymentInfoBox);
	paymentsContainer.append(paymentContainer);
});

function setDetailInfoButtonState(paymentState) {
	switch (paymentState) {
		case "구매확정완료":
			return "주문상세>";
		default:
			return "결제상세>";
	}
}
