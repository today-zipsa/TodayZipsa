let variable = localStorage.getItem("variable");
let variable2 = localStorage.getItem("var2");
let variable3 = localStorage.getItem("var3");
let variable4 = localStorage.getItem("var4")


const newImg = document.createElement("img")
newImg.src = variable
newImg.style.width = "390px"
newImg.style.height = "300px"
newImg.style.marginTop = "100px"
newImg.style.marginLeft = "200px"
document.body.append(newImg)

const newTitle = document.createElement("h2")
newTitle.textContent = variable2
newTitle.style.marginTop = "-260px"
newTitle.style.marginLeft = "620px"
newTitle.style.fontSize = "32px"
document.body.append(newTitle)

const newDesc = document.createElement("h3")
newDesc.textContent = variable3
newDesc.style.marginLeft = "620px"
newDesc.style.marginTop = "20px"
document.body.append(newDesc)

const priceEl1 = document.createElement("h1")
priceEl1.textContent = variable4 + "원"
priceEl1.style.marginTop = "30px"
priceEl1.style.marginLeft = "620px"
priceEl1.style.fontSize = "35px"
document.body.append(priceEl1)

