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

|      최현우      |                                                                                                                 
| :------------------------------------------------------------------------------: | 
|   <img width="160px" src="https://user-images.githubusercontent.com/116826162/236803962-73ff1ba3-63cf-46c7-93f9-22282f6f0746.jpeg" />  |
|   [@ChoiHyunWoo](https://github.com/chhw130)   |   


<br>

----

<br>

## 🔧 기술 스택

### 개발 및 협업관리 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)     <img alt="Slack" src ="https://img.shields.io/badge/Slack-4A154B.svg?&style=for-the-badge&logo=Slack&logoColor=white"/></a>

### 호스팅
![Vercel](https://img.shields.io/badge/Vercel-black?style=flat&logo=Vercel&logoColor=white)

### 개발

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TS](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Next](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

### 주요 라이브러리

![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=recoil)
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
    
 ### - 회원가입 & 로그인 & 로그아웃 & ID찾기
   - use-Hook-form으로 form 관리 및 유효성 검사
   - 로그인 방식 : 세션(Session)ID
   
 ### - 마이페이지
   - user-profile 변경시 image를 cloud-server에 저장
   - 기존의 자신의 최애 아이돌 외의 다른 아이돌 변경가능 
   - 사용자 정보 update
   
 ### - 메인 페이지 
   - sliding-bar 랜덤 스케줄
   - 그룹/솔로 섹션 페이지
   
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

<img width="1052" alt="스크린샷 2023-07-31 오후 8 30 06" src="https://github.com/chhw130/myfavor-Next/assets/116826162/c3bd3f61-2537-48fd-a8ba-9d2a2dcee016">

### 스케줄확인


![화면-기록-2023-08-01-오후-3 05 11 (1)](https://github.com/chhw130/myfavor-Next/assets/116826162/b5acb0f4-d04f-4468-8026-75fcc7e55ca7)

> 아이돌 스케줄을 일자, 카테고리 별로 확인가능

<br>
<br>

##  :bulb: 문제 해결

### 1. Next Image / Locale Font로 최적화

<img width="1323" alt="스크린샷 2023-07-31 오후 7 40 51" src="https://github.com/chhw130/myfavor-Next/assets/116826162/f9451468-4848-45dd-b7c2-79bc49ce67c4">

> next/Image로 기존의 jpg,png에서 webp형식으로 변환 => 결과적으로 이미지 로드 시간 최대 323ms -> 39ms 단축
> 또한 이미지 lazy Loading기본으로 제공 및 layout Shifting 해결


> NextJs에서 제공하는 Next/font로 font 최적화
> font preload를 통해 font의 layout shifting문제 해결

<br>

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

### 3. Js 애니메이션 -> css 애니메이션

> 기존의 JS 애니메이션을 css 애니메이션으로 변경하였습니다. JS 애니메이션의 경우 다음과 같은 문제가 있었습니다.
> - 애니메이션을 JS를 이용하여 동적으로 설정하다 보니 성능 문제가 존재했습니다.
> - 컴포넌트 내부에서 JS를 조작하기 때문에 다른 로직과 공존하여 가독성이 저하 되었습니다.
> - JS 애니메이션을 재사용할 때 함수를 다시 호출해야 했습니다.
>
> 결과적으로 css Keyframe기반으로 애니메이션을 구성하게 되면 cpu를 사용하기 보다 브라우저 GPU를 이용하여 부드럽고 성능에 더 효율적입니다.

<br>

### 최적화 결과



<img width="1043" alt="스크린샷 2023-08-02 오후 7 00 26" src="https://github.com/chhw130/myfavor-Next/assets/116826162/d72c08e3-c521-44dc-824f-c682998014b1">


<img width="981" alt="스크린샷 2023-08-02 오후 7 00 36" src="https://github.com/chhw130/myfavor-Next/assets/116826162/78fc8688-f70a-47d1-9311-36f41500b1c9">


<br>
<br>



##  :bulb: 프로젝트를 진행하면서 고민했던 것들


- [지긋지긋한 CORS에러](https://velog.io/@chhw130/%EC%A7%80%EA%B8%8B%EC%A7%80%EA%B8%8B%ED%95%9C-CORS-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95)
- [NextJS에서의 Proxy설정](https://velog.io/@chhw130/NextJs-nextJs%EC%97%90%EC%84%9C-Proxy%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [bundleAnalyzer를 통한 웹 최적화](https://velog.io/@chhw130/NextJs-%EC%95%B1%EC%9D%84-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%B4%EB%B3%B4%EC%9E%90with-nextbundle-Analyzer)
- [Next/Font를 이용한 font 최적화](https://velog.io/@chhw130/NextJs%EC%97%90%EC%84%9C-font-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [SearchBar만드는 방법](https://velog.io/@chhw130/NextJs%EB%A1%9C-searchBar%EB%A7%8C%EB%93%A4%EA%B8%B0with-useSearchParams)
- [Atomic패턴 적용하기](https://velog.io/@chhw130/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4Atomic-Pattern)

