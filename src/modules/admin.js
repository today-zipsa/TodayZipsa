import { request } from "../api/common.js";
import { util } from "../api/util.js";

export default async function Admin() {
  /**
   * 변수 선언
   *
   */
  let pageCount = 0;
  let currentPage = 1;
  let pageLimit = 5;
  let productLiEls = [];
  let thumbnailBase64 = "";
  let photoBase64 = "";

  const tabsEl = document.getElementsByName("tabs");
  const showListCnt = document.querySelector(".show-select-list"); // 페이지 노출 아이템수량
  const addProductBtn = document.querySelector("#add_product_btn"); // 상품 추가
  const itemListEl = document.querySelector("#item_list"); // 상품 리스트
  const orderListEl = document.querySelector("#order_list"); // 주문 리스트
  // 모달 관련
  const modal = document.querySelector(".modal");
  const modalBackground = document.querySelector(".modal__background");
  // Modal Head
  const modalTitle = document.querySelector(".modal_title");
  // Modal Body
  const mb_titleEl = document.querySelector("#title");
  const mb_priceEl = document.querySelector("#price");
  const mb_categoryEl = document.querySelector("#category");
  const mb_descEl = document.querySelector("#description");
  const mb_tagEl = document.querySelector("#tag");
  const mb_tagListEl = document.querySelector("#tag-list");
  const mb_thumbImgEl = document.querySelector(".photo-thumb");
  const mb_thumbnailEl = document.querySelector("#thumbnailBase64");
  const mb_detailImgEl = document.querySelector(".photo-detail");
  const mb_photoEl = document.querySelector("#photoBase64");
  const mb_isSoldOutEl = document.querySelector("#isSoldOut");
  // Modal Footer
  const modalFooterEl = document.querySelector(".m_footer");

  /**
   * 이벤트
   */
  showListCnt.addEventListener("change", (event) => {
    pageLimit = Number(event.target.value);
    setPagination(pageLimit);
  });
  modalBackground.addEventListener("click", displayModal);
  // 상품 등록 모달 호출
  addProductBtn.addEventListener("click", fn_modal_for_add);
  // 가격에 콤마 표시
  mb_priceEl.addEventListener("keyup", (e) => {
    const numValue = Number(e.target.value.replaceAll(",", ""));
    e.target.value = util.setLocalString(numValue);
  });
  // 태그 담기
  mb_tagEl.addEventListener("keyup", (e) => {
    setTagList(e);
  });
  // 썸네일 사진 등록
  mb_thumbnailEl.addEventListener("change", (event) => {
    const file = event.target.files[0];
    // 파일 사이즈 확인
    if (file.size > 1024 * 1024) {
      alert("업로드 가능한 파일의 최대 용량은 1MB입니다.");
      mb_thumbnailEl.value = "";
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (e) => {
        thumbnailBase64 = e.target.result;
        mb_thumbImgEl.src = e.target.result;
      });
    }
  });
  // 디테일 사진 등록
  mb_photoEl.addEventListener("change", (event) => {
    const file = event.target.files[0];
    // 파일 사이즈 확인
    if (file.size > 1024 * 1024) {
      alert("업로드 가능한 파일의 최대 용량은 1MB입니다.");
      mb_photoEl.value = "";
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (e) => {
        photoBase64 = e.target.result;
        mb_detailImgEl.src = e.target.result;
      });
    }
  });

  /**
   * Modal Toggle
   */
  function displayModal() {
    modal.classList.toggle("hidden");
  }

  // init
  fn_search_product();
  fn_search_order();

  /**
   * 상품 조회
   */
  async function fn_search_product() {
    util.loadingBar(true);
    const items = await request("PRD01");
    await getProductList(items);
    util.loadingBar(false);
  }
  async function getProductList(items) {
    const liEls = items.map((item) => {
      const liEl = document.createElement("li");

      // 썸네일
      const aEl = document.createElement("a");
      aEl.setAttribute("href", "javascript:void(0)");

      const thumbEl = document.createElement("img");
      thumbEl.classList.add("thumb");
      const replaceImg = require("../asset/global/no_image.png");
      thumbEl.src = item.thumbnail === null ? replaceImg : item.thumbnail;
      aEl.append(thumbEl);

      // 상품 정보
      const infoEl = document.createElement("div");
      infoEl.classList.add("info");

      // title
      const titleEl = document.createElement("span");
      titleEl.classList.add("title");
      titleEl.textContent = item.title;

      // tag
      const tagsEl = document.createElement("div");
      tagsEl.classList.add("tags");
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
      infoEl.append(titleEl, tagsEl);

      // price
      const priceEl = document.createElement("span");
      priceEl.classList.add("price");
      priceEl.textContent = util.setLocalString(item.price) + "원";

      // 수정 버튼
      const editBtnEl = document.createElement("button");
      editBtnEl.classList.add("admin_btn");
      editBtnEl.classList.add("edit_btn");
      editBtnEl.textContent = "수정";
      editBtnEl.addEventListener("click", () => {
        fn_modal_for_edit(item.id);
      });

      // 삭제 버튼
      const delBtnEl = document.createElement("button");
      delBtnEl.classList.add("admin_btn");
      delBtnEl.classList.add("delete_btn");
      delBtnEl.textContent = "삭제";
      delBtnEl.addEventListener("click", () => {
        fn_del_product(item.id);
      });

      // El 합치기
      liEl.append(aEl, infoEl, priceEl, editBtnEl, delBtnEl);

      return liEl;
    });

    itemListEl.innerHTML = "";
    itemListEl.append(...liEls);
    productLiEls = liEls;
    setPagination(pageLimit);
  }

  /**
   * 상품 등록
   */
  async function fn_modal_for_add() {
    modalTitle.textContent = "신규 상품 등록";
    mb_titleEl.value = "";
    mb_priceEl.value = "";
    mb_categoryEl.value = "";
    mb_descEl.value = "";
    mb_tagEl.value = "";
    mb_tagListEl.innerHTML = "";
    mb_thumbImgEl.src = require("../asset/global/no_image.png");
    mb_thumbnailEl.value = "";
    mb_detailImgEl.src = require("../asset/global/no_image.png");
    mb_photoEl.value = "";
    mb_tag = [];
    mb_tagIdx = 1;

    // 버튼 세팅
    modalFooterEl.innerHTML = "";
    const modalCloseBtn = document.createElement("button");
    modalCloseBtn.classList.add("admin_btn");
    modalCloseBtn.classList.add("admin_main_btn");
    modalCloseBtn.textContent = "닫기";
    modalCloseBtn.addEventListener("click", displayModal);

    const modalSaveBtn = document.createElement("button");
    modalSaveBtn.classList.add("admin_btn");
    modalSaveBtn.classList.add("admin_main_btn");
    modalSaveBtn.textContent = "저장";
    modalSaveBtn.addEventListener("click", async () => {
      await fn_save_product();
    });
    modalFooterEl.append(modalCloseBtn, modalSaveBtn);

    displayModal();
  }

  async function fn_save_product() {
    // 필수값 체크
    if (!chkParams()) return;

    // 카테고리를 태그에 젤 앞에 저장
    mb_tag[0] = mb_categoryEl.value;

    let params = {
      title: mb_titleEl.value,
      price: util.strToNum(mb_priceEl.value),
      description: mb_descEl.value,
    };
    if (mb_tag.length > 0) {
      params.tags = getTagList();
    }
    if (thumbnailBase64 !== "") {
      params.thumbnailBase64 = thumbnailBase64;
    }
    if (photoBase64 !== "") {
      params.photoBase64 = photoBase64;
    }

    // 상품 저장 API 호출
    util.loadingBar(true);
    const res = await request("PRD04", params);
    util.loadingBar(false);

    // 저장 후 모달 닫고 새로고침
    if (res.id !== "") {
      displayModal();
      fn_search_product();
      thumbnailBase64 = "";
      photoBase64 = "";
    }
  }

  /**
   * 상품 수정
   */
  async function fn_modal_for_edit(id) {
    // 조회 후 수정
    util.loadingBar(true);
    const res = await request("PRD07", { productId: id });
    util.loadingBar(false);

    // 정상적으로 조회된 경우
    if (res.id === id) {
      modalTitle.textContent = "등록 상품 수정";
      mb_titleEl.value = res.title;
      mb_priceEl.value = util.setLocalString(res.price);
      mb_categoryEl.value = "";
      mb_descEl.value = res.description;
      mb_tagEl.value = "";
      mb_thumbnailEl.value = "";
      mb_photoEl.value = "";
      mb_isSoldOutEl.value = res.isSoldOut;

      // 이미지 표시
      const replaceImg = require("../asset/global/no_image.png");
      mb_thumbImgEl.src = res.thumbnail === null ? replaceImg : res.thumbnail;
      mb_detailImgEl.src = res.photo === null ? replaceImg : res.photo;

      if (res.tags.length > 0) {
        let tagList = res.tags;

        // 초기화
        mb_tagListEl.innerHTML = "";
        mb_tag = [];
        mb_tagIdx = 1;

        // 카테고리 세팅
        tagList.find((tag) => {
          if (
            tag === "호텔" ||
            tag === "렌트카" ||
            tag === "펫시터" ||
            tag === "스파"
          ) {
            mb_categoryEl.value = tag;
          }
        });

        // 태그 그리기
        for (let i = 0; i < tagList.length; i++) {
          const liEl = document.createElement("li");
          liEl.className = "tag-item";
          liEl.textContent = tagList[i];

          const delEl = document.createElement("span");
          delEl.className = "del-item";
          delEl.id = mb_tagIdx;
          delEl.textContent = "x";

          liEl.append(delEl);
          mb_tagListEl.append(liEl);
          addTag(tagList[i]); // tag객체에 추가

          // tag 삭제
          delEl.addEventListener("click", (e) => {
            const idx = e.target.id;
            mb_tag[idx] = "";
            mb_tagListEl.removeChild(liEl);
          });
        } // for
      } // if tag

      // 버튼 세팅
      modalFooterEl.innerHTML = "";
      const modalCloseBtn = document.createElement("button");
      modalCloseBtn.classList.add("admin_btn");
      modalCloseBtn.classList.add("admin_main_btn");
      modalCloseBtn.textContent = "닫기";
      modalCloseBtn.addEventListener("click", displayModal);

      const modalEditBtn = document.createElement("button");
      modalEditBtn.classList.add("admin_btn");
      modalEditBtn.classList.add("admin_main_btn");
      modalEditBtn.textContent = "수정";
      modalEditBtn.addEventListener("click", async () => {
        await fn_edit_product(res.id);
      });
      modalFooterEl.append(modalCloseBtn, modalEditBtn);

      displayModal();
    } // if res
  }

  // 수정
  async function fn_edit_product(id) {
    // 필수값 체크
    if (!chkParams()) return;

    // 카테고리를 태그에 젤 앞에 저장
    mb_tag[0] = mb_categoryEl.value;

    let params = {
      productId: id,
      title: mb_titleEl.value,
      price: util.strToNum(mb_priceEl.value),
      description: mb_descEl.value,
    };
    if (mb_tag.length > 0) {
      params.tags = getTagList();
    }
    if (thumbnailBase64 !== "") {
      params.thumbnailBase64 = thumbnailBase64;
    }
    if (photoBase64 !== "") {
      params.photoBase64 = photoBase64;
    }
    if (mb_isSoldOutEl.value === "true") {
      params.isSoldOut = true;
    } else {
      params.isSoldOut = false;
    }
    // 상품 수정 API 호출
    util.loadingBar(true);
    const res = await request("PRD05", params);
    util.loadingBar(false);

    // 수정 후 모달 닫고 새로고침
    if (res.id === id) {
      displayModal();
      fn_search_product();
      thumbnailBase64 = "";
      photoBase64 = "";
    }
  }

  /**
   * 상품 삭제
   */
  async function fn_del_product(id) {
    const confirmMsg = confirm("상품을 삭제하시겠습니까?");

    if (confirmMsg) {
      // 상품 삭제 API 호출
      util.loadingBar(true);
      const res = await request("PRD06", { productId: id });
      util.loadingBar(false);

      // 정상적인 삭제 후 새로고침
      if (res) {
        fn_search_product();
      }
    }
  }

  /**
   * 태그 입력 및 삭제 기능 구현
   */
  let mb_tag = [];
  let mb_tagIdx = 1;

  // 태그 추가
  function addTag(value) {
    mb_tag[mb_tagIdx] = value;
    mb_tagIdx++;
  }

  // 전체 입력된 태그 추출
  function getTagList() {
    let newTags = [...new Set(mb_tag)]; // 중복제거
    return Object.values(newTags).filter((word) => {
      return word !== "";
    });
  }

  // 태그 리스트에 추가
  function setTagList(e) {
    if (e.key === "Enter" || e.keyCode === 32) {
      const tagValue = e.target.value;

      if (tagValue !== "") {
        const preValue = Object.values(tag).filter((word) => {
          return word === tagValue;
        });

        if (preValue.length === 0) {
          const liEl = document.createElement("li");
          liEl.className = "tag-item";
          liEl.textContent = tagValue;

          const delEl = document.createElement("span");
          delEl.className = "del-item";
          delEl.id = mb_tagIdx;
          delEl.textContent = "x";

          liEl.append(delEl);
          mb_tagListEl.append(liEl);
          addTag(tagValue); // tag객체에 추가
          mb_tagEl.value = "";

          // tag 삭제
          delEl.addEventListener("click", (e) => {
            const idx = e.target.id;
            mb_tag[idx] = "";
            mb_tagListEl.removeChild(liEl);
          });
        }
      }
      e.preventDefault();
    }
  }

  /**
   * 기타 함수
   */
  // 필수 입력값 확인
  function chkParams() {
    let isValid = false;

    if (mb_titleEl.value === "") {
      alert("상품명을 입력하세요.");
      return false;
    }
    if (mb_priceEl.value === "") {
      alert("상품 가격을 입력하세요.");
      return false;
    }
    // if(mb_categoryEl.value === ''){
    //   alert('카테고리를 선택하세요');
    //   return false;
    // }
    if (mb_descEl.value === "") {
      alert("상품 상세 설명을 입력하세요");
      return false;
    }
    isValid = true;

    return isValid;
  }

  /**
   * 페이징 처리
   */
  // 변수 선언
  const pagingNumbers = document.getElementById("page-numbers");
  const prevButton = document.getElementById("page-prev-btn");
  const nextButton = document.getElementById("page-next-btn");

  // pagination 구성
  function setPagination(itemsPerPage) {
    pageCount = Math.ceil(productLiEls.length / itemsPerPage);
    pageLimit = itemsPerPage;

    if (pageCount > 0) {
      prevButton.textContent = "<";
      nextButton.textContent = ">";
    }

    // 리스트 하단에 페이지 번호 세팅
    pagingNumbers.innerHTML = "";
    for (let i = 1; i <= pageCount; i++) {
      const pageNumber = document.createElement("button");
      pageNumber.classList.add("page-number");
      pageNumber.innerHTML = i;
      pageNumber.dataset.pageIndex = i;
      pagingNumbers.append(pageNumber);
    }
    showCurrentPage(1);

    prevButton.addEventListener("click", () => {
      showCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener("click", () => {
      showCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".page-number").forEach((button) => {
      const pageIndex = Number(button.dataset.pageIndex);
      if (pageIndex) {
        button.addEventListener("click", () => {
          showCurrentPage(pageIndex);
        });
      }
    });
  }

  // 현재 페이지에 상품 노출
  function showCurrentPage(pageNum) {
    util.loadingBar(true);
    currentPage = pageNum;

    // 현 페이지번호 활성화
    document.querySelectorAll(".page-number").forEach((button) => {
      button.classList.remove("active"); // 초기화
      const pageIndex = Number(button.dataset.pageIndex);
      if (pageIndex == currentPage) {
        button.classList.add("active");
      }
    });

    // 이전(<), 다음(>) 버튼 컨트롤
    if (currentPage === 1) {
      disableButton(prevButton);
    } else {
      enableButton(prevButton);
    }
    if (pageCount === currentPage) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }

    const prevRange = (pageNum - 1) * pageLimit;
    const currRange = pageNum * pageLimit;

    productLiEls.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
      }
    });

    setTimeout(() => {
      util.loadingBar(false);
    }, 500);
  }

  // 이전(<), 다음(>) 버튼 활성/비활성 처리
  function disableButton(button) {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
  }
  function enableButton(button) {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  }
  /**
   * 주문 내역 조회
   */
  async function fn_search_order() {
    util.loadingBar(true);
    const orders = await request("PRD02");
    await getOrdertList(orders);
    util.loadingBar(false);
    console.log("orderList>>> ", orders);
  }

  async function getOrdertList(orders) {
    const liEls = orders.map((order) => {
      const userInfo = order.user;
      const accInfo = order.account;
      const prodInfo = order.product;

      const liEl = document.createElement("li");

      // 썸네일
      const aEl = document.createElement("a");
      aEl.setAttribute("href", `/detail/${prodInfo.productId}`);

      const thumbEl = document.createElement("img");
      thumbEl.classList.add("thumb");
      const replaceImg = require("../asset/global/no_image.png");
      thumbEl.src =
        prodInfo.thumbnail === null ? replaceImg : prodInfo.thumbnail;
      aEl.append(thumbEl);

      // 상품 정보
      const infoEl = document.createElement("div");
      infoEl.classList.add("info");

      // title
      const titleEl = document.createElement("span");
      titleEl.classList.add("title");
      titleEl.textContent = prodInfo.title;

      // user
      const userEl = document.createElement("div");
      userEl.classList.add("user");
      const userNameEl = document.createElement("span");
      userNameEl.textContent = "주문고객: " + userInfo.displayName;
      const userEmailEl = document.createElement("span");
      userEmailEl.textContent = "E-mail: " + userInfo.email;
      const userBankEl = document.createElement("span");
      userBankEl.textContent = "결제은행: " + accInfo.bankName;
      userEl.append(userNameEl, userEmailEl, userBankEl);
      infoEl.append(titleEl, userEl);

      // price
      const priceEl = document.createElement("span");
      priceEl.classList.add("price");
      priceEl.textContent = util.setLocalString(prodInfo.price) + "원";

      // 구매확정 버튼
      let editBtnEl = "";
      if (!order.isCanceled) {
        editBtnEl = document.createElement("button");
        editBtnEl.classList.add("admin_btn");
        editBtnEl.classList.add("edit_btn");
        editBtnEl.textContent = order.done === true ? "구매완료" : "구매확정";
        if (!order.done) {
          // 구매완료가 안된 상태에서 클릭 가능
          editBtnEl.addEventListener("click", () => {
            fn_confirm_product("done", order.detailId);
          });
        }
      }

      // 구매취소 버튼
      let delBtnEl = "";
      if (!order.done) {
        delBtnEl = document.createElement("button");
        delBtnEl.classList.add("admin_btn");
        delBtnEl.classList.add("delete_btn");
        delBtnEl.textContent =
          order.isCanceled === true ? "취소완료" : "구매취소";
        if (!order.isCanceled) {
          // 취소완료가 안된 상태에서 클릭 가능
          delBtnEl.addEventListener("click", () => {
            fn_confirm_product("cancel", order.detailId);
          });
        }
      }

      // El 합치기
      liEl.append(aEl, infoEl, priceEl, editBtnEl, delBtnEl);

      return liEl;
    });

    orderListEl.innerHTML = "";
    orderListEl.append(...liEls);
    //productLiEls = liEls;
    // setPagination(pageLimit);
  }

  /**
   * 구매 확정 또는 취소
   */
  async function fn_confirm_product(gbn, orderId) {
    const msg = gbn === "cancel" ? "취소" : "확정";
    const confirmMsg = confirm(`주문을 ${msg}하시겠습니까?`);

    let param = {
      detailId: orderId,
    };
    if (gbn === "cancel") {
      param.isCanceled = true;
    } else {
      param.done = true;
    }

    if (confirmMsg) {
      // API 호출
      util.loadingBar(true);
      const res = await request("PRD03", param);
      console.log("confirm>> ", res);
      util.loadingBar(false);

      // 정상적인 삭제 후 새로고침
      if (res) {
        fn_search_order();
      }
    }
  }
  // fn_product_purchase();
  async function fn_product_purchase() {
    const params = {
      productId: "QrurqbMKQ9Wqy5RmmCzQ",
      accountId: "jjqGeFHwHBIc44iGwrD0",
    };
    const res = await request("PRD09", params);
  }
  // fn_user_accountInfo();
  async function fn_user_accountInfo() {
    const res = await request("ACC02");
    console.log("accountInfo>>> ", res);
  }
}
