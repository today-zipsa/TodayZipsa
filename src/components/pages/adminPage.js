import { util } from "/src/api/util.js";

const adminPage = util.createEl('div');

/**
 * admin header 생성
 */
const headerEl = util.createEl('header', {class:'admin-header'});
const div1El = util.createEl('div', {class:'admin-header-wrapper'});

const aEl = util.createEl('a', {href:'/'}, {class:'admin-logo-btn'});
const imgEl = util.createEl('img', {src: require('/src/asset/global/main-logo.png')}, {alt:'main-logo'}, {class:'main-logo-btn-image'});
aEl.append(imgEl);

const div2El = util.createEl('div');
const span1El = util.createEl('span', {class:'admin-welcome-word'}, {textContent:'안녕하세요, 관리자님!' });
const span2El = util.createEl('span', {clss:'logout'}, {textContent:'로그아웃'})
div2El.append(span1El, span2El);

div1El.append(aEl, div2El);
headerEl.append(div1El);

/**
 * admin main 생성
 */
const mainEl = util.createEl('main');
const adminEl = util.createEl('div', {class:'admin'});
const adminTabEl = util.createEl('div', {class:'admin-tab'});
const titleDivEl = util.createEl('div', {class:'main_title'}, {textContent:'안녕하세요, 관리자 페이지입니다.'});
const tab1InputEl = util.createEl('input', {id:'tab1'}, {type:'radio'}, {name:'tabs'}, {checked:'checked'});
const label1El = util.createEl('label', {for:'tab1'}, {textContent:'상품관리'});
const tab2InputEl = util.createEl('input', {id:'tab2'}, {type:'radio'}, {name:'tabs'});
const label2El = util.createEl('label', {for:'tab2'}, {textContent:'주문관리'});

// tab1
const tab1El = util.createEl('tab', {id:'content1'});
const itemDivEl = util.createEl('div', {class:'item_btn'});
const pageShowEl = util.createEl('div');
const showTextEl = util.createEl('span',{textContent:'List: '});
const showSelectEl = util.createEl('select', {class:'show-select-list'}, {textContent:'Show: '});
const showOption1El = util.createEl('option', {value:5}, {textContent:'5'});
const showOption2El = util.createEl('option', {value:10}, {textContent:'10'});
const showOption3El = util.createEl('option', {value:20}, {textContent:'20'});
showSelectEl.append(showOption1El, showOption2El, showOption3El);
pageShowEl.append(showTextEl, showSelectEl);

const addBtnEl = util.createEl('button', {id:'add_product_btn'}, {textContent:'상품 추가'});
addBtnEl.classList.add('admin_btn');
addBtnEl.classList.add('admin_main_btn');
itemDivEl.append(pageShowEl, addBtnEl);
const listDivEl = util.createEl('div');
const listUlEl = util.createEl('ul', {id:'item_list'});
listDivEl.append(listUlEl);
tab1El.append(itemDivEl, listDivEl);

// tab2
const tab2El = util.createEl('tab', {id:'content2'});

// append
adminTabEl.append(titleDivEl, tab1InputEl, label1El, tab2InputEl, label2El, tab1El, tab2El);
adminEl.append(adminTabEl);
mainEl.append(adminEl);

/**
 * 페이징 처리
 */
const pagingEl = util.createEl('nav', {class: 'pagination'});
const prevBtnEl = util.createEl('button', {id: 'page-prev-btn'});
prevBtnEl.classList.add('admin-paging-btn');
const pagingNumbers = util.createEl('div', {id: 'page-numbers'});
const nextBtnEl = util.createEl('button', {id: 'page-next-btn'});
nextBtnEl.classList.add('admin-paging-btn');
pagingEl.append(prevBtnEl, pagingNumbers, nextBtnEl);
tab1El.append(pagingEl);

/**
 * modal 생성
 */
const modalEl = util.createEl('div', {class:'modal hidden'});
const modalBgEl = util.createEl('div', {class:'modal__background'});
const modalContentEl = util.createEl('div', {class:'modal__content'});

// modal head
const mHeadEl = util.createEl('div',{class:'m_head'});
const mTitleEl = util.createEl('div', {class:'modal_title'}, {textContent:'신규 상품 추가'});
mHeadEl.append(mTitleEl);

// modal body
const mBodyEl = util.createEl('div', {class:'m_body'});
const mbRowEl = util.createEl('div', {class:'row'});
const mbColEl = util.createEl('div', {class:'col-lg'});
const mbTableEl = util.createEl('table', {class:'table table-bordered'});
const colGroupEl = util.createEl('colgroup');
const col1El = util.createEl('col', {width:'25%'});
const col2El = util.createEl('col', {width:'75%'});
colGroupEl.append(col1El, col2El);

// 상품명 입력
const tr1El = util.createEl('tr');
const th1El = util.createEl('th', {textContent:'상품명'});
const require1El = util.createEl('span', {class:'required-input'}, {textContent:'*'});
th1El.append(require1El);
const td1El = util.createEl('td');
const input1El = util.createEl('input', {type:'text'}, {id:'title'}, {class:'form-control'}, {placeholder:'상품명을 입력하세요.'});
td1El.append(input1El);
tr1El.append(th1El, td1El);

// 상품 가격 입력
const tr2El = util.createEl('tr');
const th2El = util.createEl('th', {textContent:'상품 가격'});
const require2El = util.createEl('span', {class:'required-input'}, {textContent:'*'});
th2El.append(require2El);
const td2El = util.createEl('td');
const div2GroupEl = util.createEl('div', {class:'input-group'});
const div2PrependEl = util.createEl('div', {class:'input-group-prepend'});
const span2GroupEl = util.createEl('span', {class:'input-group-text'}, {textContent:'₩'});
const input2El = util.createEl('input', {type:'text'}, {id:'price'}, {class:'form-control'}, {placeholder:'상품가격을 입력하세요.'});
div2PrependEl.append(span2GroupEl);
div2GroupEl.append(div2PrependEl, input2El);
td2El.append(div2GroupEl);
tr2El.append(th2El, td2El)

// 상품 카테고리 선택
const tr3El = util.createEl('tr');
const th3El = util.createEl('th', {textContent:'상품 카테고리'});
const td3El = util.createEl('td');
const select3El = util.createEl('select', {id:'category'}, {class:'custom-select'});
const option0El = util.createEl('option', {value:''}, {textContent:'- 카테고리를 선택하세요 -'});
const option1El = util.createEl('option', {value:'호텔'}, {textContent:'호텔'});
const option2El = util.createEl('option', {value:'차량'}, {textContent:'차량'});
const option3El = util.createEl('option', {value:'펫시터'}, {textContent:'펫시터'});
const option4El = util.createEl('option', {value:'스파'}, {textContent:'스파'});
select3El.append(option0El, option1El, option2El, option3El, option4El)
td3El.append(select3El);
tr3El.append(th3El, td3El);

// 상품 상세 설명 입력
const tr4El = util.createEl('tr');
const th4El = util.createEl('th', {textContent:'상품 상세 설명'});
const require4El = util.createEl('span', {class:'required-input'}, {textContent:'*'});
th4El.append(require4El);
const td4El = util.createEl('td');
const textareaEl = util.createEl('textarea', {id:'description'}, {class:'form-control'}, {rows:'5'}, {placeholder:'상품 상세 설명을 입력하세요.(최대100자)'});
td4El.append(textareaEl);
tr4El.append(th4El, td4El);

// 태그 입력
const tr5El = util.createEl('tr');
const th5El = util.createEl('th', {textContent:'태그'});
const td5El = util.createEl('td');
const input5El = util.createEl('input', {type:'text'}, {id:'tag'}, {class:'form-control'}, {placeholder:'상품 태그를 입력 후 Enter키를 누르세요.'});
const div5El = util.createEl('div', {class:'tag'});
const ul5El = util.createEl('ul', {id:'tag-list'});
div5El.append(ul5El);
td5El.append(input5El, div5El);
tr5El.append(th5El, td5El);

// 썸네일 이미지
const tr6El = util.createEl('tr');
const th6El = util.createEl('th', {textContent:'썸네일 이미지'});
const td6El = util.createEl('td');
td6El.style.display = 'flex';
const div6El = util.createEl('div', {class:'mb-photo'});
const img6El = util.createEl('img', {class:'photo-thumb'}, {src:''}, {alt:'thumb'});
const input6El = util.createEl('input', {type:'file'}, {id:'thumbnailBase64'}, {class:'form-control'});
div6El.append(img6El, input6El);
td6El.append(div6El, input6El);
tr6El.append(th6El, td6El);

// 상세 이미지
const tr7El = util.createEl('tr');
const th7El = util.createEl('th', {textContent:'상세 이미지'});
const td7El = util.createEl('td');
td7El.style.display = 'flex';
const div7El = util.createEl('div', {class:'mb-photo'});
const img7El = util.createEl('img', {class:'photo-detail'}, {src:''}, {alt:'photo'});
const input7El = util.createEl('input', {type:'file'}, {id:'photoBase64'}, {class:'form-control'});
div7El.append(img7El, input7El);
td7El.append(div7El, input7El);
tr7El.append(th7El, td7El);

// 상품 매진 여부
const tr8El = util.createEl('tr');
const th8El = util.createEl('th', {textContent:'상품 매진 여부'});
const td8El = util.createEl('td');
const select8El = util.createEl('select', {id:'isSoldOut'}, {class:'custom-select'});
const option8_0El = util.createEl('option', {value:''}, {textContent:'- 상품 매진 여부를 선택하세요 -'});
const option8_1El = util.createEl('option', {value:'false'}, {textContent:'판매 중'});
const option8_2El = util.createEl('option', {value:'true'}, {textContent:'매진'});
select8El.append(option8_0El, option8_1El, option8_2El)
td8El.append(select8El);
tr8El.append(th8El, td8El);

// append
mbTableEl.append(colGroupEl, tr1El, tr2El, tr3El, tr4El, tr5El, tr6El, tr7El, tr8El);
mbColEl.append(mbTableEl);
mbRowEl.append(mbColEl);
mBodyEl.append(mbRowEl);

// modal footer
const mFooterEl = util.createEl('div', {class:'m_footer'});

modalContentEl.append(mHeadEl, mBodyEl, mFooterEl);
modalEl.append(modalBgEl, modalContentEl);

// loading bar
const loadingEl = util.createEl('div', {id:'loading_bar'});

adminPage.append(headerEl, mainEl, modalEl, loadingEl);

export default adminPage;
