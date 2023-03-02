import { request } from "../api/common.js";
import { isUseChecked, isInfoChecked } from "../components/pages/joinPage.js";
/**
 * 가입 양식 입력란: 닉네임, 계정, 비번, 파일
 */

export default async function Join() {
	const displayNameEl = document.querySelector(".display-name");
	const idEl = document.querySelector(".id");
	const requiredBtnEl = document.querySelector(".validator-btn");
	const passwordEl = document.querySelector(".password");
	const passwordCheckEl = document.querySelector(".password-check");
	const uploadImg = document.querySelector(".upload-img");
	const joinBtnEl = document.querySelector(".join-btn");

	// 데이터 관리
	let displayName = "";
	let email = "";
	let password = "";
	let passwordCheck = "";
	let profileImgBase64 = "";

	const params = {
		displayName: displayName,
		email: email,
		password: password,
		profileImgBase64: profileImgBase64,
	};

	idEl.addEventListener("input", (event) => {
		email = event.target.value.trim();
	});

	passwordEl.addEventListener("input", (event) => {
		password = event.target.value.trim();
	});

	displayNameEl.addEventListener("input", (event) => {
		displayName = event.target.value.trim();
	});

	//로그인유무 전역 상태값
	let signup = false;

	// 정규표현식: 이메일 형식으로
	const RegexID =
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	// 정규표현식: 비밀번호 영문 대/소문자, 숫자의 2가지 조합, 8~20자
	const RegexPW = /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{8,}$/;

	/** API : 사용자 목록 조회 */
	async function getUserList() {
		const res = await fetch(
			"https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
			{
				method: "GET",
				headers: params,
				masterkey: true,
				authToken: true,
			}
		);
		const json = await res.json();
		return json;
	}

	// 중복확인 버튼
	requiredBtnEl.addEventListener("click", async () => {
		console.log("중복확인 눌림");
		const wrongID = document.querySelector(".wrong-id");
		if ((signup = true)) {
			signup = true;
			wrongID.innerText = "사용가능한 아이디 입니다 :)";
			wrongID.style.color = "#0c8a4e";
			wrongID.style.display = "flex";
		} else if (!RegexID.test(idEl)) {
			alert("아이디가 양식에 맞지 않습니다 :(");
		} //기존에 아이디가 있는 경우
		// 	signup = false;
		// 	alert("동일한 ID가 이미 사용중입니다!");
		inputCondition();
	});
	// 프로필사진: 업로드 버튼 이벤트
	const inputFileBtn = document.querySelector(".input-file");
	const inputImg = document.querySelector(".upload-img");

	document.querySelector(".upload-btn").addEventListener("click", (e) => {
		inputFileBtn.click();

		console.log("초록색업로드버튼 눌림");
	});

	inputFileBtn.addEventListener("change", (event) => {
		const file = event.target.files[0];
		console.log(file);

		// 파일 사이즈 확인
		if (file.size > 1024 * 1024) {
			alert("업로드 가능한 파일의 최대 용량은 1MB입니다.");
			mb_thumbnailEl.value = "";
		} else {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.addEventListener("load", (e) => {
				params.profileImgBase64 = e.target.result;
				inputImg.src = e.target.result;
				console.log(params);
			});
		}
	});

	// input 유효성 검사
	function inputCondition() {
		const inputName = document.querySelector(".display-name");
		const inputID = document.querySelector(".id");
		const requiredBtnEl = document.querySelector(".validator-btn");
		const inputPW = document.querySelector(".password");
		const inputPWC = document.querySelector(".password-check");
		const wrongName = document.querySelector(".wrong-name");
		const wrongID = document.querySelector(".wrong-id");
		const wrongPW = document.querySelector(".wrong-pw");

		inputName.addEventListener("input", () => {
			if (inputName.value.length < 3) {
				wrongName.innerText = "3글자 이상 작성 해 주세요 :)";
				wrongName.style.color = "#de0404";
				wrongName.style.display = "block";
			} else {
				params.displayName = inputName.value;
				wrongName.style.display = "none";
			}
		});

		inputID.addEventListener("input", (e) => {
			if (!RegexID.test(inputID.value)) {
				wrongID.style.display = "block";
				wrongID.style.color = "#de0404";
				wrongID.innerText = "이메일 양식에 맞춰주세요 :)";
			} else if (inputID.value === "admin@zipsa.com") {
				wrongID.innerText = "어드민양식은 가입이 불가합니다 :(";
			} else {
				params.email = inputID.value;
				wrongID.style.display = "none";
			}
		});

		inputPW.addEventListener("input", () => {
			if (!RegexPW.test(inputPW.value)) {
				wrongPW.innerText =
					"비밀번호를 영어,숫자 조합의\n 8~20자리로 입력 해 주세요 :)";
				wrongPW.style.color = "#de0404";
				wrongPW.style.display = "block";
			} else {
				params.password = inputPW.value;
				wrongPW.style.display = "none";
			}
		});

		inputPWC.addEventListener("input", () => {
			if (inputPW.value === inputPWC.value) {
				wrongPW.style.color = "#0c8a4e";
				wrongPW.innerText = "비밀번호가 일치합니다 :)";
			} else {
				wrongPW.style.color = "#de0404";
				wrongPW.innerText = "비밀번호가 일치하지 않습니다 :(";
			}
			wrongPW.style.display = "block";
		});
	}

	// 회원가입 버튼
	joinBtnEl.addEventListener("click", async () => {
		params.email = idEl.value;
		params.password = passwordEl.value;
		params.displayName = displayNameEl.value;
		console.log("params result>>>>", params);
		if (joinValidator() === true) {
			// 회원가입API 호출
			const res = await request("MEB01", params);
			console.log("회원가입 성공", res);
			if (res.accessToken != null) {
				localStorage.setItem("token", res.accessToken);
				localStorage.setItem("email", res.email);
				localStorage.setItem("displayName", res.displayName);
				localStorage.setItem("profileImg", res.profileImgBase64);
			}
			window.location.href = "/";
		}
	});

	/**
	 * 정규표현식 + 유효성 검사
	 */
	function joinValidator() {
		const Name = document.querySelector(".display-name").value;
		const PW = document.querySelector(".password").value;
		if (Name.length < 3) {
			alert("닉네임을 3글자 이상 입력해주세요 :)");
			return false;
		} else if (!signup) {
			alert("아이디 중복확인을 해주세요 :)");
			return false;
		} else if (isInfoChecked && isUseChecked) {
			alert("이용 약관을 모두 체크해주세요 :)");
			return false;
		} else if (!RegexPW.test(PW)) {
			alert("비밀번호를 영어,숫자 조합의\n 8~20자리로 입력 해 주세요 :)");
			return false;
		}
		return true;
	}
}
