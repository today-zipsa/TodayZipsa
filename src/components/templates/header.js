import request from "../../api/common";

const Header = document.createElement("header");
const headerWrapper = document.createElement("div");
const mainLogoBtn = document.createElement("a");
const mainLogoBtnImage = document.createElement("img");
const searchBtnWrapper = document.createElement("div");
const searchBar = document.createElement("input");
const searchBtn = document.createElement("img");
const welcomeWord = document.createElement("span");
const btn = document.createElement("a");
const nameOfBtn = document.createElement("span");

Header.className = "my-header";
headerWrapper.className = "my-header-wrapper";
mainLogoBtn.className = "main-logo-btn";
mainLogoBtnImage.className = "main-logo-btn-image";
searchBtnWrapper.className = "search-btn-wrapper";
searchBar.className = "search-bar";
searchBtn.className = "search-btn";
welcomeWord.className = "welcome-word";
btn.className = "btn";
nameOfBtn.className = "btn-name";

mainLogoBtn.href = "/";
mainLogoBtnImage.src = require("../../asset/global/main-logo.png");
mainLogoBtnImage.alt = "main-logo";
searchBar.type = "text";
searchBar.placeholder = "검색어를 입력해주세요.";
searchBtn.src = require("../../asset/btnImg/search_btn.png");
searchBtn.alt = "search-button";
welcomeWord.innerText = "반가워요, 집사님!";
nameOfBtn.innerText = "로그아웃";

mainLogoBtn.append(mainLogoBtnImage);
searchBtnWrapper.append(searchBar, searchBtn);
btn.append(nameOfBtn);
headerWrapper.append(mainLogoBtn, searchBtnWrapper, welcomeWord, btn);
Header.append(headerWrapper);

btn.addEventListener("click", () => {
	if (nameOfBtn.innerText === "로그인") {
		nameOfBtn.innerText = "로그아웃";
		welcomeWord.innerText = "반가워요, 집사님!";
	} else {
		nameOfBtn.innerText = "로그인";
		welcomeWord.innerText = "";
		setLogout();
	}
});

export default Header;
// localStorage.setItem("accessToken", 12345); 로컬통신확인용 임의로 집어넣음
function setLogout() {
	const token = JSON.parse(localStorage.getItem("accessToken"));
	if (token) {
		// console.log("로컬스토리지 토큰 존재여부 체크 완료!");
		request("MEB04");
	}
}
