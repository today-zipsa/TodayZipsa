import { util } from "../../api/util";

const searchPage = util.createEl("div", { class: "home-page" });

/**
 * 조회 상품 컨테이너
 */
const searchMainEl = util.createEl("div", { class: "category-main" });
const searchLayoutEl = util.createEl("div", { class: "category-layout" });
const searchIndex = util.createEl("div", { id: "category-index" });

const searchSection = util.createEl("section", {
	class: "category-section",
});
searchSection.classList.add("category-index-section");

const searchTitle = util.createEl("h1", { class: "category-title" });
const searchRow = util.createEl("div", { class: "home-items-line" });

searchSection.append(searchTitle, searchRow);

searchIndex.append(searchSection);
searchLayoutEl.append(searchIndex);
searchMainEl.append(searchLayoutEl);

// loading bar
const loadingEl = util.createEl("div", { id: "loading_bar" });

searchPage.append(searchMainEl, loadingEl);

export default searchPage;
