# A방문3천사 프로젝트 - 새 세션 시작 가이드

## 🎯 프로젝트 개요
- **프로젝트명**: A방문3천사 (장기요양 원스톱 케어 서비스)
- **도메인**: https://3004.co.kr
- **기술 스택**: Hono + Cloudflare Pages + D1 Database + Google Sheets
- **로컬 경로**: `/home/user/webapp`

## 📦 필수 연동 정보

### GitHub
- **저장소**: https://github.com/dlsdnddl/3004-website
- **브랜치**: main
- **계정**: @dlsdnddl

### Cloudflare Pages
- **프로젝트명**: a-visit-three-angels
- **프로덕션 URL**: https://3004.co.kr
- **백업 URL**: https://a-visit-three-angels.pages.dev
- **D1 Database**: webapp-production

### Google Sheets 연동
- **시트명**: A방문3천사 상담신청
- **Apps Script URL**: https://script.google.com/macros/s/AKfycbwmTRU3cDkepv2hZzddvLAk--GTbgDQfZSKl-b0ZaffdkkXbhH2x7s655Yx844UPto1/exec
- **알림 이메일**: magudaji@gmail.com

### 도메인
- **도메인**: 3004.co.kr
- **등록처**: Cafe24
- **네임서버**: Cloudflare (aarav.ns.cloudflare.com, lily.ns.cloudflare.com)

### SEO 등록 현황
- ✅ **네이버 서치어드바이저**: 등록 완료
- ✅ **구글 서치 콘솔**: 등록 완료
- ✅ **네이버 플레이스**: 등록 완료 + 홈페이지 연결 완료

---

## 🚀 새 샌드박스에서 시작하기

### ⚠️ 중요: 프로젝트 경로
**반드시 `/home/user/webapp` 경로를 사용하세요!**

### 1단계: GitHub 저장소 클론
```bash
cd /home/user
git clone https://github.com/dlsdnddl/3004-website.git webapp
cd webapp
```

### 2단계: GitHub 인증 설정
```bash
# GenSpark 도구 사용 (권장)
setup_github_environment
```
- 또는 GenSpark의 #github 탭에서 `dlsdnddl/3004-website` 저장소 선택

### 3단계: 의존성 설치 (타임아웃 300초 설정)
```bash
cd /home/user/webapp
npm install  # 타임아웃: 300초
```

### 4단계: 로컬 개발 서버 시작 (선택)
```bash
cd /home/user/webapp
npm run build  # 타임아웃: 300초
pm2 start ecosystem.config.cjs
curl http://localhost:3000  # 테스트
```

### 5단계: Cloudflare 배포 (필요시)
```bash
# 1. Cloudflare API 키 설정
setup_cloudflare_api_key  # GenSpark 도구 사용

# 2. 배포
cd /home/user/webapp
npm run build  # 타임아웃: 300초
npx wrangler pages deploy dist --project-name a-visit-three-angels  # 타임아웃: 300초
```

---

## 📝 주요 파일 위치

### 백엔드 (Hono)
- **메인 파일**: `/home/user/webapp/src/index.tsx`
- **렌더러**: `/home/user/webapp/src/renderer.tsx` (SEO 메타태그 포함)
- **API 엔드포인트**: 
  - `/api/consultation` (상담신청 → D1 + Google Sheets)
  - `/naver987a93608620188920e4e7ed2a13179d.html` (네이버 인증)
  - `/google32db8b0d5039453c.html` (구글 인증)
  - `/robots.txt` (SEO)
  - `/sitemap.xml` (SEO)

### 프론트엔드
- **정적 파일**: `/home/user/webapp/public/`
- **폰트**: `public/fonts/` (NanumSquareRound)
- **이미지**: `public/static/` (logo.png, team.jpg)

### 설정 파일
- **Wrangler**: `wrangler.jsonc` (Cloudflare 설정)
- **Package**: `package.json`
- **TypeScript**: `tsconfig.json`
- **Vite**: `vite.config.ts`
- **PM2**: `ecosystem.config.cjs`

### 데이터베이스
- **마이그레이션**: `migrations/0001_initial_schema.sql`
- **시드 데이터**: `seed.sql`

### Google Apps Script
- **최종 버전**: `google-apps-script-gmail-only.js`
- **이메일 수신자**: magudaji@gmail.com (단일 수신자)

---

## 🎯 완성된 기능

### ✅ 웹사이트
- 메인 페이지 (반응형 디자인)
- 5개 서브페이지:
  - `/visit-care` (방문요양)
  - `/family-care` (가족요양)
  - `/bath-service` (방문목욕)
  - `/welfare-equipment` (복지용구)
  - `/grade-application` (등급신청)
- 상담신청 폼 (개인정보 수집·이용 동의 포함)

### ✅ SEO 최적화
- **메타 태그**: `성남방문요양 A방문3천사 | 15년 경력 장기요양전문가의 맞춤 무료상담`
- **키워드**: 성남방문요양, A방문3천사, 분당방문요양
- **구조화된 데이터**: JSON-LD (LocalBusiness, Organization, WebSite)
- **지역 SEO**: 성남시, 분당구 GPS 좌표
- **sitemap.xml, robots.txt**: 완료
- **네이버/구글 인증 파일**: 완료

### ✅ 데이터 처리
- **D1 Database**: 상담신청 데이터 저장
- **Google Sheets**: 자동 기록
- **Gmail 알림**: 실시간 이메일 발송 (magudaji@gmail.com)

### ✅ 개인정보보호
- **개인정보 수집·이용 동의**: 필수 체크박스
- **상세 안내**: 접기/펼치기 기능
- **법적 준수**: 개인정보보호법, 정보통신망법

### ✅ 배포
- Cloudflare Pages 프로덕션 배포
- 커스텀 도메인 (3004.co.kr)
- SSL 자동 발급
- GitHub 자동 연동

---

## 🔧 일반적인 작업 명령어

### 개발
```bash
cd /home/user/webapp

# 빌드 (타임아웃: 300초)
npm run build

# 로컬 개발 서버 (PM2)
pm2 start ecosystem.config.cjs
pm2 logs --nostream
pm2 delete all

# 포트 정리
fuser -k 3000/tcp 2>/dev/null || true
```

### Git
```bash
cd /home/user/webapp

# 상태 확인
git status

# 변경사항 추가 및 커밋
git add .
git commit -m "커밋 메시지"

# GitHub 푸시
git push origin main
```

### 배포
```bash
cd /home/user/webapp

# 빌드 및 배포 (타임아웃: 300초)
npm run build
npx wrangler pages deploy dist --project-name a-visit-three-angels

# 프로덕션 테스트
curl https://3004.co.kr
```

### 데이터베이스
```bash
cd /home/user/webapp

# 로컬 마이그레이션
npm run db:migrate:local

# 프로덕션 마이그레이션
npm run db:migrate:prod

# 시드 데이터 삽입
npm run db:seed

# DB 초기화
npm run db:reset
```

---

## 📞 문제 해결

### GitHub 인증 실패
```bash
# 방법 1: GenSpark 도구 사용 (권장)
setup_github_environment

# 방법 2: GenSpark #github 탭에서 저장소 재선택
```

### Cloudflare 배포 실패
```bash
# 방법 1: GenSpark 도구 사용 (권장)
setup_cloudflare_api_key

# 방법 2: GenSpark Deploy 탭에서 API 키 설정
```

### 포트 충돌 (3000번)
```bash
# 포트 강제 종료
fuser -k 3000/tcp 2>/dev/null || true

# PM2 프로세스 정리
pm2 delete all
```

### npm 타임아웃 오류
```bash
# 항상 300초 타임아웃 설정 필요
# Bash 도구에서 timeout 파라미터 사용
```

---

## 🎊 현재 상태 (2025-01-02 기준)

### ✅ 완료된 작업
- 프로덕션 운영 중: https://3004.co.kr
- GitHub 저장소 최신화: https://github.com/dlsdnddl/3004-website
- Google Sheets 연동 완료
- Gmail 알림 작동 중 (magudaji@gmail.com)
- SEO 메타태그 최적화 완료
- 네이버/구글 서치 콘솔 등록 완료
- 네이버 플레이스 홈페이지 연결 완료
- 개인정보 수집·이용 동의 추가 완료

### 🔄 진행 중
- **SEO 검색 노출 대기**: 1-2주 후 "성남방문요양" 검색 노출 시작 예상

### ⏳ 향후 권장 작업 (SEO 1페이지 노출)
1. **네이버 블로그 포스팅** (가장 효과적!)
   - 주 2-3회, 총 20-30개 목표
   - 각 포스팅 끝에 `https://3004.co.kr` 링크
   - 주제: 성남방문요양, 등급신청, 장기요양 관련

2. **홈페이지 콘텐츠 추가**
   - 고객 후기 페이지 (`/reviews`)
   - 블로그/소식 페이지 (`/blog`)
   - 지역별 서비스 페이지 (`/seongnam`, `/bundang`)

3. **백링크 구축**
   - 네이버 지식iN 활동
   - 지역 커뮤니티 홍보 (맘카페, 네이버 카페)
   - 복지 디렉토리 등록
   - SNS 프로필 링크

4. **이미지/속도 최적화**
   - 이미지 압축 및 최적화
   - 폰트 로딩 개선

---

## 🔑 중요 키워드

### 타겟 키워드
1. **성남방문요양** (메인 타겟, 경쟁 치열)
2. **분당방문요양** (서브 타겟)
3. **A방문3천사** (브랜드명)

### 현재 검색 노출 상태
- ✅ "성남방문요양 A방문3천사" → 1페이지 노출
- ⏳ "성남방문요양" → 후순위 (1-2주 후 개선 예상)
- ⏳ "A방문3천사" → 후순위 (브랜드 인지도 낮음)

---

## 📚 상세 문서
- **전체 프로젝트 문서**: https://github.com/dlsdnddl/3004-website/blob/main/PROJECT_HANDOVER.md
- **SEO 등록 가이드**: https://github.com/dlsdnddl/3004-website/blob/main/SEO_REGISTRATION_GUIDE.md

---

## 🎯 새 AI 세션에서 바로 시작하는 방법

### 1. 저장소 클론
```bash
cd /home/user
git clone https://github.com/dlsdnddl/3004-website.git webapp
cd webapp
```

### 2. AI에게 이 파일 내용 공유
```
이 프로젝트는 https://github.com/dlsdnddl/3004-website 에 있습니다.
/home/user/webapp 경로에서 작업해주세요.
NEW_SESSION_CONTEXT.md 파일을 읽어주세요.
```

### 3. 필요한 설정
- `setup_github_environment` (GitHub 인증)
- `setup_cloudflare_api_key` (Cloudflare 배포 필요 시)

---

**이 파일을 새 AI 어시스턴트에게 제공하면 즉시 작업을 이어갈 수 있습니다.**

**Last Updated**: 2025-01-02
**Status**: ✅ Production Running
