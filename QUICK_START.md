# 🚀 A방문3천사 프로젝트 - 빠른 시작 가이드

## 즉시 시작하기 (3단계)

### 1️⃣ 저장소 클론
```bash
cd /home/user
git clone https://github.com/dlsdnddl/3004-website.git webapp
cd webapp
```

### 2️⃣ AI에게 알리기
```
"이 프로젝트는 https://github.com/dlsdnddl/3004-website 입니다.
/home/user/webapp 경로에서 작업해주세요.
NEW_SESSION_CONTEXT.md 파일을 읽고 작업을 이어주세요."
```

### 3️⃣ 인증 설정 (필요시)
```bash
setup_github_environment       # GitHub 푸시 필요 시
setup_cloudflare_api_key      # Cloudflare 배포 필요 시
```

---

## 📋 핵심 정보

- **프로덕션**: https://3004.co.kr
- **GitHub**: https://github.com/dlsdnddl/3004-website
- **경로**: `/home/user/webapp`
- **배포**: `npm run build && npx wrangler pages deploy dist --project-name a-visit-three-angels`

---

## 🔧 자주 쓰는 명령어

```bash
cd /home/user/webapp

# 개발
npm run build
pm2 start ecosystem.config.cjs

# Git
git add . && git commit -m "메시지" && git push origin main

# 배포
npm run build && npx wrangler pages deploy dist --project-name a-visit-three-angels

# 테스트
curl https://3004.co.kr
```

---

## 📚 상세 문서
- **NEW_SESSION_CONTEXT.md**: 전체 가이드
- **PROJECT_HANDOVER.md**: 프로젝트 상세 문서

**Last Updated**: 2025-01-02
