// A방문3천사 상담신청 Google Sheets 자동 기록 + 이메일 알림 (다중 수신자)

function doPost(e) {
  try {
    // 현재 시트 가져오기
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // POST 데이터 파싱
    var data = JSON.parse(e.postData.contents);
    
    // 한국 시간대로 현재 시간 포맷
    var now = new Date();
    var koreaTime = Utilities.formatDate(now, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
    
    // 새 행 데이터 준비
    var newRow = [
      koreaTime,                    // 신청일시
      data.name || '',              // 이름
      data.phone || '',             // 연락처
      data.service_type || '일반',  // 관심서비스
      data.message || '',           // 문의사항
      '대기'                        // 상태
    ];
    
    // 시트에 새 행 추가
    sheet.appendRow(newRow);
    
    // ✨ 이메일 알림 발송
    sendEmailNotification(data, koreaTime);
    
    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '상담신청이 기록되었습니다.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 이메일 알림 함수 (다중 수신자)
function sendEmailNotification(data, koreaTime) {
  // ⚠️ 여기에 알림 받을 이메일 주소들을 입력하세요!
  // 방법 1: 쉼표로 구분
  var recipients = "이메일1@example.com, 이메일2@example.com";
  
  // 방법 2: 배열로 관리 (추천!)
  // var recipientList = [
  //   "magudaji@gmail.com",
  //   "inungor@gmail.com"
  // ];
  // var recipients = recipientList.join(", ");
  
  var subject = "🔔 [A방문3천사] 새 상담신청이 접수되었습니다!";
  
  var body = "새로운 상담신청이 접수되었습니다.\n\n" +
             "━━━━━━━━━━━━━━━━━━━━━━\n" +
             "📅 신청일시: " + koreaTime + "\n" +
             "👤 이름: " + (data.name || '-') + "\n" +
             "📞 연락처: " + (data.phone || '-') + "\n" +
             "🏥 관심서비스: " + (data.service_type || '일반') + "\n" +
             "💬 문의사항: " + (data.message || '-') + "\n" +
             "━━━━━━━━━━━━━━━━━━━━━━\n\n" +
             "🔗 Google Sheets 바로가기:\n" +
             SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n" +
             "※ 이 메일은 자동 발송되었습니다.";
  
  // HTML 버전 (더 예쁜 이메일)
  var htmlBody = 
    "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>" +
    "<h2 style='color: #ec4899; border-bottom: 3px solid #ec4899; padding-bottom: 10px;'>🔔 새 상담신청 알림</h2>" +
    "<div style='background: #fef3f8; padding: 20px; border-radius: 10px; margin: 20px 0;'>" +
    "<p><strong>📅 신청일시:</strong> " + koreaTime + "</p>" +
    "<p><strong>👤 이름:</strong> " + (data.name || '-') + "</p>" +
    "<p><strong>📞 연락처:</strong> <a href='tel:" + (data.phone || '') + "'>" + (data.phone || '-') + "</a></p>" +
    "<p><strong>🏥 관심서비스:</strong> " + (data.service_type || '일반') + "</p>" +
    "<p><strong>💬 문의사항:</strong> " + (data.message || '-') + "</p>" +
    "</div>" +
    "<p style='text-align: center;'>" +
    "<a href='" + SpreadsheetApp.getActiveSpreadsheet().getUrl() + "' " +
    "style='background: #ec4899; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;'>" +
    "📊 Google Sheets 보기</a>" +
    "</p>" +
    "<p style='color: #999; font-size: 12px; text-align: center; margin-top: 30px;'>이 메일은 A방문3천사 상담신청 시스템에서 자동 발송되었습니다.</p>" +
    "</div>";
  
  try {
    MailApp.sendEmail({
      to: recipients,
      subject: subject,
      body: body,
      htmlBody: htmlBody
    });
  } catch (error) {
    // 이메일 발송 실패해도 Sheet 저장은 성공 처리
    console.error("이메일 발송 실패:", error);
  }
}

// GET 요청 처리 (테스트용)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'OK',
      message: 'A방문3천사 상담신청 API가 정상 작동 중입니다.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
