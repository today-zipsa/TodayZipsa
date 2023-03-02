import { request } from "../api/common.js";
import { util } from "../api/util.js";

export default async function Category(menu) {
  // 변수 선언
  const category = {
    hotel: "호텔",
    rental: "렌트카",
    sitter: "펫시터",
    spa: "스파",
  };
  const homeEl = document.querySelector(".home-top-nav :nth-child(1)");
  const hotelEl = document.querySelector(".home-top-nav :nth-child(2)");
  const rentalEl = document.querySelector(".home-top-nav :nth-child(3)");
  const sitterEl = document.querySelector(".home-top-nav :nth-child(4)");
  const spaEl = document.querySelector(".home-top-nav :nth-child(5)");

  homeEl.classList.add(menu === "" ? "home-link" : "home-category");
  hotelEl.classList.add(menu === "hotel" ? "home-link" : "home-category");
  rentalEl.classList.add(menu === "rental" ? "home-link" : "home-category");
  sitterEl.classList.add(menu === "sitter" ? "home-link" : "home-category");
  spaEl.classList.add(menu === "spa" ? "home-link" : "home-category");

  const categoryTite = document.querySelector(".category-title");
  categoryTite.textContent = category[menu] + " 상품";
  const categoryRow = document.querySelector(".home-items-line");

  // 상품 검색
  if (category.hasOwnProperty(menu)) {
    util.loadingBar(true);
    const items = await request("PRD08", { searchTags: [category[menu]] });
    await categoryItemRender(items);
    util.loadingBar(false);
  }

  // 상품 렌더링
  async function categoryItemRender(items) {
    const itemList = items.map((item) => {
      const categoryItemEl = util.createEl("div", { class: "home-item" });

      const itemAEl = util.createEl("a");
      itemAEl.href = `/detail/${item.id}`;
      itemAEl.setAttribute("data-navigo", "");

      const itemImgEl = util.createEl("div", { class: "home-item-img" });
      const imgEl = util.createEl(
        "img",
        { src: item.thumbnail },
        { alt: menu + " image" }
      );

      itemAEl.append(imgEl);
      itemImgEl.append(itemAEl);

      // 상품 텍스트 컨테이너
      const categoryItemContent = util.createEl("div", {
        class: "category-item__content",
      });

      // 상품 텍스트 헤더
      const categoryItemHeader = util.createEl("h1", {
        class: "category-item__header",
      });
      const categoryItemBrand = util.createEl("span", {
        class: "category-item__header__brand",
      });
      categoryItemBrand.textContent = menu; // 카테고리명

      // 상품 타이틀
      const categoryItemName = util.createEl("span", {
        class: "category-item__header__name",
      });
      categoryItemName.textContent = item.title;
      categoryItemHeader.append(categoryItemBrand, categoryItemName);

      // 상품 가격
      const categoryItemPriceEl = util.createEl("span", {
        class: "category-item-price",
      });
      const categoryItemPrice = util.createEl("span", {
        class: "category-item-price__price",
      });
      categoryItemPrice.textContent = util.setLocalString(item.price);
      categoryItemPriceEl.append(categoryItemPrice);

      // 상품 태그 리스트
      const categoryItemTagList = util.createEl("span", {
        class: "category-item-tag-list",
      });
      // tag
      const tagsEl = util.createEl("div", { class: "category-tags" });
      const arrTag = item.tags.filter((tag) => tag !== category[menu]);
      if (arrTag) {
        if (arrTag.length > 0) {
          arrTag.forEach((tag) => {
            const tagEl = document.createElement("span");
            tagEl.textContent = tag;
            tagsEl.append(tagEl);
          });
        }
      }
      categoryItemTagList.append(tagsEl);

      categoryItemContent.append(
        categoryItemHeader,
        categoryItemPriceEl,
        categoryItemTagList
      );

      const categoryBuy = util.createEl("div");
      const categoryBuyBtn = util.createEl("button", {
        class: "category-buy-btn",
      });
      categoryBuyBtn.classList.add("category-buy");
      categoryBuyBtn.textContent = "바로구매";
      categoryBuyBtn.addEventListener("click", () => {
        window.location = `payment/${item.id}`;
      });
      categoryBuy.append(categoryBuyBtn);

      categoryItemEl.innerHTML = "";
      categoryItemEl.append(itemImgEl, categoryItemContent, categoryBuy);
      return categoryItemEl;
    });
    categoryRow.append(...itemList);
  }
}
