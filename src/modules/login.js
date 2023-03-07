import { request } from "../api/common.js";

/**
 * 로그인 입력란: 계정, 비번
 */

export default async function Login() {
	const loginID = document.querySelector(".input-id");
	const loginPW = document.querySelector(".input-pw");
	const findIdEl = document.querySelector(".find-id");
	const findPwEl = document.querySelector(".find-pw");
	const loginBtnEl = document.querySelector(".login-btn");
	const joinBtnEl = document.querySelector(".join-btn");

	// 데이터 관리
	let email = "";
	let password = "";

	const params = {
		email: email,
		password: password,
	};

	loginID.addEventListener("input", (event) => {
		email = event.target.value.trim();
	});

	loginPW.addEventListener("input", (event) => {
		password = event.target.value.trim();
	});

	// 정규표현식: 이메일 형식으로
	const RegexID =
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	// 정규표현식: 비밀번호 영문 대/소문자, 숫자의 2가지 조합, 8~20자
	const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}$/;

	//아이디 찾기
	findIdEl.addEventListener("click", () => {
		window.location.href = "/";
	});
	//비밀번호 찾기
	findPwEl.addEventListener("click", () => {
		window.location.href = "/";
	});

	//input 유효성검사
	function loginValidator() {
		let isValid = true;
		const inputID = document.querySelector(".input-id");
		const inputPW = document.querySelector(".input-pw");

		if (!RegexID.test(inputID.value)) {
			alert("가입하신 이메일주소가 아닙니다 :(");
			isValid = false;
		}

		if (!RegexPW.test(inputPW.value)) {
			alert("가입하신 비밀번호가 아닙니다 :(");
			isValid = false;
		}

		return isValid;
	}

	//로그인 버튼
	loginBtnEl.addEventListener("click", async () => {
		if (loginValidator()) {
			params.email = loginID.value;
			params.password = loginPW.value;

			//회원로그인 API 호출
			const res = await request("MEB02", params);
			console.log("로그인 성공", res);
			if (res === "유효한 사용자가 아닙니다.") {
				alert(res);
			}
			if (res.accessToken !== null) {
				submitLocalStorage(res);
				window.location.href = "/";
			}
		}
	});

	joinBtnEl.addEventListener("click", () => {
		window.location.href = "/join";
	});

	// 토큰 세팅
	function submitLocalStorage(res) {
		//localStorage 초기화
		window.localStorage.clear();
		localStorage.setItem("accessToken", res.accessToken);
		localStorage.setItem("email", res.user.email);
		localStorage.setItem("displayName", res.user.displayName);
		localStorage.setItem("profileImg", res.user.profileImg);
	}
}
