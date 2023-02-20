const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


const title = document.createElement("title");
const head = document.createElement("head");
const body = document.createElement("body");
const header = document.createElement("header");
const divHeader = document.createElement("div");
const img = document.createElement("img");
const divSearch = document.createElement("div");
const input = document.createElement("input");
const imgSearch = document.createElement("img");
const spanWelcome = document.createElement("span");
const spanLogout = document.createElement("span");
const h1 = document.createElement("h1");
const h4 = document.createElement("h4");
const divProduct = document.createElement("div");

divHeader.classList.add("header-wrapper")
divSearch.classList.add("search-btn-wrapper")

title.textContent = "오늘의집사";
head.appendChild(title);
document.body.appendChild(head);

header.classList.add("header")

img.src = "../asset/main-logo.png";
img.alt = "main-logo";
img.classList.add("main-logo");
divHeader.appendChild(img);

input.type = "text";
input.classList.add("search-bar");
input.placeholder = "검색어를 입력해주세요.";
divSearch.appendChild(input);

imgSearch.src = "../asset/search-btn.png";
imgSearch.alt = "search-btn";
imgSearch.classList.add("search-btn");
divSearch.appendChild(imgSearch);
divHeader.appendChild(divSearch);

spanWelcome.textContent = "반가워요, 집사님!";
divHeader.appendChild(spanWelcome);

spanLogout.textContent = "로그아웃";
divHeader.appendChild(spanLogout);
header.appendChild(divHeader);
body.appendChild(header);

h1.textContent = "Product Details";
h1.classList.add("details");
body.appendChild(h1);

h4.textContent = "Home Pages Product Details";
h4.classList.add("det2");
body.appendChild(h4);

divProduct.classList.add("product");
body.appendChild(divProduct);

document.body.appendChild(body);

let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4",
    "masterKey": true
}

getSitters(id)

async function getSitters(id){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search", {
        method: "POST",
        headers,
        body: JSON.stringify({id: id})
    });
    const json = await res.json();
    const data = json.find(item => item.id === id);
   
    const detailImg = document.createElement("img")
    detailImg.src = data.thumbnail
    detailImg.classList.add("detailImg")
    document.body.append(detailImg)

    const newTitle = document.createElement("h2")
    newTitle.textContent = data.title
    newTitle.classList.add("newTitle")
    // newTitle.style.marginTop = "-260px"
    // newTitle.style.marginLeft = "620px"
    // newTitle.style.fontSize = "32px"
    document.body.append(newTitle)

    const newDesc = document.createElement("h3")
    newDesc.textContent = data.description
    newDesc.classList.add("newDesc")
    // newDesc.style.marginLeft = "620px"
    // newDesc.style.marginTop = "20px"
    document.body.append(newDesc)

    const priceEl1 = document.createElement("h1")
    priceEl1.textContent = data.price + "원"
    priceEl1.classList.add("priceEl")
    // priceEl1.style.marginTop = "30px"
    // priceEl1.style.marginLeft = "620px"
    // priceEl1.style.fontSize = "35px"
    document.body.append(priceEl1)

}