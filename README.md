# A방문3천사 홈페이지

## 프로젝트 개요
- **이름**: A방문3천사
- **목표**: 15년 경력 사회복지사가 운영하는 장기요양 전문센터 웹사이트
- **도메인**: https://3004.co.kr
- **주요 기능**: 
  - 장기요양 서비스 소개 (방문요양, 가족요양, 방문목욕, 복지용구, 등급신청)
  - 온라인 상담 신청 시스템 (개인정보 수집 동의 포함)
  - Google Sheets 자동 기록 + Gmail 실시간 알림
  - 반응형 디자인으로 모바일 최적화
  - SEO 최적화 (네이버/구글 검색 엔진 등록)

## 공개 URL
- **프로덕션**: https://3004.co.kr
- **Cloudflare Pages**: https://a-visit-three-angels.pages.dev
- **GitHub**: https://github.com/dlsdnddl/3004-website

## 서비스 페이지
- **메인 페이지**: `/`
- **방문요양**: `/visit-care`
- **가족요양**: `/family-care`
- **방문목욕**: `/bath-service`
- **복지용구**: `/welfare-equipment`
- **장기요양 등급신청**: `/grade-application`

## 데이터 구조

### 상담 신청 테이블 (consultations)
```sql
CREATE TABLE consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,           -- 신청자 이름
  phone TEXT NOT NULL,          -- 연락처
  service_type TEXT,            -- 관심 서비스
  message TEXT,                 -- 문의사항
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending' -- 처리 상태
);
```

### 데이터 저장 및 알림
1. **Cloudflare D1**: SQLite 기반 서버리스 데이터베이스
2. **Google Sheets**: 자동 기록 (A방문3천사 상담신청 시트)
3. **Gmail 알림**: 실시간 이메일 발송 (magudaji@gmail.com)

## 🚀 빠른 시작 (새 샌드박스)

### 1. 저장소 클론
```bash
cd /home/user
git clone https://github.com/dlsdnddl/3004-website.git webapp
cd webapp
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 로컬 개발 (선택)
```bash
npm run build
pm2 start ecosystem.config.cjs
curl http://localhost:3000
```

### 4. 배포
```bash
# GitHub 인증
setup_github_environment

# Cloudflare 배포 (필요시)
setup_cloudflare_api_key
npm run build
npx wrangler pages deploy dist --project-name a-visit-three-angels
```

## 사용자 가이드

### 홈페이지 구조
1. **Hero Section**: 메인 헤드라인과 CTA 버튼
2. **About Section**: 대표 소개 (10년 행정전문가, 15년 사회복지사)
3. **Benefits & Services**: 3가지 핵심 혜택과 5가지 서비스
4. **Social Proof**: A등급, 청구그린기관, 멘토기관 인증
5. **FAQ**: 자주 묻는 질문 아코디언
6. **Final CTA**: 상담 신청 폼 (개인정보 동의 포함)

### 상담 신청 프로세스
1. 사용자가 폼 작성 (이름, 연락처, 관심 서비스, 문의사항)
2. 개인정보 수집·이용 동의 체크 (필수)
3. `/api/consultation` API 호출
4. **3곳 동시 저장**:
   - Cloudflare D1 데이터베이스
   - Google Sheets (A방문3천사 상담신청)
   - Gmail 알림 (magudaji@gmail.com)
5. 성공 메시지 표시

## 개발 가이드

### 로컬 개발 환경 설정

```bash
# 의존성 설치
npm install

# 데이터베이스 마이그레이션 (로컬)
npm run db:migrate:local

# 테스트 데이터 시드
npm run db:seed

# 프로젝트 빌드
npm run build

# 개발 서버 시작 (PM2)
pm2 start ecosystem.config.cjs

# 서비스 테스트
curl http://localhost:3000

# 로그 확인
pm2 logs --nostream
```

### 데이터베이스 관리

```bash
# 로컬 데이터베이스 초기화
npm run db:reset

# 로컬 쿼리 실행
npm run db:console:local

# 프로덕션 마이그레이션
npm run db:migrate:prod
```

### 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx          # 메인 애플리케이션 (모든 라우트)
│   └── renderer.tsx       # HTML 렌더러 (SEO 메타태그)
├── public/
│   ├── fonts/             # NanumSquareRound 폰트
│   ├── static/            # 로고, 이미지
│   ├── naver987a93608620188920e4e7ed2a13179d.html  # 네이버 인증
│   └── google32db8b0d5039453c.html                 # 구글 인증
├── migrations/
│   └── 0001_initial_schema.sql  # DB 스키마
├── dist/                  # 빌드 결과물
├── .wrangler/            # 로컬 개발 (자동 생성)
├── ecosystem.config.cjs  # PM2 설정
├── wrangler.jsonc        # Cloudflare 설정
├── vite.config.ts        # Vite 설정
├── package.json          # 의존성
├── seed.sql              # 테스트 데이터
├── NEW_SESSION_CONTEXT.md    # 새 세션 가이드 ⭐
├── QUICK_START.md            # 빠른 시작 가이드 ⭐
└── PROJECT_HANDOVER.md       # 상세 문서
```

## 배포

### Cloudflare Pages 배포

```bash
# 1. 빌드
npm run build

# 2. 배포
npm run deploy:prod
# 또는
npx wrangler pages deploy dist --project-name a-visit-three-angels

# 3. 프로덕션 DB 마이그레이션 (최초 1회)
npm run db:migrate:prod
```

### Git 워크플로우

```bash
# 변경사항 확인
git status

# 커밋 및 푸시
git add .
git commit -m "커밋 메시지"
git push origin main
```

## 기술 스택
- **프레임워크**: Hono v4 (Edge-first framework)
- **런타임**: Cloudflare Pages/Workers
- **데이터베이스**: Cloudflare D1 (SQLite)
- **빌드 도구**: Vite
- **스타일링**: Tailwind CSS (CDN), Font Awesome
- **프로세스 관리**: PM2 (개발 환경)
- **배포**: Wrangler CLI
- **통합**: Google Sheets API, Gmail (Apps Script)

## 완료된 기능

### ✅ 웹사이트
- 네비게이션 바 (로고, 메뉴, 드롭다운, 모바일 햄버거)
- Hero Section (메인 헤드라인, CTA)
- About Section (임직원 사진, 전문성 강조)
- Benefits & Services (핵심 혜택, 5가지 서비스)
- Social Proof (A등급, 청구그린기관, 멘토기관)
- FAQ 아코디언
- Final CTA (상담 신청 폼)
- 5개 서비스 상세 페이지
- 반응형 디자인 (모바일 최적화)
- 스무스 스크롤 및 애니메이션
- Three Angel 브랜드 로고

### ✅ 데이터 처리
- D1 데이터베이스 연동
- Google Sheets 자동 기록
- Gmail 실시간 알림
- 개인정보 수집·이용 동의 (법적 준수)

### ✅ SEO 최적화
- 메타 태그 최적화 (`성남방문요양 A방문3천사 | 15년 경력 장기요양전문가의 맞춤 무료상담`)
- 구조화된 데이터 (JSON-LD: LocalBusiness, Organization, WebSite)
- 지역 SEO (성남시, 분당구 GPS 좌표)
- sitemap.xml, robots.txt
- 네이버 서치어드바이저 등록 완료
- 구글 서치 콘솔 등록 완료
- 네이버 플레이스 홈페이지 연결 완료

### ✅ 배포
- Cloudflare Pages 프로덕션 운영 중
- 커스텀 도메인 (3004.co.kr)
- SSL 자동 발급
- GitHub 자동 연동
- Git 버전 관리

## 검색 노출 현황 (2025-01-02)

### 현재 상태
- ✅ **"성남방문요양 A방문3천사"**: 1페이지 노출
- ⏳ **"성남방문요양"**: 후순위 (1-2주 후 개선 예상)
- ⏳ **"A방문3천사"**: 후순위 (브랜드 인지도 향상 필요)

### SEO 개선 계획
1. **네이버 블로그 포스팅** (최우선)
   - 주 2-3회, 총 20-30개 목표
   - 주제: 성남방문요양, 등급신청, 장기요양 정보
   
2. **홈페이지 콘텐츠 추가**
   - 고객 후기 페이지 (`/reviews`)
   - 블로그/소식 페이지 (`/blog`)
   - 지역별 서비스 페이지 (`/seongnam`, `/bundang`)

3. **백링크 구축**
   - 네이버 지식iN 활동
   - 지역 커뮤니티 홍보
   - 복지 디렉토리 등록

4. **이미지/속도 최적화**
   - 이미지 압축 및 최적화
   - 폰트 로딩 개선

## 🎯 새 세션에서 시작하기

### 최단 경로 (3단계)
1. **저장소 클론**: `git clone https://github.com/dlsdnddl/3004-website.git webapp`
2. **AI에게 알리기**: "NEW_SESSION_CONTEXT.md 파일을 읽어주세요"
3. **인증 설정**: `setup_github_environment`, `setup_cloudflare_api_key`

### 상세 가이드
- **NEW_SESSION_CONTEXT.md**: 전체 시작 가이드
- **QUICK_START.md**: 빠른 시작 (3단계)
- **PROJECT_HANDOVER.md**: 프로젝트 상세 문서

## 배포 상태
- **플랫폼**: Cloudflare Pages
- **상태**: ✅ 프로덕션 운영 중
- **도메인**: https://3004.co.kr
- **마지막 배포**: 2025-01-02
- **마지막 업데이트**: 개인정보 수집 동의 추가

## 최근 업데이트 (v3.0 - 2025-01-02)
- ✨ 개인정보 수집·이용 동의 체크박스 추가
- 🔍 SEO 최적화 (네이버/구글 등록)
- 📧 Gmail 알림 시스템 (magudaji@gmail.com)
- 🔐 개인정보보호법 준수
- 📊 Google Sheets 자동 기록
- 🌐 커스텀 도메인 (3004.co.kr)
- 📝 NEW_SESSION_CONTEXT.md, QUICK_START.md 문서 추가

## 문의
프로젝트 관련 문의: GitHub Issues 또는 magudaji@gmail.com

---

**Last Updated**: 2025-01-02  
**Status**: ✅ Production Running  
**Version**: v3.0
