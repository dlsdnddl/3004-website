# A방문3천사 홈페이지

## 프로젝트 개요
- **이름**: A방문3천사
- **목표**: 15년 경력 사회복지사가 운영하는 장기요양 전문센터 웹사이트
- **주요 기능**: 
  - 장기요양 서비스 소개 (방문요양, 가족요양, 방문목욕, 복지용구, 등급신청)
  - 온라인 상담 신청 시스템
  - 반응형 디자인으로 모바일 최적화
  - D1 데이터베이스를 활용한 상담 신청 저장

## 공개 URL
- **개발 서버**: https://3000-ia2kfc67vao5bjix9jw91-02b9cc79.sandbox.novita.ai
- **메인 페이지**: `/`
- **서비스 상세 페이지**:
  - 방문요양: `/visit-care`
  - 가족요양: `/family-care`
  - 방문목욕: `/bath-service`
  - 복지용구: `/welfare-equipment`
  - 장기요양 등급신청: `/grade-application`

## 데이터 구조

### 상담 신청 테이블 (consultations)
```sql
CREATE TABLE consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,           -- 신청자 이름
  phone TEXT NOT NULL,          -- 연락처
  service_type TEXT,            -- 관심 서비스 (등급신청, 방문요양, 가족요양 등)
  message TEXT,                 -- 문의사항
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending' -- 처리 상태
);
```

### 저장 서비스
- **Cloudflare D1**: SQLite 기반 서버리스 데이터베이스
- **로컬 개발**: `.wrangler/state/v3/d1` 디렉토리에 로컬 SQLite 생성
- **프로덕션**: Cloudflare D1 프로덕션 데이터베이스

## 사용자 가이드

### 홈페이지 구조
1. **Hero Section**: 메인 헤드라인과 CTA 버튼
2. **Mini About**: 대표 소개 및 전문성 강조
3. **Benefits & Services**: 3가지 핵심 혜택과 5가지 서비스 소개
4. **Social Proof**: A등급, 청구그린기관, 멘토기관 인증 표시
5. **FAQ**: 자주 묻는 질문 아코디언
6. **Final CTA**: 상담 신청 폼 (DB 저장)

### 서비스별 상세 페이지
각 서비스는 독립된 페이지로 구성되어 있으며, 다음 내용을 포함합니다:
- 서비스 설명
- 제공 내용 및 방식
- 이용 절차
- 실제 혜택
- 상담 신청 버튼 (메인 페이지 CTA로 이동)

### 상담 신청 프로세스
1. 사용자가 폼 작성 (이름, 연락처, 관심 서비스, 문의사항)
2. 폼 제출 시 `/api/consultation` API 호출
3. D1 데이터베이스에 상담 신청 정보 저장
4. 성공 메시지 표시

## 개발 가이드

### 로컬 개발 환경 설정

```bash
# 의존성 설치
npm install

# 데이터베이스 마이그레이션 (로컬)
npm run db:migrate:local

# 테스트 데이터 시드 (선택사항)
npm run db:seed

# 프로젝트 빌드
npm run build

# 개발 서버 시작 (PM2)
pm2 start ecosystem.config.cjs

# 서비스 테스트
npm run test  # curl http://localhost:3000

# 로그 확인
pm2 logs webapp --nostream
```

### 데이터베이스 관리

```bash
# 로컬 데이터베이스 초기화
npm run db:reset

# 로컬 데이터베이스 콘솔
npm run db:console:local

# 쿼리 실행 예시
npx wrangler d1 execute webapp-production --local --command="SELECT * FROM consultations"

# 프로덕션 마이그레이션
npm run db:migrate:prod
```

### 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx          # 메인 애플리케이션 (모든 라우트 포함)
│   └── renderer.tsx       # HTML 렌더러 (공통 레이아웃)
├── public/
│   └── static/
│       └── style.css      # 커스텀 CSS
├── migrations/
│   └── 0001_initial_schema.sql  # DB 스키마
├── dist/                  # 빌드 결과물
├── .wrangler/            # 로컬 개발 파일
├── ecosystem.config.cjs  # PM2 설정
├── wrangler.jsonc        # Cloudflare 설정
├── package.json          # 프로젝트 설정
└── seed.sql              # 테스트 데이터
```

## 배포

### Cloudflare Pages 배포 (프로덕션)

```bash
# 프로젝트 빌드
npm run build

# Cloudflare Pages 배포
npm run deploy:prod

# 프로덕션 데이터베이스 마이그레이션
npm run db:migrate:prod

# 환경 변수 설정 (필요시)
npx wrangler pages secret put API_KEY --project-name webapp
```

## 기술 스택
- **프레임워크**: Hono v4 (Edge-first framework)
- **런타임**: Cloudflare Pages/Workers
- **데이터베이스**: Cloudflare D1 (SQLite)
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS (CDN), Font Awesome (아이콘)
- **프로세스 관리**: PM2 (개발 환경)
- **배포**: Wrangler CLI

## 완료된 기능
✅ Hero Section with CTA
✅ Mini About with 전문가 소개
✅ Benefits & Services 섹션
✅ Social Proof (A등급, 청구그린기관, 멘토기관)
✅ FAQ 아코디언
✅ Final CTA with 상담 신청 폼
✅ 5개 서비스 상세 페이지 (방문요양, 가족요양, 방문목욕, 복지용구, 등급신청)
✅ D1 데이터베이스 연동
✅ 반응형 디자인 (모바일 최적화)
✅ 스무스 스크롤 및 애니메이션
✅ Git 버전 관리

## 향후 개선 사항
- [ ] 상담 신청 관리자 페이지 (대시보드)
- [ ] 이메일 알림 기능 (상담 신청 시)
- [ ] 실제 이미지 추가 (전문가 프로필, 서비스 사진)
- [ ] SEO 최적화 (메타 태그, sitemap)
- [ ] Google Analytics 연동
- [ ] 채팅 상담 기능

## 배포 상태
- **플랫폼**: Cloudflare Pages (준비 완료)
- **상태**: 로컬 개발 완료, 프로덕션 배포 대기
- **기술 스택**: Hono + TypeScript + TailwindCSS + Cloudflare D1
- **최종 업데이트**: 2024년

## 문의
프로젝트 관련 문의사항은 GitHub Issues를 통해 남겨주세요.
