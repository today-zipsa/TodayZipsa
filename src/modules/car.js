let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4",
    "masterKey": true
}

const sitterEl = document.querySelector(".sitterInput")
const btn = document.querySelector(".btn")
const search = document.querySelector(".searchBtn")
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
            "thumbnailBase64": "../asset/carImg4_9.png",
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


async function getSitters(){
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",{
        method: "GET",
        headers
    })
    let pics = ["../asset/sitterImg/1_1.png", "../asset/sitterImg/1_1.png", "../asset/sitterImg/1_1.png", "../sitterImg/asset/1_1.png", "../asset/sitterImg/1_1.png"]
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

            const title = document.createElement("h4")
            title.textContent = json[i].title
            title.style.marginLeft = "300px"
            title.style.marginTop = "55px"
            div.append(title)

            const priceEl = document.createElement("button")
            priceEl.textContent = json[i].price + " KRW"
            priceEl.style.marginLeft = "640px"
            priceEl.style.marginTop = "50px"
            priceEl.style.width = "130px"
            priceEl.style.height = "35px"
            priceEl.style.backgroundColor = "green"
            priceEl.style.color = "white"
            div.append(priceEl)
            priceEl.addEventListener("click", function(){
                window.location.href = "../pages/payment1.html"
            })

            const desc = document.createElement("p")
            desc.style.marginLeft = "300px"
            desc.style.marginTop = "-100px"
            desc.textContent = json[i].description
            div.append(desc)

            let imgEl = document.createElement("img")
            imgEl.src = pics[i]
            imgEl.style.width = "270px"
            imgEl.style.height = "120px"
            imgEl.style.marginLeft = "20px"
            imgEl.style.marginTop = "-102px"
            div.append(imgEl)
        
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


async function updateSitters(product, desc, inp){
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${product.id}`,{
        method: "PUT",
        headers,
        body: JSON.stringify({
            description: `${inp}`,
            done: product.done
        })
    })
    desc.textContent = inp
   
}

