import { request } from "../../api/common";

export default function detailPage(strProductId) {
  console.log("strProductId>>> ", strProductId);

  const datailPage = document.createElement("div");
  const detailImgEl1 = document.createElement("img");
  const detailImgEl2 = document.createElement("img");
  const detailTitle = document.createElement("div");
  const detailDesc = document.createElement("p");
  const detailPrice = document.createElement("h2");

  const buyProduct = document.createElement("button")


  detailImgEl1.style.width = "300px"
  detailImgEl1.style.height = "300px"
  detailImgEl1.style.margin = "200px 200px"


  detailImgEl2.style.width = "100px"
  detailImgEl2.style.height = "100px"
  detailImgEl2.style.position = "absolute"
  detailImgEl2.style.margin = "550px -390px"

  detailTitle.style.position = "absolute"
  detailTitle.style.margin = "-400px 600px"
  detailTitle.style.fontSize = "25px"

  detailDesc.style.position = "absolute"
  detailDesc.style.margin = "-300px 600px"
  detailDesc.style.color = "grey"

  detailPrice.style.position = "absolute"
  detailPrice.style.margin = "-350px 600px"
  detailPrice.style.color = "red"

  buyProduct.style.position = "absolute"
  buyProduct.style.margin = "360px 70px"
  buyProduct.style.backgroundColor = "lightblue"
  buyProduct.style.color = "white"



  getProductDetail(strProductId);
  
  //api 호출
  async function getProductDetail(productId) {
    const res = await request("PRD07", { productId });
    console.log(res);

    detailImgEl1.src = res.thumbnail;
    detailImgEl2.src = res.photo;
    detailTitle.textContent = res.title;
    detailDesc.textContent = res.description
    detailPrice.textContent = res.price + " 원"
    buyProduct.textContent = "구매하기"

    buyProduct.addEventListener("click", function(){
      window.location.href = "/payment/" + res.id
    })
  }

  datailPage.append(detailImgEl1, detailImgEl2, detailTitle, detailDesc, detailPrice, buyProduct);
  return datailPage;
}


