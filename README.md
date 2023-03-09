
# Coding Cherry

## 항해99 12기 1조  클론코딩 👨‍💻

## 기간 ⏰

```txt
2023.03.03 ~ 23.03.09  
```


## 팀원 😀

| 팀원   | 스택         | 팀원구분 | 깃허브       
| ------ | ------------ | -------- | ----------------- | 
| 이한결 | `프론트엔드`   | `팀장`          | [Tbug-debug](https://github.com/Tbug-debug)    |
| 음지훈 | `프론트엔드`   | 팀원           | [JiHun-yam](https://github.com/JiHun-yam?tab=repositories)       | 
| 권도민 | `프론트엔드`   | 팀원           | [9mean2](https://github.com/9mean2)            | 
| 유영우  | `백엔드`        | `팀장`          | [Heukwu](https://github.com/DOGWANNA)            |     
| 나도관 | `백엔드`         | 팀원           | [DOGWANNA](https://github.com/DOGWANNA)    |     
| 김정규 | `백엔드`         | 팀원           |[kimregular](https://github.com/kimregular)         |    


### FE 폴더구조 ⚒

```txt
📦src  
 ┣ 📂asset  
 ┃ ┣ 📜DataBase.png  
 ┃ ┣ 📜Spinner.gif  
 ┃ ┣ 📜codingcherrylogo.png  
 ┃ ┣ 📜explain.png  
 ┃ ┣ 📜footerimage.png  
 ┃ ┣ 📜mainpagebanner.png  
 ┃ ┣ 📜mainpagedesign31.png  
 ┃ ┗ 📜tablet.png  
 ┣ 📂components  
 ┃ ┣ 📂Mypage  
 ┃ ┃ ┗ 📜MyinfoEdit.jsx  
 ┃ ┣ 📜Aboutmymodal.jsx  
 ┃ ┣ 📜App.js  
 ┃ ┣ 📜Button.jsx  
 ┃ ┣ 📜Checkout.jsx  
 ┃ ┣ 📜Footer.jsx  
 ┃ ┣ 📜Header.jsx  
 ┃ ┣ 📜HomeCateogry.jsx  
 ┃ ┣ 📜ListContainer.jsx  
 ┃ ┣ 📜Loading.js  
 ┃ ┣ 📜Modallogin.jsx  
 ┃ ┗ 📜UserListContainer.jsx  
 ┣ 📂pages  
 ┃ ┣ 📜Curriculum.jsx  
 ┃ ┣ 📜Detail.jsx  
 ┃ ┣ 📜Fixcurriculum.jsx  
 ┃ ┣ 📜Home.jsx  
 ┃ ┣ 📜Mypage.jsx  
 ┃ ┣ 📜Notfound.jsx  
 ┃ ┣ 📜Registration.jsx  
 ┃ ┗ 📜Signup.jsx  
 ┣ 📂redux  
 ┃ ┣ 📂config  
 ┃ ┃ ┗ 📜configStore.jsx  
 ┃ ┗ 📂module  
 ┃ ┃ ┣ 📜addReview.js  
 ┃ ┃ ┣ 📜deleteCurriculum.js  
 ┃ ┃ ┣ 📜deleteReview.js  
 ┃ ┃ ┣ 📜editReview.js  
 ┃ ┃ ┣ 📜fixCurriculum.js  
 ┃ ┃ ┣ 📜getCurriculum.js  
 ┃ ┃ ┣ 📜getDetailCurriculum.js  
 ┃ ┃ ┣ 📜infinitiScroll.js  
 ┃ ┃ ┣ 📜login.js  
 ┃ ┃ ┣ 📜mymodal.js  
 ┃ ┃ ┣ 📜postLogin.js  
 ┃ ┃ ┣ 📜postRegisterCourse.js  
 ┃ ┃ ┣ 📜registration.js  
 ┃ ┃ ┣ 📜signup.js  
 ┃ ┃ ┣ 📜updateUserInfo.js  
 ┃ ┃ ┗ 📜userCurriculum.js  
 ┣ 📂router  
 ┃ ┗ 📜router.jsx  
 ┣ 📂style  
 ┃ ┣ 📜Globalstyles.js  
 ┃ ┣ 📜Home.js  
 ┃ ┣ 📜resetcss.js  
 ┃ ┗ 📜theme.js  
 ┣ 📂util  
 ┃ ┣ 📜HandleToken.js  
 ┃ ┣ 📜axiosbase.js  
 ┃ ┗ 📜token.js  
 ┣ 📜App.css  
 ┣ 📜index.css  
 ┗ 📜index.js
```

### BE 폴더구조 ⚒

```txt
📦cherrycoding
 ┣ 📂config
 ┃ ┣ 📜SecurityConfig.java
 ┃ ┗ 📜SwaggerConfig.java
 ┣ 📂controller
 ┃ ┣ 📜EnrollController.java
 ┃ ┣ 📜LectureController.java
 ┃ ┣ 📜ReviewController.java
 ┃ ┗ 📜UserController.java
 ┣ 📂dto
 ┃ ┣ 📜CurriculumResponseDto.java
 ┃ ┣ 📜DetailResponseDto.java
 ┃ ┣ 📜LectureRequestDto.java
 ┃ ┣ 📜LectureResponseDto.java
 ┃ ┣ 📜LoginRequestDto.java
 ┃ ┣ 📜LoginResponseDto.java
 ┃ ┣ 📜MainResponseDto.java
 ┃ ┣ 📜ResponseDto.java
 ┃ ┣ 📜ReviewRequestDto.java
 ┃ ┣ 📜ReviewResponseDto.java
 ┃ ┣ 📜SignupRequestDto.java
 ┃ ┗ 📜UserRequestDto.java
 ┣ 📂entity
 ┃ ┣ 📜Enroll.java
 ┃ ┣ 📜Lecture.java
 ┃ ┣ 📜Review.java
 ┃ ┣ 📜TimeStamped.java
 ┃ ┣ 📜User.java
 ┃ ┗ 📜UserRoleEnum.java
 ┣ 📂exception
 ┃ ┣ 📜CustomException.java
 ┃ ┣ 📜ErrorCode.java
 ┃ ┗ 📜GlobalExceptionHandler.java
 ┣ 📂jwt
 ┃ ┣ 📜JwtAuthFilter.java
 ┃ ┗ 📜JwtUtil.java
 ┣ 📂repository
 ┃ ┣ 📜EnrollRepository.java
 ┃ ┣ 📜LectureRepository.java
 ┃ ┣ 📜ReviewRepository.java
 ┃ ┗ 📜UserRepository.java
 ┣ 📂s3
 ┃ ┣ 📜AwsS3Config.java
 ┃ ┗ 📜S3Uploader.java
 ┣ 📂security
 ┃ ┣ 📜UserDetailsImpl.java
 ┃ ┗ 📜UserDetailsServiceImpl.java
 ┣ 📂service
 ┃ ┣ 📜EnrollService.java
 ┃ ┣ 📜LectureService.java
 ┃ ┣ 📜ReviewService.java
 ┃ ┗ 📜UserService.java
 ┗ 📜CherryCodingApplication.java
```

## View

### 홈페이지 View 

<img width="700" alt="스크린샷 2023-03-09 15 46 57" src="https://user-images.githubusercontent.com/95469708/223942500-54f246a2-57a9-4110-8bd7-f3bf8225fee3.png">

<img width="700" alt="스크린샷 2023-03-09 15 48 59" src="https://user-images.githubusercontent.com/95469708/223942866-df1e7f24-81df-4fe8-80aa-6b4efcf6dbc5.png">

<img width="700" alt="스크린샷 2023-03-09 15 49 42" src="https://user-images.githubusercontent.com/95469708/223943002-a8af5c37-c73f-4a2f-b81d-7300b87e9b4c.png">


### 커리큘럼 

<img width="500" alt="스크린샷 2023-03-09 15 45 49" src="https://user-images.githubusercontent.com/95469708/223942265-66e99a9c-7d51-4702-a255-e66875ecdbc0.png"> 



### 마이페이지

1. 내강의 

<img width="700" alt="스크린샷 2023-03-09 15 51 06" src="https://user-images.githubusercontent.com/95469708/223943326-828d0e7f-5e95-43ae-a499-aa5de5c3cd58.png">

2. 내정보 설정 

<img width="700" alt="스크린샷 2023-03-09 15 51 20" src="https://user-images.githubusercontent.com/95469708/223943498-4855a84d-fa9c-4117-a2e7-252a6554f2d8.png">



### 상세페이지 

- 관리자 일떄 
<img width="700" alt="스크린샷 2023-03-09 16 02 51" src="https://user-images.githubusercontent.com/95469708/223945619-847d28fa-d578-40ed-8355-61333000f2cd.png">

- 일반 회원일때 

<img width="700" alt="스크린샷 2023-03-09 16 08 10" src="https://user-images.githubusercontent.com/95469708/223946704-fd79c4e1-8b05-45ee-9645-063b004780f1.png">

수강 신청하기를 누르면  토스페이먼트로 이동 
- 결제 하기 
![스크린샷 2023-03-09 01 07 41](https://user-images.githubusercontent.com/95469708/223946442-7a6e986b-eb9f-4e84-9b2a-02ac7a85f738.jpeg)

### Footer 
<img width="700" alt="스크린샷 2023-03-09 15 59 27" src="https://user-images.githubusercontent.com/95469708/223944897-25080cf9-bf59-40d9-95d1-98f3adc14339.png">




## 스택

### 프론트엔드 스택 ⚒

[![](https://camo.githubusercontent.com/dc93514cb1c400ba025bf41ae9e44069c69457423ef47352309a02d9a1373f1f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/dc93514cb1c400ba025bf41ae9e44069c69457423ef47352309a02d9a1373f1f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/ce7b8d0d67dd7a9307a9ebf32e99bda70a67f3394b3e9ee059a3f26562963b23/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/ce7b8d0d67dd7a9307a9ebf32e99bda70a67f3394b3e9ee059a3f26562963b23/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d7768697465) ![](https://camo.githubusercontent.com/fd0243cd3a19485c4f3e82eba48aa53c2b13c41bd87164fc77fa3498ec09d2bd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616d617a6f6e73332d3536394133313f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e7333266c6f676f436f6c6f723d7768697465)

### 프론트엔드 라이브러리

[![](https://camo.githubusercontent.com/40a02fbec2410fe98c2dfbe605d4243eaec9d28f187d4db194f028159fb89ec0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4178696f732d3541323945343f7374796c653d666f722d7468652d6261646765266c6f676f3d4178696f73266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/40a02fbec2410fe98c2dfbe605d4243eaec9d28f187d4db194f028159fb89ec0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4178696f732d3541323945343f7374796c653d666f722d7468652d6261646765266c6f676f3d4178696f73266c6f676f436f6c6f723d7768697465)[![](https://camo.githubusercontent.com/b1660dafdfb21888024e5c88b69ddf53039ad59a10517111b8db53a18f379609/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c6564636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c6564636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/b1660dafdfb21888024e5c88b69ddf53039ad59a10517111b8db53a18f379609/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c6564636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c6564636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465) ![](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)


-   react-router-dom
-   react-hook-form
-   js-cookie
-   react-icons
-   browser-image-compression (이미지용량 줄여줌)
-   tosspayments/payment-widget-sdk (결제기능)
-   react-intersection-observer (무한스크롤)



### 백엔드 스택 ⚒

[![](https://camo.githubusercontent.com/2325f859ff6cd6729cfb8ccd3beb012548640444999918e287eadfc975273be4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176612d6364303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/2325f859ff6cd6729cfb8ccd3beb012548640444999918e287eadfc975273be4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176612d6364303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/bc562412c99f666d8c2f62485201afe06dec01a60e4a2879a350197dcfb7acc5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e672d3644423333463f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e67266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/bc562412c99f666d8c2f62485201afe06dec01a60e4a2879a350197dcfb7acc5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e672d3644423333463f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e67266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/46206926edcfe012e92247c44d588de5484226b528c6624162f40f3ec637dd0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e6720626f6f742d3644423333463f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e6720626f6f74266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/46206926edcfe012e92247c44d588de5484226b528c6624162f40f3ec637dd0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e6720626f6f742d3644423333463f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e6720626f6f74266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/64275ceb7fccb7a4328c84c984ae3f9c90c64c0c9a3d525cfe9abe2660d67c4e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666f722d7468652d6261646765266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/64275ceb7fccb7a4328c84c984ae3f9c90c64c0c9a3d525cfe9abe2660d67c4e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666f722d7468652d6261646765266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/4940b27a13056bfab2cb61da9a8a7b00c4efb9ebbd39d966cbeecc00c1c0059e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204543322d4646393930303f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e20454332266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/4940b27a13056bfab2cb61da9a8a7b00c4efb9ebbd39d966cbeecc00c1c0059e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204543322d4646393930303f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e20454332266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/f5e36b504a7091d22de49844ec28d7b50723774c367b6133fb25dd73e4876b92/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e2053332d3536394133313f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e205333266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/f5e36b504a7091d22de49844ec28d7b50723774c367b6133fb25dd73e4876b92/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e2053332d3536394133313f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e205333266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/6409c45d41dd239925c9c1c18be854dc5827bbab2abaa386bee9c99a1a3ecabe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e205244532d3532374646463f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e20524453266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/6409c45d41dd239925c9c1c18be854dc5827bbab2abaa386bee9c99a1a3ecabe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e205244532d3532374646463f7374796c653d666f722d7468652d6261646765266c6f676f3d416d617a6f6e20524453266c6f676f436f6c6f723d7768697465)


### 팀노션  📚

https://www.notion.so/1-e342bb96f7f242e5975eb437798bf10d#beedbf4fd9594b62bf5b66bea008bd7f


### Feat-기능 👻

- 회원가입 (유저 or 관리자)
- 로그인
- 강좌 조회
- 강좌 리뷰  
- 강좌 수강  
- 강좌 등록 (관리자만)
- 강좌 수정 (등록한관리자만)
- 강좌 삭제 (등록한관리자만)
- 강좌 결제 (토스 페이먼트)
- 내정보 수정
- 이미지 업로드  
- 무한 스크롤  
- Swagger   



## 트러블 슈팅 ⚽

## FE

### 무한스크롤 이전페이지 정보가 누적되는 현상 
- 이전페이지 정보를 초기화시키는 함수를 만들어서 해결 

### GET으로 값을 가져올떄 바로 가져오지 않고 조금 시간이지나서 값이 들어오는 현상

- 옵셔널체이닝을 사용하여 문제 해결 

## DE 

### Lombok @Getter사용시, boolean 타입 is로 시작하는 변수를 사용할 경우 정상적으로 동작하지 않음
- Getter가 is~~ 로 변수를 생성하기 때문.
    기본형 boolean 타입을 래퍼클래스 Boolean으로 변경 


### 회원정보 수정 시, 적용되지 않음. JPA에서는 영속화하여 1차캐시에 저장된 엔티티에 대해서만 더티체킹이 적용된다.
- UserId에 해당하는 User 엔티티를 조회하여 영속화 한 후, 엔티티를 변경




