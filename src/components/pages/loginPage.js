/**
 * 요소 createElement
 */
// <main id="login-page"></main>
const LoginPage = document.createElement("main");
LoginPage.setAttribute("id", "login-page");

const loginWapperEl = document.createElement("div");
loginWapperEl.className = "login-wrapper";
const h1El = document.createElement("h1");
h1El.innerText = "로그인";

const inputEl = document.createElement("div");
inputEl.className = "login-wrapper--input";

// 아이디 입력
const inputIdEl = document.createElement("input");
inputIdEl.setAttribute("type", "text");
inputIdEl.setAttribute("id", "id");
inputIdEl.setAttribute("placeholder", "아이디를 입력해주세요");
// 비밀번호 입력
const inputPwEl = document.createElement("input");
inputPwEl.setAttribute("type", "password");
inputPwEl.setAttribute("id", "pw");
inputPwEl.setAttribute("placeholder", "비밀번호를 입력해주세요");

// 아이디 비밀번호 찾기 buttonWrapper
const findEl = document.createElement("div");
findEl.className = "login-wrapper--find";
// 아이디 찾기 button
const findIdEl = document.createElement("button");
findIdEl.className = "find-id";
findIdEl.innerText = "아이디 찾기";
// vertical bar |
const divisionLineEl = document.createElement("div");
divisionLineEl.className = "division-line";
divisionLineEl.innerText = "|";
// 비밀번호 찾기 button
const findPwEl = document.createElement("button");
findPwEl.className = "find-pw";
findPwEl.innerText = "비밀번호 찾기";

// 로그인 회원가입 button
const btnEl = document.createElement("div");
btnEl.className = "btn-wrapper";
// 로그인 button
const btnLoginEl = document.createElement("button");
btnLoginEl.className = "login-btn";
btnLoginEl.innerText = "로그인";
// 회원가입 button
const btnJoinEl = document.createElement("button");
btnJoinEl.className = "join-btn";
btnJoinEl.innerText = "회원가입";

/**
 * 요소 append
 */
inputEl.append(inputIdEl, inputPwEl);
findEl.append(findIdEl, divisionLineEl, findPwEl);
btnEl.append(btnLoginEl, btnJoinEl);

loginWapperEl.append(h1El, inputEl, findEl, btnEl);

LoginPage.append(loginWapperEl);

export default LoginPage;
