import { util } from "../../api/util.js";
import ModalTwo from "../templates/modalTwo";
import src from "../../asset/global/check.svg";
import srcActive from "../../asset/global/check_green.svg";

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
const cAllImgBtnEl = util.createEl("button", { class: "img-btn" });
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

//이용약관 modal
export let isUseChecked = false; //이용약관 체크 상태값
export let isInfoChecked = false; //개인정보 체크 상태값
cUseImgBtnEl.addEventListener("click", () => {
	conditionModal("이용약관 동의", innerUseTxt);
	setConditonModal("isUseChecked");
	console.log("이용약관 modal 눌림");
});

// 모달안 확인 버튼 클릭 이벤트 + 상태값 받는 함수
function setConditonModal(stateName) {
	ModalTwo.addEventListener("click", () => {
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
cAInfoImgEl.addEventListener("click", () => {
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
}

//이용약관텍스트 내용
const innerUseTxt = `
제1조 [약관 등의 명시와 설명 및 개정]\n
① 오늘의집사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소,전화번호/모사전송번호/전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보 보호책임자 등을 이용자가 쉽게 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다.\n
② 오늘의집사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n
③ 오늘의집사가 이 약관을 개정할 경우에는 적용일자 및 개정 내용을 명시하여 사이버몰에 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.\n
④ 전항에 따라 공지된 적용일자까지 이용자가 명시적으로 거부의사를 표명하지 않을 경우에는 개정된 약관에 동의하는 것으로 간주하며, 변경된 약관에 동의하지 않는 회원은 회원 탈퇴를 요청할 수 있습니다.\n
`;
//개인정보
const innerInfoTxt = `본인은 '오늘의 집사' 서비스를 이용함에 따라 [개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 이용 및 제공하는데 동의합니다.\n
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
