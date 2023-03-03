import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
import { request } from "../api/common.js";
import { util } from "../api/util.js";

export default async function Home() {
  // 변수 선언
  const hotelItemsEl = document.querySelector(".hotel-items");
  const rentalItemsEl = document.querySelector(".rental-items");
  const sitterItemsEl = document.querySelector(".sitter-items");
  const spaItemsEl = document.querySelector(".spa-items");
  const hotelMoreBtnEl = document.querySelector(".hotel-show-more");
  const rentalMoreBtnEl = document.querySelector(".rental-show-more");
  const sitterMoreBtnEl = document.querySelector(".sitter-show-more");
  const spaMoreBtnEl = document.querySelector(".spa-show-more");

  // 이벤트
  hotelMoreBtnEl.addEventListener("click", () => {
    showMoreLocation("hotel");
  });
  rentalMoreBtnEl.addEventListener("click", () => {
    showMoreLocation("rental");
  });
  sitterMoreBtnEl.addEventListener("click", () => {
    showMoreLocation("sitter");
  });
  spaMoreBtnEl.addEventListener("click", () => {
    showMoreLocation("spa");
  });

  // Swiper 실행
  const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 전체 상품 조회
  util.loadingBar(true);
  const allItems = await request("PRD08");
  util.loadingBar(false);

  // 카테고리별 필터링
  const hotelItems = allItems.filter((items) => items.tags.includes("호텔"));
  const rentalItems = allItems.filter((items) => items.tags.includes("렌트카"));
  const sitterItems = allItems.filter((items) => items.tags.includes("펫시터"));
  const spaItems = allItems.filter((items) => items.tags.includes("스파"));

  // 카페고리별 상품 노출
  itemsRender(hotelItemsEl, hotelItems, "hotel image");
  itemsRender(rentalItemsEl, rentalItems, "rental image");
  itemsRender(sitterItemsEl, sitterItems, "sitter image");
  itemsRender(spaItemsEl, spaItems, "spa image");

  // 상품 렌더링
  function itemsRender(itemEl, items, altStr) {
    let cnt = 1;
    itemEl.innerHtml = "";

    for (let i = 0; i < items.length && cnt < 5; i++) {
      const homeItemEl = util.createEl("div", { class: "home-item" });

      const itemAEl = util.createEl("a");
      itemAEl.href = `/detail/${items[i].id}`;
      itemAEl.setAttribute("data-navigo", "");

      const itemImgEl = util.createEl("div", { class: "home-item-img" });
      const imgEl = util.createEl(
        "img",
        { src: items[i].thumbnail },
        { alt: altStr }
      );

      itemAEl.append(imgEl);
      itemImgEl.append(itemAEl);

      const itemTitleEl = util.createEl("div", { class: "home-item-title" });
      const itemTitleP = util.createEl("p", { textContent: items[i].title });
      itemTitleEl.append(itemTitleP);

      homeItemEl.append(itemImgEl, itemTitleEl);
      itemEl.append(homeItemEl);
      cnt++;
    }
  }

  // 더보기 버튼 클릭
  function showMoreLocation(link) {
    window.location = `/${link}`;
  }
}
