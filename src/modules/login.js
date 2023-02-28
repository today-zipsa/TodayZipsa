import { request } from "../api/common.js";

/**
 * 로그인 입력란: 계정, 비번
 */

// 데이터 관리
let email = "";
let password = "";

// 회원 로그인
loginEl.addEventListener("click", async () => {
  // 로그인 param 담기
  const params = {
    email: email,
    password: password,
  };
  //회원로그인 API 호출
  const res = await request("MEB02", params);
  console.log("로그인 성공", res);

  // 토큰 저장
  setAccessToken(res.accessToken);
});

// 회원 인증
authorizationEl.addEventListener("click", async () => {
  //회원인증 API 호출
  const res = await request("MEB03");
});

// 토큰 세팅
function setAccessToken(accessToken) {
  //localStorage 초기화
  if (localStorage.length > 0) localStorage.removeItem("accessToken");

  //로컬스토리지에 토큰 저장
  if (accessToken !== null && accessToken !== "") {
    window.localStorage.setItem("accessToken", accessToken);
  }
}
