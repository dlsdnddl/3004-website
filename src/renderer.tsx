import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'A방문3천사 - 15년 경력 전문가의 장기요양 원스톱 케어'}</title>
        <meta name="description" content="부모님 요양, 상담부터 등급신청까지 15년 경력 전문가에게 맡기세요. 장기요양 등급신청부터 방문요양·목욕·복지용구까지 무료로 도와드립니다." />
        <script src="https://cdn.tailwindcss.com"></script>
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
