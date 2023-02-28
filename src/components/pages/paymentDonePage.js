function PaymentDonePage() {
	const paymentDoneFinishPage = document.createElement("div");
	const paymentDoneOrderDone = document.createElement("div");
	const paymentDoneOrderText1 = document.createElement("div");
	const paymentDoneOrderText2 = document.createElement("div");
	const paymentDoneDelivery = document.createElement("div");
	const paymentDoneDeliveryText = document.createElement("div");
	const paymentDoneBtn = document.createElement("div");
	const paymentDoneContinueShop = document.createElement("button");
	const paymentDonePurchaseHistory = document.createElement("button");

	paymentDoneFinishPage.classList.add("paymentDone-finish-page");
	paymentDoneOrderDone.classList.add("paymentDone-order-done");
	paymentDoneOrderText1.classList.add("paymentDone-order-text1");
	paymentDoneOrderText2.classList.add("paymentDone-order-text2");
	paymentDoneDelivery.classList.add("paymentDone-delivery");
	paymentDoneDeliveryText.classList.add("paymentDone-delivery-text");
	paymentDoneBtn.classList.add("paymentDone-btn");
	paymentDoneContinueShop.classList.add("paymentDone-continue-shop");
	paymentDonePurchaseHistory.classList.add("paymentDone-purchase-history");

	paymentDoneOrderText1.innerHTML = "<h1>결제가 완료되었습니다!</h1>";
	paymentDoneOrderText2.textContent =
		"빠르게 가져다 드릴테니 조금만 기다려주세요!";
	paymentDoneDelivery.textContent = "택배사 사정에 따라 2~3일 걸릴 예정입니다.";
	paymentDoneDeliveryText.textContent =
		"도서, 산간지방은 기존 배송일에 2~3일 추가됩니다.";
	paymentDoneContinueShop.innerHTML = "계속 쇼핑하기";
	paymentDonePurchaseHistory.innerHTML = "구매내역 보기";

	document.body.append(paymentDoneFinishPage);
	paymentDoneFinishPage.append(paymentDoneOrderDone);
	paymentDoneOrderDone.append(paymentDoneOrderText1);
	paymentDoneOrderDone.append(paymentDoneOrderText2);
	paymentDoneFinishPage.append(paymentDoneDelivery);
	paymentDoneDelivery.append(paymentDoneDeliveryText);
	paymentDoneFinishPage.append(paymentDoneBtn);
	paymentDoneBtn.append(paymentDoneContinueShop);
	paymentDoneBtn.append(paymentDonePurchaseHistory);

	return paymentDoneFinishPage;
}
export default PaymentDonePage;
