# A방문3천사 프로젝트 - 새 세션 시작 가이드

## 🎯 프로젝트 개요
- **프로젝트명**: A방문3천사 (장기요양 원스톱 케어 서비스)
- **도메인**: https://3004.co.kr
- **기술 스택**: Hono + Cloudflare Pages + D1 Database + Google Sheets

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

## 🚀 새 샌드박스에서 시작하기

### 1단계: GitHub 저장소 클론
```bash
cd /home/user
git clone https://github.com/dlsdnddl/3004-website.git webapp
cd webapp
```

### 2단계: GitHub 인증 설정
- GenSpark의 #github 탭에서 dlsdnddl/3004-website 저장소 선택
- 또는 `setup_github_environment` 도구 실행

### 3단계: 의존성 설치
```bash
cd /home/user/webapp
npm install
```

### 4단계: 로컬 개발 서버 시작 (선택)
```bash
cd /home/user/webapp
npm run build
pm2 start ecosystem.config.cjs
```

### 5단계: Cloudflare 배포 (필요시)
```bash
# Cloudflare API 키 설정 (GenSpark Deploy 탭)
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name a-visit-three-angels
```

## 📝 주요 파일 위치

### 백엔드 (Hono)
- **메인 파일**: `/home/user/webapp/src/index.tsx`
- **API 엔드포인트**: `/api/consultation` (라인 523~568)
- **페이지 라우트**: `/`, `/visit-care`, `/family-care`, etc.

### 프론트엔드
- **정적 파일**: `/home/user/webapp/public/`
- **스타일**: `public/styles.css`
- **스크립트**: `public/app.js`

### 설정 파일
- **Wrangler**: `wrangler.toml`
- **Package**: `package.json`
- **TypeScript**: `tsconfig.json`
- **PM2**: `ecosystem.config.cjs`

### 데이터베이스
- **마이그레이션**: `migrations/0001_initial_schema.sql`
- **시드 데이터**: `seed.sql`

### Google Apps Script
- **최종 버전**: `google-apps-script-gmail-only.js`
- **이메일 수신자**: magudaji@gmail.com

## 🎯 완성된 기능

### ✅ 웹사이트
- 메인 페이지 (반응형 디자인)
- 5개 서브페이지 (방문요양, 가족요양, 방문목욕, 복지용구, 등급신청)
- 상담신청 폼

### ✅ 데이터 처리
- D1 데이터베이스 저장
- Google Sheets 자동 기록
- Gmail 실시간 알림

### ✅ 배포
- Cloudflare Pages 프로덕션 배포
- 커스텀 도메인 (3004.co.kr)
- SSL 자동 발급

## 🔧 일반적인 작업 명령어

### 개발
```bash
cd /home/user/webapp
npm run build              # 빌드
npm run dev:d1             # 로컬 D1과 함께 개발 서버
```

### Git
```bash
cd /home/user/webapp
git status                 # 상태 확인
git add .                  # 변경사항 추가
git commit -m "메시지"     # 커밋
git push origin main       # GitHub 푸시
```

### 배포
```bash
cd /home/user/webapp
npm run build              # 빌드
npx wrangler pages deploy dist --project-name a-visit-three-angels
```

### 데이터베이스
```bash
cd /home/user/webapp
npm run db:migrate:local   # 로컬 마이그레이션
npm run db:migrate:prod    # 프로덕션 마이그레이션
npm run db:seed            # 시드 데이터 삽입
```

## 📞 문제 해결

### GitHub 인증 실패
- GenSpark #github 탭에서 저장소 재선택
- `setup_github_environment` 도구 실행

### Cloudflare 배포 실패
- GenSpark Deploy 탭에서 API 키 설정
- `setup_cloudflare_api_key` 도구 실행

### 포트 충돌
```bash
fuser -k 3000/tcp 2>/dev/null || true
pm2 delete all
```

## 🎊 현재 상태
- ✅ 프로덕션 운영 중: https://3004.co.kr
- ✅ GitHub 저장소 최신화
- ✅ Google Sheets 연동 완료
- ✅ Gmail 알림 작동 중

## 📚 상세 문서
전체 프로젝트 문서: https://github.com/dlsdnddl/3004-website/blob/main/PROJECT_HANDOVER.md

---

**이 파일을 새 AI 어시스턴트에게 제공하면 즉시 작업을 이어갈 수 있습니다.**
