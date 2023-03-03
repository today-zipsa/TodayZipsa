const Footer = document.createElement("footer");
const fTop = document.createElement("div");
fTop.className = "footerWrapper--top";

const fInfo = document.createElement("div");
fInfo.className = "footer--info";
const fInfoH1 = document.createElement("h1");
fInfoH1.innerText = "오늘의집사";
const fInfoTitle = document.createElement("label");
fInfoTitle.className = "title";
fInfoTitle.innerText = "찾아오시는 길";
const fInfoContent = document.createElement("label");
fInfoContent.className = "content";
fInfoContent.innerText = "서울 특별시 강남구 공주로 17길 NW1건물 8JR층";
//a
const fCatagories = document.createElement("div");
fCatagories.className = "footer--catagories";
const fCatagoriesTitle = document.createElement("label");
fCatagoriesTitle.className = "title";
fCatagoriesTitle.innerText = "카테고리";
const fCatagoriesHotel = document.createElement("label");
fCatagoriesHotel.className = "content";
fCatagoriesHotel.innerText = "호텔";
const fCatagoriesRent = document.createElement("label");
fCatagoriesRent.className = "content";
fCatagoriesRent.innerText = "카렌트";
const fCatagoriesSitter = document.createElement("label");
fCatagoriesSitter.className = "content";
fCatagoriesSitter.innerText = "펫시터";
const fCatagoriesSnack = document.createElement("label");
fCatagoriesSnack.className = "content";
fCatagoriesSnack.innerText = "펫간식";

const fCustomerCare = document.createElement("div");
fCustomerCare.className = "footer--customerCare";
const fCustomerCareTitle = document.createElement("label");
fCustomerCareTitle.className = "title";
fCustomerCareTitle.innerText = "고객페이지";
const fCustomerCareMyPage = document.createElement("label");
fCustomerCareMyPage.className = "content";
fCustomerCareMyPage.innerText = "마이페이지"; // 로그인o: 마이 페이지로/ x: 로그인페이지
const fCustomerCareOrderList = document.createElement("label");
fCustomerCareOrderList.className = "content";
fCustomerCareOrderList.innerText = "주문내역"; // 로그인o: 마이 페이지로/ x: 로그인페이지

const fPages = document.createElement("div");
fPages.className = "footer--pages";
const fPagesTitle = document.createElement("label");
fPagesTitle.className = "title";
fPagesTitle.innerText = "비즈니스";
const fPagesIntro = document.createElement("label");
fPagesIntro.className = "content";
fPagesIntro.innerText = "오늘의집사 소개";
const fPagesColabo = document.createElement("label");
fPagesColabo.className = "content";
fPagesColabo.innerText = "오늘의집사와 협업하기";

const fBottom = document.createElement("div");
fBottom.className = "footerWrapper--bottom";
const fBCopyright = document.createElement("div");
fBCopyright.className = "copyright";
fBCopyright.innerText = "©TodayZipsa - All Rights Reserved";

const fBWrapper = document.createElement("div");
fBWrapper.className = "social-wrapper";

import facebook from "../../asset/facebook.svg";
import instagram from "../../asset/instagram.svg";
import twitter from "../../asset/twitter.svg";

const fBFacebook = document.createElement("img");
fBFacebook.setAttribute("src", `${facebook}`);
fBFacebook.setAttribute("alt", "facebook");
const fBInstagram = document.createElement("img");
fBInstagram.setAttribute("src", `${instagram}`);
fBInstagram.setAttribute("alt", "instagram");
const fBTwitter = document.createElement("img");
fBTwitter.setAttribute("src", `${twitter}`);
fBTwitter.setAttribute("alt", "twitter");

fInfo.append(fInfoH1, fInfoTitle, fInfoContent);
fCatagories.append(
  fCatagoriesTitle,
  fCatagoriesHotel,
  fCatagoriesRent,
  fCatagoriesSitter,
  fCatagoriesSnack
);
fCustomerCare.append(
  fCustomerCareTitle,
  fCustomerCareMyPage,
  fCustomerCareOrderList
);
fPages.append(fPagesTitle, fPagesIntro, fPagesColabo);
fTop.append(fInfo, fCatagories, fCustomerCare, fPages);

fBWrapper.append(fBFacebook, fBInstagram, fBTwitter);
fBottom.append(fBCopyright, fBWrapper);

Footer.append(fTop, fBottom);

export default Footer;
