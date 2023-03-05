const headers = {
  "content-type": "application/json",
  apikey: "FcKdtJs202301",
  username: "KDT4_Team4",
};

let accessToken = "Bearer " + window.localStorage.getItem("accessToken");

/**
 * API 요청 (공통)
 * @params string api , {} params
 * return json
 *  // ex) MEB01, params{ email:'fast@emil.com', password:'1234'}
 */
export async function request(api, params) {
  let url = "";
  let method = "";
  let strId = ""; // detailId or productId
  let apiParams = null;
  let reqParams = params || {};
  let addHeaders = {};
  const prdSkipAPI = ["PRD03", "PRD05", "PRD06", "PRD07"];

  for (let key in apis) {
    if (key === api) {
      const obj = apis[key];
      url = obj.url;
      method = obj.method;
      if (obj.hasOwnProperty("params")) apiParams = obj.params;
      if (obj.authToken) addHeaders.Authorization = accessToken;
      if (obj.masterKey) addHeaders.masterKey = true;
    }
  }
  // 필수 입력값 확인
  if (apiParams !== null) {
    if (apiParams.length > 0) {
      apiParams.forEach((param) => {
        if (reqParams.hasOwnProperty(param) && reqParams[param] === "") {
          throw new Error(param + " 항목을 입력하세요.");
        }
      });
    }
    // detailId or productId 담기
    if (
      reqParams.hasOwnProperty("detailId") ||
      reqParams.hasOwnProperty("productId")
    ) {
      strId = reqParams["detailId"] || reqParams["productId"];

      // 특정 API요청의 경우 파라미터에 직접 productId가 들어가지 않고
      // url 뒤에 붙어서 호출되기에 실제 파라미터에서는 제외
      if (prdSkipAPI.includes(api)) {
        delete reqParams.productId;
      } else {
        strId = "";
      }
    }
  }
  try {
    const res = await fetch(url + `${strId}`, {
      method: method,
      headers: {
        ...headers,
        ...addHeaders,
      },
      body:
        Object.keys(reqParams).length > 0
          ? JSON.stringify(reqParams)
          : undefined,
    });

    const json = await res.json();
    return json;
  } catch (err) {
    throw new Error("API Error: " + err.message);
  }
}

const apis = {
  /** 회원 API
   * 'KEY': {
        url: endPoint,
        method: 'POST' or 'GET' or 'PUT' or 'DELETE'
        params: [필수요청값들]
      }
  */
  // 회원가입
  MEB01: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
    method: "POST",
    params: ["email", "password", "displayName"],
  },
  // 로그인
  MEB02: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login",
    method: "POST",
    params: ["email", "password"],
  },
  // 인증확인
  MEB03: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me",
    method: "POST",
    authToken: true,
  },
  // 로그아웃
  MEB04: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout",
    method: "POST",
    authToken: true,
  },
  // 사용자 정보수정
  MEB05: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user",
    method: "PUT",
    authToken: true,
  },
  /** 계좌 API */
  // 은행목록 조회
  ACC01: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account/banks",
    method: "GET",
    authToken: true,
  },
  //계좌목록 및 잔액 조회
  ACC02: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    method: "GET",
    authToken: true,
  },
  //계좌 연결
  ACC03: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    method: "POST",
    params: ["bankCode", "accountNumber", "phoneNumber", "signature"],
    authToken: true,
  },
  // 계좌 해지
  ACC04: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/account",
    method: "DELETE",
    params: ["accountId", "signature"],
    authToken: true,
  },
  /** 제품 API */
  // 모든 제품 조회(관리자 전용)
  PRD01: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",
    method: "GET",
    masterKey: true,
  },
  // 전체 거래(판매) 내역(관리자 전용)
  PRD02: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/all",
    method: "GET",
    masterKey: true,
  },
  // 거래(판매) 내역 완료/취소 및 해제(관리자 전용)
  PRD03: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/", //뒤에 :detailId 붙여서 사용할 것
    method: "PUT",
    params: ["detailId"],
    masterKey: true,
  },
  // 제품 추가(관리자 전용)
  PRD04: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",
    method: "POST",
    params: ["title", "price", "description"],
    masterKey: true,
  },
  // 제품 수정(관리자 전용)
  PRD05: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/", // 뒤에 :productId' 붙여서 사용할 것
    method: "PUT",
    params: ["productId"],
    masterKey: true,
  },
  // 제품 삭제(관리자 전용)
  PRD06: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/", // 뒤에 :productId' 붙여서 사용할 것
    method: "DELETE",
    params: ["productId"],
    masterKey: true,
  },
  // 단일 제품 상세 조회
  PRD07: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/", // 뒤에 :productId' 붙여서 사용할 것
    method: "GET",
    params: ["productId"],
  },
  // 제품 검색
  PRD08: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search",
    method: "POST",
  },
  // 제품 거래(구매) 신청
  PRD09: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/buy",
    method: "POST",
    params: ["productId", "accountId"],
    authToken: true,
  },
  //제품 거래(구매) 취소
  PRD10: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/cancel",
    method: "POST",
    params: ["detailId"],
    authToken: true,
  },
  // 제품 거래(구매) 확정
  PRD11: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok",
    method: "POST",
    params: ["detailId"],
    authToken: true,
  },
  // 전체 거래(구매) 내역
  PRD12: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details",
    method: "GET",
    authToken: true,
  },
  // 단일 제품 상세 거래(구매) 내역
  PRD13: {
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/detail",
    method: "POST",
    params: ["detailId"],
    authToken: true,
  },
};
