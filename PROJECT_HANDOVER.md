# A방문3천사 홈페이지 - 프로젝트 인수인계 문서

> 이 문서는 새로운 개발자나 AI 어시스턴트가 프로젝트를 빠르게 이해하고 작업을 이어갈 수 있도록 작성되었습니다.

## 📌 프로젝트 개요

### 기본 정보
- **프로젝트명**: A방문3천사 홈페이지
- **사업 내용**: 장기요양 원스톱 케어 서비스
- **운영자**: 10년 이상 경력 장기요양 행정전문가 + 15년 경력 사회복지사
- **연락처**: 031-759-3004

### 실제 운영 URL
```
✅ 프로덕션: https://3004.co.kr
✅ 백업 URL: https://cf73cefb.a-visit-three-angels.pages.dev
✅ GitHub: https://github.com/dlsdnddl/3004-website
```

### 페이지 구조
```
/                    → 메인 페이지 (Hero, About, Benefits, FAQ, CTA)
/visit-care          → 방문요양 서비스
/family-care         → 가족요양 서비스
/visit-bath          → 방문목욕 서비스
/welfare-equipment   → 복지용구 서비스
/grade-application   → 장기요양 등급신청 서비스
```

---

## 🏗️ 기술 아키텍처

### 핵심 기술 스택
```
프레임워크:    Hono v4 (Edge-first Web Framework)
런타임:        Cloudflare Workers/Pages
데이터베이스:  Cloudflare D1 (SQLite 기반)
빌드 도구:     Vite
스타일:        Tailwind CSS (CDN), Font Awesome
폰트:          여기어때 잘난체 (타이틀), NanumSquareRound (본문)
배포:          Wrangler CLI
버전 관리:     Git + GitHub
```

### 프로젝트 디렉토리 구조
```
/home/user/webapp/
├── src/
│   ├── index.tsx          # 🔥 메인 앱 (모든 라우트, API 포함)
│   └── renderer.tsx       # HTML 레이아웃, 폰트, Tailwind 설정
├── public/
│   ├── fonts/             # NanumSquareRound 폰트 파일 (8개)
│   └── static/
│       └── style.css      # 커스텀 CSS (애니메이션, 폰트 설정)
├── migrations/
│   └── 0001_initial_schema.sql  # D1 DB 스키마
├── dist/                  # 빌드 결과물 (Cloudflare Pages 배포용)
├── .wrangler/            # 로컬 D1 데이터베이스 (.gitignore)
├── node_modules/         # npm 의존성 (.gitignore)
├── ecosystem.config.cjs  # PM2 프로세스 관리 설정
├── wrangler.toml         # Cloudflare 설정 (D1 DB ID 포함)
├── vite.config.ts        # Vite 빌드 설정
├── package.json          # npm 스크립트 및 의존성
├── tsconfig.json         # TypeScript 설정
├── seed.sql              # 로컬 테스트 데이터
└── README.md             # 프로젝트 문서
```

---

## 🎨 디자인 시스템

### 색상 테마
```
메인 컬러:     핑크 계열 (#ec4899, #f472b6, #fbbf24)
배경:          화이트, 연한 핑크 (#fce7f3)
텍스트:        그레이 계열 (#1f2937, #4b5563, #6b7280)
강조:          노란색 (#fbbf24), 핑크 (#ec4899)
```

### 타이포그래피
```
타이틀/헤딩:   여기어때 잘난체 (JalnanOTF00.woff)
본문 텍스트:   NanumSquareRound Bold
아이콘:        Font Awesome 6.4.0
```

### 반응형 브레이크포인트
```
모바일:   < 768px
태블릿:   768px ~ 1024px
데스크톱: > 1024px
```

---

## 💾 데이터베이스

### Cloudflare D1 설정
```json
{
  "d1_databases": [{
    "binding": "DB",
    "database_name": "webapp-production",
    "database_id": "a74f0d81-8e5b-4118-9968-c4f7771ed839"
  }]
}
```

### 테이블 스키마
```sql
-- 상담 신청 테이블
CREATE TABLE consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending'
);

-- 인덱스
CREATE INDEX idx_consultations_status ON consultations(status);
CREATE INDEX idx_consultations_created ON consultations(created_at);
```

### API 엔드포인트
```typescript
POST /api/consultation
Request Body: {
  name: string,
  phone: string,
  service_type?: string,
  message?: string
}
Response: { success: true, id: number }
```

---

## 🚀 개발 환경 설정

### 초기 설정 (새 샌드박스에서)
```bash
# 1. 저장소 클론
git clone https://github.com/dlsdnddl/3004-website.git
cd 3004-website

# 2. 의존성 설치 (300초 타임아웃 필요)
npm install

# 3. 로컬 D1 데이터베이스 마이그레이션
npm run db:migrate:local

# 4. 테스트 데이터 시드 (선택)
npm run db:seed

# 5. 프로젝트 빌드
npm run build

# 6. PM2로 개발 서버 시작
pm2 start ecosystem.config.cjs

# 7. 서비스 확인
curl http://localhost:3000

# 8. 로그 확인
pm2 logs webapp --nostream
```

### 중요 명령어
```bash
# 개발
npm run build              # Vite 빌드 (dist/ 생성)
pm2 start ecosystem.config.cjs  # 개발 서버 시작
pm2 restart webapp         # 서버 재시작
pm2 logs webapp --nostream # 로그 확인
pm2 delete webapp          # 서버 중지

# 데이터베이스
npm run db:migrate:local   # 로컬 마이그레이션
npm run db:migrate:prod    # 프로덕션 마이그레이션
npm run db:reset           # 로컬 DB 초기화
npm run db:console:local   # 로컬 DB 콘솔

# 배포
npm run deploy:prod        # Cloudflare Pages 배포
npm run test               # 로컬 서버 테스트

# Git
npm run git:status         # Git 상태 확인
npm run git:commit         # Git 커밋 (메시지 필요)
git push origin main       # GitHub 푸시
```

---

## 🌐 Cloudflare 설정

### Pages 프로젝트
```
프로젝트명:    a-visit-three-angels
커스텀 도메인: 3004.co.kr
빌드 명령어:   npm run build
출력 디렉토리: dist
```

### DNS 설정 (Cafe24 → Cloudflare)
```
네임서버 1: aarav.ns.cloudflare.com
네임서버 2: lily.ns.cloudflare.com
```

### 배포 프로세스
```bash
# 1. 로컬에서 빌드 및 테스트
npm run build
curl http://localhost:3000

# 2. GitHub 커밋 및 푸시
git add .
git commit -m "Update: [변경 내용]"
git push origin main

# 3. Cloudflare Pages 배포
npm run deploy:prod

# 4. 프로덕션 확인
curl https://3004.co.kr
```

---

## 📝 주요 수정 이력

### v1.0 (초기 버전)
- 메인 페이지 구조 완성
- 5개 서비스 상세 페이지
- 상담 신청 폼 (D1 연동)
- 반응형 디자인

### v2.0 (폰트 및 스타일 개선)
- NanumSquareRound 폰트 추가
- 특정 텍스트에 폰트 적용 (Hero, About, Benefits, FAQ)
- CSS 우선순위 수정 (font-nanum 클래스)
- Vite 설정 개선 (public 디렉토리)

### v3.0 (텍스트 수정)
- "10년 이상의 경력을 가진" → "10년 이상 경력의"
- 전화번호 변경: 031-759-3004
- PC 버전 줄바꿈 해제 (장기요양 행정전문가)
- NanumSquareRound Bold 적용

### v4.0 (도메인 연결)
- Cafe24 DNS → Cloudflare 네임서버 변경
- 3004.co.kr 커스텀 도메인 연결
- SSL 인증서 자동 발급
- GitHub 저장소 연결

---

## 🎯 작업 시 체크리스트

### 새 채팅/계정에서 시작할 때

1. **프로젝트 확인**
   ```bash
   cd /home/user/webapp
   git status
   git log --oneline -5
   ```

2. **환경 설정 확인**
   ```bash
   npm list --depth=0
   npx wrangler whoami
   ```

3. **로컬 서버 시작**
   ```bash
   fuser -k 3000/tcp 2>/dev/null || true
   npm run build
   pm2 start ecosystem.config.cjs
   curl http://localhost:3000
   ```

4. **변경 사항 적용 후**
   ```bash
   npm run build
   pm2 restart webapp
   git add .
   git commit -m "Update: [변경 내용]"
   git push origin main
   npm run deploy:prod
   ```

---

## ⚠️ 주의사항

### Cloudflare Workers 환경 제약
```
❌ Node.js API 사용 불가 (fs, path, crypto 등)
❌ 파일 시스템 접근 불가
❌ 런타임에 파일 읽기/쓰기 불가
✅ Web API 사용 (Fetch, FormData 등)
✅ Cloudflare D1 (데이터베이스)
✅ serveStatic (정적 파일 제공)
```

### 정적 파일 제공
```typescript
// ✅ 올바른 방법 (Cloudflare Pages)
import { serveStatic } from 'hono/cloudflare-workers'
app.use('/static/*', serveStatic({ root: './public' }))

// ❌ 잘못된 방법 (Node.js 전용)
import { serveStatic } from '@hono/node-server/serve-static'
```

### Bash 명령어 주의
```bash
# ❌ 잘못된 방법 (디렉토리 유지 안 됨)
cd /home/user/webapp
npm install

# ✅ 올바른 방법 (항상 cd 포함)
cd /home/user/webapp && npm install

# ✅ npm 명령어는 300초 타임아웃 설정
cd /home/user/webapp && npm install  # timeout: 300000
```

### PM2 사용 필수
```bash
# ❌ 직접 실행 (블로킹, 샌드박스 멈춤)
npx wrangler pages dev dist

# ✅ PM2로 실행 (백그라운드)
pm2 start ecosystem.config.cjs
```

---

## 🔑 인증 정보

### GitHub
```
계정: @dlsdnddl
저장소: https://github.com/dlsdnddl/3004-website
브랜치: main

# 새 샌드박스에서 설정 시
setup_github_environment  # 도구 호출
```

### Cloudflare
```
프로젝트: a-visit-three-angels
도메인: 3004.co.kr
DB: webapp-production (a74f0d81-8e5b-4118-9968-c4f7771ed839)

# 새 샌드박스에서 설정 시
setup_cloudflare_api_key  # 도구 호출
npx wrangler whoami       # 인증 확인
```

---

## 🤖 AI 어시스턴트에게 전달할 내용

### 프로젝트 컨텍스트
```
안녕하세요!

A방문3천사 홈페이지 프로젝트를 이어서 작업하고 싶습니다.

**프로젝트 정보:**
- 이름: A방문3천사 장기요양 원스톱 케어 홈페이지
- 도메인: https://3004.co.kr
- GitHub: https://github.com/dlsdnddl/3004-website
- 기술 스택: Hono + TypeScript + Cloudflare Pages + D1 Database
- 프로젝트 경로: /home/user/webapp
- Cloudflare 프로젝트: a-visit-three-angels

**주요 파일:**
- src/index.tsx (메인 앱, 모든 라우트)
- src/renderer.tsx (HTML 레이아웃, 폰트)
- public/static/style.css (커스텀 CSS)
- wrangler.toml (Cloudflare 설정)

**현재 배포 상태:**
- ✅ 프로덕션 배포: https://3004.co.kr
- ✅ GitHub 연동: 완료
- ✅ D1 데이터베이스: 연결됨

**작업 요청:**
[여기에 수정하고 싶은 내용 작성]

**참고:**
- PROJECT_HANDOVER.md 파일을 먼저 읽어주세요
- Bash 명령어는 항상 `cd /home/user/webapp &&` 포함
- npm 명령어는 300초 타임아웃 필요
- 빌드 후 PM2로 서버 시작 필수
```

---

## 📚 추가 문서

### 관련 파일
```
README.md              → 프로젝트 개요 및 사용 가이드
PROJECT_HANDOVER.md    → 이 문서 (인수인계 문서)
package.json           → npm 스크립트 및 의존성
wrangler.toml          → Cloudflare 설정
ecosystem.config.cjs   → PM2 설정
```

### 외부 문서
```
Hono 문서:        https://hono.dev/
Cloudflare D1:    https://developers.cloudflare.com/d1/
Cloudflare Pages: https://developers.cloudflare.com/pages/
Wrangler CLI:     https://developers.cloudflare.com/workers/wrangler/
```

---

## 🎊 프로젝트 현황

### 완료된 기능
- ✅ 메인 페이지 (Hero, About, Benefits, Social Proof, FAQ, CTA)
- ✅ 5개 서비스 상세 페이지
- ✅ 상담 신청 폼 + D1 데이터베이스 저장
- ✅ 반응형 디자인 (모바일 최적화)
- ✅ 커스텀 폰트 (여기어때 잘난체 + NanumSquareRound)
- ✅ 애니메이션 (fade-in, slide-up)
- ✅ Cloudflare Pages 배포
- ✅ 커스텀 도메인 연결 (3004.co.kr)
- ✅ SSL 인증서 자동 발급
- ✅ GitHub 버전 관리

### 향후 개선 가능 사항
- 관리자 대시보드 (상담 신청 관리)
- 이메일 알림 (상담 신청 시)
- Google Analytics 연동
- 실제 사진 교체 (전문가 프로필)
- SEO 최적화 (메타 태그, sitemap)
- 채팅 상담 기능

---

## 📞 연락처

**프로젝트 관련 문의:**
- GitHub Issues: https://github.com/dlsdnddl/3004-website/issues
- 웹사이트 문의: https://3004.co.kr (상담 신청 폼)

---

**마지막 업데이트:** 2025년 1월
**문서 버전:** 1.0
**작성자:** AI Developer (GenSpark)
