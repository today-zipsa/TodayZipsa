![IMG_5258 2](https://user-images.githubusercontent.com/55748886/216059408-1616791d-2a54-4b5e-bda1-ea2e96623e44.jpg)

<br /><br />

<h1 align="center"><strong>🐈 오늘의 집사 🐕</strong></h1>


<br /><br />
## 🐶 TodayZipsa 팀 소개
이지영(팀장) | 이희서 | 김소희 | 이로운 | 정석화 
:--: | :--: | :--: | :--: | :--: 
<img src="https://avatars.githubusercontent.com/u/55748886?v=4" style="width: 200px;" /> | <img src="https://avatars.githubusercontent.com/u/21377593?v=4" style="width: 200px" /> | <img src="https://avatars.githubusercontent.com/u/98999052?v=4" style="width: 200px;" /> | <img src="https://avatars.githubusercontent.com/u/76941552?v=4" style="width: 200px;" /> | <img src="https://avatars.githubusercontent.com/u/120387477?v=4" style="width: 200px"/>
[gygy7151](https://github.com/gygy7151) | [hlee686](https://github.com/hlee686) | [soheedev](https://github.com/soheedev) | [ronieo](https://github.com/ronieo) | [oysterjung](https://github.com/oysterjung) 
[마이 페이지]<br> [주문 상세 페이지]<br> [결제 상세 페이지]<br>-공동 Header<br>-소스 코드 관리<br>-코드 리뷰<br>|[메인 페이지]<br>- 제품 상세 페이지<br>|[어드민 페이지]<br>- 상품 관리페이지<br>- 거래 내역 페이지<br>[메인 페이지]<br>|[회원가입 페이지]<br> [로그인 페이지]<br>- 공동 Footer<br>|[결제 페이지]<br> [결제 완료 페이지]

<br/><br/>
 ## 📝 오늘의집사 프로젝트 소개
 
 REST API를 활용하여 Vanilla JavaScript로 제작한 반려동물 전문 라이프 서비스 쇼핑몰입니다.
 - 유저는 회원가입 및 로그인 후 상품 구매 및 장바구니를 사용할 수 있으며 그 외 주문내역, 개인정보수정 등이 가능하고 계좌관리(계좌등록)을 통해 구매가 가능합니다.
 - 관리자는 거래내역, 상품 등록, 등록 상품 내역을 볼 수 있고, 상품등록 및 수정, 거래취소 및 거래확정이 가능합니다.
 
<br/><br/>
![pages]() 웹 캡처 이미지 들어갈 자리
<br/><br />

<br/><br />
## ⏱오늘의집사 작업과정
 [TodayZipsa Project](https://github.com/orgs/today-zipsa/projects/2/views/1)
<br/><br />

- 작업 기간 : 2023.01.30 ~ 2023.03.03
- 데모 사이트 : [🐾오늘의집사🐾]()
- 팀 레포지토리 주소 : [TodayZipsa](https://github.com/today-zipsa/TodayZipsa)

- 테스트용 계정
  - 일반 사용자
    - ID : dorazi@user.com
    - PW : zirado321
  - 관리자
    - ID : admin@zipsa.com
    - PW : 1q2w3e4r
<br/><br />
---
<br/><br />
### 🛠️사용한 기술 스택
```
- Basic: `HTML`, `SCSS`, `JavaScript`
- Library:  `Swiper`, `Navigo`, `sass`
- Bundler: `Parcel`
- Deploy: `Netlify`
```
<br/><br />
---
<br/><br />
### 📁 프로젝트 구조
```
┌─ src
│  ├─ api
│  │  └─ 공동 api 및 함수, 은행계좌 및 결제 dummy
│  ├─ asset
│  │  └─ 쇼핑몰에 사용하는 UI용 Images
│  ├─ components
│  │  └─ pages
│  │  |   └─ 페이지를 구성하는 컴포넌트
│  │  └─ templates
│  │      └─ 페이지에서 공동으로 사용하는 컴포넌트 
│  ├─ modules
│  │  └─ 페이지의 로직을 구성하는 컴포넌트
│  │  └─ router.js
│  │      └─ navigo를 활용한 페이지 라우터 시작파일
│  ├─ styles
│  │  └─유틸리티 함수
├─index.html
├─README.md
├─package.json
└─package-lock.json
```
<br/><br />
---
<br/><br />
### 💻 프로젝트 실행 방법
```bash
1. $ git clone https://github.com/today-zipsa/TodayZipsa.git
2. $ cd today-zipsa
3. $ npm i
4. root경로에 .env 파일 생성 후, api관련 정보(API_KEY, API_URL, USER_NAME) 입력 ex) API_KEY=123456
5. $ npm run dev
``` 
<br/><br />
---
<br/><br/>
 ## 🐱 오늘의집사 프로덕트 소개
반려 동물과 여행을 떠날 때 숙박이 고민이셨던 집사님들과
<br/>
혹은 맘편히 여행을 다녀오지 못하셨던 집사님들을 위한 반려동물 전문 라이프 서비스 `오늘의 집사`입니다.

<br/><br />
## 대표 기능

### 🎩 반려동물 동반가능 전용 호텔 예약서비스

스탠다드룸, 디럭스룸, 더블디럭스룸, 슈페리어룸, 스위트룸 등<br/>
반려동물과 아늑한 투숙생활을 완성하는 오늘, 감성 가득한 객실을 예약 해보세요! <br/>

<br/>

### 🚖 반려동물 전용 모빌리티 렌탈 서비스

먼길 무것운 케이지에 반려동물 데리고 병원이나 미용실 오고 다니기 힘드셨죠? <br/>
서울 전역 어디든지 반려동물 전용 모빌리티로 편하게 이동하세요! <br/>

<br/>

### 🍎 전문 반려동물 관리사의 펫시터 서비스

장시간 집을 비우는 동안 걱정 많으셨죠? <br/>
이젠 친환경 무농약 재료들만 엄성한 식단 케어로 전문 반려동물관리사가 관리해드려요! <br/>


<br/>

### 🛁 반려동물 전용 RUSH 스파 서비스

RUSH와 콜라보한 반려동물 전용 입욕제와 스파 서비스를 체험해보세요! <br/>
