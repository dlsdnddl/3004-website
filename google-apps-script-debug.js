// A방문3천사 상담신청 Google Sheets 자동 기록 + 이메일 알림 (디버그 버전)

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
    
    // ✨ 이메일 알림 발송 (에러 로깅 추가)
    var emailResult = sendEmailNotification(data, koreaTime);
    
    // 성공 응답 (이메일 결과 포함)
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '상담신청이 기록되었습니다.',
        emailSent: emailResult.success,
        emailError: emailResult.error || null
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

// 이메일 알림 함수 (에러 핸들링 강화)
function sendEmailNotification(data, koreaTime) {
  try {
    // ✅ 알림 받을 이메일 주소들
    var recipientList = [
      "magudaji@naver.com",    // 주 담당자
      "join_br@naver.com"      // 부 담당자
    ];
    var recipients = recipientList.join(", ");
    
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
    
    // 이메일 발송 시도
    MailApp.sendEmail({
      to: recipients,
      subject: subject,
      body: body,
      htmlBody: htmlBody
    });
    
    return { success: true };
    
  } catch (error) {
    // 이메일 발송 실패 로깅
    console.error("이메일 발송 실패:", error.toString());
    return { 
      success: false, 
      error: error.toString() 
    };
  }
}

// 수동 테스트 함수 (Apps Script 편집기에서 직접 실행 가능)
function testEmail() {
  var testData = {
    name: "수동 테스트",
    phone: "010-9999-9999",
    service_type: "테스트",
    message: "이메일 발송 테스트입니다."
  };
  
  var now = new Date();
  var koreaTime = Utilities.formatDate(now, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  
  var result = sendEmailNotification(testData, koreaTime);
  
  if (result.success) {
    Logger.log("✅ 이메일 발송 성공!");
  } else {
    Logger.log("❌ 이메일 발송 실패: " + result.error);
  }
  
  return result;
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
