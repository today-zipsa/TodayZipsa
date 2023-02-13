

let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4_01",
    "masterKey": true
}

const modal = document.getElementById("modal");

const sitterEl = document.querySelector(".search-bar")
const btn = document.querySelector(".btn")
const search = document.querySelector(".search-btn")
const get = document.querySelector(".getBtn")

let inputValue = ''
sitterEl.addEventListener("input", function(e){
    e.preventDefault()
    inputValue = e.target.value
})
btn.addEventListener("click", function(){
    addSitters()
})

search.addEventListener("click", function(){
    getSitters()
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
             "title": "강남구 청담동 A",
             "price": 35000,
             "description": "강남구 청담동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/sitterImg/1_1.png"
 
         },
         {
             "title": "강남구 청담동 B",
             "price": 35000,
             "description": "강남구 청담동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/sitterImg/1_1.png"
         },
         {
             "title": "강남구 청담동 C",
             "price": 45000,
             "description": "강남구 청담동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/sitterImg/1_1.png"
         },
         {
 
             "title": "강남구 청담동 D",
             "price": 60000,
             "description": "강남구 청담동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/sitterImg/1_1.png"
         },
         {
             "title": "강남구 청담동 E",
             "price": 30000,
             "description": "강남구 청담동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/sitterImg/1_1.png"
         },
         {
            "title": "강남구 압구정동 A",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_1.png"
        },
        {
            "title": "강남구 압구정동 B",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_6.jpg"
        },
        {
            "title": "강남구 압구정동 C",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_7.jpeg"
        },
        {
            "title": "강남구 압구정동 D",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_8.jpeg"
        },
        {
            "title": "강남구 압구정동 E",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_9.png"
        },
        {
            "title": "강남구 신사동 A",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_10.jpeg"
        },
        {
            "title": "강남구 신사동 B",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_11.jpeg"
        },
        {
            "title": "강남구 신사동 C",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_12.jpg"
        },
        {
            "title": "강남구 신사동 D",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_13.jpeg"
        },{
            "title": "강남구 신사동 E",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_14.jpeg"
        },
        {
            "title": "강남구 도곡동 A",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_15.jpg"
        },
        {
            "title": "강남구 도곡동 B",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_16.jpg"
        },{
            "title": "강남구 도곡동 C",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_17.jpeg"
        },
        {
            "title": "강남구 도곡동 D",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_18.jpeg"
        },
        {
            "title": "강남구 도곡동 E",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_19.jpg"
        },{
            "title": "강남구 역삼동 A",
            "price": 30000,
            "description": "강남구 청담동 최고의 시터입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/sitterImg/1_20.jpeg"
        }
     ]
 }


 async function getSitters(){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",{
        method: "GET",
        headers
    })
    let pics = ["../asset/sitterImg/1_2.png", "../asset/sitterImg/1_3.png", "../asset/sitterImg/1_4.png", "../asset/sitterImg/1_6.jpg", "../asset/sitterImg/1_7.jpeg","../asset/sitterImg/1_8.jpeg","../asset/sitterImg/1_9.png","../asset/sitterImg/1_10.jpeg","../asset/sitterImg/1_11.jpeg","../asset/sitterImg/1_12.jpg","../asset/sitterImg/1_13.jpeg","../asset/sitterImg/1_4.jpeg","../asset/sitterImg/1_15.jpg","../asset/sitterImg/1_16.jpg","../asset/sitterImg/1_17.jpeg","../asset/sitterImg/1_18.jpeg","../asset/sitterImg/1_19.jpg","../asset/sitterImg/1_20.jpeg" ]
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
                localStorage.setItem("var4", json[i].price)
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
            
            document.body.append(div)

        
        }
    

    }
    
}

