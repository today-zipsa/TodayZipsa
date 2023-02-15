let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4",
    "masterKey": true
}

const modal = document.getElementById("modal");

const sitterEl = document.querySelector(".search-bar")
const btn = document.querySelector(".btn")
const search = document.querySelector(".search-btn")
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


async function addSitters() {
    for (let i = 0; i < data["list"].length; i++) {
        const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products", {
            method: "POST",
            headers,
            body: JSON.stringify({
                title: data["list"][i].title,
                price: data["list"][i].price,
                description: data["list"][i].description,
                tags: data["list"][i].tags,
                thumbnail: data["list"][i].thumbnailBase64
            })
        })
        const json = await res.json()
        console.log(json)
    }
}




let inputValue = ''
sitterEl.addEventListener("input", function (e) {
    e.preventDefault()
    inputValue = e.target.value
})

search.addEventListener("click", function () {
    if(inputValue){
        getSitters(inputValue, 1)
    }
})


async function getSitters(searchText, pageNumber){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search", {
        method: "POST",
        headers,
        body: JSON.stringify({searchText : `${searchText}` /*, searchTags: ['프리미엄']*/})

    })

    const json = await res.json()
    const result = json.map(item => item)
    console.log(result)


    const items = []
    let pics = ["../asset/sitterImg/1_2.png", "../asset/sitterImg/1_3.png", "../asset/sitterImg/1_4.png", "../asset/sitterImg/1_6.jpg", "../asset/sitterImg/1_7.jpeg", "../asset/sitterImg/1_8.jpeg", "../asset/sitterImg/1_9.png", "../asset/sitterImg/1_10.jpeg", "../asset/sitterImg/1_11.jpeg", "../asset/sitterImg/1_12.jpg", "../asset/sitterImg/1_13.jpeg", "../asset/sitterImg/1_4.jpeg", "../asset/sitterImg/1_15.jpg", "../asset/sitterImg/1_16.jpg", "../asset/sitterImg/1_17.jpeg", "../asset/sitterImg/1_18.jpeg", "../asset/sitterImg/1_19.jpg", "../asset/sitterImg/1_20.jpeg"]

    const itemsPerPage = 4
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage


    for (let i = startIndex; i < endIndex && i < json.length; i++) {
        if (items.includes(json[i].title)) return
        if (json[i].title.includes(searchText)) {
            items.push(json[i].title)
            const div = document.createElement("div")
            div.classList.add("container")
            div.style.height = "200px"
            div.style.width = "800px"
            div.style.margin = "20px 300px"
            div.style.borderTop = "1px solid lightgrey"
            div.style.borderBottom = "1px solid lightgrey"

            imgEl = document.createElement("img")
            imgEl.src = pics[items.length-1]
            imgEl.style.width = "270px"
            imgEl.style.height = "120px"
            imgEl.style.marginLeft = "20px"
            imgEl.style.marginTop = "42px"
            div.append(imgEl)

            imgEl.addEventListener("click", function(e){
                localStorage.setItem("variable", e.target.src);
                localStorage.setItem("var2", json[i].title)
                localStorage.setItem("var3", json[i].description)
                window.location.href = "../pages/detail.html";
                
});

            const title = document.createElement("h4")
            title.classList.add("titleEl")
            title.textContent = json[i].title
            title.classList.add("title")
            title.style.marginLeft = "300px"
            title.style.marginTop = "-120px"
            div.append(title)

            const desc = document.createElement("p")
            desc.style.marginLeft = "300px"
            desc.style.marginTop = "30px"
            desc.textContent = json[i].description
            div.append(desc)

            const purchaseImm = document.createElement("button")
            purchaseImm.classList.add("baro")
            purchaseImm.textContent = "바로구매"
            purchaseImm.style.marginLeft = "700px"
            purchaseImm.style.marginBottom = "-100px"
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
            priceEl.style.marginLeft = "640px"
            priceEl.style.marginTop = "20px"
            priceEl.style.width = "130px"
            priceEl.style.height = "35px"
            priceEl.style.backgroundColor = "green"
            priceEl.style.color = "white"
            div.append(priceEl)
            priceEl.addEventListener("click", function(){
                window.location.href = "../pages/payment1.html"
            })


            document.body.append(div)
        }
    }
    //const pagesCount = Math.ceil(json.length / itemsPerPage)
    const paginationDiv = document.createElement("div")
    for (let i = 1; i <= 10; i++) {
        const buttonEl = document.createElement("button")
        buttonEl.textContent = i
        if (i === pageNumber) buttonEl.disabled = true
        buttonEl.addEventListener("click", function () {
            document.querySelectorAll(".container").forEach(item => item.remove())
            getSitters(inputValue, i)
            paginationDiv.style.position = "fixed"
        })
        paginationDiv.style.marginLeft = "600px"
        paginationDiv.append(buttonEl)
    }

    document.body.append(paginationDiv)
}


var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });