// A방문3천사 상담신청 Google Sheets 자동 기록

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

// GET 요청 처리 (테스트용)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'OK',
      message: 'A방문3천사 상담신청 API가 정상 작동 중입니다.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
