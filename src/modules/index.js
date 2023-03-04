import Navigo from "navigo";
 * Common
 */
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";

/**
 * Pages
 */
import detailPage from "../components/pages/detailPage";
import homeMainPage from "../components/pages/homePage";
import categoryPage from "../components/pages/categoryPage";
import AdminPage from "../components/pages/adminPage";
import MyPage from "../components/pages/myPage";
import LoginPage from "../components/pages/loginPage";
import JoinPage from "../components/pages/joinPage";
import PaymentPage from "../components/pages/paymentPage";
import PaymentDonePage from "../components/pages/paymentDonePage";

/**
 * Modules
 */
import Home from "./home";
import Category from "./category";
import Admin from "./admin";
import My from "./my";
import Join from "./join";
import Login from "./login";

export const router = new Navigo("/");

const pagesNeedToGuard = ["my", "admin", "paymentDone"];

router.hooks({
	before: async (done, match) => {
		console.log({ url: match.url });
		if (pagesNeedToGuard.includes(match.url)) {
			if (!localStorage.getItem("accessToken")) {
				router.navigate("/login");
				done();
			}
			done();
		}
		done();
	},
});

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
		"/detail": () => {
			renderPage(/**DetailPage*/);
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
			renderPage([Header, JoinPage, Footer]);
			Join();
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
	.notFound(() => {
		router.navigate("/");
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
