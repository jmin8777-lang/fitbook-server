# 🏋️ FitBook Server

운동 기록을 효율적으로 저장하고 관리하기 위한 백엔드 API 서버입니다.  
RESTful API 구조를 기반으로 설계되었으며, 실제 서비스 확장을 고려한 구조로 구현했습니다.

---

## 📌 프로젝트 개요

FitBook Server는 사용자의 운동 데이터를 기록하고 조회할 수 있는 API 서버입니다.  

단순 CRUD 구현을 넘어,  
**확장성과 유지보수성을 고려한 구조 설계**에 중점을 두었습니다.

---

## 🚀 주요 기능

- ✅ 운동 기록 저장 (POST /workouts)
- ✅ 운동 기록 조회 (GET /workouts)
- 🔄 운동 기록 수정 (PUT /workouts/:id) *(구현 예정)*
- 🔄 운동 기록 삭제 (DELETE /workouts/:id) *(구현 예정)*

---

## 🛠 기술 스택

- **Backend**: Node.js, Express
- **환경 관리**: dotenv
- **데이터 형식**: JSON
- **API 테스트**: Postman

---

## 📂 프로젝트 구조
fitbook-server/
├── routes/
│ └── workouts.js # 운동 기록 API 라우터
├── app.mjs # 서버 진입점
├── .env # 환경 변수
├── package.json

---

## ⚙️ 실행 방법

```bash
npm install
node app.mjs

서버 실행 후 접속:

http://localhost:3000

API 명세
1️⃣ 운동 기록 저장
POST /workouts

📥 Request

{
  "type": "킥복싱",
  "duration": 60
}

📤 Response

{
  "message": "운동 기록 저장 완료"
}
2️⃣ 운동 기록 조회
GET /workouts

📤 Response

[
  {
    "type": "킥복싱",
    "duration": 60
  }
]

설계 및 구현 포인트 
RESTful API 설계 원칙 적용
Express Router를 활용한 모듈화 구조
JSON 기반 데이터 처리
기능 단위 분리로 유지보수 용이성 확보
추후 DB 및 인증 기능 확장 고려

확장 및 개선 계획
🔹 MySQL 연동 → 데이터 영속성 확보
🔹 JWT 기반 로그인/인증 기능 추가
🔹 CRUD 기능 완성 (PUT / DELETE)
🔹 API 에러 처리 구조 개선
🔹 서버 배포 (Render 또는 AWS EC2)
🔹 프론트엔드와 연동
📈 프로젝트 의의

단순 기능 구현을 넘어서
실제 서비스로 확장 가능한 백엔드 구조를 직접 설계하고 구현한 프로젝트입니다.

특히, API 설계와 구조 분리에 집중하여
향후 인증, DB, 배포까지 자연스럽게 확장 가능한 기반을 만들었습니다.

👨‍💻 개발자 한 줄 정리

"기능 구현에 그치지 않고, 서비스 확장을 고려한 구조 설계에 집중한 백엔드 프로젝트입니다."
