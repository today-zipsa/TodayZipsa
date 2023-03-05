import { util } from "../../api/util";
import sadKitty from "../../asset/global/sad_kitty.png";

export default function NotFoundPage() {
	const notFoundWrapper = util.createEl("div", { class: "not-found-wrapper" });
	const notFoundImg = util.createEl(
		"img",
		{ class: "not-found-img" },
		{ src: sadKitty },
		{ alt: "sad kitty" }
	);
	const notFoundTitle = util.createEl("div", { class: "not-found-title" });
	notFoundTitle.innerText = "페이지를 찾을 수 없습니다 :(";
	const notFoundContent = util.createEl("p", { class: "not-found-content" });
	notFoundContent.innerText =
		"원하시는 결과를 찾을 수 없습니다.\n 올바른 URL을 입력했는지 확인하시거나 소유자에게 문의하시길 바랍니다.";

	const backToMainBtn = util.createEl("button", { class: "back-to-main" });
	backToMainBtn.innerText = "홈으로 돌아가기";
	backToMainBtn.addEventListener("click", () => {
		window.location.href = "/";
	});

	notFoundWrapper.append(
		notFoundImg,
		notFoundTitle,
		notFoundContent,
		backToMainBtn
	);

	return notFoundWrapper;
}
