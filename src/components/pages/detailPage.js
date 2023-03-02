import { request } from "../../api/common";

export default function detailPage(strProductId) {
  console.log("strProductId>>> ", strProductId);

  const datailPage = document.createElement("div");
  const detailImgEl1 = document.createElement("img");
  const detailImgEl2 = document.createElement("img");


  detailImgEl1.style.width = "300px"
  detailImgEl1.style.height = "300px"
  detailImgEl1.style.margin = "200px 200px"


  detailImgEl2.style.width = "100px"
  detailImgEl2.style.height = "100px"

  getProductDetail(strProductId);
  
  //api 호출
  async function getProductDetail(productId) {
    const res = await request("PRD07", { productId });
    console.log(res);

    detailImgEl1.src = res.thumbnail;
    detailImgEl2.src = res.photo;
  }

  datailPage.append(detailImgEl1, detailImgEl2);
  return datailPage;
}