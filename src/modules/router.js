import Navigo from "navigo";
import homeMainPage from "../pages/home";

console.log("test");

const app = document.querySelector("#app");

const router = new Navigo("/");

router
	.on({
		"/": () => {
			console.log("home");
			renderPage(homeMainPage);
		},
		"/login": () => {
			console.log("login");
		},
		"/join": () => {
			console.log("join");
		},
		"/my": () => {
			console.log("my");
		},
		"product/:productId": match => {
			const { productId } = match?.data;

			console.log({ productId });

			renderPage(document.createTextNode(`product ID => ${productId}`));
		},
	})
	.resolve();

function renderPage(page) {
	//const app = document.querySelector("#app");
	console.log({ app, page });
	app.replaceChildren();
	app.appendChild(page);
}

/**
 * 홈메인 /
 * 시터페이지 /sitter
 * 스낵페이지 /snack
 * 렌트페이지 /rental
 * 상품상세페이지 /detail
 * 마이페이지 /my
 * 마이주문상세페이지 /my/order/detail
 * 마이결제상세페이지 /my/payment/detail
 * 로그인페이지 /login
 * 회원가입페이지 /join
 * 결제페이지1 /payment1
 * 결제페이지2 /payment2
 * 어드민페이지 /admin
 *
 *
 */
