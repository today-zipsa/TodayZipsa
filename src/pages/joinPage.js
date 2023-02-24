import { util } from "../api/util.js";
import src from "../asset/check.svg";
import srcActice from "../asset/check_green.svg";
export const mainEl = util.createEl("main", { id: "join" });

/**
 * 필수입력사항 createElement
 */
const h1El = util.createEl("h1", { textContent: "회원가입" });
const asteriskEl = util.createEl(
  "span",
  { class: "required" },
  { textContent: "*" }
);

//containerEl - Wrapper: 구분선, 아이디(이메일), 비밀번호, 프로필사진
const containerEl = util.createEl("div", { class: "division-container" });
const joinWrapperEl = util.createEl("div", { class: "join-wrapper" });

const joinRequiredEl = util.createEl("div", { class: "join--required" });
const h3El = util.createEl("h3", { textContent: "필수입력사항" });

// 이메일 입력 == Id
const labelWrapperIdEl = util.createEl("div", { class: "label-wrapper" });
const labelIdEl = util.createEl("label", { class: "required-contents" });
const h5IdEl = util.createEl("h5", { textContent: "이메일" });
const asteriskIdEl = util.createEl(
  "span",
  { class: "required" },
  { textContent: "*" }
);
const inputIdEl = util.createEl(
  "input",
  { type: "text" },
  { class: "id" },
  { placeholder: "이메일 주소를 입력해주세요 " }
);
const requiredBtnEl = util.createEl(
  "label",
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
const inputPwEl = util.createEl(
  "input",
  { type: "password" },
  { class: "password" },
  { placeholder: "비밀번호를 입력해주세요" }
);
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
const labelFileBoxEl = util.createEl("label", { class: "required-contents" });
const h5FileBoxEl = util.createEl("h5", { textContent: "프로필 사진" });
const asteriskFileBoxEl = util.createEl(
  "span",
  { class: "required" },
  { textContent: "*" }
);
const inputFileBoxEl = util.createEl(
  "input",
  { class: "upload-name" },
  { value: "1MB 이하 사이즈로 업로드해주세요" }
);
const labelUploadBtnEl = util.createEl(
  "label",
  { class: "upload-btn" },
  { textContent: "업로드" }
);
const inputFileHiddenEl = util.createEl(
  "input",
  { type: "file" },
  { id: "input_file" },
  { class: "upload-hidden" }
);

/**
 * 이용약관 동의 createElement
 * ## 모달 화면 추가 필 ##
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
const checkWrapperEl = util.createEl("div", { class: " check-wrapper" });

// 전체동의 - cAll == checkAll
const checkAllEl = util.createEl("div", { class: "check-item" });
const cAllImgBtnEl = util.createEl("button", { class: "img-btn" });
const cAllImgEl = util.createEl("img", { src: src });
const cAllImgActiveEl = util.createEl(
  "img",
  { class: "active" },
  { src: srcActice }
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
  { src: srcActice }
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
  { src: srcActice }
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
  { src: srcActice }
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
const joinBtnEl = util.createEl(
  "button",
  { class: "join-btn" },
  { textContent: "가입하기" }
);

/**
 * 요소 append
 */
document.body.append(mainEl);

//join--required: 회원가입 필수입력사항*
joinRequiredEl.append(asteriskEl, h3El);

//division-container: 구분선, 아이디(이메일), 비밀번호, 프로필사진
containerEl.append(joinWrapperEl);
joinWrapperEl.append(
  labelWrapperIdEl,
  labelWrapperPwEl,
  labelWrapperPwcEl,
  labelWrapperFileBoxEl
);

//아이디(이메일)
labelWrapperIdEl.append(labelIdEl, inputIdEl, requiredBtnEl);
labelIdEl.append(h5IdEl, asteriskIdEl);

//비밀번호
labelWrapperPwEl.append(labelPwEl, inputPwEl, asteriskPwEl, sizedBoxPwEl);
labelPwEl.append(h5PwEl, asteriskPwEl);

//비밀번호 확인
labelWrapperPwcEl.append(labelPwcEl, inputPwcEl, asteriskPwcEl, sizedBoxPwcEl);
labelPwcEl.append(h5PwcEl, asteriskPwcEl);

//프로필 사진
labelWrapperFileBoxEl.append(
  labelFileBoxEl,
  inputFileBoxEl,
  labelUploadBtnEl,
  inputFileHiddenEl
);
labelFileBoxEl.append(h5FileBoxEl, asteriskFileBoxEl);

// 전체동의항목 - label-wrapper--agree: 전체동의, 이용약관, 개인정보, 14세이상
agreeWrapperEl.append(agreelabelEl, checkWrapperEl);
agreelabelEl.append(agreeh5El, agreeAsteriskEl);
checkWrapperEl.append(checkAllEl, checkUseEl, checkAgreeInfoEl, checkAgeEl);

//전체동의 check-item
cAllImgBtnEl.append(cAllImgActiveEl, cAllImgEl); //check btn
checkAllEl.append(cAllImgBtnEl, cAllLabelEl, cAllSpanEl);

//이용약관
cUseImgBtnEl.append(cUseImgActiveEl, cUseImgEl); //check btn
checkUseEl.append(cUseImgBtnEl, cUseLabelEl, cUseSpanEl);

//개인정보
cAInfoImgBtnEl.append(cAInfoImgActiveEl, cAInfoImgEl); //check btn
checkAgreeInfoEl.append(cAInfoImgBtnEl, cAInfoLabelEl, cAInfoSpanEl);

//14세이상
cAgeImgBtnEl.append(cAgeImgActiveEl, cAgeImgEl); //check btn
checkAgeEl.append(cAgeImgBtnEl, cAgeLabelEl, cAgeSpanEl);

//all Elements for join Page
mainEl.append(h1El, joinRequiredEl, containerEl, agreeWrapperEl, joinBtnEl);
