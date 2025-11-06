import { Hono } from 'hono'
import { renderer } from './renderer'
import { cors } from 'hono/cors'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(renderer)
app.use('/api/*', cors())

// 메인 페이지
app.get('/', (c) => {
  return c.render(
    <>
      {/* Navigation Bar */}
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" class="flex items-center space-x-2">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto" />
              <span class="text-2xl font-bold text-blue-600">A방문3천사</span>
            </a>
            
            {/* Desktop Menu */}
            <div class="hidden md:flex items-center space-x-8">
              <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">센터소개</a>
              
              {/* Services Dropdown */}
              <div class="relative group">
                <button class="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  서비스
                  <i class="fas fa-chevron-down ml-1 text-sm"></i>
                </button>
                <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a href="/visit-care" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">방문요양</a>
                  <a href="/family-care" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">가족요양</a>
                  <a href="/bath-service" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">방문목욕</a>
                  <a href="/welfare-equipment" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">복지용구</a>
                  <a href="/grade-application" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">등급신청</a>
                </div>
              </div>
              
              <a href="#benefits" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">핵심혜택</a>
              <a href="#social-proof" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">인증현황</a>
              <a href="#faq" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">자주묻는질문</a>
              <a href="#final-cta" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">상담신청</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button id="mobile-menu-btn" class="md:hidden text-gray-700 hover:text-blue-600">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div id="mobile-menu" class="hidden md:hidden pb-4">
            <a href="#about" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">센터소개</a>
            <div class="py-2">
              <p class="text-gray-700 font-medium mb-2">서비스</p>
              <a href="/visit-care" class="block py-1 pl-4 text-gray-600 hover:text-blue-600">방문요양</a>
              <a href="/family-care" class="block py-1 pl-4 text-gray-600 hover:text-blue-600">가족요양</a>
              <a href="/bath-service" class="block py-1 pl-4 text-gray-600 hover:text-blue-600">방문목욕</a>
              <a href="/welfare-equipment" class="block py-1 pl-4 text-gray-600 hover:text-blue-600">복지용구</a>
              <a href="/grade-application" class="block py-1 pl-4 text-gray-600 hover:text-blue-600">등급신청</a>
            </div>
            <a href="#benefits" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">핵심혜택</a>
            <a href="#social-proof" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">인증현황</a>
            <a href="#faq" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">자주묻는질문</a>
            <a href="#final-cta" class="block py-2 text-blue-600 font-bold">상담신청</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white py-20 px-4 animate-fade-in">
        <div class="max-w-6xl mx-auto text-center">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-loose md:leading-relaxed drop-shadow-lg">
            부모님 요양,<br class="md:hidden" /> 상담부터 등급신청까지<br />
            이제 <span class="text-yellow-300">15년 경력 전문가</span>에게<br class="md:hidden" /> 맡기세요
          </h1>
          <h3 class="text-lg md:text-2xl mb-8 leading-loose md:leading-relaxed drop-shadow-md">
            <span class="md:hidden">등급신청부터 방문요양·목욕·복지용구까지,<br />A방문3천사가 처음부터 끝까지<br /><span class="font-bold text-yellow-300">무료로</span> 도와드립니다.</span>
            <span class="hidden md:inline">장기요양 등급신청부터 방문요양·목욕·복지용구까지,<br />A방문3천사가 처음부터 끝까지 <span class="font-bold text-yellow-300">무료로</span> 도와드립니다.</span>
          </h3>
          <a href="#final-cta" class="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
            <i class="fas fa-phone-alt mr-2"></i>
            지금 바로 무료 상담 신청하기
          </a>
        </div>
      </section>

      {/* Mini About */}
      <section id="about" class="py-16 px-4 bg-white scroll-animate">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/3">
              <div class="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 text-center shadow-md overflow-hidden">
                <img src="/static/team.jpg" alt="A방문3천사 임직원" class="w-full h-48 object-cover object-center rounded-xl mb-4" />
                <h3 class="text-2xl font-bold text-gray-800 mb-2">A방문3천사 임직원</h3>
                <p class="text-gray-600">전문가 팀이 함께합니다</p>
              </div>
            </div>
            <div class="md:w-2/3">
              <h2 class="text-2xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed text-center md:text-left">
                <span class="md:hidden"><span class="text-yellow-500">10년 이상의 경력</span>을 가진 장기요양 행정전문가,<br /><span class="text-yellow-500">15년 경력 사회복지사</span>가 직접 운영하는 <span class="text-blue-600">A방문3천사</span>입니다</span>
                <span class="hidden md:inline"><span class="text-yellow-500">10년 이상의 경력</span>을 가진 장기요양 행정전문가,<br /><span class="text-yellow-500">15년 경력 사회복지사</span>가 직접 운영하는<br /><span class="text-blue-600">A방문3천사</span>입니다</span>
              </h2>
              
              {/* Key Points with Icons */}
              <div class="space-y-4 mb-6">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i class="fas fa-user-tie text-blue-600 text-sm"></i>
                  </div>
                  <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                    단순히 요양보호사를 연결하는 센터가 <span class="font-bold">아닙니다</span>
                  </p>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <i class="fas fa-lightbulb text-teal-600 text-sm"></i>
                  </div>
                  <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                    어디서부터 시작해야 할지 막막할 때, 복잡한 서류와 절차에 지칠 때
                  </p>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i class="fas fa-check-circle text-green-600 text-sm"></i>
                  </div>
                  <p class="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span class="font-bold text-blue-600">15년 경력 장기요양전문가이자 사회복지사</span>가 직접 상황을 분석하고 가장 유리한 해결책을 제시합니다
                  </p>
                </div>
              </div>
              
              {/* Highlight Box */}
              <div class="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p class="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                  <i class="fas fa-quote-left text-blue-400 mr-2"></i>
                  보호자님의 상황에 맞는 <span class="text-blue-600 font-bold">최적의 케어 플랜</span>을 함께 만들어갑니다
                  <i class="fas fa-quote-right text-blue-400 ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Services */}
      <section id="benefits" class="py-16 px-4 bg-gray-50 scroll-animate">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12 leading-snug md:leading-tight">
            보호자의 3가지 핵심 고민,<br class="md:hidden" /> <span class="text-blue-600">A방문3천사</span>가<br class="md:hidden" /> 해결합니다
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div class="card-animate bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-file-alt text-3xl text-blue-600"></i>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-center mb-4 text-gray-800 leading-snug">복잡한 등급신청<br />'완전 무료 대행'</h4>
              <p class="text-sm md:text-base text-gray-600 text-center">
                서류 준비부터 방문조사 대응까지, 혜택을 놓치지 않도록 전문가가 전 과정을 무료로 대행합니다.
              </p>
            </div>
            
            <div class="card-animate bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-link text-3xl text-teal-600"></i>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-center mb-4 text-gray-800 leading-snug">모든 서비스<br />'원스톱 통합 연계 관리'</h4>
              <p class="text-sm md:text-base text-gray-600 text-center">
                방문요양, 목욕, 간호, 복지용구까지. 여기저기 알아볼 필요 없이 A방문3천사 한곳에서 통합 운영 및 연계 관리를 받으세요.
              </p>
            </div>
            
            <div class="card-animate bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-heart text-3xl text-green-600"></i>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-center mb-4 text-gray-800 leading-snug">상황 변화에도<br />'지속 케어 연계'</h4>
              <p class="text-sm md:text-base text-gray-600 text-center">
                필요시 주간보호센터, 요양원, 병원 왕진까지 자연스러운 연속 돌봄을 제공하여 보호자 부담을 덜어드립니다.
              </p>
            </div>
          </div>

          <h3 class="text-xl md:text-3xl font-bold text-center text-gray-800 mb-8 leading-snug md:leading-tight">
            A방문3천사의<br class="md:hidden" /> <span class="text-blue-600">원스톱 케어 서비스</span>
          </h3>
          
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            <a href="/visit-care" class="card-animate bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center">
              <i class="fas fa-home text-3xl md:text-4xl text-blue-600 mb-3 md:mb-4"></i>
              <h4 class="font-bold text-gray-800 mb-2 text-sm md:text-base">방문요양</h4>
              <span class="text-xs md:text-sm text-blue-600 font-medium">
                <i class="fas fa-arrow-right mr-1"></i>바로가기
              </span>
            </a>
            
            <a href="/family-care" class="card-animate bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center">
              <i class="fas fa-users text-3xl md:text-4xl text-teal-600 mb-3 md:mb-4"></i>
              <h4 class="font-bold text-gray-800 mb-2 text-sm md:text-base">가족요양</h4>
              <span class="text-xs md:text-sm text-teal-600 font-medium">
                <i class="fas fa-arrow-right mr-1"></i>바로가기
              </span>
            </a>
            
            <a href="/bath-service" class="card-animate bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center">
              <i class="fas fa-shower text-3xl md:text-4xl text-cyan-600 mb-3 md:mb-4"></i>
              <h4 class="font-bold text-gray-800 mb-2 text-sm md:text-base">방문목욕</h4>
              <span class="text-xs md:text-sm text-cyan-600 font-medium">
                <i class="fas fa-arrow-right mr-1"></i>바로가기
              </span>
            </a>
            
            <a href="/welfare-equipment" class="card-animate bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center">
              <i class="fas fa-bed text-3xl md:text-4xl text-purple-600 mb-3 md:mb-4"></i>
              <h4 class="font-bold text-gray-800 mb-2 text-sm md:text-base">복지용구</h4>
              <span class="text-xs md:text-sm text-purple-600 font-medium">
                <i class="fas fa-arrow-right mr-1"></i>바로가기
              </span>
            </a>
            
            <a href="/grade-application" class="card-animate bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center col-span-2 md:col-span-1">
              <i class="fas fa-clipboard-check text-3xl md:text-4xl text-green-600 mb-3 md:mb-4"></i>
              <h4 class="font-bold text-gray-800 mb-2 text-sm md:text-base">장기요양<br />등급신청</h4>
              <span class="text-xs md:text-sm text-green-600 font-medium">
                <i class="fas fa-arrow-right mr-1"></i>바로가기
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" class="py-16 px-4 bg-white scroll-animate">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-4 leading-snug md:leading-tight">
            믿고 맡길 수 있는 이유,
          </h2>
          <p class="text-lg md:text-xl text-center text-gray-600 mb-12">
            <span class="font-bold text-blue-600">공단이 이미 인정</span>했습니다
          </p>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="card-animate bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span class="text-white font-bold text-3xl">A</span>
              </div>
              <h4 class="text-xl font-bold mb-2 text-gray-800">국민건강보험공단<br />A등급 평가기관</h4>
              <p class="text-gray-600">공단이 인정한 최우수 A등급 기관입니다.</p>
            </div>
            
            <div class="card-animate bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-check-circle text-white text-3xl"></i>
              </div>
              <h4 class="text-xl font-bold mb-2 text-gray-800">청구그린기관<br />(상위 1%)</h4>
              <p class="text-gray-600">급여 청구 오류가 없는 상위 1%의 투명한 기관입니다.</p>
            </div>
            
            <div class="card-animate bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-award text-white text-3xl"></i>
              </div>
              <h4 class="text-xl font-bold mb-2 text-gray-800">멘토기관 지정</h4>
              <p class="text-gray-600">후배 기관을 지도 및 관리하는 실력 있는 기관입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" class="py-16 px-4 bg-gray-50 scroll-animate">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12 leading-snug md:leading-tight">
            보호자님들이<br class="md:hidden" /> <span class="text-blue-600">가장 많이 묻는 질문</span><br class="md:hidden" /> (FAQ)
          </h2>
          
          <div class="space-y-4">
            <details class="bg-white rounded-xl shadow-md overflow-hidden">
              <summary class="cursor-pointer p-6 font-bold text-lg text-gray-800 hover:bg-gray-50 flex justify-between items-center">
                <span>등급신청은 꼭 센터를 통해야 하나요?</span>
                <i class="fas fa-chevron-down"></i>
              </summary>
              <div class="p-6 pt-0 text-gray-700 leading-relaxed">
                직접도 가능하지만 절차가 복잡하고 서류가 까다롭습니다. 저희는 15년 경력 사회복지사가 전 과정을 무료로 대행해 드립니다. 서류 준비부터 방문조사 대응까지 전문가가 함께하여 혜택을 놓치지 않도록 돕습니다.
              </div>
            </details>
            
            <details class="bg-white rounded-xl shadow-md overflow-hidden">
              <summary class="cursor-pointer p-6 font-bold text-lg text-gray-800 hover:bg-gray-50 flex justify-between items-center">
                <span>비용이 많이 드나요?</span>
                <i class="fas fa-chevron-down"></i>
              </summary>
              <div class="p-6 pt-0 text-gray-700 leading-relaxed">
                아닙니다. 장기요양보험 적용으로 본인 부담금이 0~15% 수준으로 최소화됩니다. 등급 신청 및 상담은 완전 무료입니다. 국가에서 대부분의 비용을 지원하므로 경제적 부담 없이 이용하실 수 있습니다.
              </div>
            </details>
            
            <details class="bg-white rounded-xl shadow-md overflow-hidden">
              <summary class="cursor-pointer p-6 font-bold text-lg text-gray-800 hover:bg-gray-50 flex justify-between items-center">
                <span>다른 센터와 뭐가 다른가요?</span>
                <i class="fas fa-chevron-down"></i>
              </summary>
              <div class="p-6 pt-0 text-gray-700 leading-relaxed">
                A방문3천사는 15년 경력 사회복지사가 직접 상담하며, 방문요양·가족요양·방문목욕·복지용구를 통합 운영합니다. 또한 국민건강보험공단 A등급, 청구그린기관, 멘토기관 인증을 받아 신뢰성이 검증되었습니다.
              </div>
            </details>
            
            <details class="bg-white rounded-xl shadow-md overflow-hidden">
              <summary class="cursor-pointer p-6 font-bold text-lg text-gray-800 hover:bg-gray-50 flex justify-between items-center">
                <span>요양원이 필요해지면 어떻게 되나요?</span>
                <i class="fas fa-chevron-down"></i>
              </summary>
              <div class="p-6 pt-0 text-gray-700 leading-relaxed">
                A방문3천사는 상황 변화 시 주간보호센터, 요양원, 병원 왕진까지 자연스러운 '연속 돌봄'을 연계해 드립니다. 어르신의 상태와 가족의 상황에 맞춰 최적의 해결책을 함께 찾아드립니다.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" class="py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white scroll-animate">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-snug md:leading-tight">
            신청이 늦어지면<br class="md:hidden" /> 혜택도 늦어집니다
          </h2>
          <h3 class="text-base md:text-2xl mb-8 opacity-95 leading-relaxed">
            부모님의 돌봄, 더 이상 혼자 고민하지 마세요.<br />
            지금 바로 <span class="font-bold text-yellow-300">15년 경력 사회복지사</span>에게 무료 상담을 신청하고<br />
            명확한 해결책을 받으세요.
          </h3>
          
          <div class="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <form id="consultation-form" class="space-y-4">
              <div class="text-left">
                <label class="block text-gray-700 font-bold mb-2">이름 *</label>
                <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900" placeholder="홍길동" />
              </div>
              
              <div class="text-left">
                <label class="block text-gray-700 font-bold mb-2">연락처 *</label>
                <input type="tel" name="phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900" placeholder="010-1234-5678" />
              </div>
              
              <div class="text-left">
                <label class="block text-gray-700 font-bold mb-2">관심 서비스</label>
                <select name="service_type" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900">
                  <option value="">선택해주세요</option>
                  <option value="등급신청">등급신청</option>
                  <option value="방문요양">방문요양</option>
                  <option value="가족요양">가족요양</option>
                  <option value="방문목욕">방문목욕</option>
                  <option value="복지용구">복지용구</option>
                  <option value="종합상담">종합상담</option>
                </select>
              </div>
              
              <div class="text-left">
                <label class="block text-gray-700 font-bold mb-2">문의사항</label>
                <textarea name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900" placeholder="궁금하신 사항을 자유롭게 작성해주세요."></textarea>
              </div>
              
              <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-lg shadow-lg transition-all transform hover:scale-105">
                <i class="fas fa-phone-alt mr-2"></i>
                15년 경력 전문가에게 무료 상담 신청하기
              </button>
              
              <div id="form-message" class="hidden mt-4 p-4 rounded-lg"></div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gray-800 text-white py-12 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between mb-8">
            <div class="flex items-center space-x-2 mb-6 md:mb-0">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-16 w-auto" />
              <div>
                <h3 class="text-2xl font-bold">A방문3천사</h3>
                <p class="text-sm text-gray-400">장기요양 전문센터</p>
              </div>
            </div>
            
            <div class="text-center md:text-right">
              <p class="text-gray-300 mb-2">
                <i class="fas fa-phone mr-2"></i>
                문의전화: 000-0000-0000
              </p>
              <p class="text-gray-300">
                <i class="fas fa-clock mr-2"></i>
                운영시간: 평일 09:00 - 18:00
              </p>
            </div>
          </div>
          
          <div class="border-t border-gray-700 pt-8">
            <div class="text-center mb-6">
              <p class="text-sm md:text-base text-gray-300 mb-2 leading-relaxed">
                <span class="font-bold text-yellow-400">10년 이상의<br class="md:hidden" /> 장기요양 행정 경력</span>과<br class="md:hidden" />
                <span class="font-bold text-yellow-400"> 15년 경력의<br class="md:hidden" /> 장기요양전문가<br class="md:hidden" /> 사회복지사</span>가 처음부터 끝까지 함께하는 전문 케어 센터
              </p>
              <p class="text-gray-400 text-xs md:text-sm mt-4 leading-relaxed">
                국민건강보험공단 A등급 평가기관 | 청구그린기관 (상위 1%) | 멘토기관 지정
              </p>
            </div>
            
            <div class="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
              <p>© 2025 A방문3천사. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
          const menu = document.getElementById('mobile-menu');
          menu.classList.toggle('hidden');
        });
      ` }} />

      <script dangerouslySetInnerHTML={{ __html: `
        document.getElementById('consultation-form').addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const formData = new FormData(e.target);
          const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            service_type: formData.get('service_type'),
            message: formData.get('message')
          };
          
          const submitBtn = e.target.querySelector('button[type="submit"]');
          const messageDiv = document.getElementById('form-message');
          
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>전송 중...';
          
          try {
            const response = await axios.post('/api/consultation', data);
            
            messageDiv.className = 'mt-4 p-4 rounded-lg bg-green-100 text-green-800';
            messageDiv.textContent = '상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.';
            messageDiv.classList.remove('hidden');
            
            e.target.reset();
            
            setTimeout(() => {
              messageDiv.classList.add('hidden');
            }, 5000);
          } catch (error) {
            messageDiv.className = 'mt-4 p-4 rounded-lg bg-red-100 text-red-800';
            messageDiv.textContent = '신청 중 오류가 발생했습니다. 다시 시도해주세요.';
            messageDiv.classList.remove('hidden');
          } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-phone-alt mr-2"></i>15년 경력 전문가에게 무료 상담 신청하기';
          }
        });
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
        
        // Intersection Observer for scroll animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, observerOptions);
        
        // Observe all scroll-animate and card-animate elements
        document.querySelectorAll('.scroll-animate, .card-animate').forEach(el => {
          observer.observe(el);
        });
      ` }} />
    </>
  )
})

// API: 상담 신청
app.post('/api/consultation', async (c) => {
  try {
    const { name, phone, service_type, message } = await c.req.json()
    
    if (!name || !phone) {
      return c.json({ error: '이름과 연락처는 필수입니다.' }, 400)
    }
    
    const result = await c.env.DB.prepare(`
      INSERT INTO consultations (name, phone, service_type, message)
      VALUES (?, ?, ?, ?)
    `).bind(name, phone, service_type || '', message || '').run()
    
    return c.json({ 
      success: true, 
      id: result.meta.last_row_id,
      message: '상담 신청이 완료되었습니다.'
    })
  } catch (error) {
    console.error('Consultation error:', error)
    return c.json({ error: '상담 신청 중 오류가 발생했습니다.' }, 500)
  }
})

// 방문요양 페이지
app.get('/visit-care', (c) => {
  return c.render(
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <a href="/" class="flex items-center space-x-2">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto" />
              <span class="text-2xl font-bold text-blue-600">A방문3천사</span>
            </a>
            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">
              <i class="fas fa-home mr-2"></i>
              홈으로
            </a>
          </div>
        </div>
      </nav>

      <section class="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <i class="fas fa-home text-6xl text-blue-600 mb-4"></i>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">방문요양</h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              "어르신이 집에서 편안하게 생활하실 수 있도록,<br />
              요양보호사가 직접 찾아갑니다."
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">서비스 설명</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              장기요양 등급을 받은 어르신에게 요양보호사가 가정으로 방문하여 신체활동·일상생활·정서지원을 함께 하는 돌봄 서비스입니다.
            </p>

            <h3 class="text-xl font-bold text-gray-800 mb-4">제공 내용</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-bold text-blue-800 mb-2"><i class="fas fa-hands-helping mr-2"></i>신체활동 보조</h4>
                <p class="text-gray-700 text-sm">세면, 옷 갈아입히기, 보행 보조, 약 복용 확인</p>
              </div>
              <div class="bg-teal-50 rounded-lg p-4">
                <h4 class="font-bold text-teal-800 mb-2"><i class="fas fa-utensils mr-2"></i>식사·청결 관리</h4>
                <p class="text-gray-700 text-sm">식사 준비, 가벼운 청소, 침구 정돈</p>
              </div>
              <div class="bg-green-50 rounded-lg p-4">
                <h4 class="font-bold text-green-800 mb-2"><i class="fas fa-smile mr-2"></i>정서활동 지원</h4>
                <p class="text-gray-700 text-sm">말벗, 산책 동행, 인지 자극 놀이</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-4">
                <h4 class="font-bold text-purple-800 mb-2"><i class="fas fa-users mr-2"></i>가족지원</h4>
                <p class="text-gray-700 text-sm">가족 돌봄 부담 완화 및 상담</p>
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-4">이용 절차</h3>
            <div class="space-y-3 mb-8">
              <div class="flex items-center gap-3">
                <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <p class="text-gray-700">전화/온라인 상담</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <p class="text-gray-700">어르신 건강·생활상황 분석</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <p class="text-gray-700">요양보호사 매칭</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <p class="text-gray-700">돌봄 서비스 시작</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                <p class="text-gray-700">정기 모니터링 및 보호자 소통</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">실제 혜택</h3>
              <ul class="space-y-2 text-gray-700">
                <li><i class="fas fa-check-circle text-blue-600 mr-2"></i>보호자의 부담이 눈에 띄게 줄어듭니다</li>
                <li><i class="fas fa-check-circle text-blue-600 mr-2"></i>어르신은 집에서 안정감·존엄성 유지</li>
                <li><i class="fas fa-check-circle text-blue-600 mr-2"></i>전문가의 돌봄으로 사고 위험 감소</li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <a href="/#final-cta" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
              <i class="fas fa-phone-alt mr-2"></i>
              방문요양 상담 신청하기
            </a>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-8 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto mx-auto mb-4 opacity-80" />
          <p class="text-gray-400 text-sm">© 2025 A방문3천사. All rights reserved.</p>
        </div>
      </footer>
    </>,
    { title: '방문요양 - A방문3천사' }
  )
})

// 가족요양 페이지
app.get('/family-care', (c) => {
  return c.render(
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <a href="/" class="flex items-center space-x-2">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto" />
              <span class="text-2xl font-bold text-blue-600">A방문3천사</span>
            </a>
            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">
              <i class="fas fa-home mr-2"></i>
              홈으로
            </a>
          </div>
        </div>
      </nav>

      <section class="py-16 px-4 bg-gradient-to-br from-teal-50 to-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <i class="fas fa-users text-6xl text-teal-600 mb-4"></i>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">가족요양</h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              "가족이 직접 돌보는 정(情)은 그대로,<br />
              돌봄 부담은 줄입니다."
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">서비스 핵심</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              가족이 요양보호사 자격을 보유하고, 등급을 받은 부모님을 돌볼 경우 국가가 급여를 지원하는 제도입니다.
            </p>

            <h3 class="text-xl font-bold text-gray-800 mb-4">조건 요약</h3>
            <div class="overflow-x-auto mb-8">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-teal-600 text-white">
                    <th class="border border-teal-700 px-4 py-3 text-left">항목</th>
                    <th class="border border-teal-700 px-4 py-3 text-left">내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-3 font-bold">대상자</td>
                    <td class="border border-gray-300 px-4 py-3">장기요양 등급 어르신</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-3 font-bold">가족 자격</td>
                    <td class="border border-gray-300 px-4 py-3">요양보호사 자격증 필수</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-3 font-bold">돌봄 시간</td>
                    <td class="border border-gray-300 px-4 py-3">60분 / 90분 선택 가능</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-3 font-bold">지원금</td>
                    <td class="border border-gray-300 px-4 py-3">월 약 40만~87만원 상당</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-6 mb-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4">이 서비스가 의미있는 이유</h3>
              <ul class="space-y-2 text-gray-700">
                <li><i class="fas fa-check-circle text-teal-600 mr-2"></i>기존에 하고 있던 돌봄이 경제적으로 보상됩니다</li>
                <li><i class="fas fa-check-circle text-teal-600 mr-2"></i>낯선 사람 방문 없이 심리적 안정감 유지</li>
                <li><i class="fas fa-check-circle text-teal-600 mr-2"></i>보호자의 번아웃 예방</li>
              </ul>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-4">절차</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <p class="text-gray-700">가족 요양보호사 자격 여부 확인</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <p class="text-gray-700">등급확인 또는 신청 대행</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <p class="text-gray-700">가족요양 급여 신청</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <p class="text-gray-700">월 돌봄 기록 → 급여 지급</p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a href="/#final-cta" class="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
              <i class="fas fa-phone-alt mr-2"></i>
              가족요양 지원 상담하기
            </a>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-8 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto mx-auto mb-4 opacity-80" />
          <p class="text-gray-400 text-sm">© 2025 A방문3천사. All rights reserved.</p>
        </div>
      </footer>
    </>,
    { title: '가족요양 - A방문3천사' }
  )
})

// 방문목욕 페이지
app.get('/bath-service', (c) => {
  return c.render(
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <a href="/" class="flex items-center space-x-2">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto" />
              <span class="text-2xl font-bold text-blue-600">A방문3천사</span>
            </a>
            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">
              <i class="fas fa-home mr-2"></i>
              홈으로
            </a>
          </div>
        </div>
      </nav>

      <section class="py-16 px-4 bg-gradient-to-br from-cyan-50 to-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <i class="fas fa-shower text-6xl text-cyan-600 mb-4"></i>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">방문목욕</h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              "어르신이 편안하고 안전하게 목욕하실 수 있도록,<br />
              2인 전문 팀이 함께합니다."
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">서비스 설명</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              신체 활동이 불편하거나 목욕이 어려운 어르신에게 전문 요양보호사 2인 1조 팀이 집으로 방문하여 목욕을 도와드립니다.
            </p>

            <h3 class="text-xl font-bold text-gray-800 mb-4">제공 방식</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="bg-cyan-50 rounded-lg p-4">
                <h4 class="font-bold text-cyan-800 mb-2"><i class="fas fa-bath mr-2"></i>체위 안정 목욕</h4>
                <p class="text-gray-700 text-sm">실내 환경에 맞춘 체위 안정 목욕 진행</p>
              </div>
              <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-bold text-blue-800 mb-2"><i class="fas fa-hand-holding-heart mr-2"></i>피부 민감 고려</h4>
                <p class="text-gray-700 text-sm">욕창·피부 민감 상태 고려</p>
              </div>
              <div class="bg-teal-50 rounded-lg p-4">
                <h4 class="font-bold text-teal-800 mb-2"><i class="fas fa-walking mr-2"></i>이동 보조</h4>
                <p class="text-gray-700 text-sm">안전한 이동 보조 및 낙상 예방</p>
              </div>
              <div class="bg-green-50 rounded-lg p-4">
                <h4 class="font-bold text-green-800 mb-2"><i class="fas fa-thermometer-half mr-2"></i>체온 관리</h4>
                <p class="text-gray-700 text-sm">목욕 전후 체온 관리</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">왜 중요한가</h3>
              <ul class="space-y-2 text-gray-700">
                <li><i class="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>가정에서 혼자 목욕 시 낙상·사고 위험 높음</li>
                <li><i class="fas fa-check-circle text-cyan-600 mr-2"></i>전문 진행 시 심리적 안정 + 위생관리 + 활력 개선</li>
                <li><i class="fas fa-check-circle text-cyan-600 mr-2"></i>2인 1조 전문팀의 체계적이고 안전한 돌봄</li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <a href="/#final-cta" class="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
              <i class="fas fa-phone-alt mr-2"></i>
              방문목욕 서비스 상담하기
            </a>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-8 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto mx-auto mb-4 opacity-80" />
          <p class="text-gray-400 text-sm">© 2025 A방문3천사. All rights reserved.</p>
        </div>
      </footer>
    </>,
    { title: '방문목욕 - A방문3천사' }
  )
})

// 복지용구 페이지
app.get('/welfare-equipment', (c) => {
  return c.render(
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <a href="/" class="flex items-center space-x-2">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto" />
              <span class="text-2xl font-bold text-blue-600">A방문3천사</span>
            </a>
            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">
              <i class="fas fa-home mr-2"></i>
              홈으로
            </a>
          </div>
        </div>
      </nav>

      <section class="py-16 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <i class="fas fa-bed text-6xl text-purple-600 mb-4"></i>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">복지용구</h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              "어르신의 집을 안전하고 편안한<br />
              생활환경으로 바꿉니다."
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">지원 설명</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              장기요양 수급자는 연 160만원 한도 내에서 전동침대·보행기·지팡이 등 복지용구를 구입 또는 대여할 수 있습니다.
            </p>

            <div class="bg-purple-50 rounded-lg p-6 mb-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4">지원 범위</h3>
              <ul class="space-y-2 text-gray-700">
                <li><i class="fas fa-check-circle text-purple-600 mr-2"></i>국가 지원금 적용 → 본인 부담 0~15%</li>
                <li><i class="fas fa-check-circle text-purple-600 mr-2"></i>전문가 방문 → 제품 선택 → 설치 → 사후관리까지 원스톱</li>
                <li><i class="fas fa-check-circle text-purple-600 mr-2"></i>연 160만원 한도 내 자유롭게 이용 가능</li>
              </ul>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-4">주요 품목</h3>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 class="font-bold text-purple-800 mb-3 flex items-center">
                  <i class="fas fa-shopping-cart mr-2"></i>구입
                </h4>
                <ul class="space-y-2 text-gray-700">
                  <li><i class="fas fa-angle-right text-purple-600 mr-2"></i>지팡이</li>
                  <li><i class="fas fa-angle-right text-purple-600 mr-2"></i>안전손잡이</li>
                  <li><i class="fas fa-angle-right text-purple-600 mr-2"></i>미끄럼방지 매트</li>
                  <li><i class="fas fa-angle-right text-purple-600 mr-2"></i>기타 소모성 용구</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-blue-800 mb-3 flex items-center">
                  <i class="fas fa-handshake mr-2"></i>대여
                </h4>
                <ul class="space-y-2 text-gray-700">
                  <li><i class="fas fa-angle-right text-blue-600 mr-2"></i>전동침대</li>
                  <li><i class="fas fa-angle-right text-blue-600 mr-2"></i>휠체어</li>
                  <li><i class="fas fa-angle-right text-blue-600 mr-2"></i>보행기</li>
                  <li><i class="fas fa-angle-right text-blue-600 mr-2"></i>이동식 변기</li>
                </ul>
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">실제 효과</h3>
              <p class="text-gray-700 leading-relaxed">
                적절한 복지용구 사용으로 어르신의 독립적인 생활이 가능해지며, 낙상 등의 사고 위험이 크게 감소합니다. 
                보호자의 돌봄 부담도 줄어들어 가족 모두의 삶의 질이 향상됩니다.
              </p>
            </div>
          </div>

          <div class="text-center">
            <a href="/#final-cta" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
              <i class="fas fa-phone-alt mr-2"></i>
              복지용구 상담 받고 필요한 제품 안내받기
            </a>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-8 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto mx-auto mb-4 opacity-80" />
          <p class="text-gray-400 text-sm">© 2025 A방문3천사. All rights reserved.</p>
        </div>
      </footer>
    </>,
    { title: '복지용구 - A방문3천사' }
  )
})

// 등급신청 페이지
app.get('/grade-application', (c) => {
  return c.render(
    <>
      <nav class="bg-white shadow-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <a href="/" class="flex items-center space-x-2">
              <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto" />
              <span class="text-2xl font-bold text-blue-600">A방문3천사</span>
            </a>
            <a href="/" class="text-gray-700 hover:text-blue-600 font-medium">
              <i class="fas fa-home mr-2"></i>
              홈으로
            </a>
          </div>
        </div>
      </nav>

      <section class="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <i class="fas fa-clipboard-check text-6xl text-green-600 mb-4"></i>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">장기요양 등급신청</h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              "등급신청부터 승인까지<br />
              전 과정 무료로 대행해드립니다."
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">왜 필요한가</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              등급신청은 서류, 방문조사, 평가 기준이 까다롭습니다. 혼자 진행하면 점수 미달로 혜택을 놓치는 경우가 많습니다.
            </p>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p class="text-gray-800 font-bold mb-2">
                <i class="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
                주의! 등급신청 시 흔히 놓치는 부분들
              </p>
              <ul class="text-gray-700 space-y-1 text-sm">
                <li>• 서류 누락으로 인한 신청 지연</li>
                <li>• 방문조사 시 대응 미숙으로 점수 감점</li>
                <li>• 의사소견서 작성 미흡</li>
                <li>• 평가 기준에 대한 이해 부족</li>
              </ul>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-4">우리가 대신하는 것</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="bg-green-50 rounded-lg p-4">
                <h4 class="font-bold text-green-800 mb-2"><i class="fas fa-file-signature mr-2"></i>신청서류 작성</h4>
                <p class="text-gray-700 text-sm">복잡한 신청서류를 정확하게 작성해 드립니다</p>
              </div>
              <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-bold text-blue-800 mb-2"><i class="fas fa-notes-medical mr-2"></i>의사소견서 발급 안내</h4>
                <p class="text-gray-700 text-sm">의사소견서 발급 병원 안내 및 작성 가이드</p>
              </div>
              <div class="bg-teal-50 rounded-lg p-4">
                <h4 class="font-bold text-teal-800 mb-2"><i class="fas fa-user-check mr-2"></i>방문조사 대응 지도</h4>
                <p class="text-gray-700 text-sm">방문조사 시 유리한 점수를 받을 수 있도록 포인트 지도</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-4">
                <h4 class="font-bold text-purple-800 mb-2"><i class="fas fa-chart-line mr-2"></i>결과 모니터링</h4>
                <p class="text-gray-700 text-sm">결과 확인 및 이의신청 필요 시 대응</p>
              </div>
            </div>

            <div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4">등급신청 절차</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <p class="font-bold text-gray-800">무료 상담 신청</p>
                    <p class="text-gray-600 text-sm">전화 또는 온라인으로 상담 신청</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <p class="font-bold text-gray-800">서류 준비 및 신청</p>
                    <p class="text-gray-600 text-sm">필요 서류 준비 및 공단 신청 대행</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <p class="font-bold text-gray-800">방문조사 준비</p>
                    <p class="text-gray-600 text-sm">방문조사 전 사전 교육 및 대응 포인트 안내</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <p class="font-bold text-gray-800">등급 판정</p>
                    <p class="text-gray-600 text-sm">결과 확인 및 필요 시 이의신청 지원</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <p class="font-bold text-gray-800">서비스 연계</p>
                    <p class="text-gray-600 text-sm">등급에 맞는 최적의 서비스 연계 및 시작</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-600 text-white rounded-lg p-6 text-center">
              <p class="text-2xl font-bold mb-2">완전 무료</p>
              <p class="text-lg">등급신청 및 상담 비용 0원</p>
            </div>
          </div>

          <div class="text-center">
            <a href="/#final-cta" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105">
              <i class="fas fa-phone-alt mr-2"></i>
              등급신청 무료 대행 받기
            </a>
          </div>

          <div class="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
            <p class="text-2xl font-bold text-gray-800 mb-4">
              "똑같은 상황이어도, 어떻게 준비하느냐에 따라<br />
              결과가 달라집니다."
            </p>
            <p class="text-lg text-gray-600">
              부모님 돌봄, 혼자 고민하지 않으셔도 됩니다.
            </p>
          </div>
        </div>
      </section>

      <footer class="bg-gray-800 text-white py-8 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <img src="/static/logo.png" alt="A방문3천사 로고" class="h-12 w-auto mx-auto mb-4 opacity-80" />
          <p class="text-gray-400 text-sm">© 2025 A방문3천사. All rights reserved.</p>
        </div>
      </footer>
    </>,
    { title: '장기요양 등급신청 - A방문3천사' }
  )
})

export default app
