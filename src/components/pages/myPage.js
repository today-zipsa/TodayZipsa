import ModalTwo from "../templates/modalTwo";
import { request } from "../../api/common";
import profileImg from "../../asset/myImg/profile.png";
import addBtnImg from "../../asset/btnImg/add_btn.png";
import deleteBtnImg from "../../asset/btnImg/close_btn.png";

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
	btnImg.src = require("../../asset/btnImg/add_btn.png");
	profileImage.alt = "profile-image";
	btnImg.alt = "add-btn-image";
	accountsContainerTitle.innerHTML = "계좌관리";
	btnTitle.innerHTML = "계좌연결";

	profileContainer.addEventListener("click", (e) => {
		const modalContainer = document.createElement("section");
		const nameInputBox = document.createElement("box");
		const profileImgInputBox = document.createElement("box");
		const profileImgInputTitle = document.createElement("span");
		const profileImg = document.createElement("img");
		const profileUploadBtn = document.createElement("div");
		const shadowUploadBtn = document.createElement("input");
		const addBtn = document.createElement("div");
		const nowPasswordInputBox = document.createElement("box");
		const newPasswordInputBox = document.createElement("box");
		const modalBtnBox = document.createElement("box");
		const completeBtn = document.createElement("div");
		const cancelBtn = document.createElement("div");
		addBtn.classList.add("add-btn");
		const editingInputTemplate = [
			nameInputBox,
			nowPasswordInputBox,
			newPasswordInputBox,
		];
		const inputBarInfo = [
			{ innerText: "닉네임", placeholder: "별명(20자이내)" },
			{ innerText: "현재비밀번호", placeholder: "현재 비밀번호" },
			{ innerText: "신규비밀번호", placeholder: "신규 비밀번호" },
		];
		const formData = {
			displayName: "",
			profileImgBase64: "",
			oldPassword: "",
			newPassword: "",
		};

		modalContainer.classList.add("profile-edit-modal");
		profileImgInputTitle.classList.add("input-bar-name");
		profileImgInputBox.classList.add("profile-image-input-box");
		profileImg.classList.add("profile-image");
		profileUploadBtn.classList.add("profile-upload-btn");
		nameInputBox.classList.add("input-box");
		nowPasswordInputBox.classList.add("input-box");
		newPasswordInputBox.classList.add("input-box");
		modalBtnBox.classList.add("modal-btn-box");
		completeBtn.classList.add("complete-btn");
		cancelBtn.classList.add("cancel-btn");

		completeBtn.innerText = "확인";
		cancelBtn.innerText = "취소";
		profileUploadBtn.innerText = "업로드";
		profileImgInputTitle.innerText = "프로필";
		shadowUploadBtn.type = "file";
		shadowUploadBtn.name = "file";
		shadowUploadBtn.style.display = "none";

		profileImgInputBox.append(profileImg, profileUploadBtn, shadowUploadBtn);
		modalContainer.append(profileImgInputTitle, profileImgInputBox);
		editingInputTemplate.forEach((userInfoBox, idx) => {
			const inputBar = document.createElement("input");
			const inputBarName = document.createElement("span");

			inputBar.classList.add("input-bar");
			inputBarName.classList.add("input-bar-name");

			inputBar.type = "text";
			inputBarName.innerText = inputBarInfo[idx].innerText;
			inputBar.placeholder = inputBarInfo[idx].placeholder;

			modalBtnBox.append(completeBtn, cancelBtn);
			modalContainer.append(inputBarName, inputBar, modalBtnBox);
		});

		profileUploadBtn.addEventListener("click", () => {
			shadowUploadBtn.click();
		});

		shadowUploadBtn.addEventListener("change", (e) => {
			const file = e.target.files[0];

			if (file.size > 1024 * 1024) {
				alert("업로드 가능한 파일의 최대 용량은 1MB입니다.");
			} else {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.addEventListener("load", (e) => {
					const newImgURL = e.target.result;
					formData.profileImgBase64 = newImgURL;
					profileImg.src = newImgURL;
				});
			}
		});

		completeBtn.addEventListener("click", async () => {
			const userName = nameInputBox.innerText;
			const presentPassword = nowPasswordInputBox.innerText;
			const newPassword = newPasswordInputBox.innerText;

			formData.displayName = userName;
			formData.oldPassword = presentPassword;
			formData.newPassword = newPassword;

			const res = await request("MEB05", formData);
			localStorage.setItem("email", res.email);
			localStorage.setItem("displayName", res.displayName);
			localStorage.setItem("profileImg", res.profileImg);

			alert("프로필 수정 완료 되었습니다!");

			document.querySelector(".modal-two-template").innerHTML = "";
			document.querySelector(".modal-two-template").style.backgroundImage = "";
			ModalTwo.classList.add("--hide");
		});

		cancelBtn.addEventListener("click", () => {
			document.querySelector(".modal-two-template").innerHTML = "";
			document.querySelector(".modal-two-template").style.backgroundImage = "";
			ModalTwo.classList.add("--hide");
		});

		document.querySelector(".modal-two-template").append(modalContainer);
		document.querySelector(".modal-two").classList.remove("--hide");
	});
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

	renderTest(MyPage);

	return MyPage;

	function setUserInfo(params) {
		// 사용자 정보 수정 API로직
		try {
			if (localStorage.getItem("accessToken")) {
			}
		} catch (error) {
			window.alert(error);
		}
	}
}

async function renderTest(page) {
	const [profileContainer, infoContainer, profileEditmodal] = Array.from(
		page.children
	);
	const paymentsInfo = await request("PRD12");
	const firstDateToPay = paymentsInfo[0].timePaid
		.slice(0, 10)
		.split("-")
		.join(".");
	const lastDateToPay = paymentsInfo[paymentsInfo.length - 2].timePaid
		.slice(0, 10)
		.split("-")
		.join(".");

	const profileImgSrc =
		localStorage.getItem("profileImg") !== "undefined" &&
		localStorage.getItem("profileImg") !== null
			? localStorage.getItem("profileImg")
			: profileImg;

	profileContainer.innerHTML = `
				<box class="profile-box">
					<box class="welcome-word-box">
						<img class="profile-image" src="${profileImgSrc}" alt="profile-image">
						<span class="profile-words1">안녕하세요, 이지영님</span>
					</box>
					<span class="profile-words2">${firstDateToPay} ~ ${lastDateToPay} 동안 구매해주신 내역이에요.</span>
				</box>
			`;

	paymentsList();
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
			return "/my";
		default:
			return "/my";
	}
}

export function getKRW(digit) {
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

async function paymentsList() {
	const paymentsInfo = await request("PRD12");
	const paymentsListItems = paymentsInfo.map((payment) => {
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
		deleteBtn.dataset.id = payment.product.productId;
		btnPayConfirmed.innerText = "구매확정";
		btnPayCanceled.innerText = "주문취소";

		deleteBtn.addEventListener("click", async (e) => {
			await request("PRD10", {
				detailId: e.target.dataset.id,
			});
			alert("서비스 준비중입니다.");
		});

		btnPayCanceled.addEventListener("click", () => {
			alert("서비스 준비중입니다.");
		});

		btnPayConfirmed.addEventListener("click", () => {
			alert("서비스 준비중입니다.");
		});

		detailInfoBtn.addEventListener("click", () => {
			alert("서비스 준비중입니다.");
		});

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

	document
		.querySelector(".payments-container")
		.append(...paymentsListItems.slice(0, 4));
}
