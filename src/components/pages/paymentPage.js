import {accounts} from "../api/my_accounts_dummy.js"
import {payments} from "../api/my_payment_dummy.js"
import {request} from "../api/common.js";


// //헤더?
// let headers = {
//   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
//   "content-type": "application/json",
//   "apikey": "FcKdtJs202301",
//   "username": "KDT4_Team4",
//   "masterKey": true
// }

// let accessToken = 'Bearer' + window.localStorage.getItem('accessToken');

// 토큰값 없을때 텍스트 출력
// if(accessToken !== null && accessToken !== ""){
//   alert('로그인 해주세요');

// }


// *더미데이터 가져오기
const BankAccountList = accounts.accounts 

// 계좌목록 (수정필요)
const accountlist = document.querySelector(".payment1-emtpy")


//payment.html
const paymentOrderpage = document.createElement("div")
const paymentTotal = document.createElement("div")
const paymentOrder = document.createElement("div")
const paymentOrderContainer = document.createElement("div")
const paymentProductInfo  = document.createElement("div")
const paymentProductInfoWrapper = document.createElement("div")
const paymentProductPrice = document.createElement("div")
const paymentProductPriceWrapper = document.createElement("div")
const paymentProductCount = document.createElement("div")
const paymentProductCountWrapper = document.createElement("div")
const paymentOrderer = document.createElement("div")
const paymentOrdererContatiner = document.createElement("div")
const paymentOrdererOrderer = document.createElement("div")
const paymentEmail = document.createElement("div")
const paymentPayment = document.createElement("div")
const paymentPaymentContainer = document.createElement("div")
const paymentPaymentLeft = document.createElement("div")
const paymentHow = document.createElement("div")
const paymentPaymentRight = document.createElement("div")
const paymentAccountTransfer = document.createElement("span")
const paymentEmtpy = document.createElement("ul")
const paymentMoney = document.createElement("div")
const paymentLastpayContainer = document.createElement("div")
const paymentLastAccount = document.createElement("div")
const paymentLastDelivery = document.createElement("div")
const paymentLastDiscount = document.createElement("div")
const paymentLastTotalAccount = document.createElement("div")
const paymentBtn = document.createElement("button")

//classlist.add
paymentOrderpage.classList.add("payment1-orderpage")
paymentTotal.classList.add("payment1-total")
paymentOrder.classList.add("payment1-order")
paymentOrder.classList.add("payment1-h3")
paymentOrderContainer.classList.add("payment1-order-container")
paymentProductInfo.classList.add("payment1-text")
paymentProductInfoWrapper.classList.add("payment1-product-wrapper")
paymentProductPrice.classList.add("payment1-text")
paymentProductPriceWrapper.classList.add("payment1-product-wrapper")
paymentProductCount.classList.add("payment1-text")
paymentProductCountWrapper.classList.add("payment1-product-wrapper")
paymentOrderer.classList.add("payment1-orderer")
paymentOrderer.classList.add("payment1-h3")
paymentOrdererContatiner.classList.add("payment1-orderer-container")
paymentOrdererOrderer.classList.add("payment1-text")
paymentEmail.classList.add("payment1-text")
paymentPayment.classList.add("payment1-payment")
paymentPayment.classList.add("payment1-h3")
paymentPaymentContainer.classList.add("payment1-payment-container")
paymentPaymentLeft.classList.add("payment1-payment-left")
paymentHow.classList.add("payment1-how")
paymentPaymentRight.classList.add("payment1-payment-right")
paymentAccountTransfer.classList.add("payment1-account-transfer")
paymentEmtpy.classList.add("payment1-emtpy")
paymentMoney.classList.add("payment1-money")
paymentMoney.classList.add("payment1-h3")
paymentLastpayContainer.classList.add("payment1-lastpay-container")
paymentLastAccount.classList.add("payment1-text")
paymentLastDelivery.classList.add("payment1-text")
paymentLastDiscount.classList.add("payment1-text")
paymentLastTotalAccount.classList.add("payment1-text")
paymentBtn.classList.add("payment1-btn")

//innerHTML
paymentOrderpage.innerHTML = "<h2>결제페이지</h2>"
paymentOrder.innerHTML = "<h3>주문상품</h3>"
paymentProductInfo.textContent = "상품정보"
paymentProductPrice.textContent = "상품가격"
paymentProductCount.textContent = "상품개수"
paymentOrderer.innerHTML = "<h3>주문자 정보</h3>"
paymentOrdererOrderer.textContent = "보내는 사람"
paymentEmail.textContent = "E-mail"
paymentPayment.innerHTML = "<h3>결제수단</h3>"
paymentHow.textContent = "결제수단"
paymentAccountTransfer.textContent = "계좌이체"
// paymentEmtpy.innerHTML = "<h4>등록된 계좌가 없습니다</h4>"
paymentMoney.innerHTML = "<h3>결제 금액</h3>"
paymentLastAccount.textContent = "주문금액"
paymentLastDelivery.textContent = "배송비"
paymentLastDiscount.textContent = "상품할인"
paymentLastTotalAccount.textContent = "총 금액"

//append
document.body.append(paymentOrderpage)
document.body.append(paymentTotal)
paymentTotal.append(paymentOrder)
paymentTotal.append(paymentOrderContainer)
paymentOrderContainer.append(paymentProductInfoWrapper)
paymentProductInfoWrapper.append(paymentProductInfo)
paymentOrderContainer.append(paymentProductPriceWrapper)
paymentProductPriceWrapper.append(paymentProductPrice)
paymentOrderContainer.append(paymentProductCountWrapper)
paymentProductCountWrapper.append(paymentProductCount)
paymentTotal.append(paymentOrderer)
paymentTotal.append(paymentOrdererContatiner)
paymentOrdererContatiner.append(paymentOrdererOrderer)
paymentOrdererContatiner.append(paymentEmail)
paymentTotal.append(paymentPayment)
paymentTotal.append(paymentPaymentContainer)
paymentPaymentContainer.append(paymentPaymentLeft)
paymentPaymentLeft.append(paymentHow)
paymentPaymentContainer.append(paymentPaymentRight)
paymentPaymentRight.append(paymentAccountTransfer)
paymentPaymentRight.append(paymentEmtpy)
paymentTotal.append(paymentMoney)
paymentTotal.append(paymentLastpayContainer)
paymentLastpayContainer.append(paymentLastAccount)
paymentLastpayContainer.append(paymentLastDelivery)
paymentLastpayContainer.append(paymentLastDiscount)
paymentLastpayContainer.append(paymentLastTotalAccount)
paymentLastpayContainer.append(paymentBtn)
// /payment.html

// (payment1 Modal..)
const paymentModal = document.createElement("div")
const paymentModalBody = document.createElement("div")
const paymentModalBtn = document.createElement("button")
const paymentModalBtnClose = document.createElement("button")

paymentModal.classList.add("payment1-modal")
paymentModalBody.classList.add("payment1-modal-body")
paymentModalBtn.classList.add("payment1-modal-btn")
paymentModalBtnClose.classList.add("payment1-modal-btn-close")

paymentModalBody.innerHTML = "잔액이 부족합니다.<br>계좌를 추가해주세요."
paymentModalBtn.innerHTML = "나중에 없앨 모달버튼"
paymentModalBtnClose.innerHTML = "확인"


document.body.append(paymentModal)
paymentModal.append(paymentModalBody)
// document.body.append(paymentModalBtn)
paymentModalBody.append(paymentModalBtnClose)
// (/payment1 Modal)

// (payment1 Modal JS...)
paymentModalBtn.addEventListener('click',() =>{
  paymentModal.style.display = "block"
  
})
paymentModalBtnClose.addEventListener('click',() =>{
  paymentModal.style.display = "none"
})
// (/payment1 Modal)

//결제버튼!!BTN수정한것
document.querySelector(".payment1-btn").innerText = "결제버튼"
// document.querySelector(".payment-btn").addEventListener('click', ()=> {/*원하시는 콜백함수 아무거나*/})

// span  태그를 만들어서 
// 계좌목록 없음 텍스트를 넣어서
// append 

//추후 수정
if (BankAccountList.length === 0) {
  accountlist.innerHTML =
  `<span>계좌목록이 없습니다</span>`
}


// console.log(BankAccountList)
// 뱅크어카운트 리스트를 순회해서
// 각 요소마다 li 태그를 생성하고
// li 태그에 account 정보를 span태그 안에 넣고
// 원하는 위치에 접목시킨다.
// input(type:radio)를 추가

//li태그 예외처리(type Error처리)
for (let i = 0; i < BankAccountList.length; i++) {
  const liEl = document.createElement('li');
  const radioEl = document.createElement('input');
  radioEl.type = "radio";
  radioEl.name = "accountSelection";
  radioEl.value = BankAccountList[i].balance;
  liEl.appendChild(radioEl);
  const spanEl = document.createElement('span');
  spanEl.innerHTML = `${BankAccountList[i].bankName} ${BankAccountList[i].accountNumber} 잔액:${BankAccountList[i].balance}`;
  liEl.appendChild(spanEl);
  paymentEmtpy.append(liEl);
}




//만약 계좌 잔액이 부족한 경우, ‘잔액이 부족합니다’라는 단순 텍스트 알림만 보여 주어야 한다.
//단일계좌기준
//bankaccount리스트에서 balance값이 상품값보다 부족할경우
//'잔액이 부족합니다'텍스트 출력

function checkBalance(balance, price) {
  if (balance < price) {
    console.log("잔액이 부족합니다");
    return;
  }
}

const totalBalance = accounts.totalBalance;
const productPrice = payments;
checkBalance(totalBalance, productPrice);


//계좌목록 css적용
paymentEmtpy.setAttribute("style", "list-style:none")


//payments 배열로 받아둔 이유. dummy데이터가 list라서 배열로 받았지만 아몰랑 0번쨰로 지정해둠

paymentBtn.addEventListener(('click'),() =>{
//은행잔고금액
  const check_input = document.querySelector('input[name="accountSelection"]:checked')

// 계좌목록 클릭 안했을때 텍스트 출력하기
  if(check_input ==null){
    alert('클릭해주삼')
    return
  }
  

//은행잔고와 상품금액 비교. payments[]<값 비교
  if(check_input.value >= payments[0].product.price) {
    window.location.href = 'paymentDone.html';
    } else{
      paymentModal.style.display = "block"
    }
  
})

//고객이 선택한 은행 잔액 값을 가져와야한다.
//라디오의 value값을 가져오면 됨

//체크를 안했을 때 체크해주세요 메세지 출력
function ex1(){
  //체크상태 확인 
  const checked = document.querySelector('input[name="accountSelection"]').checked;
  
  console.log(checked)
  
  if(checked == null){
    return;
  }
}

//paymentinfo에 payment_dummy데이터를 span태그에 넣어서
//출력되도록 한다.

const payment_span_title = document.createElement('span')
payment_span_title.innerHTML = payments[0].product.title
paymentProductInfo.after(payment_span_title)

const payment_span_price = document.createElement('span')
payment_span_price.innerHTML = payments[0].product.price
paymentProductPrice.after(payment_span_price)


// 로컬스토리지에 있는 토큰값 가져오기
// const res = await fetch(
//   "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks",
//   {
//     method: "GET",
//     headers,
//     accessToken: true
//   }
// );
// const json = await res.json();
// console.log(json);
