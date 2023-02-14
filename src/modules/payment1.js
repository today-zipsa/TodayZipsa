// 뱅크어카운트리스트 는 배열이다.
// 각 요소를 순회하면서, account_list 에 append 시킨다.
// El을 만들어서 순회 후 append를 한다.

// bankAccountList 
// const BankAccountList = bankaccountList.accounts

// 계좌목록 (수정필요)
const accountlist = document.querySelector(".payment1-emtpy")


//payment.html
const paymentOrderpage = document.createElement("div")
const paymentTotal = document.createElement("div")
const paymentOrder = document.createElement("div")
const paymentOrderContainer = document.createElement("div")
const paymentProductInfo  = document.createElement("div")
const paymentProductPrice = document.createElement("div")
const paymentProductCount = document.createElement("div")
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
const paymentEmtpy = document.createElement("div")
const paymentMoney = document.createElement("div")
const paymentLastpayContainer = document.createElement("div")
const paymentLastAccount = document.createElement("div")
const paymentLastDelivery = document.createElement("div")
const paymentLastDiscount = document.createElement("div")
const paymentLastTotalAccount = document.createElement("div")
const paymentBtn = document.createElement("div")

paymentOrderpage.classList.add("payment1-orderpage")
paymentTotal.classList.add("payment1-total")
paymentOrder.classList.add("payment1-order")
paymentOrder.classList.add("payment1-h3")
paymentOrderContainer.classList.add("payment1-order-container")
paymentProductInfo.classList.add("payment1-text")
paymentProductPrice.classList.add("payment1-text")
paymentProductCount.classList.add("payment1-text")
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
paymentEmtpy.innerHTML = "<h4>등록된 계좌가 없습니다</h4>"
paymentMoney.innerHTML = "<h3>결제 금액</h3>"
paymentLastAccount.textContent = "주문금액"
paymentLastDelivery.textContent = "배송비"
paymentLastDiscount.textContent = "상품할인"
paymentLastTotalAccount.textContent = "총 금액"


document.body.append(paymentOrderpage)
document.body.append(paymentTotal)
paymentTotal.append(paymentOrder)
paymentTotal.append(paymentOrderContainer)
paymentOrderContainer.append(paymentProductInfo, paymentProductPrice, paymentProductCount)
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

paymentModalBody.innerHTML = "잔액이 부족합니다"
paymentModalBtn.innerHTML = "나중에 없앨 모달버튼"
paymentModalBtnClose.innerHTML = "확인"


document.body.append(paymentModal)
paymentModal.append(paymentModalBody)
document.body.append(paymentModalBtn)
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
// if (BankAccountList.length === 0) {
//   accountlist.innerHTML =
//   `<span>계좌목록이 없습니다</span>`
// }


// console.log(BankAccountList)
// 뱅크어카운트 리스트를 순회해서
// 각 요소마다 li 태그를 생성하고
// li 태그에 account 정보를 span태그 안에 넣고
// 원하는 위치에 접목시킨다.

//만들어주신것
// const account = document.createElement("span")
// account.innerText = bankaccountList[I] + ...;
// const account = liEl.append(account);
// accountlist.append(liEl);

// 원래 만들었던거 (아래)(추후 수정)
//   for(let i = 0; i < BankAccountList.length ; i ++) {
//     const liEl = document.createElement('li')
//     liEl.innerHTML =
//       `<span>${BankAccountList[i].bankName} ${BankAccountList[i].accountNumber} ${BankAccountList[i].balance}</span>`

//     paymentEmtpy.append(liEl)
// }


//만약 계좌 잔액이 부족한 경우, ‘잔액이 부족합니다’라는 단순 텍스트 알림만 보여 주어야 한다.
//단일계좌기준
//bankaccount리스트에서 balance값이 상품값보다 부족할경우
//'잔액이 부족합니다'텍스트 출력

// 아래주석은 원래 만들어봤던 코드...
// if(BankAccountList.balance < productdetailinfo.price){
//   "잔액이 부족합니다"
// }
function checkBalance(balance, price) {
  if (balance < price) {
    console.log("잔액이 부족합니다");
    return;
  }
  // Add other code here if the balance is sufficient
}

const totalBalance = bankaccountList.totalBalance;
const productPrice = productdetailinfo.price;
checkBalance(totalBalance, productPrice);



// 제품목록
// 쓸 데이터는 price, thumbnail, title

const { price, thumbnail, title } = productdetailinfo

console.log(price, thumbnail, title)