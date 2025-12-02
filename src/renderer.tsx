import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || '성남방문요양 A방문3천사 | 15년 경력 전문가의 무료 상담'}</title>
        <meta name="description" content="성남 방문요양 전문 A방문3천사. 15년 경력 사회복지사가 등급신청부터 방문요양·목욕·복지용구까지 무료 상담. 성남시 장기요양 원스톱 케어 서비스. 031-759-3004" />
        <meta name="keywords" content="성남방문요양, A방문3천사, 성남장기요양, 성남요양보호사, 성남방문목욕, 성남복지용구, 장기요양등급신청, 성남재가요양, 분당방문요양, 분당장기요양" />
        
        {/* Open Graph 메타태그 (소셜 미디어 공유) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="성남방문요양 A방문3천사 | 15년 경력 전문가의 무료 상담" />
        <meta property="og:description" content="성남 방문요양 전문 A방문3천사. 15년 경력 사회복지사가 등급신청부터 방문요양·목욕·복지용구까지 무료 상담." />
        <meta property="og:url" content="https://3004.co.kr" />
        <meta property="og:site_name" content="A방문3천사" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* Twitter 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="성남방문요양 A방문3천사 | 15년 경력 전문가" />
        <meta name="twitter:description" content="성남 방문요양 전문. 15년 경력 사회복지사가 무료 상담해드립니다." />
        
        {/* 지역 비즈니스 정보 */}
        <meta name="geo.region" content="KR-41" />
        <meta name="geo.placename" content="성남시, 분당구" />
        <meta name="geo.position" content="37.3595;127.1054" />
        <meta name="ICBM" content="37.3595, 127.1054" />
        
        {/* 추가 SEO 메타태그 */}
        <meta name="author" content="A방문3천사" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://3004.co.kr" />
        
        {/* 여기어때 잘난체 웹폰트 */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'YeogiOttaeJalnan';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
            font-weight: normal;
            font-display: swap;
          }
          
          /* NanumSquareRound 폰트 */
          @font-face {
            font-family: 'NanumSquareRound';
            src: url('/fonts/NanumSquareRoundL.ttf') format('truetype');
            font-weight: 300;
            font-display: swap;
          }
          @font-face {
            font-family: 'NanumSquareRound';
            src: url('/fonts/NanumSquareRoundR.ttf') format('truetype');
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: 'NanumSquareRound';
            src: url('/fonts/NanumSquareRoundB.ttf') format('truetype');
            font-weight: 700;
            font-display: swap;
          }
          @font-face {
            font-family: 'NanumSquareRound';
            src: url('/fonts/NanumSquareRoundEB.ttf') format('truetype');
            font-weight: 800;
            font-display: swap;
          }
        ` }} />
        
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  sans: ['YeogiOttaeJalnan', 'sans-serif'],
                  heading: ['YeogiOttaeJalnan', 'sans-serif'],
                  nanum: ['NanumSquareRound', 'sans-serif']
                },
                colors: {
                  'pink': {
                    50: '#fff5f9',
                    100: '#ffe4f0',
                    200: '#ffc9e1',
                    300: '#ff9dc8',
                    400: '#ff69ab',
                    500: '#ff1493',
                    600: '#e0127a',
                    700: '#c01068',
                    800: '#9e0f57',
                    900: '#82104a',
                  }
                }
              }
            }
          }
        ` }} />
        
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        
        {/* 구조화된 데이터 (JSON-LD) - 지역 비즈니스 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://3004.co.kr",
          "name": "A방문3천사",
          "alternateName": "A방문 3천사",
          "description": "성남 분당 방문요양 전문. 15년 경력 사회복지사가 등급신청부터 방문요양·목욕·복지용구까지 무료 상담해드립니다.",
          "url": "https://3004.co.kr",
          "telephone": "+82-31-759-3004",
          "priceRange": "무료상담",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "성남시",
            "addressRegion": "경기도",
            "addressCountry": "KR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.3595,
            "longitude": 127.1054
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "성남시"
            },
            {
              "@type": "City",
              "name": "분당구"
            }
          ],
          "serviceType": [
            "방문요양",
            "방문목욕",
            "복지용구",
            "장기요양등급신청",
            "가족요양"
          ],
          "keywords": "성남방문요양, 분당방문요양, 성남장기요양, 분당장기요양, 성남요양보호사, 분당요양보호사",
          "openingHours": "Mo-Su 00:00-24:00",
          "image": "https://3004.co.kr/static/logo.png",
          "sameAs": [
            "https://3004.co.kr"
          ]
        }) }} />
        
        {/* 구조화된 데이터 - 조직 정보 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "A방문3천사",
          "url": "https://3004.co.kr",
          "logo": "https://3004.co.kr/static/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+82-31-759-3004",
            "contactType": "customer service",
            "areaServed": "KR",
            "availableLanguage": "Korean"
          }
        }) }} />
        
        {/* 구조화된 데이터 - 웹사이트 정보 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "A방문3천사",
          "url": "https://3004.co.kr",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://3004.co.kr/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }) }} />
      </head>
      <body class="bg-gray-50">
        {children}
      </body>
    </html>
  )
})
