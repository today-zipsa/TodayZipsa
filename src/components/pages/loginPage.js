/**
 * 요소 createElement
 */
const LoginPage = document.createElement("main");
const loginWapperEl = document.createElement("div");
const h1El = document.createElement("h1");
const inputEl = document.createElement("div");
const inputIdEl = document.createElement("input");
const inputPwEl = document.createElement("input");
const findEl = document.createElement("div");
const findIdEl = document.createElement("button");
const divisionLineEl = document.createElement("div");
const findPwEl = document.createElement("button");
const btnEl = document.createElement("div");
const btnLoginEl = document.createElement("button");
const btnJoinEl = document.createElement("button");

loginWapperEl.className = "login-wrapper";
inputEl.className = "login-wrapper--input";
findEl.className = "login-wrapper--find";
findIdEl.className = "find-id";
divisionLineEl.className = "division-line";
findPwEl.className = "find-pw";
btnEl.className = "btn-wrapper";
btnLoginEl.className = "login-btn";
btnJoinEl.className = "login-btn";

LoginPage.setAttribute("id", "login-page");
inputIdEl.setAttribute("type", "text");
inputIdEl.setAttribute("id", "id");
inputIdEl.setAttribute("placeholder", "아이디를 입력해주세요");
inputIdEl.setAttribute("type", "password");
inputIdEl.setAttribute("id", "pw");
inputIdEl.setAttribute("placeholder", "비밀번호를 입력해주세요");

h1El.textContent = "로그인";
findIdEl.textContent = "아이디 찾기";
divisionLineEl.textContent = "|";
findPwEl.textContent = "비밀번호 찾기";
btnLoginEl.textContent = "로그인";
btnJoinEl.textContent = "회원가입";

/**
 * 요소 append
 */
inputEl.append(inputIdEl, inputPwEl);
findEl.append(findIdEl, divisionLineEl, findPwEl);
btnEl.append(btnLoginEl, btnJoinEl);

loginWapperEl.append(inputEl, findEl, btnEl);

LoginPage.append(loginWapperEl);
