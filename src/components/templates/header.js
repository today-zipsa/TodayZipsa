import { request } from "../../api/common";

let token = localStorage.getItem("accessToken");
let inputText = "";
let isClickTwice = false;

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
welcomeWord.href = token ? getNextUrl() : "/";
word.innerText = "반가워요, 집사님!";
loginBtn.setAttribute("data-navigo", "");
loginBtn.href = "/login";
logoutBtn.setAttribute("data-navigo", "");
logoutBtn.href = "/";
nameOfLoginBtn.innerText = "로그인";
nameOfLogoutBtn.innerText = "로그아웃";
if (token === null) {
	logoutBtn.style.display = "none";
	welcomeWord.style.display = "none";
} else {
	loginBtn.style.display = "none";
}

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
	if (token) {
		loginBtn.style.display = "none";
		welcomeWord.style.display = "inline";
	}
});

logoutBtn.addEventListener("click", () => {
	logoutBtn.style.display = "none";
	welcomeWord.style.display = "none";
	loginBtn.style.display = "inline";
	setLogout();
});

searchBar.addEventListener("input", () => {
	inputText = searchBar.value;
});

searchBar.addEventListener("keydown", (event) => {
	if (event.key === "Enter" && !event.isComposing) {
		searchBtn.click();
	}
});

searchBtn.addEventListener("click", async () => {
	if (inputText === "") {
		alert("검색어를 입력하세요.");
		return;
	}
	if (isClickTwice) return;
	isClickTwice = true;

	window.location = `/search/${inputText}`;

	//init
	isClickTwice = false;
	searchBar.value = "";
	inputText = "";
});

function setLogout() {
	if (token) {
		request("MEB04");
		window.localStorage.clear();
		token = "";
	}
}

function getNextUrl() {
	const id = localStorage.getItem("email");
	if (id === "admin@zipsa.com") {
		return "/admin";
	} else {
		return "/my";
	}
}

export default Header;
