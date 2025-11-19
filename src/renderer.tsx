import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'A방문3천사 - 15년 경력 전문가의 장기요양 원스톱 케어'}</title>
        <meta name="description" content="부모님 요양, 상담부터 등급신청까지 15년 경력 전문가에게 맡기세요. 장기요양 등급신청부터 방문요양·목욕·복지용구까지 무료로 도와드립니다." />
        
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
      </head>
      <body class="bg-gray-50">
        {children}
      </body>
    </html>
  )
})
