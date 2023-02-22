import { request } from "../api/common.js";

/**
 * 변수 선언
 */
// 상품 조회
const itemListEl = document.querySelector('#item_list');

// Modal
const addPrdBtn = document.querySelector(".add_btn");
const modal = document.querySelector(".modal");
const modalBackground = modal.querySelector(".modal__background");
const closeModalBtn = modal.querySelector(".close_modal");
const saveModalBtn = modal.querySelector(".save_modal");

// Modal > 상품 등록 Table
const m_titleEl = document.querySelector('#title');
const m_priceEl = document.querySelector('#price');
const m_categoryEl = document.querySelector('#category');
const m_descEl = document.querySelector('#description');
const m_thumbnailEl = document.querySelector('#thumbnailBase64');
const m_photoEl = document.querySelector('#photoBase64');

/**
 * 상품 리스트 조회
 */
(async () => {
  const items = await request('PRD01');
  await showProductList(items);
})();

async function showProductList(items){
  const liEls = items.map(item => {
    
    const liEl = document.createElement('li');
    
    // 썸네일
    const aEl = document.createElement('a');
    aEl.setAttribute('href','javascript:void(0)');

    const thumbEl = document.createElement('img');
    thumbEl.classList.add('thumb');
    const replaceImg = '../asset/no_image.png';
    thumbEl.src = item.thumbnail === null ? replaceImg : item.thumbnail;

    aEl.append(thumbEl);

    // 상품 정보
    const infoEl = document.createElement('div');
    infoEl.classList.add('info');

    // title
    const titleEl = document.createElement('span');
    titleEl.classList.add('title');
    titleEl.textContent = item.title;

    // tag
    const tagsEl = document.createElement('div');
    tagsEl.classList.add('tags');
    const arrTag = item.tags;
    if(arrTag){
      if(arrTag.length > 0){
        arrTag.forEach(tag => {
          const tagEl = document.createElement('span');
          tagEl.textContent = tag;
          tagsEl.append(tagEl);
        })
      }
    }
    infoEl.append(titleEl, tagsEl);

    // price
    const priceEl = document.createElement('span');
    priceEl.classList.add('price');
    priceEl.textContent = setLocalString(item.price) + '원'

    // 버튼
    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('edit_btn');
    editBtnEl.textContent = '수정';
    const delBtnEl = document.createElement('button');
    delBtnEl.classList.add('delete_btn');
    delBtnEl.textContent = '삭제';

    // El 합치기
    liEl.append(aEl, infoEl, priceEl, editBtnEl, delBtnEl);
    
    return liEl;
  });

  itemListEl.append(...liEls);
}


/**
 * 모달 실행
 */
function displayModal(){
    modal.classList.toggle("hidden");
}
modalBackground.addEventListener("click", displayModal);
addPrdBtn.addEventListener("click", displayModal);
closeModalBtn.addEventListener("click", displayModal);

/**
 * 상품 등록
 */
saveModalBtn.addEventListener("click", async () => {
  if(m_titleEl.value === ''){
    alert('상품명을 입력하세요.');
    return false;
  }
  if(m_priceEl.value === ''){
    alert('상품 가격을 입력하세요.');
    return false;
  }
  if(m_categoryEl.value === ''){
    alert('카테고리를 선택하세요');
    return false;
  }else{
    addTag(m_categoryEl.value);
  }
  if(m_descEl.value === ''){
    alert('상품 상세 설명을 입력하세요');
    return false;
  }
  const params = {
    title: m_titleEl.value,
    price: uncomma(m_priceEl.value),
    description: m_descEl.value,
  }
  if(m_tag.length > 0){
    params.tags = getTagList();
  }
  if(m_thumbnailEl.value !== ''){
    params.thumbnailBase64 = m_thumbnailEl.value;
  }
  if(m_photoEl.value !== ''){
    params.photoBase64 = m_photoEl.value;
  }
  // 상품 저장 API 호출
  const res = await request('PRD04', params);

  // 정상적인 저장 후 모달 창 닫기
  if(res.id !== ''){
    displayModal();
  }
});


/**
 * 가격 입력시 천단위 콤마 표시
 */
m_priceEl.addEventListener('keyup', (e) => {
  const strValue = e.target.value;
  const numValue = Number(strValue.replaceAll(',', ''));
  m_priceEl.value = setLocalString(numValue);
});

/**
 * 태그 입력 및 삭제 기능 구현
 */
let m_tag = [];
let tagIdx = 0;
const m_tagEl = document.querySelector('#tag');
const m_tagListEl = document.querySelector('#tag-list');

function addTag(value){
  m_tag[tagIdx] = value;
  tagIdx++;
}

function getTagList(){// 전체 입력된 태그 추출
  let newTags = [...new Set(m_tag)];// 중복제거
  return Object.values(newTags).filter((word)=> {
    return word !== '';
  });
}

m_tagEl.addEventListener('keyup', (e) => {
  if(e.key === "Enter" || e.keyCode === 32){
    const tagValue = e.target.value;

    if(tagValue !== ''){
      const preValue = Object.values(tag).filter((word) => {
        return word === tagValue;
      });

      if(preValue.length === 0){
        const liEl = document.createElement('li');
        liEl.className = 'tag-item';
        liEl.textContent = tagValue;

        const delEl = document.createElement('span');
        delEl.className = 'del-item';
        delEl.id = tagIdx;
        delEl.textContent = 'x';

        liEl.append(delEl);
        m_tagListEl.append(liEl);
        addTag(tagValue); // tag객체에 추가
        m_tagEl.value = '';

        // tag 삭제
        delEl.addEventListener('click', (e) => {
          const idx = e.target.id;
          m_tag[idx] = '';
          m_tagListEl.removeChild(liEl);
        });
      }
    }
    e.preventDefault();
  }
});

// 가격 입력시 천단위 콤마 표시
function setLocalString(value){
  let strValue = '';
  const formatValue = value.toLocaleString('ko-KR');
  strValue = formatValue;
  return strValue;
}
// 문자를 숫자로 변경
function uncomma(str) {
  str = "" + str.replace(/,/gi, '');
  str = str.replace(/(^\s*)|(\s*$)/g, "");
  return (new Number(str));
}