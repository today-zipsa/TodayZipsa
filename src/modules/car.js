let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4_02",
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
             "title": "BMW",
             "price": 350000,
             "description": "BMW 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/carImg/4_1.png",
             "photoBase64": "five_five.jpg"
 
         },
         {
             "title": "BMW A",
             "price": 350000,
             "description": "BMW A 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/carImg4_2.png",
             "photoBase64": "one_one.jpg"
         },
         {
             "title": "BMW B",
             "price": 450000,
             "description": "BMW B 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/carImg4_3.png",
             "photoBase64": "two_two.jpg"
         },
         {
 
             "title": "BMW C",
             "price": 600000,
             "description": "BMW C 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/carImg4_4.png",
             "photoBase64": "three_three.jpg"
         },
         {
             "title": "BMW D",
             "price": 300000,
             "description": "BMW D 입니다.",
             "tags": [],
             "thumbnailBase64": "../asset/carImg4_5.png",
             "photoBase64": "four_four.jpg"
         },
         {
            "title": "Lexus A",
            "price": 300000,
            "description": "Lexus 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_6.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Lexus B",
            "price": 300000,
            "description": "Lexus B 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_7.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Lexus C",
            "price": 300000,
            "description": "Lexus C 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_8.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Lexus D",
            "price": 300000,
            "description": "Lexus D 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg/4_9.jpg",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Benz A",
            "price": 300000,
            "description": "Benz A 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_10.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Benz B",
            "price": 300000,
            "description": "Benz B 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_11.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Benz C",
            "price": 300000,
            "description": "Benz C 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_12.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Benz D",
            "price": 300000,
            "description": "Benz D 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_13.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Audi A",
            "price": 300000,
            "description": "Audi A 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_14.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Audi B",
            "price": 300000,
            "description": "Audi B 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_15.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Audi C",
            "price": 300000,
            "description": "Audi C 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_16.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Audi D",
            "price": 300000,
            "description": "Audi D 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_17.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Sonata A",
            "price": 300000,
            "description": "Sonata A 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_18.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Avante A",
            "price": 300000,
            "description": "Avante A 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_19.png",
            "photoBase64": "four_four.jpg"
        },
        {
            "title": "Carnival A",
            "price": 300000,
            "description": "Carnival A 입니다.",
            "tags": [],
            "thumbnailBase64": "../asset/carImg4_20.png",
            "photoBase64": "four_four.jpg"
        }

     ]
 }
 async function getSitters(){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",{
        method: "GET",
        headers
    })
    let pics = ["../asset/carImg/4_1.png", "../asset/carImg/4_2.png", "../asset/carImg/4_3.png", "../asset/carImg/4_4.png", "../asset/carImg/4_5.jpeg","../asset/carImg/4_6.jpg","../asset/carImg/4_7.jpg","../asset/carImg/4_8.png","../asset/carImg/4_9.jpg","../asset/carImg/4_10.jpg","../asset/carImg/4_11.jpg","../asset/carImg/4_12.jpg","../asset/carImg/4_13.jpg","../asset/carImg/4_14.jpg","../asset/carImg/4_15.jpeg","../asset/carImg/4_16.jpeg","../asset/carImg/4_17.jpg","../asset/carImg/4_18.png","../asset/carImg/4_19.png","../asset/carImg/4_20.png" ]
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
            
            document.body.append(div)

        
        }
    

    }
    
}

