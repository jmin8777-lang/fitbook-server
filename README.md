# 🏋️ FitBook Server

운동 기록을 저장하고 관리할 수 있는 백엔드 API 서버입니다.  
RESTful API 구조를 기반으로 설계되었으며,  
단순 CRUD를 넘어 **데이터 흐름 기반 기능까지 구현한 프로젝트**입니다.

---

## 📌 프로젝트 개요

FitBook Server는 사용자의 운동 데이터를 기록하고 조회할 수 있는 API 서버입니다.

기본적인 CRUD 기능과 함께,  
운동 데이터를 활용하여 **책을 생성하고 주문까지 이어지는 기능**을 구현했습니다.

단순 기능 구현이 아니라  
**Controller와 Service를 분리한 구조 설계**에 중점을 두었습니다.

---

## 🚀 주요 기능

- ✅ 운동 기록 저장 (POST /workouts)
- ✅ 운동 기록 조회 (GET /workouts)
- ✅ 운동 기록 수정 (PUT /workouts/:id)
- ⭐ 운동 기록 기반 책 생성 및 주문 (POST /workouts/create-book)

---

## 🛠 기술 스택

- **Backend**: Node.js, Express
- **환경 관리**: dotenv
- **Database**: MySQL
- **API 테스트**: Postman

---

## 📂 프로젝트 구조
fitbook-server/
├── config/
│ └── db.js # DB 연결 설정
├── controllers/
│ └── workoutController.js # 비즈니스 로직 처리
├── routes/
│ └── workouts.js # API 라우팅
├── services/
│ └── bookService.js # 외부 서비스 (책/주문)
├── app.mjs # 서버 실행 파일
├── .env # 환경 변수
├── package.json


---

## ⚙️ 실행 방법

```bash
npm install
node app.mjs

서버 실행 후 접속:

http://localhost:3000
📡 API 명세
1️⃣ 운동 기록 저장

POST /workouts

📥 Request

{
  "type": "킥복싱",
  "duration": 60
}

📤 Response

{
  "message": "운동 기록 추가 완료",
  "id": 1
}
2️⃣ 운동 기록 조회

GET /workouts

📤 Response

[
  {
    "id": 1,
    "type": "킥복싱",
    "duration": 60
  }
]
3️⃣ 운동 기록 수정

PUT /workouts/:id

📥 Request

{
  "date": "2026-04-01",
  "type": "킥복싱",
  "duration": 90,
  "memo": "훈련",
  "image": "test.jpg"
}

📤 Response

{
  "message": "수정 완료"
}
⭐ 4️⃣ 책 생성 및 주문

POST /workouts/create-book

📤 Response

{
  "message": "책 생성 및 주문 완료",
  "book": {
    "id": 1,
    "title": "나의 운동 기록",
    "content": "운동: 킥복싱, 시간: 60분"
  },
  "order": {
    "id": 100,
    "bookId": 1,
    "status": "ordered"
  }
}
🧠 설계 및 구현 포인트
RESTful API 설계 원칙 적용
Controller / Service 구조 분리
DB 데이터 → 가공 → 외부 서비스 흐름 구현
기능별 역할 분리로 유지보수성 확보
확장 가능한 구조 설계
🔧 확장 및 개선 계획
🔹 JWT 기반 로그인/인증 기능 추가
🔹 DELETE 기능 구현
🔹 에러 처리 구조 개선
🔹 실제 외부 API 연동
🔹 서버 배포 (AWS / Render)
🔹 프론트엔드 연동
📈 프로젝트 의의

단순 CRUD 구현을 넘어서
데이터를 활용한 **서비스 흐름(운동 → 책 → 주문)**을 직접 설계하고 구현한 프로젝트입니다.

구조 분리를 통해 확장성과 유지보수성을 고려했으며,
실제 서비스 개발로 이어질 수 있는 기반을 만들었습니다.

개발자 한 줄 정리

"데이터 흐름을 기반으로 기능을 설계하고, 확장 가능한 구조로 구현한 백엔드 프로젝트입니다."

