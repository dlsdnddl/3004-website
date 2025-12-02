// 간단한 이메일 테스트 함수

function simpleEmailTest() {
  MailApp.sendEmail(
    "magudaji@gmail.com",
    "테스트: A방문3천사 이메일 알림",
    "이 메일이 보이면 권한 설정이 완료된 것입니다!"
  );
  
  Logger.log("✅ 이메일 발송 완료!");
}
