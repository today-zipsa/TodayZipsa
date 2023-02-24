const header = document.createElement('header');
header.classList.add("header")

const headerWrapper = document.createElement('div');
headerWrapper.classList.add('header-wrapper');

const mainLogo = document.createElement('img');
mainLogo.setAttribute('src', '../asset/global/main-logo.png');
mainLogo.setAttribute('alt', '../main-logo');
mainLogo.classList.add('main-logo');

const searchBtnWrapper = document.createElement('div');
searchBtnWrapper.classList.add('search-btn-wrapper');

let searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('placeholder', '검색어를 입력해주세요.');
searchBar.classList.add('search-bar');

let inputValue = ''
searchBar.addEventListener("input", function (e) {
    e.preventDefault()
    inputValue = e.target.value
})

const searchBtn = document.createElement('img');
searchBtn.setAttribute('src', '../asset/btnImg/search_btn.png');
searchBtn.setAttribute('alt', 'search-btn');
searchBtn.classList.add('search-btn');

searchBtn.addEventListener("click", function () {
    if(inputValue){
        getSitters(inputValue, 1)
    }
})



searchBtnWrapper.appendChild(searchBar);
searchBtnWrapper.appendChild(searchBtn);

const welcomeWord = document.createElement('span');
welcomeWord.classList.add('welcome-word');
welcomeWord.textContent = '반가워요, 집사님!';

const logout = document.createElement('span');
logout.classList.add('logout');
logout.textContent = '로그아웃';

headerWrapper.appendChild(mainLogo);
headerWrapper.appendChild(searchBtnWrapper);
headerWrapper.appendChild(welcomeWord);
headerWrapper.appendChild(logout);

header.appendChild(headerWrapper);

document.body.appendChild(header);

const swiperContainer = document.createElement('div');
swiperContainer.classList.add('swiper-container');

const swiperWrapper = document.createElement('div');
swiperWrapper.classList.add('swiper-wrapper');

const swiperSlide1 = document.createElement('div');
swiperSlide1.classList.add('swiper-slide');
const img1 = document.createElement('img');
img1.setAttribute('src', '../asset/swiper1.jpg');
swiperSlide1.appendChild(img1);

const swiperSlide2 = document.createElement('div');
swiperSlide2.classList.add('swiper-slide');
const img2 = document.createElement('img');
img2.setAttribute('src', '../asset/swiper2.jpg');
swiperSlide2.appendChild(img2);

const swiperSlide3 = document.createElement('div');
swiperSlide3.classList.add('swiper-slide');
const img3 = document.createElement('img');
img3.setAttribute('src', '../asset/swiper3.jpg');
swiperSlide3.appendChild(img3);

swiperWrapper.appendChild(swiperSlide1);
swiperWrapper.appendChild(swiperSlide2);
swiperWrapper.appendChild(swiperSlide3);

const swiperButtonNext = document.createElement('div');
swiperButtonNext.classList.add('swiper-button-next');

const swiperButtonPrev = document.createElement('div');
swiperButtonPrev.classList.add('swiper-button-prev');

swiperContainer.appendChild(swiperWrapper);
swiperContainer.appendChild(swiperButtonNext);
swiperContainer.appendChild(swiperButtonPrev);

document.body.appendChild(swiperContainer);

new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

let modal = document.createElement('div');
modal.setAttribute('id', 'modal');
const modalText = document.createElement('p');
modalText.textContent = '로그인 하시겠습니까?';
const modalYesBtn = document.createElement('button');
modalYesBtn.classList.add('yes');
modalYesBtn.textContent = '네';
const modalNoBtn = document.createElement('button');
modalNoBtn.classList.add('no');
modalNoBtn.textContent = '아니오';

modal.appendChild(modalText);
modal.appendChild(modalYesBtn);
modal.appendChild(modalNoBtn);

document.body.appendChild(modal);

const categories = document.createElement('div');
categories.classList.add('categories');

const hotelCategory = document.createElement('h2');
hotelCategory.classList.add('hotel');
hotelCategory.setAttribute('onclick', "window.location.href='../pages/hotel.html'");
hotelCategory.textContent = '호텔';

const rentalCategory = document.createElement('h2');
rentalCategory.classList.add('rental');
rentalCategory.setAttribute('onclick', "window.location.href='../pages/rental.html'");
rentalCategory.textContent = '카렌트';

const sitterCategory = document.createElement('h2');
sitterCategory.classList.add('sitter');
sitterCategory.setAttribute('onclick', "window.location.href='../pages/sitters.html'");
sitterCategory.style.color = 'red';
sitterCategory.textContent = '펫시터';

const spaCategory = document.createElement('h2');
spaCategory.classList.add('snack');
spaCategory.setAttribute('onclick', "window.location.href='../pages/spa.html'");
spaCategory.textContent = '펫스파';


categories.appendChild(hotelCategory);
categories.appendChild(rentalCategory);
categories.appendChild(sitterCategory)
categories.appendChild(spaCategory)

document.body.append(categories)

const products = document.createElement('div');
products.classList.add('products');

const one = document.createElement('div');
one.classList.add('one');

products.appendChild(one);


let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4",
    "masterKey": true
}

//const modal = document.getElementById("modal");

//const sitterEl = document.querySelector(".search-bar")
const btn = document.querySelector(".btn")
//const search = document.querySelector(".search-btn")
const get = document.querySelector(".getBtn")

//const res = await request("PRD08", { searchTags: ["가전"] });

btn.addEventListener("click", function () {
    addSitters()
})


get.addEventListener("click", function () {
    seeSitters()
})


async function deleteSitters(todoId) {

    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${todoId}`, {
        method: "DELETE",
        headers
    })
    const json = await res.json()
    console.log(json)

}

async function seeSitters() {
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products", {
        method: "GET",
        headers
    })
    const json = await res.json()
    console.log(json)
}


async function getSitters(searchText, pageNumber){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search", {
        method: "POST",
        headers,
        body: JSON.stringify({searchText : `${searchText}` , searchTags: ['펫시터']})

    })

    const json = await res.json()
    const result = json.map(item => item)
    console.log(result)


    const items = []

    const itemsPerPage = 2
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage


    for (let i = startIndex; i < endIndex && i < json.length; i++) {
        if (items.includes(json[i].title)) return
        if (json[i].title.includes(searchText)) {
            items.push(json[i].title)
            const div = document.createElement("div")
            div.classList.add("container")
            // div.style.height = "200px"
            // div.style.width = "800px"
            // div.style.margin = "20px 300px"
            // div.style.borderTop = "1px solid lightgrey"
            // div.style.borderBottom = "1px solid lightgrey"

            imgEl = document.createElement("img")
            imgEl.classList.add("mainImg")
            imgEl.src = json[i].thumbnail
            // imgEl.style.width = "270px"
            // imgEl.style.height = "120px"
            // imgEl.style.marginLeft = "20px"
            // imgEl.style.marginTop = "42px"
            div.append(imgEl)

            const aTag = document.createElement("a")
            aTag.href = "/detail"
            imgEl.addEventListener("click", function(){
                location.replace(aTag.href +"?id=" + json[i].id)
            })

            // imgEl.addEventListener("click", function(){
            //     window.location.href = "../pages/detail.html?id=" + json[i].id
            //   });
            // imgEl.addEventListener("click", function(e){
            //     localStorage.setItem("variable", e.target.src);
            //     localStorage.setItem("var2", json[i].title)
            //     localStorage.setItem("var3", json[i].description)
            //     window.location.href = "pages/detail.html"
                
// });

            const title = document.createElement("h4")
            title.classList.add("titleEl")
            title.textContent = json[i].title
            // title.style.marginLeft = "300px"
            // title.style.marginTop = "-120px"
            div.append(title)

            const desc = document.createElement("p")
            desc.classList.add("desc")
            // desc.style.marginLeft = "300px"
            // desc.style.marginTop = "30px"
            desc.textContent = json[i].description
            div.append(desc)

            const purchaseImm = document.createElement("button")
            purchaseImm.classList.add("baro")
            purchaseImm.textContent = "바로구매"
            // purchaseImm.style.marginLeft = "700px"
            // purchaseImm.style.marginBottom = "-100px"
            div.append(purchaseImm)
            purchaseImm.addEventListener("click", function(){
                modal.style.display = "block";
                document.querySelector(".yes").addEventListener("click", function(){
                    window.location.href = "../pages/login.html"
                })
                document.querySelector(".no").addEventListener("click", function(){
                    modal.style.display = "none"
                })
            })

            const priceEl = document.createElement("button")
            priceEl.classList.add("price")
            priceEl.textContent = json[i].price + " KRW"
            // priceEl.style.marginLeft = "640px"
            // priceEl.style.marginTop = "20px"
            // priceEl.style.width = "130px"
            // priceEl.style.height = "35px"
            // priceEl.style.backgroundColor = "green"
            // priceEl.style.color = "white"
            div.append(priceEl)
            priceEl.addEventListener("click", function(){
                window.location.href = "../pages/payment1.html"
            })


            document.body.append(div)
        }
    }
    const pagesCount = Math.ceil(json.length / itemsPerPage)
    const paginationDiv = document.createElement("div")

    paginationDiv.style.position = "absolute";
    paginationDiv.style.top = "950px";
    paginationDiv.style.left = "720px";

    for (let i = 1; i <= pagesCount; i++) {
        const buttonEl = document.createElement("button")
        buttonEl.textContent = i
        if (i === pageNumber) buttonEl.disabled = true
        buttonEl.addEventListener("click", function () {
            document.querySelectorAll(".container").forEach(item => item.remove())
            getHotels(inputValue, i)
            //paginationDiv.style.position = "fixed"
        })
        //paginationDiv.style.marginLeft = "600px"
        paginationDiv.append(buttonEl)
    }

    document.body.append(paginationDiv)
}


// var mySwiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });