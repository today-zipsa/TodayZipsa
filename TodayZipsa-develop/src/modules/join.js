import { request } from "../api/common.js";

const idEl = document.querySelector(".id");
const passwordEl = document.querySelector(".password");
const displayNameEl = document.querySelector(".display-name");
const inputFileEl = document.querySelector('input[type="file"]');
const submitEl = document.querySelector(".signup");
const loginEl = document.querySelector(".login");
const authorizationEl = document.querySelector(".authorization");

let email = "";
let password = "";
let displayName = "";
let profileImgBase64 = "";

idEl.addEventListener("input", event => {
	email = idEl.value.trim();
});
passwordEl.addEventListener("input", event => {
	password = passwordEl.value.trim();
});
displayNameEl.addEventListener("input", event => {
	displayName = displayNameEl.value.trim();
});
inputFileEl.addEventListener("change", event => {
	const file = inputFileEl.files[0];
	console.log(file);
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.addEventListener("load", e => {
		console.log(e.target.result);
		profileImgBase64 = e.target.result;
	});
});

// 회원가입
submitEl.addEventListener("click", async () => {
	// 회원가입 param 담기
	const params = {
		email: email,
		password: password,
		displayName: displayName,
		profileImgBase64: profileImgBase64,
	};
	// 회원가입API 호출
	const res = await request("MEB01", params);
	console.log("회원가입 성공", res);

	// 토큰 저장
	setAccessToken(res.accessToken);
});

// 회원 로그인
loginEl.addEventListener("click", async () => {
	// 로그인 param 담기
	const params = {
		email: email,
		password: password,
	};
	//회원로그인 API 호출
	const res = await request("MEB02", params);
	console.log("로그인 성공", res);

	// 토큰 저장
	setAccessToken(res.accessToken);
});

// 회원 인증
authorizationEl.addEventListener("click", async () => {
	//회원인증 API 호출
	const res = await request("MEB03");
});

// 토큰 세팅
function setAccessToken(accessToken) {
	//localStorage 초기화
	if (localStorage.length > 0) localStorage.removeItem("accessToken");

	//로컬스토리지에 토큰 저장
	if (accessToken !== null && accessToken !== "") {
		window.localStorage.setItem("accessToken", accessToken);
	}
}
