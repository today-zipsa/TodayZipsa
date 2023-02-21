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

profileImage.src = require("../../asset/myImg/profile.png");
btnImg.src = require("../../asset/btnImg/add_btn.png");
profileImage.alt = "profile-image";
btnImg.alt = "add-btn-image";
accountsContainerTitle.innerHTML = "계좌관리";
btnTitle.innerHTML = "계좌연결";

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
MyPage.append(profileContainer, infoContainer);

export default MyPage;
