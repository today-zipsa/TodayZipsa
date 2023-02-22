const Header = document.createElement("header");
const headerWrapper = document.createElement("div");
const mainLogoBtn = document.createElement("a");
const mainLogoBtnImage = document.createElement("img");
const searchBtnWrapper = document.createElement("div");
const searchBar = document.createElement("input");
const searchBtn = document.createElement("img");
const welcomeWord = document.createElement("span");
const logoutBtn = document.createElement("span");

Header.className = "my-header";
headerWrapper.className = "my-header-wrapper";
mainLogoBtn.className = "main-logo-btn";
mainLogoBtnImage.className = "main-logo-btn-image";
searchBtnWrapper.className = "search-btn-wrapper";
searchBar.className = "search-bar";
searchBtn.className = "search-btn";
welcomeWord.className = "welcome-word";
logoutBtn.className = "logout";

mainLogoBtn.href = "/";
mainLogoBtnImage.src = require("../../asset/global/main-logo.png");
mainLogoBtnImage.alt = "main-logo";
searchBar.type = "text";
searchBar.placeholder = "검색어를 입력해주세요.";
searchBtn.src = require("../../asset/btnImg/search_btn.png");
searchBtn.alt = "search-button";
welcomeWord.innerText = "반가워요, 집사님!";
logoutBtn.innerText = "로그아웃";

mainLogoBtn.append(mainLogoBtnImage);
searchBtnWrapper.append(searchBar, searchBtn);
headerWrapper.append(mainLogoBtn, searchBtnWrapper, welcomeWord, logoutBtn);
Header.append(headerWrapper);

export default Header;
