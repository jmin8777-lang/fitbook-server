# 🏋️ FitBook - 운동 기록 웹앱

운동 기록을 간편하게 저장하고 관리할 수 있는 웹 애플리케이션입니다.  
REST API 기반으로 CRUD 기능을 구현하고, 프론트엔드와 연동하여 실제 동작하는 웹앱 형태로 개발했습니다.  
또한 카카오 책 검색 API를 활용하여 외부 API 연동 기능까지 구현했습니다.

---

## 📌 프로젝트 개요

FitBook은 사용자가 자신의 운동 기록을 추가, 조회, 수정, 삭제할 수 있는 웹 서비스입니다.  

단순 기능 구현을 넘어  
👉 사용자 경험(UI/UX)과 실제 서비스 흐름을 고려하여 설계했습니다.

---

## 🚀 주요 기능

### 🏋️ 운동 기록 기능
- 운동 기록 추가
- 운동 기록 조회
- 운동 기록 수정
- 운동 기록 삭제

### 📊 추가 기능
- 총 운동 시간 계산
- 총 운동 개수 표시
- 날짜 기반 기록 관리

### 📚 외부 API 기능
- 카카오 책 검색 API를 활용한 책 검색 기능

---

## 📡 REST API

### 1. 운동 기록 조회
GET /workouts

---

### 2. 운동 기록 추가
POST /workouts

Body:
```json
{
  "exercise": "킥복싱",
  "time": 30
}
3. 운동 기록 수정

PUT /workouts/:id

Body:

{
  "exercise": "러닝",
  "time": 20
}
4. 운동 기록 삭제

DELETE /workouts/:id

🛠 기술 스택
Backend: Node.js, Express
Frontend: HTML, CSS, JavaScript
데이터 저장: 메모리 기반 (추후 DB 확장 가능)
외부 API: Kakao Book Search API
📂 프로젝트 구조
fitbook-server/
├── routes/
│   └── workouts.js
├── public/
│   └── index.html
├── app.mjs
▶️ 실행 방법
npm install
node app.mjs

브라우저 접속:

http://localhost:3000
🌐 서비스 도메인 (예시)
https://fitbook-app.vercel.app
💡 구현 포인트
RESTful API 설계 및 CRUD 기능 구현
프론트엔드와 API 연동을 통한 실시간 데이터 반영
사용자 중심 UI (카드형 디자인 + 인터랙션)
외부 API 연동을 통한 기능 확장
📈 향후 개선 방향
MySQL 기반 데이터 저장 적용
사용자 로그인/회원 기능 추가
운동 통계 그래프 기능 추가
모바일 UI 최적화
🎯 프로젝트 의의

단순한 기능 구현이 아닌
👉 “실제 사용 가능한 웹 서비스”를 만드는 것을 목표로 개발했습니다.

백엔드 API 설계부터 프론트엔드 연동까지 전 과정을 경험하며
웹 서비스의 전체 흐름을 이해할 수 있었습니다.
