import { util } from "../../api/util";

const categoryPage = util.createEl("div", { class: "home-page" });

/**
 * 카테고리 메뉴
 */
const homeHeaderEl = util.createEl("div", { class: "home-header" });
const homeMenusEl = util.createEl("div", { class: "home-top-menus" });
const homeNavDivEl = util.createEl("div", { class: "home-top-div" });
const homeNavEl = util.createEl("nav", { class: "home-top-nav" });

const homeEl = util.createEl("a", { href: "/" });
const homeDivEl = util.createEl("div");
const homePEl = util.createEl("p", { textContent: "홈" });
homeDivEl.append(homePEl);
homeEl.append(homeDivEl);

const hotelEl = util.createEl("a", { href: "/hotel" });
const hotelDivEl = util.createEl("div");
const hotelPEl = util.createEl("p", { textContent: "호텔" });
hotelDivEl.append(hotelPEl);
hotelEl.append(hotelDivEl);

const rentalEl = util.createEl("a", { href: "/rental" });
const rentalDivEl = util.createEl("div");
const rentalPEl = util.createEl("p", { textContent: "차량" });
rentalDivEl.append(rentalPEl);
rentalEl.append(rentalDivEl);

const sitterEl = util.createEl("a", { href: "/sitter" });
const sitterDivEl = util.createEl("div");
const sitterPEl = util.createEl("p", { textContent: "펫시터" });
sitterDivEl.append(sitterPEl);
sitterEl.append(sitterDivEl);

const spaEl = util.createEl("a", { href: "/spa" });
const spaDivEl = util.createEl("div");
const spaPEl = util.createEl("p", { textContent: "스파" });
spaDivEl.append(spaPEl);
spaEl.append(spaDivEl);

homeNavEl.append(homeEl, hotelEl, rentalEl, sitterEl, spaEl);
homeNavDivEl.append(homeNavEl);
homeMenusEl.append(homeNavDivEl);
homeHeaderEl.append(homeMenusEl);

/**
 * 상품 컨테이너
 */
const categoryMainEl = util.createEl("div", { class: "category-main" });
const categoryLayoutEl = util.createEl("div", { class: "category-layout" });
const categoryIndex = util.createEl("div", { id: "category-index" });

const categorySection = util.createEl("section", {
  class: "category-section",
});
categorySection.classList.add("category-index-section");

const categoryTitle = util.createEl("h1", { class: "category-title" });
const categoryRow = util.createEl("div", { class: "home-items-line" });

categorySection.append(categoryTitle, categoryRow);

categoryIndex.append(categorySection);
categoryLayoutEl.append(categoryIndex);
categoryMainEl.append(categoryLayoutEl);

// loading bar
const loadingEl = util.createEl("div", { id: "loading_bar" });

categoryPage.append(homeHeaderEl, categoryMainEl, loadingEl);

export default categoryPage;
