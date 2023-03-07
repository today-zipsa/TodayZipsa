import { request } from "../api/common.js";
import { util } from "../api/util.js";

export default async function Search(searchText) {
	// 변수 선언
	const searchRow = document.querySelector(".home-items-line");

	// 상품 검색
	productSearch(searchText);

	async function productSearch(searchText) {
		util.loadingBar(true);
		const items = await request("PRD08", { searchText });
		await searchItemRender(items);
		util.loadingBar(false);
	}

	// 상품 렌더링
	async function searchItemRender(items) {
		const itemList = items.map((item) => {
			const searchItemEl = util.createEl("div", { class: "home-item" });

			const itemAEl = util.createEl("a");
			itemAEl.href = `/detail/${item.id}`;
			itemAEl.setAttribute("data-navigo", "");

			const itemImgEl = util.createEl("div", { class: "home-item-img" });
			const imgEl = util.createEl(
				"img",
				{ src: item.thumbnail },
				{ alt: " image" }
			);

			itemAEl.append(imgEl);
			itemImgEl.append(itemAEl);

			// 상품 텍스트 컨테이너
			const searchItemContent = util.createEl("div", {
				class: "category-item__content",
			});

			// 상품 텍스트 헤더
			const searchItemHeader = util.createEl("h1", {
				class: "category-item__header",
			});

			// 상품 타이틀
			const searchItemName = util.createEl("span", {
				class: "category-item__header__name",
			});
			searchItemName.textContent = item.title;
			searchItemHeader.append(searchItemName);

			// 상품 가격
			const searchItemPriceEl = util.createEl("span", {
				class: "category-item-price",
			});
			const searchItemPrice = util.createEl("span", {
				class: "category-item-price__price",
			});
			searchItemPrice.textContent = util.setLocalString(item.price);
			searchItemPriceEl.append(searchItemPrice);

			// 상품 태그 리스트
			const searchItemTagList = util.createEl("span", {
				class: "category-item-tag-list",
			});
			// tag
			const tagsEl = util.createEl("div", { class: "search-tags" });
			const arrTag = item.tags;
			if (arrTag) {
				if (arrTag.length > 0) {
					arrTag.forEach((tag) => {
						const tagEl = document.createElement("span");
						tagEl.textContent = tag;
						tagsEl.append(tagEl);
					});
				}
			}
			searchItemTagList.append(tagsEl);

			searchItemContent.append(
				searchItemHeader,
				searchItemPriceEl,
				searchItemTagList
			);

			const searchBuy = util.createEl("div");
			const searchBuyBtn = util.createEl("button", {
				class: "category-buy-btn",
			});
			searchBuyBtn.classList.add("category-buy");
			searchBuyBtn.textContent = "바로구매";
			searchBuyBtn.addEventListener("click", () => {
				window.location = `/payment/${item.id}`;
			});
			searchBuy.append(searchBuyBtn);

			searchItemEl.innerHTML = "";
			searchItemEl.append(itemImgEl, searchItemContent, searchBuy);
			return searchItemEl;
		});
		searchRow.append(...itemList);
	}
}
