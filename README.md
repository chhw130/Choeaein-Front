# 프로젝트 소개
### 프로젝트 기간 : 2023.03.06 ~ 진행중 
---
# :hearts: Choeaein

https://www.choeaein.click

최애인은 '내가 가장 사랑하는'이라는 의미의 '최애(最愛)'에 사람 '인(人)'을 합친 말로, 팬들이 가장 사랑하는 아이돌을 의미합니다. 

이 서비스는 아이돌 팬들을 위한 스케줄 관리 서비스로, 다양한 아이돌 그룹의 스케줄 정보를 제공합니다.

팬들은 자신이 좋아하는 아이돌 그룹의 활동을 빠르게 파악할 수 있습니다. 

또한 "최애인"에서 제공하는 아이돌의 일정 달력에 유저의 개인 일정을 입력할 수 있어 아이돌 일정과 개인 일정을 함께 관리할 수 있습니다. 

따라서 사용자는 자신이 좋아하는 아이돌과 자신의 일정을 효율적으로 관리 할 수 있습니다.

<br>
<br>

### 멤버 구성 

## Front 

- 최현우 : <https://github.com/chhw130>


## Back 

- 고은기 : <https://github.com/sliverKi>


<br>

----

<br>

## 🔧 기술 스택

### 개발 및 협업관리 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)     <img alt="Slack" src ="https://img.shields.io/badge/Slack-4A154B.svg?&style=for-the-badge&logo=Slack&logoColor=white"/></a>

### 호스팅
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=Render&logoColor=white)

### 개발

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TS](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Next](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

### 주요 라이브러리

![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Chakra UI](https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge%22)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)



<br>
<br>

##  :bulb: Architecture

<img width="800" alt="스크린샷 2023-04-04 오후 2 16 55" 
src="https://user-images.githubusercontent.com/121347506/229693783-22b5be1c-c88a-49c8-940d-37265e3bd72c.png">

<br>
<br>

##  :bulb: 주요 기능 
    
 ### - 회원가입 & 로그인 & 로그아웃
   - DB값 검증
   - E-mail 로그인 
   - ID, PW 일치 불일치 검증 
   - PW 변경
   - 로그인 시 세션(Session)ID 생성
   
 ### - 마이페이지
   - user-profile 변경시 image를 cloud-server에 저장
   - 기존의 자신의 최애 아이돌 외의 다른 아이돌 변경가능 
   - 사용자 정보 update
   
 ### - 메인 페이지 
   - sliding-bar 
   - 관리자 회원인 경우, 관리자 페이지 접속 가능
   - 일반 사용자인 경우, 관리자 페이지 접속 불가 
   
 ### - 캘린더 페이지 
   - 활성 카테고리에 따라 달력에 표시되어 지는 일정 구분
   - 활성 카테고리에 맞추어 날짜에 카테고리별 해당하는 토글 노출 
   - 오늘 날짜 기준으로 다가올 날에 대한 일정 알림 
   - 사용자가 선택한 날짜에서 전날, 다음날에 대한 일정 목록 표시
   - 회원인 사용자인 경우 제보하기 버튼 노출, 활성화 
   - 회원인 사용자인 경우 자신의 일정 등록, 수정, 삭제 가능
 
 ### - 아이돌 일정 제보하기 
   - 회원인 사용자만이 자신이 선택한 아이돌의 일정을 관리자에게 정보 제공 가능 
   - 사용자가 회원, 비회원을 구분하여 "제보하기" 버튼 선택적 활성화 
   - 제보하기 data 검증 
     - 자신이 선택한 아이돌이 아닌 경우 제보 불가 
     - 제보 대상이 없는 경우 제보 불가 
     - 제보 대상이 한명이 아닌 여러명인 경우 제보 불가 
     - DB에 없는 아이돌인 경우 제보 불가 
     
 ### - 관리자 페이지   
   - 사용자로 부터 제보 받은 report-data가 관리자 페이지에 적재 및 저장 
   - 관리자는 제보받은 data를 조회, 수정, 삭제 가능



<br>
<br>

##  :bulb: 구성도
 
![](https://velog.velcdn.com/images/chhw130/post/0b435eae-9465-4bb5-9e9e-b90b91a0d0fb/image.png)



<br>
<br>

##  :bulb: UI 및 기능

<img width="1439" alt="스크린샷 2023-07-31 오후 7 34 46" src="https://github.com/chhw130/myfavor-Next/assets/116826162/a001c9bc-8c07-4be5-bac2-0b2b7b7d0a2a">


<br>
<br>

##  :bulb: 문제 해결

### 1. Next Image로 최적화

<img width="1323" alt="스크린샷 2023-07-31 오후 7 40 51" src="https://github.com/chhw130/myfavor-Next/assets/116826162/f9451468-4848-45dd-b7c2-79bc49ce67c4">

> next/Image로 기존의 jpg,png에서 webp형식으로 변환 => 결과적으로 이미지 로드 시간 최대 323ms -> 39ms 단축
> 또한 이미지 lazy Loading기본으로 제공 및 layout Shifting 해결


### 2. dynamic import로 first load Js크기 줄이기

```typescript
import ChakraProvider  from "@chakra-ui/provider"  /** x */


import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
);
/** O */
```

> dynamic import를 통해 모듈을 빌드시가 아닌 런타임시에 로드하여 초기 로드 시간 최적화
> 즉시 화면에 반영되는 모듈보다는 상호작용을 통해 일어나는 모듈에 대해 dynamic import 적용(ex : button, modal, drawer 등)



<br>
<br>



##  :bulb: 프로젝트를 진행하면서 고민했던 것들


- [proxy를 통한 cors에러 해결로 생산성 확대](https://velog.io/@chhw130/%EC%A7%80%EA%B8%8B%EC%A7%80%EA%B8%8B%ED%95%9C-CORS-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95)

