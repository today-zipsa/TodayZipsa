import request from "../../api/common";
const token = JSON.parse(localStorage.getItem("accessToken"));

const Header = document.createElement("header");
const headerWrapper = document.createElement("div");
const mainLogoBtn = document.createElement("a");
const mainLogoBtnImage = document.createElement("img");
const searchBtnWrapper = document.createElement("div");
const searchBar = document.createElement("input");
const searchBtn = document.createElement("img");
const welcomeWord = document.createElement("a");
const loginBtn = document.createElement("a");
const logoutBtn = document.createElement("a");
const word = document.createElement("span");
const nameOfLoginBtn = document.createElement("span");
const nameOfLogoutBtn = document.createElement("span");

Header.className = "my-header";
headerWrapper.className = "my-header-wrapper";
mainLogoBtn.className = "main-logo-btn";
mainLogoBtnImage.className = "main-logo-btn-image";
searchBtnWrapper.className = "search-btn-wrapper";
searchBar.className = "search-bar";
searchBtn.className = "search-btn";
welcomeWord.className = "welcome-word";
word.className = "word";
loginBtn.className = "btn";
logoutBtn.className = "btn";
nameOfLoginBtn.className = "btn-name";
nameOfLogoutBtn.className = "btn-name";

mainLogoBtn.href = "/";
mainLogoBtnImage.src = require("../../asset/global/main-logo.png");
mainLogoBtnImage.alt = "main-logo";
searchBar.type = "text";
searchBar.placeholder = "검색어를 입력해주세요.";
searchBtn.src = require("../../asset/btnImg/search_btn.png");
searchBtn.alt = "search-button";
welcomeWord.setAttribute("data-navigo", "");
welcomeWord.href = getNextUrl();
word.innerText = "반가워요, 집사님!";
loginBtn.setAttribute("data-navigo", "");
loginBtn.href = "/login";
logoutBtn.setAttribute("data-navigo", "");
logoutBtn.href = "/";
nameOfLoginBtn.innerText = "로그인";
nameOfLogoutBtn.innerText = "로그아웃";
!token ? (logoutBtn.style.display = "none") : (loginBtn.style.display = "none");

mainLogoBtn.append(mainLogoBtnImage);
searchBtnWrapper.append(searchBar, searchBtn);
welcomeWord.append(word);
loginBtn.append(nameOfLoginBtn);
logoutBtn.append(nameOfLogoutBtn);
headerWrapper.append(
	mainLogoBtn,
	searchBtnWrapper,
	welcomeWord,
	loginBtn,
	logoutBtn
);
Header.append(headerWrapper);

loginBtn.addEventListener("click", () => {
	loginBtn.style.display = "none";
	logoutBtn.style.display = "inline-block";
});

logoutBtn.addEventListener("click", () => {
	loginBtn.style.display = "inline-block";
	logoutBtn.style.display = "none";
	setLogout();
});

function setLogout() {
	if (token) {
		request("MEB04");
		window.localStorage.clear();
	}
}

function getNextUrl() {
	const id = JSON.parse(localStorage.getItem("id"));
	if (id === "admin@zipsa.com") {
		return "/admin";
	} else {
		return "/my";
	}
}

export default Header;
