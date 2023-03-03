import { accountsList } from "../components/pages/myPage";
import { request } from "../api/common";
export default function My() {
	const app = document.querySelector("#app");
	const addAccountBtn = document.querySelector(".btn-img");
	const ModalTemplate = document.querySelector(".modal-two");
	const ModalContents = document.querySelector("modal-two-template");

	addAccountBtn.addEventListener("click", showAddAccountModal);

	function showAddAccountModal() {
		setAddAccountModal();
		ModalTemplate.classList.remove("--hide");
	}

	function closeAddAccountModal() {
		ModalTemplate.classList.add("--hide");
		ModalTemplate.querySelector(".modal-template").innerHTML = "";
	}

	// 계좌목록 추가해주는 함수 - 인수는 해당 함수의 파일명
	function setAddAccountModal() {
		const bankList = [
			[0, "국민은행", "kb_bank"],
			[1, "신한은행", "sh_bank"],
			[2, "우리은행", "woori_bank"],
			[3, "하나은행", "hana_bank"],
			[4, "케이뱅크", "k_bank"],
			[5, "카카오뱅크", "kakao_bank"],
			[6, "NH농협은행", "nh_bank"],
		];
		const availableBankInfo = request("ACC01");
		console.log(availableBankInfo);

		const banksBox = document.createElement("div");
		const bankImg = document.createElement("img");
		const bankSelectedBar = document.createElement("select");
		const accountNumberBlock = document.createElement("div");

		const cardName = document.createElement("span");
		const icTagBtn = document.createElement("img");
		const myAccountNumsLength = 0; //

		banksBox.classList.add("banks-box");

		availableBankInfo.forEach((bankInfo, bankNum) => {
			if (!bankInfo.disabled) {
				const option = document.createElement("option");
				option.value = bankNum;
				option.innerText = bankInfo.name;
				// option.dataset.digits = bankInfo.digits.join("");

				option.addEventListener("click", () => {
					//계좌입력 창 리렌더링해주는 함수 실행시켜야됨
					bankName = bankList[option.value][2];
					bankImg.src = require(`../../asset/bankImg/${bankName}.png`);
					accountInputBox.innerHTML = "";
					option.digits.split("").forEach((digit) => {
						const accountOption = document.createElement("option");
						accountOption.classList.add("account-option");
						accountOption.maxLength = digit;
						bankSelectedBar.append(accountOption);
						setAccountNumberBlockCnt(bankInfo.digits);
					});
				});
				bankSelectedBar.append(option);
			}
		});

		const bankName = bankList[bankSelectedBar[0].value][2];
		bankImg.src = require(`../../asset/bankImg/${bankName}.png`);

		function setAccountNumberBlockCnt(accountBlockCntArray) {
			accountNumberBlock.innerHTML = "";
			accountBlockCntArray.forEach((count) => {});
		}
	}
}
