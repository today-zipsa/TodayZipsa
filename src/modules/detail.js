

let headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlc3hyc0RsVW5USHkxRmpsdnZUIiwiaWF0IjoxNjc1NjkyNTI4LCJleHAiOjE2NzU3Nzg5MjgsImlzcyI6InRoZXNlY29uQGdtYWlsLmNvbSJ9.8VvD-JwUEt-YJ7LfG8P3vBZd3Zskc_1G7FJemxuJWTo",
    "content-type": "application/json",
    "apikey": "FcKdtJs202301",
    "username": "KDT4_Team4",
    "masterKey": true
}


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

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