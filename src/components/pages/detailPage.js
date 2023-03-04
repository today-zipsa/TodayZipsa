import { request } from "../../api/common";
import { util } from "../../api/util";

export default function detailPage(strProductId) {
	console.log("strProductId>>> ", strProductId);

	const datailPage = document.createElement("div");
	datailPage.className = "detail-page";

	const detailImg = document.createElement("img");
	detailImg.className = "detail-img";

	const detailDescWrapper = document.createElement("div");
	detailDescWrapper.className = "detail-desWrapper";

	const detailTitle = document.createElement("div");
	detailTitle.className = "detail-title";

	const detailDesc = document.createElement("p");
	detailDesc.className = "detail-Desc";

	const detailPrice = document.createElement("h2");

	detailPrice.className = "detail-price";

	const buyProductBtn = document.createElement("button");
	buyProductBtn.className = "buy-product-btn";

	getProductDetail(strProductId);

	//api 호출
	async function getProductDetail(productId) {
		const res = await request("PRD07", { productId });
		console.log(res);

		detailImg.src = res.thumbnail;
		detailTitle.textContent = res.title;
		detailDesc.textContent = res.description;
		detailPrice.textContent = util.setLocalString(res.price) + " 원";
		buyProductBtn.textContent = "구매하기";

		buyProductBtn.addEventListener("click", function () {
			window.location.href = "/payment/" + res.id;
		});
	}

	detailDescWrapper.append(detailTitle, detailDesc, detailPrice, buyProductBtn);
	datailPage.append(detailImg, detailDescWrapper);
	return datailPage;
}
