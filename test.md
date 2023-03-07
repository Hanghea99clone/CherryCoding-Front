---
marp: true
author: team3
theme: uncover
---

<style>
    @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
    :root {
        --color-background : #101010;
        --color-foreground : #FFFFFF;
    }
    h1{
        font-family: 'Tilt Prism', cursive;
        font-size: 150px;
        color : #FF597B;
    }

    div > img{
        height:50px;
    }
    a{
        text-decoration:none !important;
    }

</style>

# <a href="https://viking-band-fe.vercel.app/" style="color:#FF597B" > VIKING BAND</a>

## Team3

FE : 김태현, 김준형
BE : 임민성, 김유영, 이진규, 김정규

---

## Tech Stack

### FE :

<html>
    <div>
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
        <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=white"/>
        <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled components&logoColor=white"/>
        <img src="https://img.shields.io/badge/recoil-61DAFB?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYWxxdWVfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTQ2LjggOTAxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NDYuOCA5MDEuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxQzFFMjE7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTcuMywzOTNjNi43LTEuNCwxMy42LTIuNCwyMC41LTNsMCwwbDAsMGw1My42LTUuMWwtNzIuOC03OS44Yy0yMS45LTI0LjEtMzQtNTUuMy0zNC04Ny45SDQuNCAgYzAsNDcuNiwxNy43LDkzLjMsNDkuOCwxMjguNUw5Ny4zLDM5M3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4NS4zLDUwOS45Yy01LjQsMS0xMC45LDEuNy0xNi40LDIuM2wwLDBsMCwwbC01OCw1LjVsNzIuNiw3OS42YzIxLjksMjQuMSwzNCw1NS4zLDM0LDg3LjloNjAuMyAgYzAtNDcuNi0xNy43LTkzLjItNDkuOC0xMjguNUwyODUuMyw1MDkuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTM4NSwzMzNjLTkuOS00OS4yLTQ4LjUtODUtOTguMy05MS4zbC05LjItMS4yYy0zMS4xLTMuOS01NC42LTMwLjUtNTQuNi02MS44di0zMi4xYzI3LjYtMTEuNSw0Ny0zOC43LDQ3LTcwLjQgIGMwLTQyLjEtMzQuMS03Ni4yLTc2LjItNzYuMnMtNzYuMiwzNC4xLTc2LjIsNzYuMmMwLDMxLDE4LjYsNTcuNyw0NS4yLDY5LjZ2MzIuOWMwLDYxLjcsNDYuMSwxMTQsMTA3LjMsMTIxLjZsOS4yLDEuMiAgYzI4LjcsMy42LDQzLDI0LjgsNDYuOCw0My40YzMuOCwxOC42LTEuMSw0My43LTI2LjIsNTguMmMtMTIuMyw3LjEtMjUuNiwxMS40LTM5LjcsMTIuN2wtMTM4LjMsMTNjLTIyLjgsMi4yLTQ0LjQsOS4xLTY0LjIsMjAuNSAgQzE0LjEsNDc0LjUtNy42LDUyMi41LDIuNCw1NzEuN2M5LjksNDkuMiw0OC41LDg1LDk4LjMsOTEuM2w5LjIsMS4yYzMxLjEsMy45LDU0LjYsMzAuNSw1NC42LDYxLjh2MjkuMiAgYy0yNy41LDExLjUtNDYuOCwzOC43LTQ2LjgsNzAuM2MwLDQyLjEsMzQuMSw3Ni4yLDc2LjIsNzYuMnM3Ni4yLTM0LjEsNzYuMi03Ni4yYzAtMzEuMS0xOC43LTU3LjktNDUuNC02OS43di0yOS44ICBjMC02MS43LTQ2LjEtMTE0LTEwNy4zLTEyMS42bC05LjItMS4yYy0yOC43LTMuNi00My0yNC44LTQ2LjgtNDMuNGMtMy44LTE4LjYsMS4xLTQzLjcsMjYuMi01OC4yYzEyLjMtNy4xLDI1LjYtMTEuNCwzOS43LTEyLjcgIGwxMzguMy0xM2MyMi44LTIuMiw0NC40LTkuMSw2NC4yLTIwLjVDMzczLjMsNDMwLjIsMzk0LjksMzgyLjIsMzg1LDMzM3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0MjYuNiw2NzVIMTIyNGMtNjkuOCwwLTEyNi42LTU2LjgtMTI2LjYtMTI2LjZWMzYyLjhjMC02OS44LDU2LjgtMTI2LjYsMTI2LjYtMTI2LjZoMTA4LjMgIGM2OS44LDAsMTI2LjYsNTYuOCwxMjYuNiwxMjYuNnYyOS4yYzAsNTMuNy00My43LDk3LjQtOTcuNCw5Ny40aC0yMDYuMXY1OS4xYzAsMzcuOCwzMC44LDY4LjYsNjguNiw2OC42aDIwMi41VjY3NXogTTExNTUuNSw0MzEuNCAgaDIwNi4xYzIxLjcsMCwzOS40LTE3LjcsMzkuNC0zOS40di0yOS4yYzAtMzcuOC0zMC44LTY4LjYtNjguNi02OC42SDEyMjRjLTM3LjgsMC02OC42LDMwLjgtNjguNiw2OC42VjQzMS40eiIvPgo8cmVjdCB4PSIyMzYzLjQiIHk9IjI3Mi43IiBjbGFzcz0ic3QwIiB3aWR0aD0iNTgiIGhlaWdodD0iMzk1LjIiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIxNzEuNSw2NzVoLTEwOC4zYy02OS44LDAtMTI2LjYtNTYuOC0xMjYuNi0xMjYuNlYzNjIuOGMwLTY5LjgsNTYuOC0xMjYuNiwxMjYuNi0xMjYuNmgxMDguMyAgYzY5LjgsMCwxMjYuNiw1Ni44LDEyNi42LDEyNi42djE4NS43QzIyOTgsNjE4LjMsMjI0MS4zLDY3NSwyMTcxLjUsNjc1eiBNMjA2My4yLDI5NC4yYy0zNy44LDAtNjguNiwzMC44LTY4LjYsNjguNnYxODUuNyAgYzAsMzcuOCwzMC44LDY4LjYsNjguNiw2OC42aDEwOC4zYzM3LjgsMCw2OC42LTMwLjgsNjguNi02OC42VjM2Mi44YzAtMzcuOC0zMC44LTY4LjYtNjguNi02OC42SDIwNjMuMnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5NjUuNiw0NjAuMyIvPgo8cmVjdCB4PSIyNDg4LjkiIHk9IjE0Ni45IiBjbGFzcz0ic3QwIiB3aWR0aD0iNTgiIGhlaWdodD0iNTIxLjEiLz4KPHJlY3QgeD0iMjM2My40IiB5PSIxNDguOCIgY2xhc3M9InN0MCIgd2lkdGg9IjU4IiBoZWlnaHQ9IjU0LjMiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3NDcuMyw2NzkuOEgxNjM5Yy02OS44LDAtMTI2LjYtNTYuOC0xMjYuNi0xMjYuNlYzNjcuNWMwLTY5LjgsNTYuOC0xMjYuNiwxMjYuNi0xMjYuNmgxMDguMyAgYzY5LjgsMCwxMjYuNiw1Ni44LDEyNi42LDEyNi42djI5aC01OHYtMjljMC0zNy44LTMwLjgtNjguNi02OC42LTY4LjZIMTYzOWMtMzcuOCwwLTY4LjYsMzAuOC02OC42LDY4LjZ2MTg1LjcgIGMwLDM3LjgsMzAuOCw2OC42LDY4LjYsNjguNmgxMDguM2MzNy44LDAsNjguNi0zMC44LDY4LjYtNjguNnYtMjloNTh2MjlDMTg3My45LDYyMywxODE3LjEsNjc5LjgsMTc0Ny4zLDY3OS44eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTU0MS40LDQ2NS4xIi8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDExLjcsNjg1LjFoLTU4di0yMGMwLTM0LjYtMTMuMS02Ny43LTM3LTkzLjNsLTAuOC0wLjhsLTU0LjgtNjkuMWw0NS41LTM2bDUzLjMsNjcuMyAgYzMzLjQsMzYuMiw1MS43LDgzLjEsNTEuNywxMzEuOVY2ODUuMXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxMC40LDY4NS4xbC01OC0wLjJsMS4xLTM2OS40YzAuMS00Mi40LDM1LjEtNzYuOCw3OC4xLTc2LjhsMC4zLDBjMjguNywwLjMsNTYuNS0wLjIsODMuNS0wLjYgIGMyNy4zLTAuNCw1NS41LTAuOSw4NS0wLjZjMTkuMywwLjIsNTYsNC45LDg1LjYsMzQuMmMxOS41LDE5LjIsMzEuNiw0Ni4yLDM0LjMsNzZjMi41LDI4LjQtMy43LDU2LjYtMTcuNiw3OS40ICBjLTIzLjksMzkuNS02My43LDUzLjEtNzkuNyw1Ny4xbC00MS40LDEwLjVjLTMyLjEsNy44LTYzLjQsMTUuNy05My42LDIzLjNjLTI1LDYuMy01MC42LDEyLjgtNzcsMTkuM0w3MTAuNCw2ODUuMXogTTczMS41LDI5Ni43ICBjLTExLDAuMS0xOS45LDguNi0yMCwxOUw3MTEsNDc3LjVjMjEuMy01LjMsNDIuMi0xMC42LDYyLjYtMTUuN2MzMC4zLTcuNyw2MS43LTE1LjYsOTQtMjMuNGw0MS4xLTEwLjRjOS0yLjIsMzEuNC05LjgsNDQuMi0zMC45ICBjMTUuNy0yNS45LDEyLjEtNjQuNC03LjktODQuMmMtMTUuNi0xNS40LTM2LjktMTcuMy00NS40LTE3LjRjLTI4LjYtMC4zLTU2LjUsMC4yLTgzLjQsMC42Qzc4OSwyOTYuNSw3NjAuOCwyOTcsNzMxLjUsMjk2Ljd6Ii8+Cjwvc3ZnPg==&logoColor=white"/>
    </div>
</html>

### BE :

<html>
    <div>
        <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=white"/>
        <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat&logo=Spring Security&logoColor=white"/>
        <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=Amazon S3&logoColor=white"/>
        <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=white"/>
    </div>
</html>

### COMMON :

<html>
    <div>
        <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
        <img src="https://img.shields.io/badge/Sourcetree-0052CC?style=flat&logo=Sourcetree&logoColor=white"/>
    </div>
</html>

---

# Challenging works

### -FE

### -BE

---

## -FE

- project structure
  - scope
  - split up the work
- file structure

---

## -FE

- useQuery
- useMutation
- response Handling
- admin component

---

## -BE

- MemberWholeResponseDto

  - too many field
  - oneToMany problem
  - n+1 problem

- StudyWish logic
  - wishToggle

---

## -BE

- Study

  - orderByWishNums
  - isWish
  - isAccepted
  - memberNum

- StudyRegist logic
  - approve
  - deny

---

## -BE feature

- CI/CD
- HTTPS
- S3 Images
- AWS Memory Swapping

—

# fin.
