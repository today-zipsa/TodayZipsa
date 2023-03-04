import Navigo from "navigo";
/**
 * Common
 */
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
/**
 * Pages
 */
import DetailPage from "../components/pages/detailPage";
import homeMainPage from "../components/pages/homePage";
import categoryPage from "../components/pages/categoryPage";
import AdminPage from "../components/pages/adminPage";
import MyPage from "../components/pages/myPage";
import LoginPage from "../components/pages/loginPage";
import JoinPage from "../components/pages/joinPage";
import NotFound from "../components/pages/notFound";
import PaymentPage from "../components/pages/paymentPage";
import PaymentDonePage from "../components/pages/paymentDonePage";

/**
 * Modules
 */
import Home from "../modules/home";
import Category from "../modules/category";
import Admin from "../modules/admin";
import My from "../modules/my";
import Join from "../modules/join";
import Login from "../modules/login";

const router = new Navigo("/");

router
	.on({
		"/": () => {
			renderPage([Header, homeMainPage, Footer]);
			Home();
		},
		"/hotel": () => {
			renderPage([Header, categoryPage, Footer]);
			Category("hotel");
		},
		"/rental": () => {
			renderPage([Header, categoryPage, Footer]);
			Category("rental");
		},
		"/sitter": () => {
			renderPage([Header, categoryPage, Footer]);
			Category("sitter");
		},
		"/spa": () => {
			renderPage([Header, categoryPage, Footer]);
			Category("spa");
		},
		"/detail/:productId": (match) => {
			const { productId } = match?.data;
			renderPage([Header, DetailPage(productId), Footer]);
		},
		"/my": () => {
			renderPage([Header, MyPage(), Footer]);
			My();
		},
		"/my/order/detail": () => {
			renderPage(/**MyOrderDetailPage*/);
		},
		"/my/payment/detail": () => {
			renderPage(/**MyPaymentDetailPage*/);
		},
		"/login": () => {
			renderPage([Header, LoginPage, Footer]);
			Login();
		},
		"/join": () => {
			renderPage([Header, NotFound, Footer]);
			// renderPage([Header, JoinPage, Footer]);
			// Join();
		},
		"/payment/:productId": (match) => {
			const { productId } = match?.data;

			console.log({ productId });
			renderPage([Header, PaymentPage(productId), Footer]);
		},
		"/paymentDone": () => {
			renderPage([Header, PaymentDonePage(), Footer]);
		},
		"/admin": () => {
			renderPage([AdminPage, Footer]);
			Admin();
		},
		"product/:productId": (match) => {
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
		app.append(...page);
		page.forEach((node) => app.appendChild(node));
	} else {
		app.appendChild(page);
	}
}

/**
 * 홈페이지 /
 * 호텔페이지 /hotel
 * 시터페이지 /sitter
 * 스낵페이지 /spa
 * 렌트페이지 /rental
 * 상품상세페이지 /detail
 * 마이페이지 /my
 * 마이주문상세페이지 /my/order/detail
 * 마이결제상세페이지 /my/payment/detail
 * 로그인페이지 /login
 * 회원가입페이지 /join
 * 결제페이지 /payment
 * 결제페이지 /paymentDone
 * 어드민페이지 /admin
 *
 *
 */
