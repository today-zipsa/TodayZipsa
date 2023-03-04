import { request } from "../../api/common";

export default function PaymentPage(strId) {
	//payment.html
	const paymentPage = document.createElement("section");
	const paymentOrderpage = document.createElement("div");
	const paymentTotal = document.createElement("div");
	const paymentOrder = document.createElement("div");
	const paymentOrderContainer = document.createElement("div");
	const paymentProductInfo = document.createElement("div");
	const paymentProductInfoWrapper = document.createElement("div");
	const paymentProductPrice = document.createElement("div");
	const paymentProductPriceWrapper = document.createElement("div");
	const paymentProductCount = document.createElement("div");
	const paymentProductCountWrapper = document.createElement("div");
	const paymentOrderer = document.createElement("div");
	const paymentOrdererContatiner = document.createElement("div");
	const paymentOrdererOrderer = document.createElement("div");
	const paymentOrdererOrdererWrapper = document.createElement("div");
	const paymentEmail = document.createElement("div");
	const paymentEmailWrapper = document.createElement("div");
	const paymentPayment = document.createElement("div");
	const paymentPaymentContainer = document.createElement("div");
	const paymentPaymentLeft = document.createElement("div");
	const paymentHow = document.createElement("div");
	const paymentPaymentRight = document.createElement("div");
	const paymentAccountTransfer = document.createElement("span");
	const paymentEmtpy = document.createElement("ul");
	const paymentMoney = document.createElement("div");
	const paymentLastpayContainer = document.createElement("div");
	const paymentLastAccount = document.createElement("div");
	const paymentLastAccountWrapper = document.createElement("div");
	const paymentLastDelivery = document.createElement("div");
	const paymentLastDeliveryWrapper = document.createElement("div");
	const paymentLastDiscountWrapper = document.createElement("div");
	const paymentLastTotalAccount = document.createElement("div");
	const paymentLastTotalAccountWrapper = document.createElement("div");
	const paymentBtnA = document.createElement("a");
	paymentBtnA.setAttribute("id", "payment1-btn-a-id");
	const paymentBtn = document.createElement("button");

	//classlist.add
	paymentPage.classList.add("payment-page");
	paymentOrderpage.classList.add("payment1-orderpage");
	paymentTotal.classList.add("payment1-total");
	paymentOrder.classList.add("payment1-order");
	paymentOrder.classList.add("payment1-h3");
	paymentOrderContainer.classList.add("payment1-order-container");
	paymentProductInfo.classList.add("payment1-text");
	paymentProductInfoWrapper.classList.add("payment1-product-wrapper");
	paymentProductPrice.classList.add("payment1-text");
	paymentProductPriceWrapper.classList.add("payment1-product-wrapper");
	paymentProductCount.classList.add("payment1-text");
	paymentProductCountWrapper.classList.add("payment1-product-wrapper");
	paymentOrderer.classList.add("payment1-orderer");
	paymentOrderer.classList.add("payment1-h3");
	paymentOrdererContatiner.classList.add("payment1-orderer-container");
	paymentOrdererOrderer.classList.add("payment1-text");
	paymentOrdererOrdererWrapper.classList.add("payment1-orderer-wrapper");
	paymentEmail.classList.add("payment1-text");
	paymentEmailWrapper.classList.add("payment1-email-wrapper");
	paymentPayment.classList.add("payment1-payment");
	paymentPayment.classList.add("payment1-h3");
	paymentPaymentContainer.classList.add("payment1-payment-container");
	paymentPaymentLeft.classList.add("payment1-payment-left");
	paymentHow.classList.add("payment1-how");
	paymentPaymentRight.classList.add("payment1-payment-right");
	paymentAccountTransfer.classList.add("payment1-account-transfer");
	paymentEmtpy.classList.add("payment1-emtpy");
	paymentMoney.classList.add("payment1-money");
	paymentMoney.classList.add("payment1-h3");
	paymentLastpayContainer.classList.add("payment1-lastpay-container");
	paymentLastAccount.classList.add("payment1-text");
	paymentLastAccountWrapper.classList.add("payment1-last-account-wrapper");
	paymentLastDelivery.classList.add("payment1-text");
	paymentLastDeliveryWrapper.classList.add("payment1-last-delivery-wrapper");
	paymentLastDiscountWrapper.classList.add("payment1-last-discount-wrapper");
	paymentLastTotalAccount.classList.add("payment1-text");
	paymentLastTotalAccountWrapper.classList.add(
		"payment1-last-total-account-wrapper"
	);
	paymentBtnA.classList.add("payment1-btn-a");
	paymentBtn.classList.add("payment1-btn");

	//innerHTML
	paymentOrderpage.innerHTML = "<h2>결제페이지</h2>";
	paymentOrder.innerHTML = "<h3>주문상품</h3>";
	paymentProductInfo.textContent = "상품정보";
	paymentProductPrice.textContent = "상품가격";
	paymentProductCount.textContent = "상품개수";
	paymentOrderer.innerHTML = "<h3>주문자 정보</h3>";
	paymentOrdererOrderer.textContent = "주문자";
	paymentEmail.textContent = "E-mail";
	paymentPayment.innerHTML = "<h3>결제수단</h3>";
	paymentAccountTransfer.textContent = "계좌이체";
	paymentMoney.innerHTML = "<h3>결제 금액</h3>";
	paymentLastAccount.textContent = "주문금액";
	paymentLastDelivery.textContent = "배송비";
	paymentLastTotalAccount.textContent = "총 금액";

	//append
	paymentPage.append(paymentTotal);
	paymentTotal.append(paymentOrderpage);
	paymentTotal.append(paymentOrder);
	paymentTotal.append(paymentOrderContainer);
	paymentOrderContainer.append(paymentProductInfoWrapper);
	paymentProductInfoWrapper.append(paymentProductInfo);
	paymentOrderContainer.append(paymentProductPriceWrapper);
	paymentProductPriceWrapper.append(paymentProductPrice);
	paymentOrderContainer.append(paymentProductCountWrapper);
	paymentProductCountWrapper.append(paymentProductCount);
	paymentTotal.append(paymentOrderer);
	paymentTotal.append(paymentOrdererContatiner);
	paymentOrdererContatiner.append(paymentOrdererOrdererWrapper);
	paymentOrdererOrdererWrapper.append(paymentOrdererOrderer);
	paymentOrdererContatiner.append(paymentEmailWrapper);
	paymentEmailWrapper.append(paymentEmail);
	paymentTotal.append(paymentPayment);
	paymentTotal.append(paymentPaymentContainer);
	paymentPaymentContainer.append(paymentPaymentLeft);
	paymentPaymentLeft.append(paymentHow);
	paymentPaymentContainer.append(paymentPaymentRight);
	paymentPaymentRight.append(paymentAccountTransfer);
	paymentPaymentRight.append(paymentEmtpy);
	paymentTotal.append(paymentMoney);
	paymentTotal.append(paymentLastpayContainer);
	paymentLastpayContainer.append(paymentLastAccountWrapper);
	paymentLastAccountWrapper.append(paymentLastAccount);
	paymentLastpayContainer.append(paymentLastDeliveryWrapper);
	paymentLastDeliveryWrapper.append(paymentLastDelivery);
	paymentLastpayContainer.append(paymentLastDiscountWrapper);
	paymentLastpayContainer.append(paymentLastTotalAccountWrapper);
	paymentLastTotalAccountWrapper.append(paymentLastTotalAccount);
	paymentLastpayContainer.append(paymentBtnA);
	paymentBtnA.append(paymentBtn);

	const paymentModal = document.createElement("div");
	const paymentModalBody = document.createElement("div");
	const paymentModalBtn = document.createElement("button");
	const paymentModalBtnMove = document.createElement("button");
	const paymentModalBtnClose = document.createElement("button");

	paymentModal.classList.add("payment1-modal");
	paymentModalBody.classList.add("payment1-modal-body");
	paymentModalBtn.classList.add("payment1-modal-btn");
	paymentModalBtnMove.classList.add("payment1-modal-btn-move");
	paymentModalBtnClose.classList.add("payment1-modal-btn-close");

	paymentModalBody.innerHTML = "잔액이 부족합니다.<br>계좌를 추가해주세요.";
	paymentModalBtn.innerHTML = "나중에 없앨 모달버튼";
	paymentModalBtnClose.innerHTML = "확인";
	paymentModalBtnMove.innerHTML = "마이페이지 이동";

	paymentPage.append(paymentModal);
	paymentModal.append(paymentModalBody);
	paymentModalBody.append(paymentModalBtnClose);
	paymentModalBody.append(paymentModalBtnMove);

	// payment1 Fail Modal
	const paymentFailModal = document.createElement("div");
	const paymentFailModalBody = document.createElement("div");
	const paymentFailModalBtn = document.createElement("button");
	const paymentFailModalBtnClose = document.createElement("button");

	paymentFailModal.classList.add("payment1-fail-modal");
	paymentFailModalBody.classList.add("payment1-fail-modal-body");
	paymentFailModalBtn.classList.add("payment1-fail-modal-btn");
	paymentFailModalBtnClose.classList.add("payment1-fail-modal-btn-close");

	paymentFailModalBody.innerHTML =
		"등록된 계좌가 없거나 계좌를 선택하지 않으셨습니다.<br>계좌를 선택해주세요.<br>혹, 계좌가 없으시다면<br>마이페이지에서 계좌를 추가해주세요";
	paymentFailModalBtn.innerHTML = "마이페이지 이동";
	paymentFailModalBtnClose.innerHTML = "확인";

	paymentPage.append(paymentFailModal);
	paymentFailModal.append(paymentFailModalBody);
	paymentFailModalBody.append(paymentFailModalBtn);
	paymentFailModalBody.append(paymentFailModalBtnClose);
	// /payment1 Fail Modal

	// payment1 Fail Modal JS
	paymentFailModalBtn.addEventListener("click", () => {
		paymentFailModal.style.display = "block";
	});
	paymentFailModalBtnClose.addEventListener("click", () => {
		paymentFailModal.style.display = "none";
	});

	// (payment1 Modal JS...)
	paymentModalBtn.addEventListener("click", () => {
		paymentModal.style.display = "block";
	});
	paymentModalBtnClose.addEventListener("click", () => {
		paymentModal.style.display = "none";
	});
	// (/payment1 Modal)

	//결제버튼!!BTN수정한것
	paymentBtn.innerText = "결제버튼";

	let priceNum = 0;

	getProductInfo(strId);
	getUserInfo();
	getPaymentInfo();

	async function getProductInfo(strId) {
		const productInfo = await request("PRD07", { productId: strId });
		const payment_span_title = document.createElement("span");
		payment_span_title.innerHTML = productInfo.title;
		payment_span_title.style.flexGrow = 1;
		payment_span_title.style.margin = "10px";
		paymentProductInfo.after(payment_span_title);

		const payment_span_price = document.createElement("span");
		payment_span_price.innerHTML = productInfo.price;
		payment_span_price.style.flexGrow = 1;
		payment_span_price.style.margin = "10px";
		paymentProductPrice.after(payment_span_price);
		priceNum = productInfo.price;

		const payment_span_last_price = document.createElement("span");
		payment_span_last_price.innerHTML = productInfo.price;
		payment_span_last_price.style.flexGrow = 1;
		payment_span_last_price.style.margin = "10px";
		paymentLastAccount.after(payment_span_last_price);

		const payment_span_total_price = document.createElement("span");
		payment_span_total_price.innerHTML = productInfo.price;
		payment_span_total_price.style.flexGrow = 1;
		payment_span_total_price.style.margin = "10px";
		paymentLastTotalAccount.after(payment_span_total_price);

		const payment_span_count = document.createElement("span");
		payment_span_count.innerHTML = 1;
		payment_span_count.style.flexGrow = 1;
		payment_span_count.style.margin = "10px";
		paymentProductCount.after(payment_span_count);
	}

	async function getUserInfo() {
		// 로컬스토리지에 정보 가져오기
		//window.localStorage.setItem('displayName', '정집사');
		//window.localStorage.setItem('email', 'test@user.com');
		//window.localStorage.removeItem("displayName")
		//window.localStorage.removeItem("email")

		const userName = window.localStorage.getItem("displayName");
		const userEmail = window.localStorage.getItem("email");

		const payment_span_user = document.createElement("span");
		payment_span_user.innerHTML = userName;
		payment_span_user.style.flexGrow = 1;
		payment_span_user.style.margin = "10px";
		paymentOrdererOrderer.after(payment_span_user);
		const payment_span_email = document.createElement("span");
		payment_span_email.innerHTML = userEmail;
		payment_span_email.style.flexGrow = 1;
		payment_span_email.style.margin = "10px";
		paymentEmail.after(payment_span_email);

		const payment_span_delivery = document.createElement("span");
		payment_span_delivery.innerHTML = "무료";
		payment_span_delivery.style.flexGrow = 1;
		payment_span_delivery.style.margin = "10px";
		paymentLastDelivery.after(payment_span_delivery);
	}

	async function getPaymentInfo() {
		const payInfo = await request("ACC02");
		console.log("payInfo >> ", payInfo);

		let accounts = payInfo.accounts;

		// to-do: 아래는 나중에 주석처리할 것(더미데이터)
		// accounts = BankAccountList;

		if (accounts !== undefined) {
			paymentEmtpy.innerHTML = "";

			if (accounts.length > 0) {
				for (let i = 0; i < accounts.length; i++) {
					const liEl = document.createElement("li");
					const radioEl = document.createElement("input");
					radioEl.type = "radio";
					radioEl.name = "accountSelection";
					radioEl.value = accounts[i].balance;
					radioEl.dataset.acctId = accounts[i].id;
					liEl.appendChild(radioEl);
					const spanEl = document.createElement("span");
					spanEl.innerHTML = `${accounts[i].bankName} ${accounts[i].accountNumber} 잔액:${accounts[i].balance}`;
					liEl.appendChild(spanEl);
					paymentEmtpy.append(liEl);
				}
			}
		} else {
			paymentEmtpy.textContent = "등록된 계좌정보가 없습니다.";
		}
		// accountlist
	}

	//계좌목록 css적용
	paymentEmtpy.setAttribute("style", "list-style:none");

	paymentBtn.addEventListener("click", async () => {
		//은행잔고금액
		const check_input = document.querySelector(
			'input[name="accountSelection"]:checked'
		);

		// 계좌목록 클릭 안했을때 텍스트 출력하기
		if (check_input == null) {
			paymentFailModal.style.display = "block";
		}

		const acctId = check_input.dataset.acctId;

		//은행잔고와 상품금액 비교. payments[]<값 비교
		if (Number(check_input.value) >= priceNum) {
			const params = {
				productId: strId,
				accountId: acctId,
			};
			const res = await request("PRD09", params);
			console.log("purchase>>> ", res);

			if (res) {
				window.location.href = "/paymentDone";
			} else {
				alert("결제 중 오류가 발생했습니다. 다시 시도해주세요.");
			}
		} else {
			paymentModal.style.display = "block";
		}
	});

	//마이페이지 이동 버튼 눌렀을때 마이페이지로 이동
	paymentModalBtnMove.addEventListener("click", () => {
		window.location.href = "/my";
	});
	paymentFailModalBtn.addEventListener("click", () => {
		window.location.href = "/my";
	});

	return paymentPage;
}
