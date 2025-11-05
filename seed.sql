-- 테스트 데이터 (개발용)
INSERT OR IGNORE INTO consultations (name, phone, service_type, message, status) VALUES 
  ('홍길동', '010-1234-5678', '방문요양', '부모님 방문요양 상담 신청합니다.', 'pending'),
  ('김영희', '010-2345-6789', '등급신청', '등급신청 절차가 궁금합니다.', 'completed');
