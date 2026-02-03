# Physics Easy

물리학 학습 및 시뮬레이션 웹 애플리케이션

## 프로젝트 구조

```
physics-easy/
├── frontend/          # React + TypeScript + Vite
├── backend/           # Express + TypeScript
└── README.md
```

## 시작하기

### 프론트엔드

```bash
cd frontend
npm install
npm run dev
```

프론트엔드는 `http://localhost:5173`에서 실행됩니다.

### 백엔드

```bash
cd backend
npm install
npm run dev
```

백엔드는 `http://localhost:4000`에서 실행됩니다.

## 환경 변수 설정

### 프론트엔드

`frontend/.env` 파일을 생성하고 다음 내용을 추가하세요:

```
VITE_API_URL=http://localhost:4000
VITE_APP_NAME=Physics Easy
```

### 백엔드

`backend/.env` 파일을 생성하고 다음 내용을 추가하세요 (선택사항):

```
PORT=4000
NODE_ENV=development
```

## 주요 기능

### Phase 1 완료 ✅

- ✅ React Router를 통한 라우팅 설정
- ✅ API 클라이언트 및 에러 처리
- ✅ 공통 컴포넌트 (Button, Card, Input, Loading 등)
- ✅ Layout 컴포넌트 (Header, Footer)
- ✅ ErrorBoundary 컴포넌트
- ✅ KaTeX를 통한 수식 렌더링
- ✅ 백엔드 라우터 구조 및 미들웨어
- ✅ 에러 핸들러 및 로깅

## 기술 스택

### 프론트엔드
- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- React Router DOM
- Axios
- Zustand
- Framer Motion
- Chart.js
- KaTeX

### 백엔드
- Express 5.2.1
- TypeScript 5.9.3
- CORS

## 다음 단계

Phase 2에서는 물리학 주제별 시뮬레이션을 구현할 예정입니다.
