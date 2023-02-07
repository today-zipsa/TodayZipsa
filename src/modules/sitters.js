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
             "title": "서초구 잠원동",
             "price": 35000,
             "description": "서초구 잠원동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "sitter_one.jpg",
             "photoBase64": "five_five.jpg"
 
         },
         {
             "title": "서초구 방배동",
             "price": 35000,
             "description": "서초구 방배동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "sitter_two.jpg",
             "photoBase64": "one_one.jpg"
         },
         {
             "title": "강남구 도곡동",
             "price": 45000,
             "description": "강남구 도곡동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "sitter_three.jpg",
             "photoBase64": "two_two.jpg"
         },
         {
 
             "title": "강남구 청담동",
             "price": 60000,
             "description": "강남구 청담동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "sitter_four.jpg",
             "photoBase64": "three_three.jpg"
         },
         {
             "title": "송파구 방이동",
             "price": 30000,
             "description": "송파구 방이동 최고의 시터입니다.",
             "tags": [],
             "thumbnailBase64": "sitter_five.jpg",
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
    let pics = ["sitter_one.jpg", "sitter_two.jpg", "sitter_three.jpg", "sitter_four.jpg", "sitter_five.jpg"]
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
            div.style.border = "3px solid black"
            div.textContent = json[i].title

            const priceEl = document.createElement("button")
            priceEl.textContent = json[i].price
            priceEl.style.color = "green"
            div.append(priceEl)

            const desc = document.createElement("p")
            desc.textContent = json[i].description
            div.append(desc)

            let imgEl = document.createElement("img")
            imgEl.src = pics[i]
            imgEl.style.width = "300px"
            imgEl.style.height = "120px"
            imgEl.style.margin = "0px 400px 100px"
            div.append(imgEl)
        }
    }
}
        

            /*
            const deleteBtn = document.createElement("button")
            deleteBtn.textContent = "삭제"
            deleteBtn.addEventListener("click", function(){
                deleteSitters(json[i].id)
            })
            div.append(deleteBtn)
        

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
            
           
            div.style.backgroundColor = "yellow"
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
*/
