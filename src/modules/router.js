import Navigo from "navigo";
/**
 * Common
 */
import Header from "../components/templates/header";
/**
 * Pages
 */
import homeMainPage from "../pages/home";
import MyPage from "../components/pages/myPage";

const app = document.querySelector("#app");

const router = new Navigo("/");

router
	.on({
		"/": () => {
			renderPage(homeMainPage);
		},
		"/sitter": () => {
			renderPage(/**SitterPage*/);
		},
		"/snack": () => {
			renderPage(/**SnackPage*/);
		},
		"/rental": () => {
			renderPage(/**RentalPage*/);
		},
		"/detail": () => {
			renderPage(/**DetailPage*/);
		},
		"/snack": () => {
			renderPage(/**SnackPage*/);
		},
		"/my": () => {
			renderPage([Header, MyPage]);
		},
		"/my/order/detail": () => {
			renderPage(/**MyOrderDetailPage*/);
		},
		"/my/payment/detail": () => {
			renderPage(/**MyPaymentDetailPage*/);
		},
		"/login": () => {
			renderPage(/**LoginPage*/);
		},
		"/join": () => {
			renderPage(/**JoinPage*/);
		},
		"/payment": () => {
			renderPage(/**PaymentPage*/);
		},
		"/payment/done": () => {
			renderPage(/**PaymentDonePage*/);
		},
		"/admin": () => {
			renderPage(/**PaymentDonePage*/);
		},
		"product/:productId": match => {
			const { productId } = match?.data;

			console.log({ productId });

			renderPage(document.createTextNode(`product ID => ${productId}`));
		},
	})
	.resolve();

function renderPage(page) {
	console.log({ app, page });
	app.innerHTML = "";
	if (Array.isArray(page)) {
		page.forEach(node => app.appendChild(node));
	} else {
		app.appendChild(page);
	}
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
