import { util } from "/src/api/util.js";

const homePage = util.createEl("div", { class: "home-page" });

/**
 * 메인 - 카테고리 메뉴
 */
const homeHeaderEl = util.createEl("div", { class: "home-header" });
const homeMenusEl = util.createEl("div", { class: "home-top-menus" });
const homeNavDivEl = util.createEl("div", { class: "home-top-div" });
const homeNavEl = util.createEl("nav", { class: "home-top-nav" });

const homeEl = util.createEl("a", { class: "home-link" }, { href: "/" });
const homeDivEl = util.createEl("div");
const homePEl = util.createEl("p", { textContent: "홈" });
homeDivEl.append(homePEl);
homeEl.append(homeDivEl);

const hotelEl = util.createEl(
  "a",
  { class: "home-category" },
  { href: "/hotel" }
);
const hotelDivEl = util.createEl("div");
const hotelPEl = util.createEl("p", { textContent: "호텔" });
hotelDivEl.append(hotelPEl);
hotelEl.append(hotelDivEl);

const rentalEl = util.createEl(
  "a",
  { class: "home-category" },
  { href: "/rental" }
);
const rentalDivEl = util.createEl("div");
const rentalPEl = util.createEl("p", { textContent: "렌트카" });
rentalDivEl.append(rentalPEl);
rentalEl.append(rentalDivEl);

const sitterEl = util.createEl(
  "a",
  { class: "home-category" },
  { href: "/sitter" }
);
const sitterDivEl = util.createEl("div");
const sitterPEl = util.createEl("p", { textContent: "펫시터" });
sitterDivEl.append(sitterPEl);
sitterEl.append(sitterDivEl);

const spaEl = util.createEl("a", { class: "home-category" }, { href: "/spa" });
const spaDivEl = util.createEl("div");
const spaPEl = util.createEl("p", { textContent: "스파" });
spaDivEl.append(spaPEl);
spaEl.append(spaDivEl);

homeNavEl.append(homeEl, hotelEl, rentalEl, sitterEl, spaEl);
homeNavDivEl.append(homeNavEl);
homeMenusEl.append(homeNavDivEl);
homeHeaderEl.append(homeMenusEl);

/**
 * 메인 - 상품 노출
 * 카테고리별 4개 상품 노출(총4개 라인)
 */
const homeMainEl = util.createEl("div", { class: "home-main" });
const mainLayoutEl = util.createEl("div", { class: "main-layout" });
const mainLayoutDiv = util.createEl("div", { class: "main-layout-div" });

// 호텔 상품 노출
const hotelItemsEl = util.createEl("div", { class: "home-items-list" });
// 호텔 상품 Intro
const hotelIntroEl = util.createEl("div", { class: "home-items-intro" });
const hotelTitleEl = util.createEl("div", { class: "intro-title" });
const hotelTitleDiv = util.createEl("div");
const hotelTitleStr = util.createEl("strong", {
  textContent: "집처럼 편안한 집사와 반려묘의 쉼터 💕",
});
hotelTitleDiv.append(hotelTitleStr);
hotelTitleEl.append(hotelTitleDiv);
// 호텔 상품 더보기
const hotelShowMoreDiv = util.createEl("div", { class: "show-more" });
const hotelShowMoreBtn = util.createEl(
  "button",
  { textContent: "더보기" },
  { class: "hotel-show-more" }
);
hotelShowMoreDiv.append(hotelShowMoreBtn);
// 호텔 상품 라인
const hotelItemsLineEl = util.createEl("div", { class: "home-items-line" });
hotelItemsLineEl.classList.add("hotel-items");
// 호텔 append
hotelIntroEl.append(hotelTitleEl, hotelShowMoreDiv);
hotelItemsEl.append(hotelIntroEl, hotelItemsLineEl);

// 렌트카 상품 노출
const rentalItemsEl = util.createEl("div", { class: "home-items-list" });
// 렌트카 상품 Intro
const rentalIntroEl = util.createEl("div", { class: "home-items-intro" });
const rentalTitleEl = util.createEl("div", { class: "intro-title" });
const rentalTitleDiv = util.createEl("div");
const rentalTitleStr = util.createEl("strong", {
  textContent: "🙌 부르면 언제든지 달려오는 펫택시! 🏅",
});
rentalTitleDiv.append(rentalTitleStr);
rentalTitleEl.append(rentalTitleDiv);
// 렌트카 상품 더보기
const rentalShowMoreDiv = util.createEl("div", { class: "show-more" });
const rentalShowMoreBtn = util.createEl(
  "button",
  { textContent: "더보기" },
  { class: "rental-show-more" }
);
rentalShowMoreDiv.append(rentalShowMoreBtn);
// 렌트카 상품 라인
const rentalItemsLineEl = util.createEl("div", { class: "home-items-line" });
rentalItemsLineEl.classList.add("rental-items");
// 렌트카 append
rentalIntroEl.append(rentalTitleEl, rentalShowMoreDiv);
rentalItemsEl.append(rentalIntroEl, rentalItemsLineEl);

// 펫시터 상품 노출
const sitterItemsEl = util.createEl("div", { class: "home-items-list" });
// 펫시터 상품 Intro
const sitterIntroEl = util.createEl("div", { class: "home-items-intro" });
const sitterTitleEl = util.createEl("div", { class: "intro-title" });
const sitterTitleDiv = util.createEl("div");
const sitterTitleStr = util.createEl("strong", {
  textContent: "믿고 맡기는 전문 펫시터 서비스! 🙋‍♀️",
});
sitterTitleDiv.append(sitterTitleStr);
sitterTitleEl.append(sitterTitleDiv);
// 펫시터 상품 더보기
const sitterShowMoreDiv = util.createEl("div", { class: "show-more" });
const sitterShowMoreBtn = util.createEl(
  "button",
  { textContent: "더보기" },
  { class: "sitter-show-more" }
);
sitterShowMoreDiv.append(sitterShowMoreBtn);
// 펫시터 상품 라인
const sitterItemsLineEl = util.createEl("div", { class: "home-items-line" });
sitterItemsLineEl.classList.add("sitter-items");
// 펫시터 append
sitterIntroEl.append(sitterTitleEl, sitterShowMoreDiv);
sitterItemsEl.append(sitterIntroEl, sitterItemsLineEl);

// 스파 상품 노출
const spaItemsEl = util.createEl("div", { class: "home-items-list" });
// 스파 상품 Intro
const spaIntroEl = util.createEl("div", { class: "home-items-intro" });
const spaTitleEl = util.createEl("div", { class: "intro-title" });
const spaTitleDiv = util.createEl("div");
const spaTitleStr = util.createEl("strong", {
  textContent: "반려묘 전문 집사로 레벨업! 📈",
});
spaTitleDiv.append(spaTitleStr);
spaTitleEl.append(spaTitleDiv);
// 스파 상품 더보기
const spaShowMoreDiv = util.createEl("div", { class: "show-more" });
const spaShowMoreBtn = util.createEl(
  "button",
  { textContent: "더보기" },
  { class: "spa-show-more" }
);
spaShowMoreDiv.append(spaShowMoreBtn);
// 스파 상품 라인
const spaItemsLineEl = util.createEl("div", { class: "home-items-line" });
spaItemsLineEl.classList.add("spa-items");
// 스파 append
spaIntroEl.append(spaTitleEl, spaShowMoreDiv);
spaItemsEl.append(spaIntroEl, spaItemsLineEl);

// 전체 상품 라인 append
mainLayoutDiv.append(hotelItemsEl, rentalItemsEl, sitterItemsEl, spaItemsEl);
mainLayoutEl.append(mainLayoutDiv);
homeMainEl.append(mainLayoutEl);

// loading bar
const loadingEl = util.createEl("div", { id: "loading_bar" });

homePage.append(homeHeaderEl, homeMainEl, loadingEl);
export default homePage;
