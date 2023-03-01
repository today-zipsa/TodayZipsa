import { util } from "../../api/util.js";
import ModalTwo from "../templates/modalTwo";
import src from "../../asset/global/check.svg";
import srcActive from "../../asset/global/check_green.svg";

// const Modal = document.querySelector(".");
const JoinPage = util.createEl("main", { id: "join" });
/**
 * 필수입력사항 createElement
 */
const h1El = util.createEl("h1", { textContent: "회원가입" });
const asteriskEl = util.createEl(
	"span",
	{ class: "required" },
	{ textContent: "*" }
);

//containerEl - Wrapper: 구분선, 닉네임, 아이디(이메일), 비밀번호, 프로필사진
const containerEl = util.createEl("div", { class: "division-container" });
const joinWrapperEl = util.createEl("div", { class: "join-wrapper" });

const joinRequiredEl = util.createEl("div", { class: "join--required" });
const h3El = util.createEl("h3", { textContent: "필수입력사항" });

// 닉네임 입력 dN== displayName
const labeldNWrapperEl = util.createEl("div", { class: "label-wrapper" });
const labeldNEl = util.createEl("label", { class: "required-contents" });
const h5dNEl = util.createEl("h5", { textContent: "닉네임" });
const asteriskdNEl = util.createEl("span", { class: "required" });
asteriskdNEl.innerText = "*";

const inputdNWrapper = util.createEl("div", { class: "input-wrapper" });
const inputdNEl = util.createEl(
	"input",
	{ type: "text" },
	{ class: "display-name" },
	{ placeholder: "닉네임을 입력하세요" }
);
const wrongName = util.createEl("p", { class: "wrong-name" });
inputdNWrapper.append(inputdNEl, wrongName);
const sizedBoxdNEl = util.createEl("div", { class: "sized-box--dN" });

// 이메일 입력 == Id
const labelWrapperIdEl = util.createEl("div", { class: "label-wrapper" });
const labelIdEl = util.createEl("label", { class: "required-contents" });
const h5IdEl = util.createEl("h5", { textContent: "이메일" });
const asteriskIdEl = util.createEl(
	"span",
	{ class: "required" },
	{ textContent: "*" }
);
const inputIdWrapper = util.createEl("div", { class: "input-wrapper" });
const inputIdEl = util.createEl(
	"input",
	{ type: "text" },
	{ class: "id" },
	{ placeholder: "이메일 주소를 입력해주세요" }
);
const wrongID = util.createEl("p", { class: "wrong-id" });
inputIdWrapper.append(inputIdEl, wrongID);
const requiredBtnEl = util.createEl(
	"button",
	{ class: "validator-btn" },
	{ textContent: "중복확인" }
);

// 비밀번호 입력 == Pw
const labelWrapperPwEl = util.createEl("div", { class: "label-wrapper" });
const labelPwEl = util.createEl("label", { class: "required-contents" });
const h5PwEl = util.createEl("h5", { textContent: "비밀번호" });
const asteriskPwEl = util.createEl(
	"span",
	{ class: "required" },
	{ textContent: "*" }
);
const inputPWWrapper = util.createEl("div", { class: "input-wrapper" });
const inputPwEl = util.createEl(
	"input",
	{ type: "password" },
	{ class: "password" },
	{ placeholder: "비밀번호를 입력해주세요" }
);
const wrongPW = util.createEl("p", { class: "wrong-pw" });
inputPWWrapper.append(inputPwEl, wrongPW);
const sizedBoxPwEl = util.createEl("div", { class: "sized-box--pw" });

// 비밀번호 확인 == Pwc
const labelWrapperPwcEl = util.createEl("div", { class: "label-wrapper" });
const labelPwcEl = util.createEl("label", { class: "required-contents" });
const h5PwcEl = util.createEl("h5", { textContent: "비밀번호 확인" });
const asteriskPwcEl = util.createEl(
	"span",
	{ class: "required" },
	{ textContent: "*" }
);
const inputPwcEl = util.createEl(
	"input",
	{ type: "password" },
	{ class: "password-check" },
	{ placeholder: "비밀번호를 한 번 더 입력해주세요" }
);

const sizedBoxPwcEl = util.createEl("div", { class: "sized-box--pwc" });

// 프로필 사진 업로드 == FileBox
const labelWrapperFileBoxEl = util.createEl(
	"div",
	{ class: "label-wrapper" },
	{ id: "filebox" }
);
const h5Wrapper = util.createEl("div", { class: "h5-wrapper" });
const h5FileBoxEl = util.createEl("h5", { textContent: "프로필 사진" });
h5Wrapper.append(h5FileBoxEl);

const imgfileWrapper = util.createEl("div", { class: "img-fileWrapper" });

const inputIMG = util.createEl(
	"img",
	{ id: "select-img" },
	{ class: "upload-img" },
	{ src: "" },
	{ alt: "profile" }
);
const uploadBntLabel = util.createEl(
	"label",
	{ for: "file" },
	{ class: "upload-btn" }
);

imgfileWrapper.append(inputIMG, uploadBntLabel);
const uploadTxt = util.createEl("div", { class: "upload-txt" });
uploadTxt.innerText = "업로드";

const inputFileBoxEl = util.createEl(
	"input",
	{ type: "file" },
	{ name: "file" },
	{ id: "input_file" },
	{ class: "input-file" }
	// {onchange: "onFileSelected(event)"}
);

/**
 * 이용약관 동의 createElement
 */
const agreeWrapperEl = util.createEl("div", { class: "label-wrapper--agree" });

const agreelabelEl = util.createEl("label", { class: "required-contents" });
const agreeh5El = util.createEl("h5", { textContent: "이용약관 동의" });
const agreeAsteriskEl = util.createEl(
	"span",
	{ class: "required" },
	{ textContent: "*" }
);

// 전체동의항목 wrapper
const checkWrapperEl = util.createEl("div", { class: "check-wrapper" });

// 전체동의 - cAll == checkAll
const checkAllEl = util.createEl("div", { class: "check-item" });
const cAllImgBtnEl = util.createEl(
	"button",
	// { id: "cAll" },
	{ class: "img-btn" }
);
const cAllImgEl = util.createEl("img", { src: src });
const cAllImgActiveEl = util.createEl(
	"img",
	{ class: "active" },
	{ src: srcActive }
);
const cAllLabelEl = util.createEl(
	"label",
	{ class: "agree-title" },
	{ textContent: "전체 동의합니다." }
);
const cAllSpanEl = util.createEl(
	"span",
	{ class: "pilsu" },
	{ textContent: "(필수)" }
);

// 이용약관 동의 - cUse == checkUse
const checkUseEl = util.createEl("div", { class: "check-item" });
const cUseImgBtnEl = util.createEl("button", { class: "img-btn" });
// cUseImgBtnEl.addEventListener("click", () => {
//   console.log("[modal open click]");
//   const modal = CheckModalEl.querySelectorAll(".check-modal .hidden");
//   console.log("modal>>>>", modal);
//   const hidden = modal.classList.remove("hidden");
//   console.log("hidden????>>>>", hidden);
//   const open = () => hidden;
//   open();
// });

const cUseImgEl = util.createEl("img", { src: src });
const cUseImgActiveEl = util.createEl(
	"img",
	{ class: "active" },
	{ src: srcActive }
);
const cUseLabelEl = util.createEl(
	"label",
	{ class: "agree-title" },
	{ textContent: "이용약관동의" }
);
const cUseSpanEl = util.createEl(
	"span",
	{ class: "pilsu" },
	{ textContent: "(필수)" }
);

// 개인정보수집, 이용동의 - cAInfo == checkAgreeInfo
const checkAgreeInfoEl = util.createEl("div", { class: "check-item" });
const cAInfoImgBtnEl = util.createEl("button", { class: "img-btn" });
const cAInfoImgEl = util.createEl("img", { src: src });
const cAInfoImgActiveEl = util.createEl(
	"img",
	{ class: "active" },
	{ src: srcActive }
);
const cAInfoLabelEl = util.createEl(
	"label",
	{ class: "agree-title" },
	{ textContent: "개인정보 수집 및 이용 동의" }
);
const cAInfoSpanEl = util.createEl(
	"span",
	{ class: "pilsu" },
	{ textContent: "(필수)" }
);

// 14세이상 - cAge == checkAge
const checkAgeEl = util.createEl("div", { class: "check-item" });
const cAgeImgBtnEl = util.createEl("button", { class: "img-btn" });
const cAgeImgEl = util.createEl("img", { src: src });
const cAgeImgActiveEl = util.createEl(
	"img",
	{ class: "active" },
	{ src: srcActive }
);
const cAgeLabelEl = util.createEl(
	"label",
	{ class: "agree-title" },
	{ textContent: "본인은 14세 이상입니다." }
);
const cAgeSpanEl = util.createEl(
	"span",
	{ class: "pilsu" },
	{ textContent: "(필수)" }
);
//14세 이상 동의 모달 화면

// 가입하기 버튼
export const joinBtnEl = util.createEl(
	"button",
	{ class: "join-btn" },
	{ textContent: "가입하기" }
);

/**
 * 요소 append, 모달 함수, 이용약관 동의 이벤트
 */

//join--required: 회원가입 필수입력사항*
joinRequiredEl.append(asteriskEl, h3El);

//division-container: 구분선, 아이디(이메일), 비밀번호, 프로필사진
containerEl.append(joinWrapperEl);
joinWrapperEl.append(
	labeldNWrapperEl,
	labelWrapperIdEl,
	labelWrapperPwEl,
	labelWrapperPwcEl,
	labelWrapperFileBoxEl
);

//닉네임
labeldNWrapperEl.append(labeldNEl, inputdNWrapper, sizedBoxdNEl);
labeldNEl.append(h5dNEl, asteriskdNEl);

//아이디(이메일)
labelWrapperIdEl.append(labelIdEl, inputIdWrapper, requiredBtnEl);
labelIdEl.append(h5IdEl, asteriskIdEl);

//비밀번호
labelWrapperPwEl.append(labelPwEl, inputPWWrapper, asteriskPwEl, sizedBoxPwEl);
labelPwEl.append(h5PwEl, asteriskPwEl);

//비밀번호 확인
labelWrapperPwcEl.append(labelPwcEl, inputPwcEl, asteriskPwcEl, sizedBoxPwcEl);
labelPwcEl.append(h5PwcEl, asteriskPwcEl);

//프로필 사진
uploadBntLabel.append(uploadTxt);

labelWrapperFileBoxEl.append(h5Wrapper, imgfileWrapper, inputFileBoxEl);

// 전체동의항목 - label-wrapper--agree: 전체동의, 이용약관, 개인정보, 14세이상
agreeWrapperEl.append(agreelabelEl, checkWrapperEl);
agreelabelEl.append(agreeh5El, agreeAsteriskEl);
checkWrapperEl.append(checkAllEl, checkUseEl, checkAgreeInfoEl, checkAgeEl);

//전체동의 check-item
cAllImgBtnEl.append(cAllImgActiveEl, cAllImgEl); //check btn
checkAllEl.append(cAllImgBtnEl, cAllLabelEl, cAllSpanEl);
let isChecked = false;
cAllImgBtnEl.addEventListener("click", () => {
	if ((isChecked = !isChecked)) {
		cAllImgEl.style.display = "none";
		cAllImgActiveEl.style.display = "block";
		cUseImgEl.style.display = "none";
		cUseImgActiveEl.style.display = "block";
		cAInfoImgEl.style.display = "none";
		cAInfoImgActiveEl.style.display = "block";
		cAgeImgEl.style.display = "none";
		cAgeImgActiveEl.style.display = "block";
		isUseChecked = false ? true : false;
		isInfoChecked = false ? true : false;
	}
});

//이용약관
cUseImgBtnEl.append(cUseImgActiveEl, cUseImgEl); //check btn
checkUseEl.append(cUseImgBtnEl, cUseLabelEl, cUseSpanEl);

//개인정보
cAInfoImgBtnEl.append(cAInfoImgActiveEl, cAInfoImgEl); //check btn
checkAgreeInfoEl.append(cAInfoImgBtnEl, cAInfoLabelEl, cAInfoSpanEl);

//14세이상
cAgeImgBtnEl.append(cAgeImgActiveEl, cAgeImgEl); //check btn
checkAgeEl.append(cAgeImgBtnEl, cAgeLabelEl, cAgeSpanEl);

cAgeImgBtnEl.addEventListener("click", () => {
	console.log("14세이상 눌림");
	cAllImgEl.style.display = "none";
	cAgeImgEl.style.display = "none";

	cAgeImgActiveEl.style.display = "block";
	cAllImgActiveEl.style.display = "block";
});

export let isUseChecked = false; //이용약관 체크불린
export let isInfoChecked = false; //개인정보 체크 불린
//이용약관 modal
cUseImgBtnEl.addEventListener("click", () => {
	conditionModal("이용약관 동의", innerUseTxt);
	setConditonModal("isUseChecked");
	console.log("이용약관 modal 눌림");
});

// 모달안 확인 버튼 클릭 이벤트 + 상태값 받는 함수
function setConditonModal(stateName) {
	ModalTwo.addEventListener("click", (e) => {
		ModalTwo.classList.remove("--hide");

		if (stateName === "isUseChecked") {
			cUseImgEl.style.display = "none";
			cUseImgActiveEl.style.display = "block";
		} else {
			cAInfoImgEl.style.display = "none";
			cAInfoImgActiveEl.style.display = "block";
		}
		stateName = true;
		closeModalTwo();
		console.log("확인버튼눌림");
	});
}
//개인정보 modal
cAInfoImgEl.addEventListener("click", (event) => {
	conditionModal("개인정보 수집 및 이용 동의", innerInfoTxt);
	setConditonModal("isInfoChecked");
	console.log("개인정보 modal 눌림");
});

//이용동의, 개인정보 공동모달
function conditionModal(txt, innertxt) {
	ModalTwo.classList.remove("--hide");

	const modalTwoTemplate = document.querySelector(".modal-two-template");
	const CheckModal = document.createElement("div");
	CheckModal.className = "check-modal";

	const modalWrapper = document.createElement("div");
	modalWrapper.className = "check-modal-wrapper";

	const modalBox = document.createElement("div");
	modalBox.className = "check-modal-box";

	const checkMoalTitle = document.createElement("span");
	checkMoalTitle.innerText = txt;

	const pEl = document.createElement("p");
	pEl.innerText = innertxt;

	const confirmBtn = document.createElement("button");
	confirmBtn.className = "check-confirm-btn";
	confirmBtn.innerText = "확인";

	modalBox.append(checkMoalTitle, pEl, confirmBtn);
	modalWrapper.append(modalBox);
	CheckModal.append(modalWrapper);
	modalTwoTemplate.append(CheckModal);
	ModalTwo.append(modalTwoTemplate);
}

function closeModalTwo() {
	ModalTwo.classList.add("--hide");
	// ModalTwo.querySelector(".modal-template").innerHTML = "";
}

//이용약관텍스트 내용
const innerUseTxt = `제1조 [목적]\n
이 약관은 주식회사 오늘의집사(이하 주식회사 오늘의집사 또는 주식회사 오늘의집사가 \n
운영하는 인터넷사이트를 “오늘의집사”라함)가 운영하는 온라인쇼핑몰에서 제공하는 \n
전자상거래 관련 서비스(이하 “서비스”라 함)를 이용함에 있어 오늘의집사와 이용자의 권리, \n
의무 및 책임사항을 규정함을 목적으로 합니다.\n
*PC통신, 스마트폰 앱, 무선등을 이용하는 전자상거래에 대해서도 \n
그 성질에 반하지 않는 한 이 약관을 준용합니다. \n
제2조 [정의]\n
1. “사이버몰”이란 오늘의집사가 상품 또는 용역(이하 “상품 등” 이라 함)을 이용자에게 제공하기 위하여 \n
컴퓨터 등 정보통신설비를 이용하여 상품 등을 거래할 수 있도록 설정한 가상의 영업장(등 \n
	오늘의집사가 운영하는 웹사이트 및 모바일 웹, 앱 등을 모두 포함)을 말합니다.\n
2. "집사님" 또는 "회원"이란 오늘의집사에 접속하여 이 약관에 따라 오늘의집사가 제공하는 서비스를 이용하는 고객을 말합니다.\n
3. “회원”이란 오늘의집사에 회원등록을 한 자로서, 계속적으로 오늘의집사가 제공하는 서비스를 이용할 수 있는 자를 말합니다.\n
4. "휴면회원"이란 오늘의집사의 회원 중 최종접속일로부터 1년 이상 서비스 이용 기록이 없는 자를 말합니다. \n
휴면회원은 오늘의집사의 정책에 따라 서비스 이용이 제한될 수 있으며, 다시 정상적인 회원 서비스를 이용하기 위하여는 \n
거래 안전 등을 위하여 오늘의집사가 정하는 본인확인 절차 등을 이행하여야 합니다.\n
5. “마켓플레이스 서비스”란 오늘의집사가 제공하는 통신판매중개 서비스 및 관련 부가서비스 일체를 말합니다.\n
6. “판매자”란 오늘의집사에 판매회원으로 회원등록을 하고 오늘의집사가 제공하는 통신판매중개서비스를 통하여 \n
상품 등을 판매하는 자로서 판매자용 이용약관(마켓플레이스 판매자용 이용약관)에 동의하고 \n
오늘의집사와 마켓플레이스 서비스 이용계약을 체결한 자를 말합니다.\n
제3조 [약관 등의 명시와 설명 및 개정]\n
① 오늘의집사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), \n
전화번호/모사전송번호/전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보 보호책임자 등을 \n
이용자가 쉽게 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. \n
다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.\n
② 오늘의집사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n
③ 오늘의집사가 이 약관을 개정할 경우에는 적용일자 및 개정 내용을 명시하여 사이버몰에 \n
적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 \n
약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예 기간을 두고 공지 및 개별 통지합니다.\n
④ 전항에 따라 공지된 적용일자까지 이용자가 명시적으로 거부의사를 표명하지 않을 경우에는 \n
개정된 약관에 동의하는 것으로 간주하며, 변경된 약관에 동의하지 않는 회원은 회원 탈퇴를 요청할 수 있습니다.\n
⑤이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래등에서의 소비자보호에 관한 법률\n
(이하 “전자상거래법”이라 함), 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 \n
소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.\n
⑥ 오늘의집사는 이 약관에 규정되지 않은 세부적인 운영정책, 이용약관, 규칙, 지침 및 서비스 이용과 관련된 \n
전반적인 내용(이하 총칭하여 “운영정책”이라 함)을 제정하여 운영할 수 있으며, 해당 내용을 사이버몰에 게시합니다. \n
운영정책은 이 약관과 더불어 고객 서비스 이용계약(이하 “이용계약”이라 함)의 일부를 구성합니다.\n
⑦ 오늘의집사는 오늘의집사가 제공하는 서비스 중 특정 서비스에 관한 약관(이하 “개별약관”이라 함)을 별도로 제정할 수 있으며, \n
이용자가 개별약관에 동의한 경우 개별약관은 이용계약의 일부를 구성하고 개별약관에 \n
이 약관과 상충되는 내용이 있을 경우 개별약관이 우선적으로 적용됩니다.
`;
//개인정보
const innerInfoTxt = `본인은 '오늘의 집사' 서비스를 이용함에 따라 [개인정보 보호법] \n
제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.\n
□ 개인정보의 수집 및 이용에 관한 사항\n
- 수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 이메일주소, 프로필사진\n
 - 개인정보의 이용 목적 : 수집된 개인정보를 회원 정보관리 용도로 활용하며, 해당 목적 외의 용도로는 사용하지 않습니다.\n
□ 개인정보의 보관 및 이용 기간\n
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우\n
[개인정보 보호법] 제21조에 따라 처리합니다.`;

//all Elements for join Page
JoinPage.append(
	h1El,
	joinRequiredEl,
	containerEl,
	agreeWrapperEl,
	ModalTwo,
	joinBtnEl
);

export default JoinPage;
