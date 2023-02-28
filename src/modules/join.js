import { request } from "../api/common.js";
// import Navigo from "navigo";
// import homeMainPage from "../pages/home";
// const authorizationEl = document.querySelector(".authorization");
// const loginEl = document.querySelector(".login");

/**
 * 가입 양식 입력란: 닉네임, 계정, 비번, 파일
 */
const displayNameEl = JoinPage.querySelector(".display-name");
const idEl = JoinPage.querySelector(".id");
const passwordEl = JoinPage.querySelector(".password");
const passwordCheckEl = JoinPage.querySelector(".password-check");
const inputFileEl = JoinPage.querySelector(".upload-name");
const joinBtnEl = JoinPage.querySelector(".join-btn");

	// 데이터 관리
	let displayName = "";
	let email = "";
	let password = "";
	let passwordCheck = "";
	let profileImgBase64 = "";

	displayNameEl.addEventListener("input", event => {
		displayName = event.target.value.trim();
		// displayName = displayNameEl.value.trim();
	});

	idEl.addEventListener("input", event => {
		email = event.target.value.trim();
		// email = idEl.value.trim();
	});

	passwordEl.addEventListener("input", event => {
		password = event.target.value.trim();
		// password = passwordEl.value.trim();
	});

	passwordCheckEl.addEventListener("input", event => {
		passwordCheck = event.target.value.trim();
		// passwordCheck = passwordCheckEl.value.trim();
	});

	inputFileEl.addEventListener("change", event => {
		const file = event.target.files[0];
		// const file = inputFileEl.files[0];
		console.log(file);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.addEventListener("load", e => {
			console.log(e.target.result);
			profileImgBase64 = e.target.result;
		});
	});

	// const router = new Navigo("/");

	// 회원가입;
	joinBtnEl.addEventListener("click", async () => {
		// 회원가입 param 담기
		const params = {
			displayName: displayName,
			email: email,
			password: password,
			profileImgBase64: profileImgBase64,
		};
		// 회원가입API 호출
		const res = await request("MEB01", params);
		console.log("회원가입 성공", res);

		// 토큰 저장
		setAccessToken(res.accessToken);
		// router.on({ "/": () => homeMainPage });
		console.log("눌려?");
	});
}
