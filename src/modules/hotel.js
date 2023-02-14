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


btn.addEventListener("click", function(){
    addSitters()
})


get.addEventListener("click", function(){
    seeSitters()
})


async function deleteSitters(todoId){
    
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${todoId}`,{
        method: "DELETE",
        headers
    })
    const json = await res.json()
    console.log(json)
    
}

async function seeSitters(){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",{
        method: "GET",
        headers
    })
    const json = await res.json()
    console.log(json)
}



async function addSitters(){
    for(let i=0; i<data["list"].length; i++){
        const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products", {
            method: "POST",
            headers,
            body: JSON.stringify({
                title: data["list"][i].title,
                price: data["list"][i].price,
                description: data["list"][i].description,
                thumbnail: data["list"][i].thumbnailBase64
           })
           })
           const json = await res.json()
           console.log(json)
        }
    }

let data = {
    "list": [
         {
             "title": "힐튼 호텔",
             "price": 350000,
             "description": "힐튼 호텔 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/hotelImg/2_1.png",
             "photoBase64": "five_five.jpg"
 
         },
         {
             "title": "힐튼 호텔 A",
             "price": 350000,
             "description": "하이야트 호텔 입니다..",
             "tags": [],
             "thumbnailBase64": "../asset/hotelImg/2_2.png",
             "photoBase64": "one_one.jpg"
         },
         {
             "title": "힐튼 호텔 B",
             "price": 450000,
             "description": "메리어트 호텔 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/hotelImg/2_3.png",
             "photoBase64": "two_two.jpg"
         },
         {
 
             "title": "힐튼 호텔 C",
             "price": 600000,
             "description": "조선 호텔 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/hotelImg/2_4.png",
             "photoBase64": "three_three.jpg"
         },
         {
             "title": "힐튼 호텔 D",
             "price": 300000,
             "description": "신라 호텔 입니다..",
             "tags": [],
             "thumbnailBase64": "../asset/hotelImg/2_5.png",
             "photoBase64": "four_four.jpg"
         },
         {
            "title": "힐튼 호텔 E",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_6.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "신라 호텔 A",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_7.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "신라 호텔 B",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_8.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "신라 호텔 C",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_9.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "신라 호텔 D",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_10.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "신라 호텔 E",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_11.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "조선 호텔 A",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_12.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "조선 호텔 B",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_13.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "조선 호텔 C",
            "price": 300000, 
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_14.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "조선 호텔 D",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_15.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "조선 호텔 E",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_16.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "메리어트 호텔 A",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_17.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "메리어트 호텔 B",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_18.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "메리어트 호텔 C",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_19.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "메리어트 호텔 D",
            "price": 300000,
            "description": "신라 호텔 입니다..",
            "tags": [],
            "thumbnailBase64": "../asset/hotelImg/2_20.jpg",
            "photoBase64": "four_four.jpg"
        }
     ]
 }
 /*
 async function getSitters(){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",{
        method: "GET",
        headers
    })
    const items = []
    const json = await res.json()
    json.forEach(item => {
        if(items.includes(item.title)) return
        if(item.title === inputValue){
            items.push(item.title)
            const div = document.createElement("div")
            div.classList.add(".container")
            div.style.height = "200px"
            div.style.width = "800px"
            div.style.margin = "20px 300px"
            div.style.border = "3px solid black"
            div.textContent = item.title

            const priceEl = document.createElement("button")
            priceEl.textContent = item.price
            priceEl.style.color = "green"
            div.append(priceEl)

            const desc = document.createElement("p")
            desc.textContent = item.description
            div.append(desc)
        
            div.style.backgroundColor = "yellow"
            document.body.append(div)
        }
    })
 }
*/

/*
async function getSitters(){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",{
        method: "GET",
        headers,
        
    })
    let pics = ["../asset/hotelImg/2_1.png", "../asset/hotelImg/2_2.png", "../asset/hotelImg/2_3.png", "../asset/hotelImg/2_4.jpg", "../asset/hotelImg/2_5.png","../asset/hotelImg/2_6.jpg","../asset/hotelImg/2_7.jpg","../asset/hotelImg/2_8.jpg","../asset/hotelImg/2_9.jpg","../asset/hotelImg/2_10.jpg","../asset/hotelImg/2_11.jpg","../asset/hotelImg/2_12.jpg","../asset/hotelImg/2_13.jpg","../asset/hotelImg/2_14.jpg","../asset/hotelImg/2_15.jpg","../asset/hotelImg/2_16.jpg","../asset/hotelImg/2_17.jpg","../asset/hotelImg/2_18.jpg","../asset/hotelImg/2_19.jpg","../asset/hotelImg/2_20.jpg" ]
    const items = []
    const json = await res.json()
    for(let i=0; i<json.length; i++){
        if(items.includes(json[i].title)) return
        //if(json[i].title === inputValue){
        if(json[i].title.includes(inputValue)){
            items.push(json[i].title)
            const div = document.createElement("div")
            div.classList.add(".container")
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
            title.textContent = json[i].title
            title.style.marginLeft = "300px"
            title.style.marginTop = "-120px"
            div.append(title)

            const desc = document.createElement("p")
            desc.style.marginLeft = "300px"
            desc.style.marginTop = "30px"
            desc.textContent = json[i].description
            div.append(desc)

            const purchaseImm = document.createElement("button")
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


        
            /*
            const deleteBtn = document.createElement("button")
            deleteBtn.textContent = "삭제"
            deleteBtn.addEventListener("click", function(){
                deleteSitters(json[i].id)
            })
            div.append(deleteBtn)
            */
        
            /*
            const inputEl2 = document.createElement("button")
            inputEl2.textContent = "수정"
            div.append(inputEl2)
            

            let inp = ''
            inputEl2.addEventListener("click", function(){
                const inputField = document.createElement("input")
                div.append(inputField)
                const buttonEl = document.createElement("button")
                buttonEl.textContent = "수정완료"
                div.append(buttonEl)

                inputField.addEventListener("input", function(e){
                    inp = e.target.value
                })
                buttonEl.addEventListener("click", function(){
                    //desc.textContent = inp
                    updateSitters(json[i], desc, inp)
                })
            })
            */
            
            /*
            document.body.append(div)

        
        }
    

    }
    
}
*/

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
        body: JSON.stringify({searchText : `${searchText}`})

    })

    const json = await res.json()
    const result = json.map(item => item)
    console.log(result)


    const items = []
    let pics = ["asset/hotelImg/2_1.png", "asset/hotelImg/2_2.png", "asset/hotelImg/2_3.png", "asset/hotelImg/2_4.jpg", "asset/hotelImg/2_5.png","asset/hotelImg/2_6.jpg","asset/hotelImg/2_7.jpg","asset/hotelImg/2_8.jpg","asset/hotelImg/2_9.jpg","asset/hotelImg/2_10.jpg","asset/hotelImg/2_11.jpg","asset/hotelImg/2_12.jpg","asset/hotelImg/2_13.jpg","asset/hotelImg/2_14.jpg","asset/hotelImg/2_15.jpg","asset/hotelImg/2_16.jpg","asset/hotelImg/2_17.jpg","asset/hotelImg/2_18.jpg","asset/hotelImg/2_19.jpg","asset/hotelImg/2_20.jpg" ]

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


